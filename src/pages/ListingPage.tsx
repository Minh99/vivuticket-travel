import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { getTicketsByType } from '../data/mock';
import TicketCard from '../components/TicketCard';
import { motion } from 'motion/react';
import { Filter, ChevronDown, SlidersHorizontal } from 'lucide-react';

const ListingPage = () => {
  const { type } = useParams<{ type: string }>();
  const tickets = getTicketsByType(type || 'flight');

  const titleMap: Record<string, string> = {
    flight: 'Vé Máy Bay',
    tour: 'Tour Du Lịch',
    attraction: 'Vé Tham Quan'
  };

  return (
    <div className="bg-slate-50 min-h-screen pb-20">
      <div className="bg-white border-b border-slate-100 pt-10 pb-10">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-3xl font-bold text-slate-900 mb-2">{titleMap[type || 'flight']}</h1>
          <p className="text-slate-500">Tìm thấy {tickets.length} kết quả phù hợp cho bạn</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 mt-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          <aside className="w-full lg:w-64 space-y-6">
            <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm">
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-bold flex items-center gap-2">
                  <Filter size={18} className="text-sky-500" />
                  Bộ lọc
                </h3>
                <button className="text-xs text-sky-600 font-bold">Xóa tất cả</button>
              </div>

              <div className="space-y-6">
                <div>
                  <label className="text-sm font-bold text-slate-700 block mb-3">Khoảng giá</label>
                  <input type="range" className="w-full accent-sky-500" />
                  <div className="flex justify-between mt-2 text-xs text-slate-500">
                    <span>0đ</span>
                    <span>10tr+</span>
                  </div>
                </div>

                <div>
                  <label className="text-sm font-bold text-slate-700 block mb-3">Đánh giá</label>
                  {[5, 4, 3].map(star => (
                    <label key={star} className="flex items-center gap-2 mb-2 cursor-pointer">
                      <input type="checkbox" className="rounded text-sky-500 focus:ring-sky-500" />
                      <span className="text-sm text-slate-600">{star} sao trở lên</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </aside>

          {/* Results Area */}
          <div className="flex-1">
            <div className="flex items-center justify-between mb-6 bg-white p-4 rounded-2xl border border-slate-100 shadow-sm">
              <div className="flex items-center gap-4">
                <span className="text-sm text-slate-500">Sắp xếp theo:</span>
                <button className="text-sm font-bold flex items-center gap-1 text-sky-600">
                  Phổ biến nhất <ChevronDown size={16} />
                </button>
              </div>
              <button className="lg:hidden p-2 text-slate-600">
                <SlidersHorizontal size={20} />
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {tickets.map((ticket, idx) => (
                <motion.div
                  key={ticket.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: idx * 0.05 }}
                >
                  <Link to={`/detail/${ticket.id}`}>
                    <TicketCard ticket={ticket} />
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListingPage;
