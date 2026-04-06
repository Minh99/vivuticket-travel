import React from 'react';
import { X, Phone, User, Lock, ArrowRight, Eye, EyeOff } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useAuth } from '../context/AuthContext';
import { cn } from '../lib/utils';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const AuthModal: React.FC<AuthModalProps> = ({ isOpen, onClose }) => {
  const [mode, setMode] = React.useState<'login' | 'register'>('login');
  const [showPassword, setShowPassword] = React.useState(false);
  const { login, register } = useAuth();

  const [formData, setFormData] = React.useState({
    phone: '',
    fullName: '',
    password: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (mode === 'login') {
      login({ fullName: 'Khách hàng Vivu', phone: formData.phone });
    } else {
      register({ fullName: formData.fullName, phone: formData.phone });
    }
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[9999] overflow-y-auto">
      <div className="flex min-h-full items-center justify-center p-4 text-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm"
        />
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          className="relative w-full max-w-md bg-white rounded-[40px] shadow-2xl overflow-hidden text-left align-middle"
        >
          <button
            onClick={onClose}
            className="absolute top-6 right-6 p-2 text-slate-400 hover:text-slate-900 transition-colors z-10"
          >
            <X size={24} />
          </button>

          <div className="p-8 md:p-10">
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-sky-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-sky-200">
                <User className="text-white w-8 h-8" />
              </div>
              <h2 className="text-3xl font-bold text-slate-900 mb-2">
                {mode === 'login' ? 'Chào mừng trở lại!' : 'Tạo tài khoản mới'}
              </h2>
              <p className="text-slate-500">
                {mode === 'login' ? 'Vui lòng đăng nhập để tiếp tục vivu' : 'Bắt đầu hành trình khám phá cùng VivuTicket'}
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              {mode === 'register' && (
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 ml-1">Họ và tên</label>
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
                    <input
                      required
                      type="text"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      placeholder="Nguyễn Văn A"
                      className="w-full pl-12 pr-4 py-4 bg-slate-50 border-none rounded-2xl focus:ring-2 focus:ring-sky-500 outline-none transition-all"
                    />
                  </div>
                </div>
              )}

              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700 ml-1">Số điện thoại</label>
                <div className="relative">
                  <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
                  <input
                    required
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="090xxxxxxx"
                    className="w-full pl-12 pr-4 py-4 bg-slate-50 border-none rounded-2xl focus:ring-2 focus:ring-sky-500 outline-none transition-all"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700 ml-1">Mật khẩu</label>
                <div className="relative">
                  <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
                  <input
                    required
                    type={showPassword ? 'text' : 'password'}
                    value={formData.password}
                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                    placeholder="••••••••"
                    className="w-full pl-12 pr-12 py-4 bg-slate-50 border-none rounded-2xl focus:ring-2 focus:ring-sky-500 outline-none transition-all"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-sky-500 transition-colors"
                  >
                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-sky-500 hover:bg-sky-600 text-white font-bold py-5 rounded-2xl shadow-lg shadow-sky-200 transition-all flex items-center justify-center gap-2 mt-4"
              >
                {mode === 'login' ? 'Đăng nhập' : 'Đăng ký ngay'}
                <ArrowRight size={20} />
              </button>
            </form>

            <div className="mt-8 text-center">
              <p className="text-slate-500 text-sm">
                {mode === 'login' ? 'Chưa có tài khoản?' : 'Đã có tài khoản?'}
                <button
                  onClick={() => setMode(mode === 'login' ? 'register' : 'login')}
                  className="ml-2 text-sky-600 font-bold hover:underline"
                >
                  {mode === 'login' ? 'Đăng ký ngay' : 'Đăng nhập'}
                </button>
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AuthModal;
