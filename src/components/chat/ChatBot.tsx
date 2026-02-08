"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send, Zap, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { contactInfo } from "@/data/siteData";
import { findResponse, getWelcomeMessage, getPostRegistrationMessage, detectInterestTags } from "@/data/chatKnowledge";

const GHL_CHATBOT_WEBHOOK =
  "https://services.leadconnectorhq.com/hooks/jb2JO6vKj0fWUU2jvhfB/webhook-trigger/619b5785-1df4-46ac-ad21-f6472afbabda";

interface Message {
  id: string;
  type: "bot" | "user";
  content: string;
  timestamp: Date;
}

interface LeadData {
  name: string;
  email: string;
}

export function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [leadData, setLeadData] = useState<LeadData | null>(null);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [showLeadForm, setShowLeadForm] = useState(true);
  const [leadFormData, setLeadFormData] = useState({ name: "", email: "" });
  const [leadFormErrors, setLeadFormErrors] = useState({ name: "", email: "" });
  const [hasAutoOpened, setHasAutoOpened] = useState(false);
  const [interestTags, setInterestTags] = useState<Set<string>>(new Set());
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Auto-open chat after 30 seconds (only once)
  useEffect(() => {
    if (hasAutoOpened) return;

    const timer = setTimeout(() => {
      if (!isOpen && !hasAutoOpened) {
        setIsOpen(true);
        setHasAutoOpened(true);
      }
    }, 30000);

    return () => clearTimeout(timer);
  }, [isOpen, hasAutoOpened]);

  // Scroll to bottom when new messages arrive
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Focus input when chat opens
  useEffect(() => {
    if (isOpen && !showLeadForm) {
      inputRef.current?.focus();
    }
  }, [isOpen, showLeadForm]);

  // Initialize welcome message
  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setMessages([
        {
          id: "welcome",
          type: "bot",
          content: getWelcomeMessage(),
          timestamp: new Date(),
        },
      ]);
    }
  }, [isOpen, messages.length]);

  const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleLeadSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const errors = { name: "", email: "" };

    if (!leadFormData.name.trim()) {
      errors.name = "Please enter your name";
    }

    if (!leadFormData.email.trim()) {
      errors.email = "Please enter your email";
    } else if (!validateEmail(leadFormData.email)) {
      errors.email = "Please enter a valid email";
    }

    setLeadFormErrors(errors);

    if (!errors.name && !errors.email) {
      setLeadData(leadFormData);
      setShowLeadForm(false);

      // Add post-registration greeting
      setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          {
            id: `bot-${Date.now()}`,
            type: "bot",
            content: getPostRegistrationMessage(leadFormData.name),
            timestamp: new Date(),
          },
        ]);
      }, 500);

      // Submit lead to GHL webhook
      fetch(GHL_CHATBOT_WEBHOOK, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          full_name: leadFormData.name,
          email: leadFormData.email,
          tags: "",
          source: "Website Chatbot",
        }),
      }).catch((err) => console.error("GHL webhook error:", err));
    }
  };

  const containsInappropriateLanguage = (text: string): boolean => {
    const inappropriatePatterns = [
      /\bf+u+c+k+/i,
      /\bs+h+i+t+/i,
      /\ba+s+s+h+o+l+e+/i,
      /\bb+i+t+c+h+/i,
      /\bd+a+m+n+/i,
      /\bc+r+a+p+/i,
    ];
    return inappropriatePatterns.some((pattern) => pattern.test(text));
  };

  const handleSendMessage = async () => {
    if (!inputValue.trim() || !leadData) return;

    const userMessage: Message = {
      id: `user-${Date.now()}`,
      type: "user",
      content: inputValue.trim(),
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");
    setIsTyping(true);

    // Check for inappropriate language
    if (containsInappropriateLanguage(userMessage.content)) {
      setTimeout(() => {
        setIsTyping(false);
        setMessages((prev) => [
          ...prev,
          {
            id: `bot-${Date.now()}`,
            type: "bot",
            content: `I'm here to help with electrical and solar questions. I can't continue if the conversation includes inappropriate language.\n\nIf you have a genuine question, I'm happy to help. Otherwise, feel free to reach out to our team directly on ${contactInfo.phoneFormatted}.`,
            timestamp: new Date(),
          },
        ]);
      }, 1000);
      return;
    }

    // Detect interest tags from user message
    const newTags = detectInterestTags(userMessage.content);
    const updatedTags = new Set(interestTags);
    let hasNewTags = false;
    newTags.forEach((tag) => {
      if (!updatedTags.has(tag)) {
        updatedTags.add(tag);
        hasNewTags = true;
      }
    });

    if (hasNewTags) {
      setInterestTags(updatedTags);
      // Send updated tags to GHL
      fetch(GHL_CHATBOT_WEBHOOK, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          full_name: leadData.name,
          email: leadData.email,
          tags: Array.from(updatedTags).join(", "),
          source: "Website Chatbot",
        }),
      }).catch((err) => console.error("GHL tag update error:", err));
    }

    // Simulate typing delay and get response
    setTimeout(() => {
      setIsTyping(false);
      const response = findResponse(userMessage.content, leadData.name);
      setMessages((prev) => [
        ...prev,
        {
          id: `bot-${Date.now()}`,
          type: "bot",
          content: response,
          timestamp: new Date(),
        },
      ]);
    }, 1000 + Math.random() * 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const toggleChat = () => {
    if (isMinimized) {
      setIsMinimized(false);
    } else {
      setIsOpen(!isOpen);
    }
  };

  return (
    <>
      {/* Chat Button */}
      <motion.button
        onClick={toggleChat}
        className={cn(
          "fixed bottom-6 right-6 z-50 flex items-center gap-2 rounded-full shadow-lg transition-all duration-300",
          isOpen
            ? "bg-gray-600 hover:bg-gray-700 p-3"
            : "bg-primary-600 hover:bg-primary-700 px-5 py-3"
        )}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        aria-label={isOpen ? "Close chat" : "Open chat"}
      >
        {isOpen ? (
          <X className="h-6 w-6 text-white" />
        ) : (
          <>
            <MessageCircle className="h-5 w-5 text-white" />
            <span className="text-white font-medium text-sm hidden sm:inline">
              Chat with us
            </span>
          </>
        )}
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-24 right-6 z-50 w-[380px] max-w-[calc(100vw-48px)] bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-200"
          >
            {/* Header */}
            <div className="bg-primary-600 px-4 py-4 flex items-center gap-3">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                <Zap className="h-5 w-5 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="text-white font-semibold">Pratt Electrical</h3>
                <p className="text-white/80 text-xs">Typically replies instantly</p>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-white/80 hover:text-white transition-colors"
                aria-label="Close chat"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Chat Content */}
            <div className="h-[400px] flex flex-col">
              {showLeadForm ? (
                /* Lead Capture Form */
                <div className="flex-1 p-4 overflow-y-auto">
                  {/* Welcome Message Bubble */}
                  <div className="flex gap-2 mb-4">
                    <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Zap className="h-4 w-4 text-primary-600" />
                    </div>
                    <div className="bg-gray-100 rounded-2xl rounded-tl-sm px-4 py-3 max-w-[85%]">
                      <p className="text-sm text-charcoal whitespace-pre-line">
                        {messages[0]?.content || getWelcomeMessage()}
                      </p>
                    </div>
                  </div>

                  {/* Lead Form */}
                  <form onSubmit={handleLeadSubmit} className="space-y-3 mt-4">
                    <div>
                      <input
                        type="text"
                        placeholder="Your name"
                        value={leadFormData.name}
                        onChange={(e) =>
                          setLeadFormData({ ...leadFormData, name: e.target.value })
                        }
                        className={cn(
                          "w-full px-4 py-3 rounded-xl border text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all",
                          leadFormErrors.name ? "border-red-400" : "border-gray-200"
                        )}
                      />
                      {leadFormErrors.name && (
                        <p className="text-red-500 text-xs mt-1">{leadFormErrors.name}</p>
                      )}
                    </div>
                    <div>
                      <input
                        type="email"
                        placeholder="Your email"
                        value={leadFormData.email}
                        onChange={(e) =>
                          setLeadFormData({ ...leadFormData, email: e.target.value })
                        }
                        className={cn(
                          "w-full px-4 py-3 rounded-xl border text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all",
                          leadFormErrors.email ? "border-red-400" : "border-gray-200"
                        )}
                      />
                      {leadFormErrors.email && (
                        <p className="text-red-500 text-xs mt-1">{leadFormErrors.email}</p>
                      )}
                    </div>
                    <button
                      type="submit"
                      className="w-full bg-primary-600 hover:bg-primary-700 text-white font-medium py-3 rounded-xl transition-colors"
                    >
                      Start Chatting
                    </button>
                    <p className="text-xs text-gray-500 text-center">
                      We won&apos;t spam you — promise! 🙂
                    </p>
                  </form>
                </div>
              ) : (
                /* Chat Messages */
                <div className="flex-1 p-4 overflow-y-auto space-y-4">
                  {messages.map((message) => (
                    <div
                      key={message.id}
                      className={cn(
                        "flex gap-2",
                        message.type === "user" ? "justify-end" : "justify-start"
                      )}
                    >
                      {message.type === "bot" && (
                        <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0">
                          <Zap className="h-4 w-4 text-primary-600" />
                        </div>
                      )}
                      <div
                        className={cn(
                          "rounded-2xl px-4 py-3 max-w-[85%]",
                          message.type === "user"
                            ? "bg-primary-600 text-white rounded-tr-sm"
                            : "bg-gray-100 text-charcoal rounded-tl-sm"
                        )}
                      >
                        <p className="text-sm whitespace-pre-line">{message.content}</p>
                      </div>
                    </div>
                  ))}

                  {/* Typing Indicator */}
                  {isTyping && (
                    <div className="flex gap-2">
                      <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <Zap className="h-4 w-4 text-primary-600" />
                      </div>
                      <div className="bg-gray-100 rounded-2xl rounded-tl-sm px-4 py-3">
                        <div className="flex gap-1">
                          <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
                          <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
                          <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
                        </div>
                      </div>
                    </div>
                  )}

                  <div ref={messagesEndRef} />
                </div>
              )}

              {/* Input Area */}
              {!showLeadForm && (
                <div className="border-t border-gray-200 p-4">
                  <div className="flex gap-2">
                    <input
                      ref={inputRef}
                      type="text"
                      value={inputValue}
                      onChange={(e) => setInputValue(e.target.value)}
                      onKeyPress={handleKeyPress}
                      placeholder="Type your message..."
                      className="flex-1 px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all"
                      disabled={isTyping}
                    />
                    <button
                      onClick={handleSendMessage}
                      disabled={!inputValue.trim() || isTyping}
                      className={cn(
                        "p-3 rounded-xl transition-all",
                        inputValue.trim() && !isTyping
                          ? "bg-primary-600 hover:bg-primary-700 text-white"
                          : "bg-gray-100 text-gray-400 cursor-not-allowed"
                      )}
                      aria-label="Send message"
                    >
                      {isTyping ? (
                        <Loader2 className="h-5 w-5 animate-spin" />
                      ) : (
                        <Send className="h-5 w-5" />
                      )}
                    </button>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default ChatBot;
