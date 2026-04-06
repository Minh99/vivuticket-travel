import React from 'react';
import Hero from '../components/Hero';
import TicketCard from '../components/TicketCard';
import { MOCK_TICKETS } from '../data/mock';
import { motion } from 'motion/react';
import { ArrowRight, Sparkles, ShieldCheck, Headphones } from 'lucide-react';

const HomePage = () => {
  return (
    <div className="pb-20">
      <Hero />

      {/* Features Section */}
      <section className="max-w-7xl mx-auto px-4 py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { icon: Sparkles, title: 'Ưu đãi tốt nhất', desc: 'Cam kết giá vé cạnh tranh nhất thị trường với nhiều khuyến mãi.', color: 'bg-amber-100 text-amber-600' },
            { icon: ShieldCheck, title: 'Thanh toán an toàn', desc: 'Hệ thống bảo mật đa tầng, hỗ trợ nhiều phương thức thanh toán.', color: 'bg-sky-100 text-sky-600' },
            { icon: Headphones, title: 'Hỗ trợ 24/7', desc: 'Đội ngũ tư vấn viên nhiệt tình, sẵn sàng giải đáp mọi thắc mắc.', color: 'bg-emerald-100 text-emerald-600' },
          ].map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="p-8 rounded-3xl bg-white border border-slate-100 hover:shadow-xl hover:shadow-slate-100 transition-all"
            >
              <div className={cn("w-14 h-14 rounded-2xl flex items-center justify-center mb-6", feature.color)}>
                <feature.icon size={28} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
              <p className="text-slate-500 leading-relaxed">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Popular Tickets */}
      <section className="max-w-7xl mx-auto px-4 py-10">
        <div className="flex items-end justify-between mb-10">
          <div>
            <h2 className="text-3xl font-bold text-slate-900 mb-2">Đề xuất phổ biến</h2>
            <p className="text-slate-500">Những lựa chọn hàng đầu được khách hàng yêu thích nhất</p>
          </div>
          <button className="hidden md:flex items-center gap-2 text-sky-600 font-bold hover:gap-3 transition-all">
            Xem tất cả <ArrowRight size={18} />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {MOCK_TICKETS.map((ticket, idx) => (
            <motion.div
              key={ticket.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
            >
              <TicketCard ticket={ticket} />
            </motion.div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="max-w-7xl mx-auto px-4 py-20">
        <div className="bg-slate-900 rounded-[40px] p-8 md:p-16 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-1/2 h-full opacity-20 pointer-events-none">
            <img
              src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&q=80&w=1000"
              alt="Travel"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="relative z-10 max-w-xl">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Sẵn sàng cho chuyến đi tiếp theo?
            </h2>
            <p className="text-slate-400 text-lg mb-10">
              Đăng ký nhận bản tin để không bỏ lỡ các chương trình khuyến mãi độc quyền và cảm hứng du lịch mỗi ngày.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Email của bạn"
                className="flex-1 bg-white/10 border border-white/20 rounded-2xl px-6 py-4 text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-sky-500"
              />
              <button className="bg-sky-500 hover:bg-sky-600 text-white font-bold px-8 py-4 rounded-2xl transition-all">
                Đăng ký ngay
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

import { cn } from '../lib/utils';
export default HomePage;
