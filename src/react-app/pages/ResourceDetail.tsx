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
