"use client";

import { usePathname } from "next/navigation";
import { ChatBot } from "./ChatBot";

// Pages where the chatbot should NOT appear
const excludedPaths = [
  "/pitch",     // Hidden pages
];

export function ChatBotWrapper() {
  const pathname = usePathname();

  // Check if current path should be excluded
  const shouldHide = excludedPaths.some(
    (path) => pathname === path || pathname.startsWith(`${path}/`)
  );

  if (shouldHide) {
    return null;
  }

  return <ChatBot />;
}

export default ChatBotWrapper;
