import { BrowserRouter as Router, Routes, Route, useLocation, Link } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import ListingPage from './pages/ListingPage';
import DetailPage from './pages/DetailPage';
import BookingPage from './pages/BookingPage';
import BlogPage from './pages/BlogPage';
import BlogDetailPage from './pages/BlogDetailPage';
import { AuthProvider, useAuth } from './context/AuthContext';
import Onboarding from './components/Onboarding';
import AuthModal from './components/AuthModal';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function AppContent() {
  const { isLoggedIn, hasCompletedOnboarding, isAuthModalOpen, closeAuthModal } = useAuth();

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900">
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/blogs" element={<BlogPage />} />
          <Route path="/blog/:id" element={<BlogDetailPage />} />
          <Route path="/:type" element={<ListingPage />} />
          <Route path="/detail/:id" element={<DetailPage />} />
          <Route path="/booking/:id" element={<BookingPage />} />
        </Routes>
      </main>

      <AuthModal isOpen={isAuthModalOpen} onClose={closeAuthModal} />
      {isLoggedIn && !hasCompletedOnboarding && <Onboarding />}

      <footer className="bg-slate-50 border-t border-slate-100 py-20">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-sky-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">V</span>
              </div>
              <span className="text-xl font-bold text-slate-900">VivuTicket</span>
            </Link>
            <p className="text-slate-500 text-sm leading-relaxed">
              Nền tảng đặt vé du lịch hàng đầu Việt Nam. Chúng tôi mang đến những trải nghiệm tuyệt vời nhất cho mỗi chuyến đi của bạn.
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-6">Dịch vụ</h4>
            <ul className="space-y-4 text-sm text-slate-600">
              <li><Link to="/flight" className="hover:text-sky-500">Vé máy bay</Link></li>
              <li><Link to="/tour" className="hover:text-sky-500">Tour du lịch</Link></li>
              <li><Link to="/attraction" className="hover:text-sky-500">Vé tham quan</Link></li>
              <li><Link to="/blogs" className="hover:text-sky-500">Cẩm nang du lịch</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6">Hỗ trợ</h4>
            <ul className="space-y-4 text-sm text-slate-600">
              <li><Link to="/" className="hover:text-sky-500">Trung tâm trợ giúp</Link></li>
              <li><Link to="/" className="hover:text-sky-500">Chính sách bảo mật</Link></li>
              <li><Link to="/" className="hover:text-sky-500">Điều khoản sử dụng</Link></li>
              <li><Link to="/" className="hover:text-sky-500">Liên hệ</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6">Liên hệ</h4>
            <ul className="space-y-4 text-sm text-slate-600">
              <li>Email: support@vivuticket.vn</li>
              <li>Hotline: 1900 1234</li>
              <li>Địa chỉ: Hà Nội, Việt Nam</li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 mt-20 pt-8 border-t border-slate-200 text-center text-slate-400 text-xs">
          © 2024 VivuTicket. All rights reserved. Designed with ❤️ for travelers.
        </div>
      </footer>
    </div>
  );
}

export default function App() {
  return (
    <AuthProvider>
      <Router>
        <ScrollToTop />
        <AppContent />
      </Router>
    </AuthProvider>
  );
}
