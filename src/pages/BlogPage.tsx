import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Clock, ArrowRight, Newspaper } from 'lucide-react';
import { BLOG_POSTS } from '../data/foundationData';

export const BlogPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Journal & News | Isaac Joseph-Fagbemi Foundation";
  }, []);

  return (
    <main className="bg-linen-100">
      
      {/* Hero */}
      <section className="bg-navy-900 text-white py-20 lg:py-28 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-6">
            <span className="inline-flex items-center px-3.5 py-1.5 rounded-full bg-coral-500/10 border border-coral-500/30 text-coral-400 text-xs font-bold uppercase tracking-wider">
              PUBLICATIONS & INSIGHTS
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
              IJF Editorial Journal
            </h1>
            <p className="text-xl text-slate-300 leading-relaxed font-normal">
              Stories of youth transformation, educational leadership, digital empowerment, and grassroots community updates.
            </p>
          </div>
        </div>
      </section>

      {/* Main Blog Grid */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="flex items-center justify-between pb-6 border-b border-slate-200">
            <h2 className="text-2xl font-bold text-navy-900 flex items-center">
              <Newspaper className="w-5 h-5 text-coral-500 mr-2" />
              Latest Articles
            </h2>
            <span className="text-sm font-semibold text-slate-500">
              {BLOG_POSTS.length} Published Stories
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {BLOG_POSTS.map((post) => (
              <article
                key={post.id}
                className="bg-white rounded-3xl overflow-hidden border border-slate-200/80 shadow-sm hover:shadow-card-hover transition-all duration-300 flex flex-col group transform hover:-translate-y-1"
              >
                <div className="relative h-56 overflow-hidden bg-navy-900">
                  <img
                    src={post.image}
                    alt={post.imageAlt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 bg-navy-900/90 text-amber-400 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                    {post.category}
                  </div>
                </div>

                <div className="p-7 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-center space-x-4 text-xs text-slate-500 font-medium">
                      <span className="flex items-center">
                        <Calendar className="w-3.5 h-3.5 mr-1 text-coral-500" />
                        {post.date}
                      </span>
                      <span className="flex items-center">
                        <Clock className="w-3.5 h-3.5 mr-1 text-amber-500" />
                        {post.readTime}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-navy-900 group-hover:text-coral-500 transition-colors leading-snug">
                      {post.title}
                    </h3>

                    <p className="text-sm text-slate-600 line-clamp-3 leading-relaxed">
                      {post.excerpt}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                    <Link
                      to={`/blog/${post.slug}`}
                      className="inline-flex items-center text-sm font-bold text-navy-900 group-hover:text-coral-500 transition-colors"
                    >
                      <span>Read Article</span>
                      <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </Link>
                    <span className="text-xs text-slate-400 font-medium">{post.author.name}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>

        </div>
      </section>

    </main>
  );
};
