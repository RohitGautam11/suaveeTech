import { Metadata } from 'next'
import Link from 'next/link'
import { Hero } from '@/src/components/Hero'
import { CTASection } from '@/src/components/CTASection'
import { Calendar, User, ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Blog',
  description:
    'Read insights and best practices about SaaS development, CRM systems, automation, and enterprise software solutions.',
  keywords: ['blog', 'SaaS', 'software development', 'CRM', 'automation', 'tech insights'],
}

const blogPosts = [
  {
    id: 'saas-guide-2024',
    title: 'Complete Guide to Building Scalable SaaS Applications in 2024',
    excerpt:
      'Learn the key principles and best practices for architecting SaaS applications that can scale to millions of users.',
    content: `SaaS development has evolved significantly over the past decade. In this comprehensive guide, we'll explore...`,
    author: 'Alex Johnson',
    date: '2024-03-15',
    readTime: 8,
    category: 'SaaS Development',
    image: '📱',
  },
  {
    id: 'crm-revenue',
    title: 'How CRM Systems Drive Revenue Growth for B2B Companies',
    excerpt:
      'Discover how implementing a modern CRM system can directly impact your revenue and customer retention metrics.',
    content: `A well-implemented CRM system is more than just a database. It's a strategic tool that...`,
    author: 'Sarah Williams',
    date: '2024-03-10',
    readTime: 6,
    category: 'CRM',
    image: '💼',
  },
  {
    id: 'automation-trends',
    title: 'Top Automation Trends Transforming Business Operations in 2024',
    excerpt:
      'Explore the latest trends in business automation, from RPA to AI-powered workflows and their ROI impact.',
    content: `Automation is no longer a nice-to-have feature; it's a business imperative. Companies that...`,
    author: 'Mike Chen',
    date: '2024-03-05',
    readTime: 9,
    category: 'Automation',
    image: '🤖',
  },
  {
    id: 'tech-stack-2024',
    title: 'Choosing the Right Tech Stack for Your SaaS Product in 2024',
    excerpt:
      'A practical guide to evaluating and selecting the technology stack that fits your SaaS product requirements.',
    content: `The tech stack you choose will significantly impact your ability to scale and maintain...`,
    author: 'Alex Johnson',
    date: '2024-02-28',
    readTime: 10,
    category: 'Technology',
    image: '⚙️',
  },
  {
    id: 'api-integration',
    title: 'Best Practices for API Integration in Modern Applications',
    excerpt:
      'Learn how to properly design, implement, and maintain APIs that power modern connected applications.',
    content: `APIs are the backbone of modern software architecture. Whether you're building a public...`,
    author: 'Sarah Williams',
    date: '2024-02-22',
    readTime: 7,
    category: 'API Development',
    image: '🔗',
  },
  {
    id: 'devops-guide',
    title: 'DevOps Best Practices: CI/CD Pipelines for Enterprise Applications',
    excerpt:
      'A comprehensive guide to implementing CI/CD pipelines and automating your deployment processes.',
    content: `DevOps practices have revolutionized how we develop and deploy software. In this guide...`,
    author: 'Mike Chen',
    date: '2024-02-15',
    readTime: 8,
    category: 'DevOps',
    image: '🚀',
  },
]

export default function Blog() {
  return (
    <main className="pt-20">
      {/* Hero Section */}
      <Hero
        title="Our Blog"
        subtitle="Industry insights, best practices, and technical deep dives on software development, SaaS, and technology trends."
        showImage={false}
        backgroundGradient="gradient-primary"
      />

      {/* Featured Post */}
      <section className="section bg-light">
        <div className="container-tight">
          <div className="text-center mb-12">
            <h2 className="heading-lg mb-4">Latest Articles</h2>
          </div>

          {/* Featured Post Large */}
          <Link href={`/blog/${blogPosts[0].id}`}>
            <div className="card card-hover mb-12 overflow-hidden">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="h-64 md:h-auto bg-gradient-primary rounded-lg flex items-center justify-center text-7xl">
                  {blogPosts[0].image}
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs font-semibold text-white bg-primary px-3 py-1 rounded-full">
                      {blogPosts[0].category}
                    </span>
                    <span className="text-xs text-gray-600">Featured</span>
                  </div>
                  <h2 className="heading-lg mb-4">{blogPosts[0].title}</h2>
                  <p className="text-lg text-gray-700 mb-6">{blogPosts[0].excerpt}</p>
                  <div className="flex items-center gap-6 text-sm text-gray-600 mb-6">
                    <div className="flex items-center gap-2">
                      <User className="w-4 h-4" />
                      {blogPosts[0].author}
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      {new Date(blogPosts[0].date).toLocaleDateString()}
                    </div>
                    <div>{blogPosts[0].readTime} min read</div>
                  </div>
                  <div className="flex items-center gap-2 text-primary font-semibold group">
                    Read Article
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </div>
          </Link>

          {/* Blog Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.slice(1).map((post) => (
              <Link key={post.id} href={`/blog/${post.id}`}>
                <div className="card card-hover h-full flex flex-col">
                  <div className="h-40 bg-gradient-primary rounded-lg flex items-center justify-center text-5xl mb-4">
                    {post.image}
                  </div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs font-semibold text-white bg-primary px-3 py-1 rounded-full">
                      {post.category}
                    </span>
                  </div>
                  <h3 className="heading-sm mb-2">{post.title}</h3>
                  <p className="text-gray-600 text-sm mb-4 flex-grow">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center gap-4 text-xs text-gray-600 pt-4 border-t">
                    <div className="flex items-center gap-1">
                      <User className="w-3 h-3" />
                      {post.author}
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {new Date(post.date).toLocaleDateString()}
                    </div>
                    <div>{post.readTime} min</div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="section">
        <div className="container-tight">
          <div className="text-center mb-16">
            <h2 className="heading-lg mb-4">By Topic</h2>
          </div>

          <div className="grid md:grid-cols-4 gap-4">
            {['SaaS Development', 'CRM', 'Automation', 'Technology', 'API Development', 'DevOps'].map(
              (category) => (
                <Link key={category} href={`/blog?category=${category}`}>
                  <div className="card card-hover text-center cursor-pointer">
                    <h3 className="font-semibold text-primary hover:text-opacity-80 transition">
                      {category}
                    </h3>
                  </div>
                </Link>
              )
            )}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="section bg-gradient-primary text-white">
        <div className="container-tight text-center space-y-6">
          <h2 className="heading-lg">Subscribe to Our Newsletter</h2>
          <p className="text-lg text-gray-100 max-w-2xl mx-auto">
            Get the latest insights and best practices delivered to your inbox every week.
          </p>
          <form className="max-w-md mx-auto flex gap-2">
            <input
              type="email"
              placeholder="your@email.com"
              className="flex-grow px-4 py-3 rounded-lg text-dark bg-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-secondary"
              required
            />
            <button
              type="submit"
              className="btn border-2 border-white text-white hover:bg-white hover:text-primary transition font-semibold"
            >
              Subscribe
            </button>
          </form>
          <p className="text-sm text-gray-200">
            No spam, just valuable insights. Unsubscribe anytime.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="Have questions about our services?"
        subtitle="Our team is ready to help you find the right solution for your business needs."
        buttonText="Contact Us"
        buttonLink="/contact"
      />
    </main>
  )
}
