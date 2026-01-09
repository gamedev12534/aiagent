import { useState } from "react";
import { useApi } from "@/react-app/hooks/useApi";
import { CheckCircle } from "lucide-react";

export default function Demo() {
  const { request, loading, error } = useApi();
  const [success, setSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    website: "",
    role: "",
    useCase: "both" as "lead_gen" | "support" | "both",
    volumeEstimate: "",
    channels: [] as string[],
    notes: "",
    honeypot: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSuccess(false);

    const result = await request("/api/leads", {
      method: "POST",
      body: {
        ...formData,
        sourcePage: "demo",
      },
    });

    if (result) {
      setSuccess(true);
      setFormData({
        name: "",
        email: "",
        company: "",
        website: "",
        role: "",
        useCase: "both",
        volumeEstimate: "",
        channels: [],
        notes: "",
        honeypot: "",
      });
    }
  };

  const toggleChannel = (channel: string) => {
    setFormData((prev) => ({
      ...prev,
      channels: prev.channels.includes(channel)
        ? prev.channels.filter((c) => c !== channel)
        : [...prev.channels, channel],
    }));
  };

  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-50 via-purple-50 to-white py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Request a Demo
          </h1>
          <p className="text-xl text-gray-600">
            See how Lumen AI can help your business. We'll reach out within 24 hours.
          </p>
        </div>
      </section>

      {/* Form */}
      <section className="py-20">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          {success ? (
            <div className="p-8 rounded-2xl bg-green-50 border-2 border-green-200 text-center">
              <CheckCircle className="w-16 h-16 text-green-600 mx-auto mb-4" />
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Thank You!</h2>
              <p className="text-gray-600">
                We've received your demo request and will be in touch within 24 hours.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Honeypot */}
              <input
                type="text"
                name="honeypot"
                value={formData.honeypot}
                onChange={(e) => setFormData({ ...formData, honeypot: e.target.value })}
                style={{ display: "none" }}
                tabIndex={-1}
                autoComplete="off"
              />

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-900 mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-blue-500 focus:outline-none"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-900 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-blue-500 focus:outline-none"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="company" className="block text-sm font-semibold text-gray-900 mb-2">
                    Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-blue-500 focus:outline-none"
                  />
                </div>

                <div>
                  <label htmlFor="website" className="block text-sm font-semibold text-gray-900 mb-2">
                    Website
                  </label>
                  <input
                    type="url"
                    id="website"
                    value={formData.website}
                    onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-blue-500 focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="role" className="block text-sm font-semibold text-gray-900 mb-2">
                  Your Role
                </label>
                <input
                  type="text"
                  id="role"
                  value={formData.role}
                  onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                  placeholder="e.g., VP Sales, Head of Support"
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-blue-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">
                  Primary Use Case *
                </label>
                <div className="space-y-2">
                  <label className="flex items-center gap-3 p-4 rounded-xl border-2 border-gray-200 cursor-pointer hover:border-blue-300 transition-all">
                    <input
                      type="radio"
                      name="useCase"
                      value="lead_gen"
                      checked={formData.useCase === "lead_gen"}
                      onChange={(e) => setFormData({ ...formData, useCase: e.target.value as any })}
                      className="w-4 h-4"
                    />
                    <span className="text-gray-900">Lead Generation</span>
                  </label>
                  <label className="flex items-center gap-3 p-4 rounded-xl border-2 border-gray-200 cursor-pointer hover:border-blue-300 transition-all">
                    <input
                      type="radio"
                      name="useCase"
                      value="support"
                      checked={formData.useCase === "support"}
                      onChange={(e) => setFormData({ ...formData, useCase: e.target.value as any })}
                      className="w-4 h-4"
                    />
                    <span className="text-gray-900">Customer Support</span>
                  </label>
                  <label className="flex items-center gap-3 p-4 rounded-xl border-2 border-gray-200 cursor-pointer hover:border-blue-300 transition-all">
                    <input
                      type="radio"
                      name="useCase"
                      value="both"
                      checked={formData.useCase === "both"}
                      onChange={(e) => setFormData({ ...formData, useCase: e.target.value as any })}
                      className="w-4 h-4"
                    />
                    <span className="text-gray-900">Both</span>
                  </label>
                </div>
              </div>

              <div>
                <label htmlFor="volumeEstimate" className="block text-sm font-semibold text-gray-900 mb-2">
                  Expected Monthly Volume
                </label>
                <select
                  id="volumeEstimate"
                  value={formData.volumeEstimate}
                  onChange={(e) => setFormData({ ...formData, volumeEstimate: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-blue-500 focus:outline-none"
                >
                  <option value="">Select range...</option>
                  <option value="0-500">0-500 conversations</option>
                  <option value="500-2000">500-2,000 conversations</option>
                  <option value="2000-5000">2,000-5,000 conversations</option>
                  <option value="5000+">5,000+ conversations</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">
                  Channels of Interest
                </label>
                <div className="grid grid-cols-2 gap-3">
                  {["Website", "WhatsApp", "Messenger", "SMS", "Email"].map((channel) => (
                    <label
                      key={channel}
                      className="flex items-center gap-3 p-3 rounded-xl border-2 border-gray-200 cursor-pointer hover:border-blue-300 transition-all"
                    >
                      <input
                        type="checkbox"
                        checked={formData.channels.includes(channel)}
                        onChange={() => toggleChannel(channel)}
                        className="w-4 h-4"
                      />
                      <span className="text-gray-900">{channel}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <label htmlFor="notes" className="block text-sm font-semibold text-gray-900 mb-2">
                  Additional Notes
                </label>
                <textarea
                  id="notes"
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  rows={4}
                  placeholder="Tell us about your use case, timeline, or any specific questions..."
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-blue-500 focus:outline-none resize-none"
                />
              </div>

              {error && (
                <div className="p-4 rounded-xl bg-red-50 border border-red-200 text-red-700">
                  {error}
                </div>
              )}

              <button
                type="submit"
                disabled={loading}
                className="w-full px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold hover:shadow-xl transition-all disabled:opacity-50"
              >
                {loading ? "Submitting..." : "Request Demo"}
              </button>
            </form>
          )}
        </div>
      </section>
    </div>
  );
}
