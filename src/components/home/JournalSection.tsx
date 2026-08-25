import React from 'react';
import { Link } from 'react-router-dom';
import { Newspaper, Calendar, Clock, ArrowRight } from 'lucide-react';
import { BLOG_POSTS } from '../../data/foundationData';

export const JournalSection: React.FC = () => {
  return (
    <section className="py-20 lg:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-widest text-coral-600 bg-coral-50 px-3.5 py-1.5 rounded-full border border-coral-200">
              <Newspaper className="w-3.5 h-3.5" />
              <span>FOUNDATION NEWS & JOURNAL</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy-900 tracking-tight">
              Latest Insights & Stories
            </h2>
            <p className="text-base sm:text-lg text-slate-600">
              Discover stories of impact, leadership insights, and educational developments from across our community initiatives.
            </p>
          </div>

          <Link
            to="/blog"
            className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl border-2 border-navy-800 text-navy-900 hover:bg-navy-900 hover:text-white font-bold text-sm transition-all group flex-shrink-0"
          >
            <span>Explore All Journal Articles</span>
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Blog Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {BLOG_POSTS.map((post) => (
            <article
              key={post.id}
              className="bg-linen-100/60 rounded-3xl overflow-hidden border border-slate-200/80 shadow-sm hover:shadow-card-hover transition-all duration-300 flex flex-col group transform hover:-translate-y-1"
            >
              <div className="relative h-52 overflow-hidden bg-navy-900">
                <img
                  src={post.image}
                  alt={post.imageAlt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute top-4 left-4 bg-navy-900/90 text-amber-400 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                  {post.category}
                </div>
              </div>

              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-4">
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

                  <h3 className="text-xl font-bold text-navy-900 group-hover:text-coral-500 transition-colors leading-snug line-clamp-2">
                    {post.title}
                  </h3>

                  <p className="text-sm text-slate-600 line-clamp-3 leading-relaxed">
                    {post.excerpt}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-200/60 flex items-center justify-between">
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
  );
};
