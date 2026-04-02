import React from 'react';
import { Plane, Map, Ticket, Search, Calendar, MapPin, Users } from 'lucide-react';
import { motion } from 'motion/react';
import { cn } from '../lib/utils';

type TabType = 'flight' | 'tour' | 'attraction';

const Hero = () => {
  const [activeTab, setActiveTab] = React.useState<TabType>('flight');

  const tabs = [
    { id: 'flight', label: 'Vé máy bay', icon: Plane },
    { id: 'tour', label: 'Tour du lịch', icon: Map },
    { id: 'attraction', label: 'Vé tham quan', icon: Ticket },
  ];

  return (
    <div className="relative min-h-[600px] flex items-center justify-center overflow-hidden bg-slate-50">
      {/* Background Decorations */}
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
            rotate: [0, 10, 0]
          }}
          transition={{ duration: 20, repeat: Infinity }}
          className="absolute top-20 left-10 text-sky-500"
        >
          <Plane size={120} />
        </motion.div>
        <motion.div
          animate={{
            x: [0, -80, 0],
            y: [0, 60, 0],
            rotate: [0, -15, 0]
          }}
          transition={{ duration: 25, repeat: Infinity }}
          className="absolute bottom-20 right-10 text-emerald-500"
        >
          <Map size={100} />
        </motion.div>
      </div>

      <div className="relative z-10 max-w-5xl w-full px-4 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-6xl font-extrabold text-slate-900 mb-6"
        >
          Khám phá thế giới,<br />
          <span className="text-sky-500">Vivu</span> theo cách của bạn
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-lg text-slate-600 mb-12 max-w-2xl mx-auto"
        >
          Hệ thống đặt vé chuyên nghiệp, nhanh chóng và an toàn. Hàng ngàn ưu đãi hấp dẫn đang chờ đón bạn.
        </motion.p>

        {/* Search Box */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="bg-white rounded-3xl shadow-2xl shadow-sky-100 p-2 md:p-4"
        >
          {/* Tabs */}
          <div className="flex gap-2 mb-4 p-1 bg-slate-50 rounded-2xl w-fit mx-auto md:mx-0">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as TabType)}
                className={cn(
                  "flex items-center gap-2 px-6 py-2.5 rounded-xl font-semibold transition-all",
                  activeTab === tab.id
                    ? "bg-white text-sky-600 shadow-sm"
                    : "text-slate-500 hover:text-sky-500"
                )}
              >
                <tab.icon className="w-4 h-4" />
                {tab.label}
              </button>
            ))}
          </div>

          {/* Search Form */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 p-2">
            <div className="relative">
              <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
                <MapPin className="w-5 h-5" />
              </div>
              <input
                type="text"
                placeholder="Điểm đến của bạn?"
                className="w-full pl-12 pr-4 py-4 bg-slate-50 border-none rounded-2xl focus:ring-2 focus:ring-sky-500 transition-all outline-none"
              />
            </div>
            <div className="relative">
              <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
                <Calendar className="w-5 h-5" />
              </div>
              <input
                type="text"
                placeholder="Ngày đi"
                className="w-full pl-12 pr-4 py-4 bg-slate-50 border-none rounded-2xl focus:ring-2 focus:ring-sky-500 transition-all outline-none"
              />
            </div>
            <div className="relative">
              <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
                <Users className="w-5 h-5" />
              </div>
              <input
                type="text"
                placeholder="Hành khách"
                className="w-full pl-12 pr-4 py-4 bg-slate-50 border-none rounded-2xl focus:ring-2 focus:ring-sky-500 transition-all outline-none"
              />
            </div>
            <button className="bg-sky-500 hover:bg-sky-600 text-white font-bold py-4 rounded-2xl shadow-lg shadow-sky-200 transition-all flex items-center justify-center gap-2">
              <Search className="w-5 h-5" />
              Tìm kiếm ngay
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
