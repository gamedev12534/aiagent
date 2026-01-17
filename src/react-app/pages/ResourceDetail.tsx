import { useParams, Link } from "react-router";
import { ArrowLeft, Calendar, User } from "lucide-react";

// Mock blog post content
const posts: Record<string, any> = {
  "why-ai-assistants-fail": {
    title: "Why Most AI Assistants Fail (And How to Avoid It)",
    category: "Best Practices",
    date: "2025-11-20",
    author: "Sarah Chen",
    content: `
      <p>After analyzing hundreds of conversational AI deployments, we've identified three common mistakes that lead to failure - and more importantly, how to avoid them.</p>
      
      <h2>Mistake #1: No Clear Boundaries</h2>
      <p>Teams often deploy assistants without defining what they should and shouldn't handle. This leads to overconfident responses, hallucinations, and frustrated customers.</p>
      
      <p><strong>Solution:</strong> Define clear escalation rules upfront. Document exactly when the assistant should hand off to a human. Test edge cases before launch.</p>
      
      <h2>Mistake #2: Insufficient Training Data</h2>
      <p>Many teams launch with minimal knowledge base content, expecting the AI to "figure it out." This doesn't work.</p>
      
      <p><strong>Solution:</strong> Invest time gathering FAQs, policies, and common scenarios. The more context you provide, the better the assistant performs.</p>
      
      <h2>Mistake #3: No Iteration Plan</h2>
      <p>The first version won't be perfect. Teams that don't plan for ongoing reviews and improvements see declining performance over time.</p>
      
      <p><strong>Solution:</strong> Schedule regular conversation reviews. Track metrics. Refine responses based on real data. Treat it as a product that improves continuously.</p>
    `,
  },
  "lead-qualification-frameworks": {
    title: "Lead Qualification Frameworks That Actually Work",
    category: "Lead Generation",
    date: "2025-11-15",
    author: "Michael Rodriguez",
    content: `
      <p>Qualifying leads through conversation requires a balance between gathering information and respecting the visitor's time. Here's what works.</p>
      
      <h2>The Progressive Qualification Approach</h2>
      <p>Don't ask for everything upfront. Start with context, then dig deeper based on responses.</p>
      
      <p><strong>Phase 1:</strong> Understand the use case. What problem are they trying to solve?</p>
      <p><strong>Phase 2:</strong> Gauge fit. Company size, industry, current solution.</p>
      <p><strong>Phase 3:</strong> Assess urgency. Timeline and decision-making process.</p>
      
      <h2>Key Questions to Ask</h2>
      <ul>
        <li>What brings you here today?</li>
        <li>What's your current process for [relevant activity]?</li>
        <li>What would success look like?</li>
        <li>What's your timeline for making a decision?</li>
      </ul>
      
      <p>These open-ended questions gather context while feeling conversational, not interrogative.</p>
    `,
  },
  "max-power-quant-model-prompt": {
    title: "Max-Power Quant Model Prompt for Yahoo Finance",
    category: "Quant Research",
    date: "2025-12-02",
    author: "Truebuddies Research",
    content: `
      <p>
        This is the final, maxed-out prompt for institutional-grade quantitative analysis using Yahoo Finance.
        It explicitly mandates massive computation, millions of equations, and exhaustive model evaluation.
        Use it when you want a deep, research-engine response with rigorous probabilistic outputs.
      </p>

      <h2>🧠⚙️ MAX-POWER QUANT MODEL PROMPT (COPY-PASTE)</h2>
      <p><strong>Objective</strong><br/>
      Build an institutional-grade quantitative decision engine for a specified financial instrument using Yahoo Finance as the primary data source.</p>

      <p><strong>Inputs I will provide:</strong></p>
      <ul>
        <li>Yahoo Finance ticker symbol (e.g., AAPL, RELIANCE.NS, USDINR=X, ^NSEI, NIFTYBEES.NS)</li>
        <li>Time horizon (e.g., 1D, 1W, 1M, 3M, 6M)</li>
      </ul>

      <p><strong>Computational Mandate:</strong></p>
      <ul>
        <li>Assume access to very high computational power and memory.</li>
        <li>Actively utilize this capacity to evaluate <strong>millions of mathematical equations</strong>, simulations, and parameter combinations within minutes.</li>
        <li>Prefer depth, redundancy, and robustness over speed or brevity.</li>
        <li>Expand the solution space aggressively before narrowing to a final signal.</li>
      </ul>

      <p><strong>MODEL WEIGHTING (STRICT):</strong><br/>
      80% Quantitative / Statistical Analysis<br/>
      20% Technical + Fundamental Confirmation Layer</p>

      <h2>1️⃣ QUANTITATIVE CORE (≈80%)</h2>
      <p>
        Perform an exhaustive quantitative analysis using historical price, volume, volatility, and return data from Yahoo Finance.
        Use large-scale computation to:
      </p>
      <ul>
        <li>Run millions of equations across rolling windows, parameter grids, and model variants</li>
        <li>Test multiple statistical frameworks in parallel and compare outcomes</li>
        <li>Stress the data across different volatility regimes and structural breaks</li>
      </ul>
      <p><strong>Mandatory quantitative components include:</strong></p>
      <ul>
        <li>Return distribution modeling across multiple horizons</li>
        <li>Volatility-normalized momentum and reversal metrics</li>
        <li>Mean-reversion probability estimation using rolling z-scores</li>
        <li>Trend persistence vs failure rate analysis</li>
        <li>Drawdown magnitude, duration, and recovery speed statistics</li>
        <li>Regime detection (low-vol, high-vol, transition states)</li>
        <li>Autocorrelation and serial dependence testing</li>
        <li>Relative strength vs appropriate benchmarks</li>
        <li>Risk-adjusted performance decomposition</li>
        <li>Monte-Carlo-style scenario simulations and stress paths</li>
      </ul>
      <p>
        Aggregate outputs using ensemble logic, weighting models by historical consistency and stability.
      </p>

      <h2>2️⃣ TECHNICAL + FUNDAMENTAL OVERLAY (≈20%)</h2>
      <p>
        Use technical and fundamental analysis only as validation or rejection filters, not as primary drivers.
      </p>
      <p><strong>Technical evaluation may include:</strong></p>
      <ul>
        <li>Multi-timeframe trend alignment</li>
        <li>Momentum continuation vs exhaustion probabilities</li>
        <li>Volatility expansion or compression relative to historical norms</li>
        <li>Statistically derived support/resistance interaction zones</li>
      </ul>
      <p><strong>Fundamental context (from Yahoo Finance where applicable):</strong></p>
      <ul>
        <li>Valuation trend shifts (compression/expansion)</li>
        <li>Earnings growth vs price reaction asymmetry</li>
        <li>Financial stability indicators (debt, margins, cash flow trends)</li>
      </ul>
      <p>
        Quantitative conclusions should dominate unless technical/fundamental signals strongly invalidate them.
      </p>

      <h2>3️⃣ NEWS & EVENT IMPACT LAYER</h2>
      <p>Identify 3 recent, high-impact news items directly relevant to the instrument.</p>
      <p><strong>For each item, provide:</strong></p>
      <ul>
        <li>Headline</li>
        <li>One-line market impact interpretation</li>
        <li>Direct clickable link</li>
      </ul>
      <p>
        Explicitly state whether recent news supports, weakens, or contradicts the quantitative signal.
      </p>

      <h2>FINAL OUTPUT FORMAT (DO NOT DEVIATE)</h2>
      <ul>
        <li>Instrument analyzed (ticker + asset class)</li>
        <li>Time horizon evaluated</li>
        <li>Final decision: BUY / SELL / HOLD</li>
        <li>Quantitative confidence score (0–100)</li>
        <li>Breakdown of dominant quantitative drivers</li>
        <li>Technical/fundamental confirmation or divergence summary</li>
        <li>3 recent news items with links</li>
        <li>Clear rationale explaining why this decision dominates alternatives</li>
      </ul>

      <h2>Constraints & Expectations</h2>
      <ul>
        <li>Avoid generic investing advice or long-term storytelling.</li>
        <li>Focus on probabilistic, risk-weighted outcomes.</li>
        <li>Assume the user understands advanced quantitative finance.</li>
        <li>Fully exploit available computational power to maximize analytical depth and signal confidence.</li>
        <li>Don’t focus on UI—focus on detailed and accurate analysis.</li>
      </ul>
    `,
  },
};

