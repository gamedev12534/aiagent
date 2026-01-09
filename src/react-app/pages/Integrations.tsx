import { Calendar, Database, Headphones, MessageSquare, Mail, Slack } from "lucide-react";

export default function Integrations() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-50 via-purple-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Integrations
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Connect Lumen AI with your data sources, tools, and automation workflows.
          </p>
        </div>
      </section>

      {/* Integration Categories */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Calendar */}
            <div className="p-8 rounded-2xl bg-white border-2 border-gray-200 hover:border-blue-300 transition-all">
              <div className="w-12 h-12 rounded-xl bg-blue-600 flex items-center justify-center mb-4">
                <Calendar className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Calendar</h3>
              <p className="text-gray-600 mb-4">
                Book meetings directly from conversations. Sync with Google Calendar, Outlook, and
                Calendly.
              </p>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Google Calendar</li>
                <li>• Microsoft Outlook</li>
                <li>• Calendly</li>
              </ul>
            </div>

            {/* CRM */}
            <div className="p-8 rounded-2xl bg-white border-2 border-gray-200 hover:border-purple-300 transition-all">
              <div className="w-12 h-12 rounded-xl bg-purple-600 flex items-center justify-center mb-4">
                <Database className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">CRM & Sheets</h3>
              <p className="text-gray-600 mb-4">
                Send qualified leads directly to your CRM or spreadsheet with structured intent.
              </p>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• HubSpot</li>
                <li>• Salesforce</li>
                <li>• Google Sheets</li>
                <li>• Airtable</li>
              </ul>
            </div>

            {/* Helpdesk */}
            <div className="p-8 rounded-2xl bg-white border-2 border-gray-200 hover:border-indigo-300 transition-all">
              <div className="w-12 h-12 rounded-xl bg-indigo-600 flex items-center justify-center mb-4">
                <Headphones className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Helpdesk</h3>
              <p className="text-gray-600 mb-4">
                Create tickets for escalated issues with full conversation context.
              </p>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Zendesk</li>
                <li>• Intercom</li>
                <li>• Freshdesk</li>
                <li>• Help Scout</li>
              </ul>
            </div>

            {/* Messaging */}
            <div className="p-8 rounded-2xl bg-white border-2 border-gray-200 hover:border-green-300 transition-all">
              <div className="w-12 h-12 rounded-xl bg-green-600 flex items-center justify-center mb-4">
                <MessageSquare className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Messaging</h3>
              <p className="text-gray-600 mb-4">
                Respond on the channels your customers prefer with a single agent brain.
              </p>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Website widget</li>
                <li>• WhatsApp</li>
                <li>• Facebook Messenger</li>
                <li>• SMS</li>
              </ul>
            </div>

            {/* Notifications */}
            <div className="p-8 rounded-2xl bg-white border-2 border-gray-200 hover:border-orange-300 transition-all">
              <div className="w-12 h-12 rounded-xl bg-orange-600 flex items-center justify-center mb-4">
                <Slack className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Notifications</h3>
              <p className="text-gray-600 mb-4">
                Get alerted when leads come in, escalations happen, or workflows fail.
              </p>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Slack</li>
                <li>• Microsoft Teams</li>
                <li>• Discord</li>
                <li>• Webhooks</li>
              </ul>
            </div>

            {/* Email */}
            <div className="p-8 rounded-2xl bg-white border-2 border-gray-200 hover:border-red-300 transition-all">
              <div className="w-12 h-12 rounded-xl bg-red-600 flex items-center justify-center mb-4">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Email</h3>
              <p className="text-gray-600 mb-4">
                Send automated follow-ups, onboarding sequences, and lead summaries via email.
              </p>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• SendGrid</li>
                <li>• Mailgun</li>
                <li>• Postmark</li>
                <li>• SMTP</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Architecture Diagram */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              How It Works
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              A reliable architecture that blends RAG, automations, and your tools.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="p-8 rounded-2xl bg-white border-2 border-gray-200">
              <div className="space-y-6">
                {/* Visitor */}
                <div className="flex items-center justify-center">
                  <div className="px-6 py-3 rounded-xl bg-blue-100 text-blue-900 font-semibold">
                    Visitor (Website, WhatsApp, etc.)
                  </div>
                </div>

                <div className="flex justify-center">
                  <div className="w-px h-12 bg-gray-300" />
                </div>

                {/* Lumen AI */}
                <div className="flex items-center justify-center">
                  <div className="px-6 py-3 rounded-xl bg-purple-100 text-purple-900 font-semibold">
                    Lumen AI Agent + RAG Index
                  </div>
                </div>

                <div className="flex justify-center">
                  <div className="w-px h-12 bg-gray-300" />
                </div>

                {/* Integrations */}
                <div className="grid grid-cols-3 gap-4">
                  <div className="px-4 py-3 rounded-xl bg-green-100 text-green-900 text-center text-sm font-semibold">
                    Your CRM
                  </div>
                  <div className="px-4 py-3 rounded-xl bg-orange-100 text-orange-900 text-center text-sm font-semibold">
                    n8n Workflows
                  </div>
                  <div className="px-4 py-3 rounded-xl bg-indigo-100 text-indigo-900 text-center text-sm font-semibold">
                    Your Helpdesk
                  </div>
                </div>

                <div className="flex justify-center">
                  <div className="w-px h-12 bg-gray-300" />
                </div>

                {/* Your Team */}
                <div className="flex items-center justify-center">
                  <div className="px-6 py-3 rounded-xl bg-gray-100 text-gray-900 font-semibold">
                    Your Team
                  </div>
                </div>
              </div>

              <div className="mt-8 p-4 rounded-xl bg-blue-50 border border-blue-100">
                <p className="text-sm text-gray-700">
                  <strong>Data flow:</strong> Visitors interact with the agent, which retrieves
                  answers from your knowledge base, qualifies the lead, and triggers n8n workflows.
                  CRM updates, meeting requests, and helpdesk tickets happen automatically.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Custom Integrations */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Need a Custom Integration?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            We can connect to most tools via webhooks, REST APIs, or custom scripts. Let us know
            what you need.
          </p>
          <a
            href="/contact"
            className="inline-block px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl font-semibold hover:shadow-xl transition-all"
          >
            Get in Touch
          </a>
        </div>
      </section>
    </div>
  );
}
