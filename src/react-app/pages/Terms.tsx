export default function Terms() {
  return (
    <div className="bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Terms of Service</h1>
        <p className="text-gray-600 mb-12">Last updated: December 6, 2025</p>

        <div className="prose prose-lg max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Acceptance of Terms</h2>
            <p className="text-gray-600 leading-relaxed">
              By accessing or using Lumen AI's conversational assistant service, you agree to be
              bound by these Terms of Service. If you do not agree to these terms, do not use our
              service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Service Description</h2>
            <p className="text-gray-600 leading-relaxed">
              Lumen AI provides autonomous, RAG-powered assistant services that help businesses
              capture leads, support customers, and automate workflows while escalating complex
              cases to human team members.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. User Responsibilities</h2>
            <p className="text-gray-600 leading-relaxed mb-3">You agree to:</p>
            <ul className="list-disc ml-6 text-gray-600 space-y-2">
              <li>Provide accurate information about your business and use case</li>
              <li>Supply necessary knowledge base content, FAQs, and policies</li>
              <li>Review conversation samples and provide feedback</li>
              <li>Follow up on escalated leads and support tickets</li>
              <li>Not use the service for illegal or harmful purposes</li>
              <li>Comply with all applicable laws and regulations</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Payment Terms</h2>
            <p className="text-gray-600 leading-relaxed">
              Subscription fees are billed monthly or annually in advance. You are responsible for
              providing valid payment information. We reserve the right to suspend service for
              non-payment.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Service Availability</h2>
            <p className="text-gray-600 leading-relaxed">
              While we strive for high availability, we do not guarantee uninterrupted service. We may
              perform maintenance, updates, or experience outages. We are not liable for service
              interruptions beyond our reasonable control.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Data Ownership</h2>
            <p className="text-gray-600 leading-relaxed">
              You retain ownership of your data, including conversation logs, lead information, and
              business content. We license your data solely to provide and improve our service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Limitations of Liability</h2>
            <p className="text-gray-600 leading-relaxed">
              To the maximum extent permitted by law, Lumen AI is not liable for indirect,
              incidental, or consequential damages arising from your use of the service. Our total
              liability shall not exceed the fees paid by you in the 12 months preceding the claim.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Termination</h2>
            <p className="text-gray-600 leading-relaxed">
              Either party may terminate the service with 30 days' written notice. Upon termination,
              you will receive an export of your data. We reserve the right to terminate immediately
              for breach of these terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Changes to Terms</h2>
            <p className="text-gray-600 leading-relaxed">
              We may modify these Terms of Service at any time. We will notify you of material changes
              via email. Continued use of the service after changes constitutes acceptance.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Governing Law</h2>
            <p className="text-gray-600 leading-relaxed">
              These terms are governed by the laws of the jurisdiction in which Lumen AI operates,
              without regard to conflict of law principles.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Contact</h2>
            <p className="text-gray-600 leading-relaxed">
              For questions about these Terms of Service, contact us at{" "}
              <a href="mailto:legal@lumenai.com" className="text-blue-600 hover:text-blue-700">
                legal@lumenai.com
              </a>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
