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
              Autonomous RAG Agents,{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Always On
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Deploy AI chat agents trained on your data to answer questions, capture qualified
              leads, and automate workflows around the clock.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/demo"
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl font-semibold hover:shadow-xl transition-all"
              >
                Request Demo
              </Link>
              <Link
                to="/app"
                className="px-8 py-4 bg-white text-gray-700 rounded-2xl font-semibold border-2 border-gray-200 hover:border-gray-300 transition-all"
              >
                Open App
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
              What Lumen AI Delivers
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Autonomous, RAG-powered agents that know your business and act on your behalf.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl bg-gradient-to-br from-blue-50 to-white border border-blue-100 hover:shadow-lg transition-all">
              <div className="w-12 h-12 rounded-xl bg-blue-600 flex items-center justify-center mb-4">
                <MessageSquare className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                RAG-Powered Accuracy
              </h3>
              <p className="text-gray-600">
                Answers questions using your documents, FAQs, and website content with verified
                citations instead of generic scripts.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-gradient-to-br from-purple-50 to-white border border-purple-100 hover:shadow-lg transition-all">
              <div className="w-12 h-12 rounded-xl bg-purple-600 flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Lead Capture + Summaries
              </h3>
              <p className="text-gray-600">
                Qualifies visitors, collects contact details, and delivers structured intent
                summaries to sales automatically.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-gradient-to-br from-indigo-50 to-white border border-indigo-100 hover:shadow-lg transition-all">
              <div className="w-12 h-12 rounded-xl bg-indigo-600 flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Automated Workflows
              </h3>
              <p className="text-gray-600">
                Orchestrates follow-ups, ticket creation, and CRM updates with reliable n8n
                automations.
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
              Ingest your data, configure agents, and launch in days.
            </p>
          </div>

          <div className="space-y-8 max-w-3xl mx-auto">
            <div className="flex gap-6 items-start">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold">
                1
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Ingest Your Knowledge
                </h3>
                <p className="text-gray-600">
                  Upload PDFs, sync your help center, and crawl your website so the agent answers
                  with your exact information.
                </p>
              </div>
            </div>

            <div className="flex gap-6 items-start">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-purple-600 text-white flex items-center justify-center font-bold">
                2
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Configure the Agent
                </h3>
                <p className="text-gray-600">
                  Set tone, guardrails, lead capture logic, and escalation rules from a self-serve
                  dashboard.
                </p>
              </div>
            </div>

            <div className="flex gap-6 items-start">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-indigo-600 text-white flex items-center justify-center font-bold">
                3
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Launch + Automate
                </h3>
                <p className="text-gray-600">
                  Drop in the widget, connect tools, and automate workflows with n8n for alerts,
                  routing, and follow-up sequences.
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
                    Qualify visitors based on pain points, budget, and urgency
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">
                    Capture contact info and send intent summaries to your CRM
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">
                    Trigger automated meeting scheduling and personalized follow-ups
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
                    Resolve FAQs instantly with your knowledge base
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">
                    Guide onboarding, troubleshooting, and feature adoption
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">
                    Escalate to humans with full context and customer history
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
              Connect CRMs, support tools, data sources, and automation systems.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {["Data Sources", "CRM", "Helpdesk", "Automation"].map((name) => (
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
                "We launched an AI agent in a week. It captures leads and logs everything in
                HubSpot without manual work."
              </p>
              <div>
                <p className="font-semibold text-gray-900">Sarah Chen</p>
                <p className="text-sm text-gray-600">VP Sales, AtlasOps</p>
              </div>
            </div>

            <div className="p-8 rounded-2xl bg-gradient-to-br from-purple-50 to-white border border-purple-100">
              <p className="text-gray-700 mb-6 italic">
                "Support deflection is up 42%. The agent cites our docs and escalates with full
                context when it needs a human."
              </p>
              <div>
                <p className="font-semibold text-gray-900">Michael Rodriguez</p>
                <p className="text-sm text-gray-600">Head of Support, CloudApp</p>
              </div>
            </div>

            <div className="p-8 rounded-2xl bg-gradient-to-br from-indigo-50 to-white border border-indigo-100">
              <p className="text-gray-700 mb-6 italic">
                "The automations feel like a full-time ops teammate. Lead follow-ups now run
                24/7 without us touching a thing."
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
                Lumen AI uses retrieval-augmented generation trained on your data, so responses are
                grounded in your knowledge base and updated automatically.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                What happens when it doesn't know the answer?
              </h3>
              <p className="text-gray-600">
                The agent flags uncertainty, escalates to your team, and passes context plus lead
                details. It never fabricates answers.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                How long does setup take?
              </h3>
              <p className="text-gray-600">
                Most teams launch in under a week. Upload your data, configure workflows, and add
                the widget to your site.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Can it integrate with our existing tools?
              </h3>
              <p className="text-gray-600">
                Yes. Connect CRMs, helpdesks, analytics tools, and n8n automations via native
                integrations or webhooks.
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
            See how Lumen AI helps your team deliver instant, accurate, and automated customer
            engagement.
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
