import React from 'react';
import { Link } from 'react-router-dom';
import { MOCK_BLOGS } from '../data/mock';
import { motion } from 'motion/react';
import { Calendar, User, ArrowRight } from 'lucide-react';

const BlogPage = () => {
  return (
    <div className="bg-slate-50 min-h-screen pb-20">
      <div className="bg-white border-b border-slate-100 pt-16 pb-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-extrabold text-slate-900 mb-4">Cẩm Nang Du Lịch</h1>
          <p className="text-slate-500 max-w-2xl mx-auto">
            Chia sẻ những kinh nghiệm, bí kíp và địa điểm du lịch hấp dẫn nhất để bạn có những chuyến đi trọn vẹn.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 mt-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {MOCK_BLOGS.map((blog, idx) => (
            <motion.div
              key={blog.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white rounded-[32px] overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl transition-all group"
            >
              <div className="relative h-60 overflow-hidden">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-sky-500 text-white px-4 py-1 rounded-full text-xs font-bold">
                    {blog.category}
                  </span>
                </div>
              </div>
              <div className="p-8">
                <div className="flex items-center gap-4 text-xs text-slate-400 mb-4">
                  <div className="flex items-center gap-1">
                    <Calendar size={14} />
                    {blog.date}
                  </div>
                  <div className="flex items-center gap-1">
                    <User size={14} />
                    {blog.author}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4 line-clamp-2 group-hover:text-sky-600 transition-colors">
                  {blog.title}
                </h3>
                <p className="text-slate-500 text-sm mb-6 line-clamp-3 leading-relaxed">
                  {blog.excerpt}
                </p>
                <Link
                  to={`/blog/${blog.id}`}
                  className="flex items-center gap-2 text-sky-600 font-bold hover:gap-3 transition-all"
                >
                  Đọc tiếp <ArrowRight size={18} />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
