import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getTicketById } from '../data/mock';
import { motion, AnimatePresence } from 'motion/react';
import { CheckCircle2, CreditCard, User, ArrowRight, ArrowLeft, ShieldCheck } from 'lucide-react';

const BookingPage = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const ticket = getTicketById(id || '');
  const [step, setStep] = React.useState(1);

  if (!ticket) return null;

  const steps = [
    { id: 1, label: 'Thông tin', icon: User },
    { id: 2, label: 'Thanh toán', icon: CreditCard },
    { id: 3, label: 'Hoàn tất', icon: CheckCircle2 },
  ];

  return (
    <div className="bg-slate-50 min-h-screen pb-20 pt-10">
      <div className="max-w-4xl mx-auto px-4">
        {/* Stepper */}
        <div className="flex justify-between items-center mb-12 relative">
          <div className="absolute top-1/2 left-0 w-full h-0.5 bg-slate-200 -translate-y-1/2 z-0" />
          {steps.map((s) => (
            <div key={s.id} className="relative z-10 flex flex-col items-center gap-2">
              <div className={cn(
                "w-12 h-12 rounded-full flex items-center justify-center transition-all duration-500",
                step >= s.id ? "bg-sky-500 text-white shadow-lg shadow-sky-200" : "bg-white text-slate-400 border-2 border-slate-200"
              )}>
                <s.icon size={20} />
              </div>
              <span className={cn(
                "text-xs font-bold uppercase tracking-wider",
                step >= s.id ? "text-sky-600" : "text-slate-400"
              )}>{s.label}</span>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Form Content */}
          <div className="lg:col-span-2">
            <AnimatePresence mode="wait">
              {step === 1 && (
                <motion.div
                  key="step1"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="bg-white rounded-[40px] p-8 border border-slate-100 shadow-sm"
                >
                  <h2 className="text-2xl font-bold mb-8">Thông tin khách hàng</h2>
                  <div className="space-y-6">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-slate-700">Họ</label>
                        <input type="text" className="w-full px-4 py-3 bg-slate-50 rounded-xl border-none focus:ring-2 focus:ring-sky-500 outline-none" placeholder="VD: Nguyễn" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-slate-700">Tên</label>
                        <input type="text" className="w-full px-4 py-3 bg-slate-50 rounded-xl border-none focus:ring-2 focus:ring-sky-500 outline-none" placeholder="VD: Văn A" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-700">Email</label>
                      <input type="email" className="w-full px-4 py-3 bg-slate-50 rounded-xl border-none focus:ring-2 focus:ring-sky-500 outline-none" placeholder="email@example.com" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-700">Số điện thoại</label>
                      <input type="tel" className="w-full px-4 py-3 bg-slate-50 rounded-xl border-none focus:ring-2 focus:ring-sky-500 outline-none" placeholder="090xxxxxxx" />
                    </div>
                  </div>
                  <div className="mt-10 flex justify-end">
                    <button 
                      onClick={() => setStep(2)}
                      className="bg-sky-500 text-white px-8 py-4 rounded-2xl font-bold flex items-center gap-2 hover:bg-sky-600 transition-all"
                    >
                      Tiếp tục <ArrowRight size={18} />
                    </button>
                  </div>
                </motion.div>
              )}

              {step === 2 && (
                <motion.div
                  key="step2"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="bg-white rounded-[40px] p-8 border border-slate-100 shadow-sm"
                >
                  <h2 className="text-2xl font-bold mb-8">Phương thức thanh toán</h2>
                  <div className="space-y-4">
                    {[
                      { id: 'momo', name: 'Ví MoMo', icon: 'https://upload.wikimedia.org/wikipedia/vi/f/fe/MoMo_Logo.png' },
                      { id: 'vnpay', name: 'VNPay', icon: 'https://vnpay.vn/wp-content/uploads/2020/07/vnpay-logo.png' },
                      { id: 'card', name: 'Thẻ Quốc tế (Visa, Master)', icon: 'https://w7.pngwing.com/pngs/43/334/png-transparent-visa-mastercard-logo-visa-mastercard-credit-card-payment-visa-text-service-logo.png' },
                    ].map((method) => (
                      <label key={method.id} className="flex items-center justify-between p-5 bg-slate-50 rounded-2xl border-2 border-transparent hover:border-sky-500 cursor-pointer transition-all">
                        <div className="flex items-center gap-4">
                          <img src={method.icon} alt={method.name} className="w-10 h-10 object-contain rounded-lg bg-white p-1" referrerPolicy="no-referrer" />
                          <span className="font-bold text-slate-700">{method.name}</span>
                        </div>
                        <input type="radio" name="payment" className="w-5 h-5 text-sky-500" />
                      </label>
                    ))}
                  </div>
                  <div className="mt-10 flex justify-between">
                    <button 
                      onClick={() => setStep(1)}
                      className="text-slate-500 font-bold flex items-center gap-2"
                    >
                      <ArrowLeft size={18} /> Quay lại
                    </button>
                    <button 
                      onClick={() => setStep(3)}
                      className="bg-sky-500 text-white px-8 py-4 rounded-2xl font-bold flex items-center gap-2 hover:bg-sky-600 transition-all"
                    >
                      Xác nhận thanh toán <ArrowRight size={18} />
                    </button>
                  </div>
                </motion.div>
              )}

              {step === 3 && (
                <motion.div
                  key="step3"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-white rounded-[40px] p-12 border border-slate-100 shadow-sm text-center"
                >
                  <div className="w-20 h-20 bg-emerald-100 text-emerald-500 rounded-full flex items-center justify-center mx-auto mb-8">
                    <CheckCircle2 size={40} />
                  </div>
                  <h2 className="text-3xl font-bold text-slate-900 mb-4">Đặt vé thành công!</h2>
                  <p className="text-slate-500 mb-10">Mã đơn hàng của bạn là <span className="font-bold text-sky-600">#VIVU-98234</span>. Thông tin vé đã được gửi về email của bạn.</p>
                  <button 
                    onClick={() => navigate('/')}
                    className="bg-slate-900 text-white px-10 py-4 rounded-2xl font-bold hover:bg-sky-600 transition-all"
                  >
                    Về trang chủ
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Summary Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-[40px] p-6 border border-slate-100 shadow-sm sticky top-10">
              <h3 className="font-bold text-lg mb-6">Tóm tắt đơn hàng</h3>
              <div className="flex gap-4 mb-6">
                <img src={ticket.image} alt="" className="w-20 h-20 rounded-2xl object-cover" referrerPolicy="no-referrer" />
                <div>
                  <h4 className="font-bold text-sm line-clamp-2">{ticket.title}</h4>
                  <p className="text-xs text-slate-400 mt-1">{ticket.location}</p>
                </div>
              </div>
              <div className="space-y-4 pt-6 border-t border-slate-50">
                <div className="flex justify-between text-sm">
                  <span className="text-slate-500">Giá vé (x1)</span>
                  <span className="font-bold">{ticket.price.toLocaleString('vi-VN')}đ</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-slate-500">Phí dịch vụ</span>
                  <span className="font-bold">Miễn phí</span>
                </div>
                <div className="flex justify-between pt-4 border-t border-slate-50">
                  <span className="font-bold">Tổng cộng</span>
                  <span className="text-xl font-extrabold text-sky-600">{(ticket.price).toLocaleString('vi-VN')}đ</span>
                </div>
              </div>
              <div className="mt-8 p-4 bg-sky-50 rounded-2xl flex items-center gap-3 text-xs text-sky-700">
                <ShieldCheck size={18} />
                <span>Mọi giao dịch đều được bảo mật tuyệt đối</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

import { cn } from '../lib/utils';
export default BookingPage;
