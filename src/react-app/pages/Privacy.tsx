export default function Privacy() {
  return (
    <div className="bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Privacy Policy</h1>
        <p className="text-gray-600 mb-12">Last updated: December 6, 2025</p>

        <div className="prose prose-lg max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Introduction</h2>
            <p className="text-gray-600 leading-relaxed">
              Lumen AI ("we", "our", or "us") is committed to protecting your privacy. This Privacy
              Policy explains how we collect, use, disclose, and safeguard your information when
              you use our conversational assistant service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Information We Collect</h2>
            <p className="text-gray-600 leading-relaxed mb-3">
              We collect information that you provide directly to us, including:
            </p>
            <ul className="list-disc ml-6 text-gray-600 space-y-2">
              <li>Contact information (name, email, phone number)</li>
              <li>Company information (company name, website, role)</li>
              <li>Conversation data between visitors and the assistant</li>
              <li>Usage data and analytics</li>
              <li>Integration credentials (stored securely and encrypted)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. How We Use Your Information</h2>
            <p className="text-gray-600 leading-relaxed mb-3">We use the information we collect to:</p>
            <ul className="list-disc ml-6 text-gray-600 space-y-2">
              <li>Provide and maintain our service</li>
              <li>Improve and optimize the assistant's performance</li>
              <li>Send you service-related communications</li>
              <li>Respond to your requests and inquiries</li>
              <li>Monitor and analyze usage patterns</li>
              <li>Detect and prevent fraud or abuse</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Data Security</h2>
            <p className="text-gray-600 leading-relaxed">
              We implement industry-standard security measures to protect your data, including
              encryption at rest and in transit, access controls, and regular security audits. However,
              no method of transmission over the Internet is 100% secure.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Data Retention</h2>
            <p className="text-gray-600 leading-relaxed">
              We retain your information for as long as necessary to provide our services and comply
              with legal obligations. Conversation data is typically retained for 12 months unless you
              request earlier deletion.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Your Rights</h2>
            <p className="text-gray-600 leading-relaxed mb-3">You have the right to:</p>
            <ul className="list-disc ml-6 text-gray-600 space-y-2">
              <li>Access your personal data</li>
              <li>Request correction of inaccurate data</li>
              <li>Request deletion of your data</li>
              <li>Object to processing of your data</li>
              <li>Export your data in a portable format</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Third-Party Services</h2>
            <p className="text-gray-600 leading-relaxed">
              Our service integrates with third-party tools (CRMs, calendars, helpdesks). Your use of
              these integrations is subject to their respective privacy policies.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Changes to This Policy</h2>
            <p className="text-gray-600 leading-relaxed">
              We may update this Privacy Policy from time to time. We will notify you of any changes by
              posting the new policy on this page and updating the "Last updated" date.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Contact Us</h2>
            <p className="text-gray-600 leading-relaxed">
              If you have questions about this Privacy Policy, please contact us at{" "}
              <a href="mailto:privacy@lumenai.com" className="text-blue-600 hover:text-blue-700">
                privacy@lumenai.com
              </a>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
