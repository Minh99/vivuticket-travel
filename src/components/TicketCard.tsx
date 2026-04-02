import React from 'react';
import { Star, MapPin, Clock, Users } from 'lucide-react';
import { Ticket } from '../types/ticket';
import { motion } from 'motion/react';

interface TicketCardProps {
  ticket: Ticket;
}

const TicketCard: React.FC<TicketCardProps> = ({ ticket }) => {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      className="bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-sky-50 transition-all group"
    >
      <div className="relative h-52 overflow-hidden">
        <img
          src={ticket.image}
          alt={ticket.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          referrerPolicy="no-referrer"
        />
        <div className="absolute top-4 left-4">
          <span className="bg-white/90 backdrop-blur-sm text-sky-600 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
            {ticket.type === 'flight' ? 'Máy bay' : ticket.type === 'tour' ? 'Tour' : 'Tham quan'}
          </span>
        </div>
      </div>

      <div className="p-6">
        <div className="flex items-center gap-1 text-amber-400 mb-2">
          <Star className="w-4 h-4 fill-current" />
          <span className="text-sm font-bold text-slate-700">{ticket.rating}</span>
          <span className="text-xs text-slate-400">({ticket.reviews} đánh giá)</span>
        </div>

        <h3 className="text-lg font-bold text-slate-900 mb-2 line-clamp-1 group-hover:text-sky-600 transition-colors">
          {ticket.title}
        </h3>

        <div className="flex items-center gap-2 text-slate-500 text-sm mb-4">
          <MapPin className="w-4 h-4" />
          {ticket.location}
        </div>

        {ticket.type === 'flight' && (
          <div className="flex items-center justify-between p-3 bg-slate-50 rounded-2xl mb-4">
            <div className="text-center">
              <p className="text-xs text-slate-400 uppercase font-bold">Đi</p>
              <p className="font-bold text-slate-700">{ticket.from}</p>
            </div>
            <div className="flex-1 px-4 flex flex-col items-center">
              <div className="w-full h-px bg-slate-200 relative">
                <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 bg-white p-0.5 rounded-full border border-slate-200">
                  <Clock className="w-2.5 h-2.5 text-slate-400" />
                </div>
              </div>
              <p className="text-[10px] text-slate-400 mt-1">{ticket.duration}</p>
            </div>
            <div className="text-center">
              <p className="text-xs text-slate-400 uppercase font-bold">Đến</p>
              <p className="font-bold text-slate-700">{ticket.to}</p>
            </div>
          </div>
        )}

        {ticket.type === 'tour' && (
          <div className="flex items-center gap-4 mb-4 text-sm text-slate-600">
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4 text-sky-500" />
              {ticket.durationDays} ngày
            </div>
            <div className="flex items-center gap-1">
              <Users className="w-4 h-4 text-sky-500" />
              Tối đa {ticket.maxGroupSize}
            </div>
          </div>
        )}

        <div className="flex items-center justify-between pt-4 border-t border-slate-50">
          <div>
            <p className="text-xs text-slate-400">Giá từ</p>
            <p className="text-xl font-extrabold text-sky-600">
              {ticket.price.toLocaleString('vi-VN')}đ
            </p>
          </div>
          <button className="bg-slate-900 text-white px-5 py-2 rounded-xl font-bold hover:bg-sky-600 transition-colors">
            Đặt ngay
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default TicketCard;
