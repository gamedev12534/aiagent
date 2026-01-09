import { Bot, Database, Workflow, BarChart3, ShieldCheck, ArrowRight } from "lucide-react";

const agents = [
  {
    name: "Support Concierge",
    status: "Live",
    coverage: "Help center + product docs",
    conversations: "1,284 this month",
  },
  {
    name: "Pipeline Qualifier",
    status: "Live",
    coverage: "Sales site + pricing FAQ",
    conversations: "842 this month",
  },
  {
    name: "Onboarding Guide",
    status: "Draft",
    coverage: "Knowledge base + training videos",
    conversations: "Not deployed",
  },
];

const workflows = [
  {
    name: "Lead to HubSpot",
    trigger: "Qualified lead captured",
    status: "Healthy",
  },
  {
    name: "Slack Escalation",
    trigger: "Human handoff requested",
    status: "Healthy",
  },
  {
    name: "Auto-follow up",
    trigger: "No response in 24h",
    status: "Needs review",
  },
];

export default function AppDashboard() {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header */}
      <section className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
                Lumen AI Control Center
              </h1>
              <p className="text-gray-600 mt-2 max-w-2xl">
                Manage agents, data sources, and automations that power your customer-facing AI
                ecosystem.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <button className="px-5 py-3 rounded-xl bg-gray-900 text-white font-semibold hover:bg-gray-800 transition-all">
                Create Agent
              </button>
              <button className="px-5 py-3 rounded-xl border-2 border-gray-200 text-gray-700 font-semibold hover:border-gray-300 transition-all">
                Connect Data Source
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* KPI Cards */}
      <section className="py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { label: "Active Agents", value: "3", icon: Bot },
            { label: "Knowledge Sources", value: "12", icon: Database },
            { label: "Automations Live", value: "7", icon: Workflow },
            { label: "CSAT (30d)", value: "94%", icon: BarChart3 },
          ].map(({ label, value, icon: Icon }) => (
            <div
              key={label}
              className="p-6 rounded-2xl bg-white border border-gray-200 shadow-sm"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-500">{label}</p>
                  <p className="text-2xl font-bold text-gray-900 mt-2">{value}</p>
                </div>
                <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center">
                  <Icon className="w-6 h-6 text-blue-600" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Main Panels */}
      <section className="pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <div className="p-6 rounded-2xl bg-white border border-gray-200">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold text-gray-900">Agents</h2>
                <button className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-700">
                  View all
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
              <div className="space-y-4">
                {agents.map((agent) => (
                  <div
                    key={agent.name}
                    className="p-4 rounded-xl border border-gray-200 hover:border-blue-300 transition-all"
                  >
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                      <div>
                        <p className="text-lg font-semibold text-gray-900">{agent.name}</p>
                        <p className="text-sm text-gray-500">{agent.coverage}</p>
                      </div>
                      <div className="flex items-center gap-4">
                        <span
                          className={`text-xs font-semibold px-3 py-1 rounded-full ${
                            agent.status === "Live"
                              ? "bg-green-100 text-green-700"
                              : "bg-yellow-100 text-yellow-700"
                          }`}
                        >
                          {agent.status}
                        </span>
                        <p className="text-sm text-gray-600">{agent.conversations}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-gray-200">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold text-gray-900">Automation Health</h2>
                <button className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-700">
                  Open n8n
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
              <div className="space-y-4">
                {workflows.map((workflow) => (
                  <div
                    key={workflow.name}
                    className="p-4 rounded-xl border border-gray-200 flex flex-col md:flex-row md:items-center md:justify-between gap-3"
                  >
                    <div>
                      <p className="text-lg font-semibold text-gray-900">{workflow.name}</p>
                      <p className="text-sm text-gray-500">{workflow.trigger}</p>
                    </div>
                    <span
                      className={`text-xs font-semibold px-3 py-1 rounded-full ${
                        workflow.status === "Healthy"
                          ? "bg-green-100 text-green-700"
                          : "bg-orange-100 text-orange-700"
                      }`}
                    >
                      {workflow.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div className="p-6 rounded-2xl bg-white border border-gray-200">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Governance</h2>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <ShieldCheck className="w-5 h-5 text-green-600 mt-1" />
                  <div>
                    <p className="text-sm font-semibold text-gray-900">Guardrails active</p>
                    <p className="text-sm text-gray-600">
                      Sensitive topics and compliance triggers are monitored.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <ShieldCheck className="w-5 h-5 text-green-600 mt-1" />
                  <div>
                    <p className="text-sm font-semibold text-gray-900">Data sources synced</p>
                    <p className="text-sm text-gray-600">
                      Last refresh: 2 hours ago across 12 sources.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <ShieldCheck className="w-5 h-5 text-green-600 mt-1" />
                  <div>
                    <p className="text-sm font-semibold text-gray-900">Human handoff SLA</p>
                    <p className="text-sm text-gray-600">
                      97% of escalations responded to within 15 minutes.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-gradient-to-br from-blue-600 to-purple-600 text-white">
              <h2 className="text-xl font-semibold mb-3">Next best action</h2>
              <p className="text-blue-100 text-sm mb-6">
                Connect your product analytics to unlock proactive churn prevention workflows.
              </p>
              <button className="w-full px-4 py-3 bg-white text-blue-600 font-semibold rounded-xl hover:bg-blue-50 transition-all">
                Add Integration
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
