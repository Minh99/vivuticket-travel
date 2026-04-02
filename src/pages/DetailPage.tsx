import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getTicketById } from '../data/mock';
import { motion } from 'motion/react';
import { Star, MapPin, Clock, Calendar, CheckCircle2, ShieldCheck, ArrowLeft, Share2, Heart } from 'lucide-react';

const DetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const ticket = getTicketById(id || '');

  if (!ticket) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Không tìm thấy vé</h2>
          <button onClick={() => navigate('/')} className="text-sky-600 font-bold">Quay lại trang chủ</button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-slate-50 min-h-screen pb-20">
      {/* Header Actions */}
      <div className="max-w-7xl mx-auto px-4 py-6 flex justify-between items-center">
        <button onClick={() => navigate(-1)} className="flex items-center gap-2 text-slate-600 hover:text-sky-600 font-medium transition-colors">
          <ArrowLeft size={20} /> Quay lại
        </button>
        <div className="flex gap-3">
          <button className="p-2.5 bg-white rounded-full border border-slate-200 text-slate-600 hover:text-rose-500 transition-colors">
            <Heart size={20} />
          </button>
          <button className="p-2.5 bg-white rounded-full border border-slate-200 text-slate-600 hover:text-sky-600 transition-colors">
            <Share2 size={20} />
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Image Gallery */}
            <div className="rounded-[40px] overflow-hidden shadow-2xl shadow-slate-200 h-[400px] md:h-[500px]">
              <img
                src={ticket.image}
                alt={ticket.title}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Info Section */}
            <div className="bg-white rounded-[40px] p-8 md:p-10 border border-slate-100 shadow-sm">
              <div className="flex flex-wrap items-center gap-3 mb-6">
                <span className="bg-sky-100 text-sky-600 px-4 py-1.5 rounded-full text-sm font-bold uppercase tracking-wider">
                  {ticket.type}
                </span>
                <div className="flex items-center gap-1 text-amber-400">
                  <Star size={18} className="fill-current" />
                  <span className="font-bold text-slate-900">{ticket.rating}</span>
                  <span className="text-slate-400 text-sm">({ticket.reviews} đánh giá)</span>
                </div>
              </div>

              <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">{ticket.title}</h1>
              
              <div className="flex items-center gap-2 text-slate-500 mb-8">
                <MapPin size={20} className="text-sky-500" />
                <span className="text-lg">{ticket.location}</span>
              </div>

              <div className="prose prose-slate max-w-none">
                <h3 className="text-xl font-bold mb-4">Mô tả chi tiết</h3>
                <p className="text-slate-600 leading-relaxed mb-8">
                  {ticket.description} Trải nghiệm tuyệt vời đang chờ đón bạn với dịch vụ chất lượng cao nhất. 
                  Chúng tôi cam kết mang lại sự hài lòng tuyệt đối cho khách hàng.
                </p>

                {ticket.type === 'tour' && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    <div className="bg-slate-50 p-6 rounded-3xl">
                      <h4 className="font-bold mb-4 flex items-center gap-2">
                        <CheckCircle2 size={18} className="text-emerald-500" />
                        Bao gồm
                      </h4>
                      <ul className="space-y-3 text-sm text-slate-600">
                        {(ticket as any).includes?.map((item: string, i: number) => (
                          <li key={i} className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="bg-slate-50 p-6 rounded-3xl">
                      <h4 className="font-bold mb-4 flex items-center gap-2">
                        <Calendar size={18} className="text-sky-500" />
                        Thông tin khác
                      </h4>
                      <div className="space-y-3 text-sm text-slate-600">
                        <p>Thời gian: {(ticket as any).durationDays} ngày</p>
                        <p>Khởi hành: {(ticket as any).startDate}</p>
                        <p>Nhóm tối đa: {(ticket as any).maxGroupSize} người</p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Booking Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-28 space-y-6">
              <div className="bg-white rounded-[40px] p-8 border border-slate-100 shadow-xl shadow-sky-100/50">
                <div className="mb-6">
                  <p className="text-slate-500 mb-1">Giá chỉ từ</p>
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl font-extrabold text-sky-600">{ticket.price.toLocaleString('vi-VN')}đ</span>
                    <span className="text-slate-400 text-sm">/ khách</span>
                  </div>
                </div>

                <div className="space-y-4 mb-8">
                  <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100">
                    <label className="text-xs font-bold text-slate-400 uppercase block mb-1">Ngày đi</label>
                    <div className="flex items-center justify-between">
                      <span className="font-bold">Chọn ngày</span>
                      <Calendar size={18} className="text-sky-500" />
                    </div>
                  </div>
                  <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100">
                    <label className="text-xs font-bold text-slate-400 uppercase block mb-1">Số lượng</label>
                    <div className="flex items-center justify-between">
                      <span className="font-bold">1 Người lớn</span>
                      <div className="flex gap-3">
                        <button className="w-6 h-6 rounded-full border border-slate-300 flex items-center justify-center">-</button>
                        <button className="w-6 h-6 rounded-full border border-slate-300 flex items-center justify-center">+</button>
                      </div>
                    </div>
                  </div>
                </div>

                <button 
                  onClick={() => navigate(`/booking/${ticket.id}`)}
                  className="w-full bg-sky-500 hover:bg-sky-600 text-white font-bold py-5 rounded-2xl shadow-lg shadow-sky-200 transition-all text-lg"
                >
                  Đặt vé ngay
                </button>

                <div className="mt-6 flex items-center justify-center gap-2 text-xs text-slate-400">
                  <ShieldCheck size={14} />
                  Thanh toán bảo mật & Xác nhận tức thì
                </div>
              </div>

              <div className="bg-emerald-50 p-6 rounded-3xl border border-emerald-100">
                <h4 className="text-emerald-700 font-bold mb-2">Ưu đãi đặc biệt</h4>
                <p className="text-emerald-600 text-sm">Nhập mã <span className="font-bold">VIVU2024</span> để được giảm thêm 10% cho lần đặt đầu tiên.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailPage;
