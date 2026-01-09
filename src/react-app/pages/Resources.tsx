import { useState } from "react";
import { Link } from "react-router";
import { Search, Calendar, Tag } from "lucide-react";

// Mock blog posts
const allPosts = [
  {
    slug: "why-ai-assistants-fail",
    title: "Why Most AI Assistants Fail (And How to Avoid It)",
    excerpt:
      "Three common mistakes teams make when deploying conversational AI, and practical steps to ensure success.",
    category: "Best Practices",
    date: "2025-11-20",
    author: "Sarah Chen",
  },
  {
    slug: "lead-qualification-frameworks",
    title: "Lead Qualification Frameworks That Actually Work",
    excerpt:
      "How to structure conversations to identify high-quality leads without annoying visitors.",
    category: "Lead Generation",
    date: "2025-11-15",
    author: "Michael Rodriguez",
  },
  {
    slug: "escalation-strategies",
    title: "When to Escalate: A Practical Guide",
    excerpt:
      "Build clear escalation rules that balance automation with human touch.",
    category: "Customer Support",
    date: "2025-11-10",
    author: "Emma Thompson",
  },
  {
    slug: "measuring-assistant-roi",
    title: "Measuring Your Assistant's ROI",
    excerpt:
      "Track the metrics that matter: conversion rates, response time, escalation quality, and customer satisfaction.",
    category: "Analytics",
    date: "2025-11-05",
    author: "David Park",
  },
  {
    slug: "integration-best-practices",
    title: "CRM Integration Best Practices",
    excerpt:
      "Connect your assistant to your CRM without creating data chaos. Field mapping, deduplication, and sync strategies.",
    category: "Integrations",
    date: "2025-10-28",
    author: "Sarah Chen",
  },
  {
    slug: "after-hours-support",
    title: "The Business Case for After-Hours Support",
    excerpt:
      "Data on how 24/7 availability impacts lead capture, customer satisfaction, and revenue.",
    category: "Business",
    date: "2025-10-20",
    author: "Michael Rodriguez",
  },
];

export default function Resources() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const categories = ["All", "Best Practices", "Lead Generation", "Customer Support", "Analytics", "Integrations", "Business"];

  const filteredPosts = allPosts.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-50 via-purple-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Resources
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Practical guides and insights on conversational AI, lead generation, and customer support.
          </p>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-12 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="relative w-full md:w-96">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 rounded-xl border-2 border-gray-200 focus:border-blue-500 focus:outline-none"
              />
            </div>

            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-lg font-medium transition-all ${
                    selectedCategory === category
                      ? "bg-blue-600 text-white"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredPosts.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-600">No articles found matching your criteria.</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post) => (
                <Link
                  key={post.slug}
                  to={`/resources/${post.slug}`}
                  className="group p-6 rounded-2xl bg-white border-2 border-gray-200 hover:border-blue-300 transition-all hover:shadow-lg"
                >
                  <div className="flex items-center gap-2 text-sm text-gray-600 mb-3">
                    <Tag className="w-4 h-4" />
                    <span>{post.category}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <Calendar className="w-4 h-4" />
                    <span>{new Date(post.date).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}</span>
                    <span>•</span>
                    <span>{post.author}</span>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
