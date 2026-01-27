import { Metadata } from "next";
import { Header, Footer } from "@/components/layout";
import { contactInfo } from "@/data/siteData";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Privacy policy for Pratt Electrical Group. Learn how we collect, use, and protect your personal information.",
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <Header />
      <main className="pt-32 pb-20">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
            <p className="text-gray-500 mb-8">
              Last updated: January 2026
            </p>

            <div className="prose prose-lg max-w-none">
              <section className="mb-8">
                <h2>Introduction</h2>
                <p>
                  Pratt Electrical Group Pty Ltd (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) is
                  committed to protecting your privacy. This Privacy Policy
                  explains how we collect, use, disclose, and safeguard your
                  information when you visit our website or use our services.
                </p>
              </section>

              <section className="mb-8">
                <h2>Information We Collect</h2>
                <p>We may collect information about you in a variety of ways:</p>
                <h3>Personal Data</h3>
                <p>
                  When you contact us or request a quote, we may collect
                  personally identifiable information, such as:
                </p>
                <ul>
                  <li>Name</li>
                  <li>Phone number</li>
                  <li>Email address</li>
                  <li>Address/suburb</li>
                  <li>Details about your project or service requirements</li>
                </ul>

                <h3>Automatically Collected Data</h3>
                <p>
                  When you visit our website, we may automatically collect certain
                  information, including:
                </p>
                <ul>
                  <li>IP address</li>
                  <li>Browser type and version</li>
                  <li>Pages visited and time spent on pages</li>
                  <li>Referring website</li>
                  <li>Device information</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2>How We Use Your Information</h2>
                <p>We use the information we collect to:</p>
                <ul>
                  <li>Respond to your enquiries and provide quotes</li>
                  <li>Deliver the electrical services you request</li>
                  <li>Communicate with you about your project</li>
                  <li>Send you relevant information about our services</li>
                  <li>Improve our website and customer experience</li>
                  <li>Comply with legal obligations</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2>Disclosure of Your Information</h2>
                <p>
                  We may share your information in the following situations:
                </p>
                <ul>
                  <li>
                    <strong>With service providers:</strong> We may share your
                    information with third-party vendors who assist us in
                    operating our business (e.g., email services, analytics
                    providers)
                  </li>
                  <li>
                    <strong>For legal purposes:</strong> We may disclose your
                    information if required by law or in response to legal
                    processes
                  </li>
                  <li>
                    <strong>Business transfers:</strong> In connection with any
                    merger, sale of company assets, or acquisition
                  </li>
                </ul>
                <p>
                  We do not sell your personal information to third parties for
                  marketing purposes.
                </p>
              </section>

              <section className="mb-8">
                <h2>Cookies and Tracking Technologies</h2>
                <p>
                  We use cookies and similar tracking technologies to track
                  activity on our website and improve your experience. You can
                  instruct your browser to refuse all cookies or indicate when a
                  cookie is being sent.
                </p>
                <p>We use:</p>
                <ul>
                  <li>
                    <strong>Analytics cookies:</strong> To understand how visitors
                    interact with our website (Google Analytics)
                  </li>
                  <li>
                    <strong>Functional cookies:</strong> To remember your
                    preferences and provide enhanced features
                  </li>
                </ul>
              </section>

              <section className="mb-8">
                <h2>Data Security</h2>
                <p>
                  We use appropriate technical and organisational measures to
                  protect your personal information. However, no method of
                  transmission over the Internet or electronic storage is 100%
                  secure, and we cannot guarantee absolute security.
                </p>
              </section>

              <section className="mb-8">
                <h2>Your Rights</h2>
                <p>Under Australian privacy law, you have the right to:</p>
                <ul>
                  <li>Access your personal information</li>
                  <li>Correct inaccurate information</li>
                  <li>Request deletion of your information</li>
                  <li>Opt-out of marketing communications</li>
                  <li>Complain to a regulator</li>
                </ul>
                <p>
                  To exercise these rights, please contact us using the details
                  below.
                </p>
              </section>

              <section className="mb-8">
                <h2>Third-Party Links</h2>
                <p>
                  Our website may contain links to third-party websites. We are
                  not responsible for the privacy practices of these external
                  sites. We encourage you to review their privacy policies.
                </p>
              </section>

              <section className="mb-8">
                <h2>Changes to This Policy</h2>
                <p>
                  We may update this Privacy Policy from time to time. We will
                  notify you of any changes by posting the new Privacy Policy on
                  this page and updating the &quot;Last updated&quot; date.
                </p>
              </section>

              <section className="mb-8">
                <h2>Contact Us</h2>
                <p>
                  If you have any questions about this Privacy Policy, please
                  contact us:
                </p>
                <ul>
                  <li>
                    <strong>Email:</strong>{" "}
                    <a href={`mailto:${contactInfo.email}`}>
                      {contactInfo.email}
                    </a>
                  </li>
                  <li>
                    <strong>Phone:</strong>{" "}
                    <a href={contactInfo.phoneTel}>
                      {contactInfo.phoneFormatted}
                    </a>
                  </li>
                  <li>
                    <strong>Address:</strong> {contactInfo.address.full}
                  </li>
                </ul>
              </section>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
