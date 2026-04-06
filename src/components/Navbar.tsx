import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Plane, Map, Ticket, User, Menu, X, LogOut, Settings, Heart } from 'lucide-react';
import { cn } from '../lib/utils';
import { motion, AnimatePresence } from 'motion/react';
import { useAuth } from '../context/AuthContext';
import AuthModal from './AuthModal';

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [isProfileOpen, setIsProfileOpen] = React.useState(false);
  const location = useLocation();
  const { isLoggedIn, user, logout, openAuthModal } = useAuth();

  const navItems = [
    { name: 'Vé Máy Bay', path: '/flight', icon: Plane },
    { name: 'Tour Du Lịch', path: '/tour', icon: Map },
    { name: 'Vé Tham Quan', path: '/attraction', icon: Ticket },
    { name: 'Cẩm Nang', path: '/blogs', icon: Map },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-sky-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex items-center">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-10 h-10 bg-sky-500 rounded-xl flex items-center justify-center shadow-lg shadow-sky-200">
                <Plane className="text-white w-6 h-6 transform -rotate-45" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-sky-600 to-emerald-500 bg-clip-text text-transparent">
                VivuTicket
              </span>
            </Link>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={cn(
                  "flex items-center gap-2 text-sm font-medium transition-colors hover:text-sky-500",
                  location.pathname === item.path ? "text-sky-600" : "text-slate-600"
                )}
              >
                <item.icon className="w-4 h-4" />
                {item.name}
              </Link>
            ))}
            
            {isLoggedIn ? (
              <div className="relative">
                <button 
                  onClick={() => setIsProfileOpen(!isProfileOpen)}
                  className="flex items-center gap-3 bg-slate-50 border border-slate-100 pl-2 pr-4 py-1.5 rounded-full hover:bg-sky-50 transition-all"
                >
                  <div className="w-8 h-8 bg-sky-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                    {user?.fullName.charAt(0)}
                  </div>
                  <span className="text-sm font-bold text-slate-700">{user?.fullName}</span>
                </button>

                <AnimatePresence>
                  {isProfileOpen && (
                    <>
                      <div className="fixed inset-0 z-0" onClick={() => setIsProfileOpen(false)} />
                      <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        className="absolute right-0 mt-2 w-56 bg-white rounded-3xl shadow-xl border border-slate-100 p-2 z-10"
                      >
                        <div className="p-4 border-b border-slate-50 mb-2">
                          <p className="text-xs text-slate-400 font-bold uppercase mb-1">Số điện thoại</p>
                          <p className="text-sm font-bold text-slate-700">{user?.phone}</p>
                        </div>
                        <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-slate-600 hover:bg-sky-50 hover:text-sky-600 transition-colors text-sm font-medium">
                          <User size={18} /> Hồ sơ của tôi
                        </button>
                        <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-slate-600 hover:bg-sky-50 hover:text-sky-600 transition-colors text-sm font-medium">
                          <Heart size={18} /> Đã lưu
                        </button>
                        <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-slate-600 hover:bg-sky-50 hover:text-sky-600 transition-colors text-sm font-medium">
                          <Settings size={18} /> Cài đặt
                        </button>
                        <button 
                          onClick={() => { logout(); setIsProfileOpen(false); }}
                          className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-rose-500 hover:bg-rose-50 transition-colors text-sm font-bold mt-2"
                        >
                          <LogOut size={18} /> Đăng xuất
                        </button>
                      </motion.div>
                    </>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <button 
                onClick={openAuthModal}
                className="bg-sky-500 text-white px-6 py-2.5 rounded-full font-semibold shadow-lg shadow-sky-100 hover:bg-sky-600 transition-all flex items-center gap-2"
              >
                <User className="w-4 h-4" />
                Đăng nhập
              </button>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-600 hover:text-sky-500 p-2"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-sky-100 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-2">
              {isLoggedIn && (
                <div className="flex items-center gap-3 p-4 bg-sky-50 rounded-2xl mb-4">
                  <div className="w-12 h-12 bg-sky-500 rounded-full flex items-center justify-center text-white font-bold">
                    {user?.fullName.charAt(0)}
                  </div>
                  <div>
                    <p className="font-bold text-slate-900">{user?.fullName}</p>
                    <p className="text-xs text-slate-500">{user?.phone}</p>
                  </div>
                </div>
              )}
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className="flex items-center gap-3 px-4 py-3 rounded-xl text-slate-600 hover:bg-sky-50 hover:text-sky-600 transition-colors"
                >
                  <item.icon className="w-5 h-5" />
                  {item.name}
                </Link>
              ))}
              <div className="pt-4 px-4">
                {isLoggedIn ? (
                  <button 
                    onClick={() => { logout(); setIsOpen(false); }}
                    className="w-full bg-rose-50 text-rose-500 py-3 rounded-xl font-bold flex items-center justify-center gap-2"
                  >
                    <LogOut size={18} /> Đăng xuất
                  </button>
                ) : (
                  <button 
                    onClick={() => { openAuthModal(); setIsOpen(false); }}
                    className="w-full bg-sky-500 text-white py-3 rounded-xl font-semibold"
                  >
                    Đăng nhập
                  </button>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
