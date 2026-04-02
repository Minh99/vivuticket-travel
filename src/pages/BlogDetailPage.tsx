import React from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { getBlogById, MOCK_BLOGS } from '../data/mock';
import { motion } from 'motion/react';
import { Calendar, User, ArrowLeft, Share2, Facebook, Twitter, Link as LinkIcon } from 'lucide-react';

const BlogDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const blog = getBlogById(id || '');

  if (!blog) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Không tìm thấy bài viết</h2>
          <button onClick={() => navigate('/blogs')} className="text-sky-600 font-bold">Quay lại cẩm nang</button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen pb-20">
      {/* Hero Section */}
      <div className="relative h-[500px] w-full">
        <img
          src={blog.image}
          alt={blog.title}
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full p-8 md:p-16">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <span className="bg-sky-500 text-white px-4 py-1.5 rounded-full text-sm font-bold mb-6 inline-block">
                {blog.category}
              </span>
              <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
                {blog.title}
              </h1>
              <div className="flex items-center gap-6 text-white/80 text-sm">
                <div className="flex items-center gap-2">
                  <User size={18} className="text-sky-400" />
                  {blog.author}
                </div>
                <div className="flex items-center gap-2">
                  <Calendar size={18} className="text-sky-400" />
                  {blog.date}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 mt-12">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Main Content */}
          <div className="flex-1">
            <button
              onClick={() => navigate('/blogs')}
              className="flex items-center gap-2 text-slate-500 hover:text-sky-600 font-bold mb-8 transition-colors"
            >
              <ArrowLeft size={20} /> Quay lại danh sách
            </button>

            <div className="prose prose-lg prose-slate max-w-none">
              <p className="text-xl text-slate-600 font-medium leading-relaxed mb-8 italic border-l-4 border-sky-500 pl-6">
                {blog.excerpt}
              </p>
              <div className="text-slate-700 leading-loose space-y-6">
                <p>{blog.content}</p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <img 
                  src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&q=80&w=1000" 
                  alt="Travel content" 
                  className="rounded-[32px] w-full shadow-lg my-10"
                  referrerPolicy="no-referrer"
                />
                <p>
                  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
              </div>
            </div>

            {/* Social Share */}
            <div className="mt-12 pt-8 border-t border-slate-100 flex items-center justify-between">
              <span className="font-bold text-slate-900">Chia sẻ bài viết:</span>
              <div className="flex gap-3">
                <button className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-600 hover:bg-sky-500 hover:text-white transition-all">
                  <Facebook size={18} />
                </button>
                <button className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-600 hover:bg-sky-500 hover:text-white transition-all">
                  <Twitter size={18} />
                </button>
                <button className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-600 hover:bg-sky-500 hover:text-white transition-all">
                  <LinkIcon size={18} />
                </button>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <aside className="w-full lg:w-80">
            <div className="sticky top-28 space-y-8">
              <div className="bg-slate-50 p-8 rounded-[32px] border border-slate-100">
                <h3 className="font-bold text-lg mb-6">Bài viết liên quan</h3>
                <div className="space-y-6">
                  {MOCK_BLOGS.filter(b => b.id !== blog.id).map(related => (
                    <Link key={related.id} to={`/blog/${related.id}`} className="group block">
                      <div className="flex gap-4">
                        <img 
                          src={related.image} 
                          alt="" 
                          className="w-20 h-20 rounded-2xl object-cover"
                          referrerPolicy="no-referrer"
                        />
                        <div>
                          <h4 className="font-bold text-sm line-clamp-2 group-hover:text-sky-600 transition-colors">
                            {related.title}
                          </h4>
                          <span className="text-xs text-slate-400 mt-1 block">{related.date}</span>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              <div className="bg-sky-500 p-8 rounded-[32px] text-white">
                <h3 className="font-bold text-xl mb-4">Bạn chưa có kế hoạch?</h3>
                <p className="text-white/80 text-sm mb-6">Khám phá hàng ngàn tour du lịch hấp dẫn với giá cực ưu đãi.</p>
                <Link to="/tour" className="bg-white text-sky-600 font-bold px-6 py-3 rounded-xl inline-block text-sm">
                  Xem các tour ngay
                </Link>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default BlogDetailPage;
