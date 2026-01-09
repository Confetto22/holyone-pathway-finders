import PageHead from "@/components/common/page-head";
import React from "react";

const policySections = [
  {
    title: "1. Information We Collect",
    content:
      "We may collect personal information that you voluntarily provide to us when you make a booking, sign up for our newsletter, or contact us. This includes:",
    listItems: [
      "Name, email address, and phone number.",
      "Billing and payment information.",
      "Travel preferences and booking history.",
      "Passport details for visa and flight arrangements.",
    ],
  },
  {
    title: "2. How We Use Your Information",
    content:
      "We use your data to provide seamless travel experiences. Specifically, we use it to:",
    listItems: [
      "Process and confirm your bookings.",
      "Send you travel itineraries and updates.",
      "Improve our website and customer service.",
      "Send promotional emails (you can opt-out at any time).",
    ],
  },
  {
    title: "3. Cookies and Tracking Technologies",
    content:
      "We use cookies to enhance your browsing experience. Cookies help us understand how you use our site and allow us to remember your preferences. You can control cookie settings through your browser.",
  },
  {
    title: "4. Data Security",
    content:
      "We implement industry-standard security measures to protect your personal information. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.",
  },
  {
    title: "5. Sharing of Information",
    content:
      "We do not sell your personal data. We may share your information with trusted third-party service providers (e.g., airlines, hotels) solely for the purpose of fulfilling your travel arrangements.",
  },
];

const PrivacyPolicy = () => {
  return (
    <section>
      <PageHead
        prevPage="Home"
        prevLink="/"
        bgImg="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=1200"
        currPage="Privacy Policy"
      />

      <div className="py-20 md:py-28 bg-white">
        <div className="container mx-auto px-4 md:px-8 max-w-4xl">
          <div className="text-center mb-16">
            <span className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-2 block">
              Last Updated: December 23, 2025
            </span>
            <h1 className="text-3xl md:text-5xl font-bold text-gray-900">
              Privacy Policy
            </h1>
          </div>

          <div className="space-y-12 text-gray-600 leading-relaxed text-lg">
            {/* Introduction */}
            <div className="space-y-4">
              <p>
                At{" "}
                <span className="font-bold text-gray-900">
                  Holyone Pathway Partners
                </span>
                , we are committed to protecting your privacy and ensuring the
                security of your personal information. This Privacy Policy
                outlines how we collect, use, and safeguard your data when you
                visit our website or use our services.
              </p>
              <p>
                By accessing our website, you agree to the terms of this policy.
                If you do not agree with our practices, please do not use our
                services.
              </p>
            </div>

            {/* Dynamic Sections */}
            {policySections.map((section, index) => (
              <div key={index} className="space-y-4">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                  {section.title}
                </h2>
                <p>{section.content}</p>
                {section.listItems && (
                  <ul className="list-disc pl-6 space-y-2 marker:text-blue-500">
                    {section.listItems.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}

            {/* Contact Us */}
            <div className="pt-8 border-t border-gray-100">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                Contact Us
              </h2>
              <p className="mb-6">
                If you have any questions about this Privacy Policy, please
                contact us:
              </p>
              <div className="bg-gray-50 p-6 rounded-2xl inline-block pr-12">
                <p className="font-bold text-gray-900">Email us at:</p>
                <a
                  href="mailto:privacy@brand.com"
                  className="text-blue-600 hover:text-blue-700 underline text-lg"
                >
                  privacy@brand.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrivacyPolicy;
