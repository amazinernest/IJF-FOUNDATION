import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock, User, Share2 } from 'lucide-react';
import { BLOG_POSTS } from '../data/foundationData';

export const BlogPostDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();

  const post = BLOG_POSTS.find((p) => p.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
    if (post) {
      document.title = `${post.title} | IJF Foundation Journal`;
    }
  }, [slug, post]);

  if (!post) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center p-8 text-center bg-linen-100">
        <h2 className="text-2xl font-bold text-navy-900 mb-4">Article Not Found</h2>
        <Link to="/blog" className="px-6 py-3 rounded-xl bg-coral-500 text-white font-bold text-sm">
          Return to Blog Journal
        </Link>
      </div>
    );
  }

  return (
    <main className="bg-linen-100 py-12 lg:py-20">
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Back Link */}
        <div>
          <Link
            to="/blog"
            className="inline-flex items-center text-xs font-bold text-navy-900 hover:text-coral-500 transition-colors uppercase tracking-wider"
          >
            <ArrowLeft className="w-4 h-4 mr-1.5" />
            Back to All Articles
          </Link>
        </div>

        {/* Header Metadata */}
        <div className="space-y-4">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-coral-50 border border-coral-200 text-coral-600 text-xs font-bold uppercase tracking-wider">
            {post.category}
          </div>
          
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy-900 tracking-tight leading-tight">
            {post.title}
          </h1>

          <div className="flex flex-wrap items-center gap-6 text-sm text-slate-600 pt-2 border-b border-slate-200 pb-6">
            <span className="flex items-center font-semibold text-navy-900">
              <User className="w-4 h-4 mr-2 text-coral-500" />
              {post.author.name} ({post.author.role})
            </span>
            <span className="flex items-center">
              <Calendar className="w-4 h-4 mr-2 text-amber-500" />
              {post.date}
            </span>
            <span className="flex items-center">
              <Clock className="w-4 h-4 mr-2 text-sky-500" />
              {post.readTime}
            </span>
          </div>
        </div>

        {/* Featured Image */}
        <div className="rounded-3xl overflow-hidden shadow-xl border-4 border-white">
          <img
            src={post.image}
            alt={post.imageAlt}
            className="w-full h-80 sm:h-[450px] object-cover"
          />
        </div>

        {/* Article Body */}
        <div className="bg-white p-8 sm:p-12 rounded-3xl border border-slate-200/80 shadow-sm space-y-6 text-slate-700 text-base sm:text-lg leading-relaxed font-normal">
          {post.content.split('\n\n').map((paragraph, index) => {
            if (paragraph.startsWith('### ')) {
              return (
                <h3 key={index} className="text-2xl font-bold text-navy-900 pt-4 pb-1">
                  {paragraph.replace('### ', '')}
                </h3>
              );
            }
            return <p key={index}>{paragraph}</p>;
          })}
        </div>

        {/* Article Footer & Share */}
        <div className="bg-linen-200/60 p-6 rounded-2xl border border-slate-300 flex items-center justify-between">
          <span className="text-xs font-bold text-navy-900 uppercase tracking-wider">
            Share this publication
          </span>
          <button
            onClick={() => {
              if (navigator.share) {
                navigator.share({ title: post.title, url: window.location.href });
              } else {
                navigator.clipboard.writeText(window.location.href);
                alert("Article URL copied to clipboard!");
              }
            }}
            className="inline-flex items-center px-4 py-2 rounded-xl bg-white border border-slate-300 text-navy-900 font-bold text-xs hover:bg-slate-50 transition-colors"
          >
            <Share2 className="w-4 h-4 mr-1.5 text-coral-500" />
            Share Article
          </button>
        </div>

      </article>
    </main>
  );
};
