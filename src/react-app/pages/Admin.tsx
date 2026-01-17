import { useState, useEffect } from "react";
import { useApi } from "@/react-app/hooks/useApi";
import type { Lead, ContactMessage } from "@/shared/types";
import { Loader2 } from "lucide-react";

export default function Admin() {
  const [password, setPassword] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [activeTab, setActiveTab] = useState<"leads" | "messages">("leads");
  
  const [leads, setLeads] = useState<Lead[]>([]);
  const [messages, setMessages] = useState<ContactMessage[]>([]);
  const [filterStatus, setFilterStatus] = useState<string>("all");
  const [filterUseCase, setFilterUseCase] = useState<string>("all");

  const { request, loading, error } = useApi();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Store password in session storage for API calls
    sessionStorage.setItem("admin_password", password);
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    sessionStorage.removeItem("admin_password");
    setIsAuthenticated(false);
    setPassword("");
  };

  const fetchLeads = async () => {
    const token = sessionStorage.getItem("admin_password");
    const result = await request("/api/leads", {
      headers: { Authorization: `Bearer ${token}` },
    });
    if (result) {
      setLeads(result.leads || []);
    }
  };

  const fetchMessages = async () => {
    const token = sessionStorage.getItem("admin_password");
    const result = await request("/api/contact", {
      headers: { Authorization: `Bearer ${token}` },
    });
    if (result) {
      setMessages(result.messages || []);
    }
  };

  const updateLeadStatus = async (id: number, status: string) => {
    const token = sessionStorage.getItem("admin_password");
    await request(`/api/leads/${id}`, {
      method: "PATCH",
      headers: { Authorization: `Bearer ${token}` },
      body: { status },
    });
    fetchLeads();
  };

  const updateMessageStatus = async (id: number, status: string) => {
    const token = sessionStorage.getItem("admin_password");
    await request(`/api/contact/${id}`, {
      method: "PATCH",
      headers: { Authorization: `Bearer ${token}` },
      body: { status },
    });
    fetchMessages();
  };

  useEffect(() => {
    if (isAuthenticated) {
      fetchLeads();
      fetchMessages();
    }
  }, [isAuthenticated]);

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-white flex items-center justify-center px-4">
        <div className="max-w-md w-full">
          <div className="p-8 rounded-2xl bg-white border-2 border-gray-200 shadow-lg">
            <h1 className="text-2xl font-bold text-gray-900 mb-6 text-center">Admin Login</h1>
            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <label htmlFor="password" className="block text-sm font-semibold text-gray-900 mb-2">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-blue-500 focus:outline-none"
                />
              </div>
              {error && (
                <div className="p-3 rounded-lg bg-red-50 border border-red-200 text-red-700 text-sm">
                  Invalid password
                </div>
              )}
              <button
                type="submit"
                className="w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold hover:shadow-xl transition-all"
              >
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }

  const filteredLeads = leads.filter((lead) => {
    const statusMatch = filterStatus === "all" || lead.status === filterStatus;
    const useCaseMatch = filterUseCase === "all" || lead.use_case === filterUseCase;
    return statusMatch && useCaseMatch;
  });

  const filteredMessages = messages.filter((msg) => {
    return filterStatus === "all" || msg.status === filterStatus;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Admin Dashboard</h1>
          <button
            onClick={handleLogout}
            className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-all"
          >
            Logout
          </button>
        </div>

        {/* Tabs */}
        <div className="flex gap-4 mb-6 border-b border-gray-200">
          <button
            onClick={() => setActiveTab("leads")}
            className={`px-6 py-3 font-semibold border-b-2 transition-colors ${
              activeTab === "leads"
                ? "border-blue-600 text-blue-600"
                : "border-transparent text-gray-600 hover:text-gray-900"
            }`}
          >
            Leads ({leads.length})
          </button>
          <button
            onClick={() => setActiveTab("messages")}
            className={`px-6 py-3 font-semibold border-b-2 transition-colors ${
              activeTab === "messages"
                ? "border-blue-600 text-blue-600"
                : "border-transparent text-gray-600 hover:text-gray-900"
            }`}
          >
            Contact Messages ({messages.length})
          </button>
        </div>

        {/* Filters */}
        <div className="mb-6 flex gap-4">
          <select
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
            className="px-4 py-2 rounded-lg border-2 border-gray-200 focus:border-blue-500 focus:outline-none"
          >
            <option value="all">All Statuses</option>
            {activeTab === "leads" ? (
              <>
                <option value="new">New</option>
                <option value="contacted">Contacted</option>
                <option value="qualified">Qualified</option>
                <option value="disqualified">Disqualified</option>
              </>
            ) : (
              <>
                <option value="new">New</option>
                <option value="replied">Replied</option>
              </>
            )}
          </select>
          {activeTab === "leads" && (
            <select
              value={filterUseCase}
              onChange={(e) => setFilterUseCase(e.target.value)}
              className="px-4 py-2 rounded-lg border-2 border-gray-200 focus:border-blue-500 focus:outline-none"
            >
              <option value="all">All Use Cases</option>
              <option value="lead_gen">Lead Generation</option>
              <option value="support">Customer Support</option>
              <option value="both">Both</option>
            </select>
          )}
        </div>

        {/* Content */}
        {loading ? (
          <div className="flex justify-center py-12">
            <Loader2 className="w-8 h-8 animate-spin text-blue-600" />
          </div>
        ) : activeTab === "leads" ? (
          <div className="space-y-4">
            {filteredLeads.map((lead) => (
              <div key={lead.id} className="p-6 rounded-2xl bg-white border border-gray-200">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">{lead.name}</h3>
                    <p className="text-gray-600">{lead.email}</p>
                    {lead.company && <p className="text-gray-600">{lead.company}</p>}
                  </div>
                  <select
                    value={lead.status}
                    onChange={(e) => updateLeadStatus(lead.id, e.target.value)}
                    className="px-3 py-1 rounded-lg border-2 border-gray-200 text-sm focus:border-blue-500 focus:outline-none"
                  >
                    <option value="new">New</option>
                    <option value="contacted">Contacted</option>
                    <option value="qualified">Qualified</option>
                    <option value="disqualified">Disqualified</option>
                  </select>
                </div>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="font-semibold text-gray-700">Use Case:</span>{" "}
                    <span className="text-gray-600">{lead.use_case.replace("_", " ")}</span>
                  </div>
                  {lead.role && (
                    <div>
                      <span className="font-semibold text-gray-700">Role:</span>{" "}
                      <span className="text-gray-600">{lead.role}</span>
                    </div>
                  )}
                  {lead.website && (
                    <div>
                      <span className="font-semibold text-gray-700">Website:</span>{" "}
                      <a href={lead.website} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700">
                        {lead.website}
                      </a>
                    </div>
                  )}
                  {lead.volume_estimate && (
                    <div>
                      <span className="font-semibold text-gray-700">Volume:</span>{" "}
                      <span className="text-gray-600">{lead.volume_estimate}</span>
                    </div>
                  )}
                  {lead.channels && (
                    <div className="col-span-2">
                      <span className="font-semibold text-gray-700">Channels:</span>{" "}
                      <span className="text-gray-600">{JSON.parse(lead.channels).join(", ")}</span>
                    </div>
                  )}
                  {lead.notes && (
                    <div className="col-span-2">
                      <span className="font-semibold text-gray-700">Notes:</span>{" "}
                      <span className="text-gray-600">{lead.notes}</span>
                    </div>
                  )}
                  <div className="col-span-2">
                    <span className="font-semibold text-gray-700">Source:</span>{" "}
                    <span className="text-gray-600">{lead.source_page}</span>
                    {" • "}
                    <span className="text-gray-500 text-xs">
                      {new Date(lead.created_at).toLocaleString()}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="space-y-4">
            {filteredMessages.map((msg) => (
              <div key={msg.id} className="p-6 rounded-2xl bg-white border border-gray-200">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">{msg.name}</h3>
                    <p className="text-gray-600">{msg.email}</p>
                    {msg.company && <p className="text-gray-600">{msg.company}</p>}
                  </div>
                  <select
                    value={msg.status}
                    onChange={(e) => updateMessageStatus(msg.id, e.target.value)}
                    className="px-3 py-1 rounded-lg border-2 border-gray-200 text-sm focus:border-blue-500 focus:outline-none"
                  >
                    <option value="new">New</option>
                    <option value="replied">Replied</option>
                  </select>
                </div>
                <p className="text-gray-700 mb-4">{msg.message}</p>
                <p className="text-gray-500 text-xs">
                  {new Date(msg.created_at).toLocaleString()}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