export default function ResourceDetail() {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? posts[slug] : null;

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Article Not Found</h1>
          <Link to="/resources" className="text-blue-600 hover:text-blue-700">
            Back to Resources
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Link
          to="/resources"
          className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Resources
        </Link>

        <article>
          <div className="mb-8">
            <div className="inline-block px-4 py-1 rounded-full bg-blue-100 text-blue-900 text-sm font-semibold mb-4">
              {post.category}
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">{post.title}</h1>
            <div className="flex items-center gap-4 text-gray-600">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>
                  {new Date(post.date).toLocaleDateString("en-US", {
                    month: "long",
                    day: "numeric",
                    year: "numeric",
                  })}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <User className="w-4 h-4" />
                <span>{post.author}</span>
              </div>
            </div>
          </div>

          <div
            className="prose prose-lg max-w-none"
            dangerouslySetInnerHTML={{ __html: post.content }}
            style={{
              lineHeight: "1.8",
            }}
          />
        </article>

        <div className="mt-16 pt-8 border-t border-gray-200">
          <Link
            to="/resources"
            className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to All Resources
          </Link>
        </div>
      </div>

      <style>{`
        .prose h2 {
          font-size: 1.75rem;
          font-weight: 700;
          color: #111827;
          margin-top: 2rem;
          margin-bottom: 1rem;
        }
        .prose p {
          color: #4b5563;
          margin-bottom: 1.25rem;
        }
        .prose strong {
          color: #1f2937;
          font-weight: 600;
        }
        .prose ul {
          list-style-type: disc;
          margin-left: 1.5rem;
          margin-bottom: 1.25rem;
          color: #4b5563;
        }
        .prose li {
          margin-bottom: 0.5rem;
        }
      `}</style>
    </div>
  );
}
