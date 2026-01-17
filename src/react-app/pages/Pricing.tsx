import { Check } from "lucide-react";
import { Link } from "react-router";

export default function Pricing() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-50 via-purple-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Transparent Pricing
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose a plan that fits your volume and needs. All plans include setup, monitoring, and
            ongoing iteration.
          </p>
        </div>
      </section>

      {/* Pricing Tiers */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Starter */}
            <div className="p-8 rounded-2xl bg-white border-2 border-gray-200 hover:border-blue-300 transition-all">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Starter</h3>
              <p className="text-gray-600 mb-6">For small teams testing conversational support</p>
              <div className="mb-6">
                <span className="text-4xl font-bold text-gray-900">$75</span>
                <span className="text-gray-600">/month</span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Up to 500 conversations/month</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">1 messaging channel</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">2 integrations (CRM + calendar)</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Email support</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Monthly reviews</span>
                </li>
              </ul>
              <Link
                to="/demo"
                className="block w-full px-6 py-3 bg-gray-900 text-white rounded-xl text-center font-semibold hover:bg-gray-800 transition-all"
              >
                Get Started
              </Link>
            </div>

            {/* Growth */}
            <div className="p-8 rounded-2xl bg-gradient-to-br from-blue-600 to-purple-600 text-white relative border-2 border-transparent shadow-xl">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-orange-500 text-white text-sm font-semibold rounded-full">
                Most Popular
              </div>
              <h3 className="text-2xl font-bold mb-2">Growth</h3>
              <p className="text-blue-100 mb-6">For growing teams with higher volume</p>
              <div className="mb-6">
                <span className="text-4xl font-bold">$150</span>
                <span className="text-blue-100">/month</span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-300 flex-shrink-0 mt-0.5" />
                  <span>Up to 2,000 conversations/month</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-300 flex-shrink-0 mt-0.5" />
                  <span>3 messaging channels</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-300 flex-shrink-0 mt-0.5" />
                  <span>5 integrations</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-300 flex-shrink-0 mt-0.5" />
                  <span>Priority email & chat support</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-300 flex-shrink-0 mt-0.5" />
                  <span>Bi-weekly reviews</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-300 flex-shrink-0 mt-0.5" />
                  <span>Custom escalation rules</span>
                </li>
              </ul>
              <Link
                to="/demo"
                className="block w-full px-6 py-3 bg-white text-blue-600 rounded-xl text-center font-semibold hover:bg-gray-50 transition-all"
              >
                Get Started
              </Link>
            </div>

            {/* Enterprise */}
            <div className="p-8 rounded-2xl bg-white border-2 border-gray-200 hover:border-purple-300 transition-all">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Enterprise</h3>
              <p className="text-gray-600 mb-6">For teams at scale with custom needs</p>
              <div className="mb-6">
                <span className="text-4xl font-bold text-gray-900">Custom</span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Unlimited conversations</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Unlimited channels</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Unlimited integrations</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Dedicated support manager</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Weekly reviews & optimization</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Custom development</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">SLA guarantees</span>
                </li>
              </ul>
              <Link
                to="/demo"
                className="block w-full px-6 py-3 bg-gray-900 text-white rounded-xl text-center font-semibold hover:bg-gray-800 transition-all"
              >
                Contact Sales
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* What Affects Pricing */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              What Affects Pricing
            </h2>
            <p className="text-lg text-gray-600">
              Transparent factors that determine your plan cost.
            </p>
          </div>

          <div className="space-y-6">
            <div className="p-6 rounded-2xl bg-white border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Conversation Volume</h3>
              <p className="text-gray-600">
                Higher volume plans cost more. We count unique conversations (not individual
                messages). A conversation is a series of exchanges with one visitor.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Number of Channels</h3>
              <p className="text-gray-600">
                Each messaging channel (website widget, WhatsApp, etc.) requires setup and
                monitoring. More channels increase the monthly cost.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Integrations</h3>
              <p className="text-gray-600">
                Standard integrations (CRM, calendar, helpdesk) are included in your plan. Custom
                integrations may require additional setup fees.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Customization Level</h3>
              <p className="text-gray-600">
                Advanced customization like industry-specific workflows, multi-language support, or
                complex escalation logic may require an Enterprise plan.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Pricing FAQ</h2>
          </div>

          <div className="space-y-6">
            <div className="p-6 rounded-2xl bg-gray-50">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Is there a setup fee?
              </h3>
              <p className="text-gray-600">
                No. Setup, configuration, and initial training are included in your monthly plan.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-gray-50">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Can I change plans?
              </h3>
              <p className="text-gray-600">
                Yes. You can upgrade or downgrade at any time. Changes take effect at the start of
                your next billing cycle.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-gray-50">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                What happens if I exceed my conversation limit?
              </h3>
              <p className="text-gray-600">
                We'll notify you and discuss upgrading your plan. We won't shut off your assistant
                without warning.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-gray-50">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Do you offer annual discounts?
              </h3>
              <p className="text-gray-600">
                Yes. Annual plans receive a 15% discount. Contact sales for details.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
