import React from 'react';
import { motion } from 'motion/react';
import { Plane, Map, Ticket, Heart, Camera, Utensils, CheckCircle2 } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { cn } from '../lib/utils';

const Onboarding = () => {
  const [selected, setSelected] = React.useState<string[]>([]);
  const { updateInterests } = useAuth();

  const interests = [
    { id: 'beach', label: 'Biển đảo', icon: Plane },
    { id: 'mountain', label: 'Leo núi', icon: Map },
    { id: 'culture', label: 'Văn hóa', icon: Ticket },
    { id: 'food', label: 'Ẩm thực', icon: Utensils },
    { id: 'photo', label: 'Chụp ảnh', icon: Camera },
    { id: 'relax', label: 'Nghỉ dưỡng', icon: Heart },
  ];

  const toggleInterest = (id: string) => {
    setSelected(prev => 
      prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]
    );
  };

  const handleFinish = () => {
    updateInterests(selected);
  };

  return (
    <div className="fixed inset-0 z-[110] bg-white overflow-y-auto">
      <div className="min-h-full flex items-center justify-center p-4">
        <div className="max-w-2xl w-full text-center py-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-12"
          >
            <h2 className="text-4xl font-extrabold text-slate-900 mb-4">Sở thích của bạn là gì?</h2>
            <p className="text-slate-500 text-lg">Chọn ít nhất 3 sở thích để chúng tôi gợi ý những chuyến đi phù hợp nhất cho bạn nhé!</p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-12">
            {interests.map((item, idx) => (
              <motion.button
                key={item.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: idx * 0.05 }}
                onClick={() => toggleInterest(item.id)}
                className={cn(
                  "p-8 rounded-[32px] border-2 transition-all flex flex-col items-center gap-4 group relative overflow-hidden",
                  selected.includes(item.id) 
                    ? "border-sky-500 bg-sky-50 shadow-xl shadow-sky-100" 
                    : "border-slate-100 bg-white hover:border-sky-200"
                )}
              >
                <div className={cn(
                  "w-14 h-14 rounded-2xl flex items-center justify-center transition-colors",
                  selected.includes(item.id) ? "bg-sky-500 text-white" : "bg-slate-50 text-slate-400 group-hover:text-sky-500"
                )}>
                  <item.icon size={28} />
                </div>
                <span className={cn(
                  "font-bold",
                  selected.includes(item.id) ? "text-sky-700" : "text-slate-600"
                )}>{item.label}</span>
                
                {selected.includes(item.id) && (
                  <div className="absolute top-3 right-3 text-sky-500">
                    <CheckCircle2 size={20} />
                  </div>
                )}
              </motion.button>
            ))}
          </div>

          <button
            disabled={selected.length < 3}
            onClick={handleFinish}
            className={cn(
              "px-12 py-5 rounded-2xl font-bold text-lg transition-all shadow-lg",
              selected.length >= 3 
                ? "bg-sky-500 text-white shadow-sky-200 hover:bg-sky-600" 
                : "bg-slate-100 text-slate-400 cursor-not-allowed"
            )}
          >
            Hoàn tất lựa chọn
          </button>
        </div>
      </div>
    </div>
  );
};

export default Onboarding;
