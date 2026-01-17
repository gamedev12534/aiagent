import { Link } from "react-router";
import {
  MessageSquare,
  Users,
  CheckCircle,
  ArrowRight,
  Shield,
} from "lucide-react";

export default function Home() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-purple-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Your Business,{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Always Available
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Capture leads, support customers 24/7, and escalate to humans when needed.
              A managed conversational assistant built for reliability.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/demo"
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl font-semibold hover:shadow-xl transition-all"
              >
                Request Demo
              </Link>
              <Link
                to="/product"
                className="px-8 py-4 bg-white text-gray-700 rounded-2xl font-semibold border-2 border-gray-200 hover:border-gray-300 transition-all"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* What It Does */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Truebuddies Does
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              A practical assistant that handles common tasks while knowing when to get help.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl bg-gradient-to-br from-blue-50 to-white border border-blue-100 hover:shadow-lg transition-all">
              <div className="w-12 h-12 rounded-xl bg-blue-600 flex items-center justify-center mb-4">
                <MessageSquare className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Responds After-Hours
              </h3>
              <p className="text-gray-600">
                Answers questions and captures contact details when your team is offline.
                No more missed opportunities.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-gradient-to-br from-purple-50 to-white border border-purple-100 hover:shadow-lg transition-all">
              <div className="w-12 h-12 rounded-xl bg-purple-600 flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Qualifies Leads
              </h3>
              <p className="text-gray-600">
                Asks structured questions to understand visitor needs and outputs clean summaries
                for your sales team.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-gradient-to-br from-indigo-50 to-white border border-indigo-100 hover:shadow-lg transition-all">
              <div className="w-12 h-12 rounded-xl bg-indigo-600 flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Escalates Smartly
              </h3>
              <p className="text-gray-600">
                Recognizes complex or sensitive cases and hands off to your team with full context
                and contact info.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How It Works
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Simple setup, ongoing support, continuous improvement.
            </p>
          </div>

          <div className="space-y-8 max-w-3xl mx-auto">
            <div className="flex gap-6 items-start">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold">
                1
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  We Learn Your Business
                </h3>
                <p className="text-gray-600">
                  Share your FAQs, policies, and common workflows. We configure the assistant to
                  match your brand and voice.
                </p>
              </div>
            </div>

            <div className="flex gap-6 items-start">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-purple-600 text-white flex items-center justify-center font-bold">
                2
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Deploy & Monitor
                </h3>
                <p className="text-gray-600">
                  We integrate with your website, channels, and tools. You get dashboards showing
                  conversations, lead quality, and escalation rates.
                </p>
              </div>
            </div>

            <div className="flex gap-6 items-start">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-indigo-600 text-white flex items-center justify-center font-bold">
                3
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Iterate Together
                </h3>
                <p className="text-gray-600">
                  Based on real conversations, we refine responses, add new capabilities, and adjust
                  escalation logic. It gets better over time.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Built for Real Needs
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-8 rounded-2xl bg-white border-2 border-gray-200 hover:border-blue-300 transition-all">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Lead Generation</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">
                    Qualify visitors by asking about budget, timeline, and needs
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">
                    Capture contact info and send summaries to your CRM
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">
                    Schedule meetings directly via calendar integration
                  </span>
                </li>
              </ul>
            </div>

            <div className="p-8 rounded-2xl bg-white border-2 border-gray-200 hover:border-purple-300 transition-all">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Customer Support</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">
                    Answer common questions from your knowledge base
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">
                    Guide users through onboarding and basic troubleshooting
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">
                    Escalate technical issues with context to your support team
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Integrations Preview */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Works With Your Stack
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Connect calendars, CRMs, support tools, and messaging platforms.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {["Calendar", "CRM", "Helpdesk", "Messaging"].map((name) => (
              <div
                key={name}
                className="p-6 rounded-2xl bg-white border border-gray-200 text-center hover:shadow-md transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-100 to-purple-100 mx-auto mb-3" />
                <p className="font-semibold text-gray-900">{name}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link
              to="/integrations"
              className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold"
            >
              View All Integrations
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Customers Say
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl bg-gradient-to-br from-blue-50 to-white border border-blue-100">
              <p className="text-gray-700 mb-6 italic">
                "We capture 3x more leads after-hours now. The assistant qualifies them well, so our
                sales team focuses on high-quality opportunities."
              </p>
              <div>
                <p className="font-semibold text-gray-900">Sarah Chen</p>
                <p className="text-sm text-gray-600">VP Sales, TechCorp</p>
              </div>
            </div>

            <div className="p-8 rounded-2xl bg-gradient-to-br from-purple-50 to-white border border-purple-100">
              <p className="text-gray-700 mb-6 italic">
                "Support tickets dropped 40% because common questions get answered instantly. When
                it escalates, we have all the context we need."
              </p>
              <div>
                <p className="font-semibold text-gray-900">Michael Rodriguez</p>
                <p className="text-sm text-gray-600">Head of Support, CloudApp</p>
              </div>
            </div>

            <div className="p-8 rounded-2xl bg-gradient-to-br from-indigo-50 to-white border border-indigo-100">
              <p className="text-gray-700 mb-6 italic">
                "The team iterated with us to get the voice right. It's like having a reliable
                junior team member who never sleeps."
              </p>
              <div>
                <p className="font-semibold text-gray-900">Emma Thompson</p>
                <p className="text-sm text-gray-600">COO, GrowthCo</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Common Questions
            </h2>
          </div>

          <div className="space-y-6">
            <div className="p-6 rounded-2xl bg-white border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                How is this different from a chatbot?
              </h3>
              <p className="text-gray-600">
                We provide a managed service, not just software. We handle setup, monitoring,
                iteration, and ongoing improvements based on real conversations.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                What happens when it doesn't know the answer?
              </h3>
              <p className="text-gray-600">
                The assistant recognizes uncertainty and escalates to your team with full context
                and the visitor's contact details. It won't make things up.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                How long does setup take?
              </h3>
              <p className="text-gray-600">
                Typically 1-2 weeks. We gather your FAQs and policies, configure the assistant,
                test it, then deploy. You review conversations and we refine from there.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Can it integrate with our existing tools?
              </h3>
              <p className="text-gray-600">
                Yes. We support calendars (Google, Outlook), CRMs (HubSpot, Salesforce, Sheets),
                helpdesks (Zendesk, Intercom), and messaging platforms (Slack, email).
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            See how Truebuddies can help your business capture more leads and support customers
            around the clock.
          </p>
          <Link
            to="/demo"
            className="inline-block px-8 py-4 bg-white text-blue-600 rounded-2xl font-semibold hover:shadow-2xl transition-all"
          >
            Request a Demo
          </Link>
        </div>
      </section>
    </div>
  );
}
