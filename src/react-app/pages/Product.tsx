import { Shield, CheckCircle, AlertTriangle, Users, Clock, BarChart } from "lucide-react";

export default function Product() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-50 via-purple-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Product Features
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Autonomous agents built on your data for reliable answers and automated actions.
          </p>
        </div>
      </section>

      {/* Core Features */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Core Capabilities</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-6 rounded-2xl bg-white border-2 border-gray-200 hover:border-blue-300 transition-all">
              <div className="w-12 h-12 rounded-xl bg-blue-600 flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Lead Qualification</h3>
              <p className="text-gray-600">
                Structured conversations that identify needs, budget, and timeline. Sends summaries
                and intent signals directly to your CRM.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border-2 border-gray-200 hover:border-purple-300 transition-all">
              <div className="w-12 h-12 rounded-xl bg-purple-600 flex items-center justify-center mb-4">
                <Clock className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">24/7 Availability</h3>
              <p className="text-gray-600">
                Responds instantly when your team is offline and routes follow-ups based on
                priority.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border-2 border-gray-200 hover:border-indigo-300 transition-all">
              <div className="w-12 h-12 rounded-xl bg-indigo-600 flex items-center justify-center mb-4">
                <BarChart className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">RAG Knowledge Engine</h3>
              <p className="text-gray-600">
                Syncs PDFs, help centers, and websites into a vector index so answers are grounded
                in your latest data.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border-2 border-gray-200 hover:border-green-300 transition-all">
              <div className="w-12 h-12 rounded-xl bg-green-600 flex items-center justify-center mb-4">
                <CheckCircle className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Automation Workflows</h3>
              <p className="text-gray-600">
                Trigger n8n flows for ticket creation, follow-ups, onboarding, and custom routing
                logic.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border-2 border-gray-200 hover:border-orange-300 transition-all">
              <div className="w-12 h-12 rounded-xl bg-orange-600 flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Data Privacy</h3>
              <p className="text-gray-600">
                Conversations, documents, and logs are encrypted with role-based access controls.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border-2 border-gray-200 hover:border-red-300 transition-all">
              <div className="w-12 h-12 rounded-xl bg-red-600 flex items-center justify-center mb-4">
                <AlertTriangle className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Escalation Rules</h3>
              <p className="text-gray-600">
                Configure when and how to escalate, including sensitive topics and complex
                technical issues.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Safety & Escalation */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Safety & Escalation Boundaries
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              The assistant knows its limits and escalates appropriately.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            <div className="p-8 rounded-2xl bg-white border-2 border-gray-200">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                When It Escalates to Humans
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">
                    Complex technical issues beyond basic troubleshooting
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">
                    Sensitive topics like refunds, account disputes, or compliance questions
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">
                    When knowledge sources don't cover the answer
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">
                    Custom pricing discussions requiring negotiation
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">
                    When a visitor explicitly requests to speak with a person
                  </span>
                </li>
              </ul>
            </div>

            <div className="p-8 rounded-2xl bg-white border-2 border-gray-200">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                What Gets Passed to Your Team
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">
                    Full conversation history with citations
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">
                    Visitor contact information (email, phone if provided)
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">
                    Qualification data (use case, budget range, timeline)
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">
                    Clear reason why it's escalating
                  </span>
                </li>
              </ul>
            </div>

            <div className="p-8 rounded-2xl bg-white border-2 border-gray-200">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Safety Guardrails
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <Shield className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">
                    Never makes promises about pricing, features, or timelines without explicit
                    approval
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Shield className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">
                    Won't provide medical, legal, or financial advice
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Shield className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">
                    Admits uncertainty rather than guessing or fabricating information
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Shield className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">
                    Follows your brand voice and policies exactly as configured
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Managed Service */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Self-Serve + Automation</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Launch quickly with a dashboard built for growth teams.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="p-8 rounded-2xl bg-gradient-to-br from-blue-50 to-white border border-blue-100">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Lumen AI Handles</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Agent provisioning and model orchestration</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Continuous retrieval tuning and health checks</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Automated workflow reliability via n8n</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Integration maintenance and updates</span>
                </li>
              </ul>
            </div>

            <div className="p-8 rounded-2xl bg-gradient-to-br from-purple-50 to-white border border-purple-100">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Your Team Controls</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">
                    Upload documents, FAQs, and product updates
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Review conversation analytics and intent summaries</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">
                    Configure escalation paths and workflow triggers
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Follow up on escalated leads and tickets</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
