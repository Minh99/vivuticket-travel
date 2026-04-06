import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { motion } from 'motion/react';
import {
  ArrowLeft,
  Calendar,
  CheckCircle2,
  Clock,
  Heart,
  Luggage,
  MapPin,
  ShieldCheck,
  Share2,
  Star,
  Users
} from 'lucide-react';
import { getTicketDetailById } from '../data/mock';
import { AttractionDetail, FlightDetail, TicketDetail, TourDetail } from '../types/ticket';

const FALLBACK_IMAGE = 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&q=80&w=1200';

const typeLabel: Record<TicketDetail['type'], string> = {
  flight: 'Vé máy bay',
  tour: 'Tour du lịch',
  attraction: 'Vé tham quan'
};

const formatPrice = (value: number) => value.toLocaleString('vi-VN');

const FlightSection = ({ detail }: { detail: FlightDetail }) => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    <div className="bg-slate-50 p-6 rounded-3xl">
      <h4 className="font-bold mb-4">Thông tin chuyến bay</h4>
      <div className="space-y-3 text-sm text-slate-600">
        <div className="flex justify-between gap-4">
          <span>Hãng bay</span>
          <span className="font-semibold text-slate-800">{detail.airline.name}</span>
        </div>
        <div className="flex justify-between gap-4">
          <span>Hành trình</span>
          <span className="font-semibold text-slate-800">{detail.route.from} → {detail.route.to}</span>
        </div>
        <div className="flex justify-between gap-4">
          <span>Giờ đi - đến</span>
          <span className="font-semibold text-slate-800">
            {detail.schedule.departureTime} - {detail.schedule.arrivalTime}
          </span>
        </div>
        <div className="flex justify-between gap-4">
          <span>Hạng vé</span>
          <span className="font-semibold text-slate-800">{detail.cabinClass}</span>
        </div>
      </div>
    </div>

    <div className="bg-slate-50 p-6 rounded-3xl">
      <h4 className="font-bold mb-4">Hành lý & tiện ích</h4>
      <div className="space-y-3 text-sm text-slate-600">
        <div className="flex items-center gap-2">
          <Luggage size={16} className="text-sky-500" />
          <span>Xách tay: {detail.baggage.carryOn}</span>
        </div>
        <div className="flex items-center gap-2">
          <Luggage size={16} className="text-sky-500" />
          <span>Ký gửi: {detail.baggage.checked}</span>
        </div>
        <ul className="pt-2 space-y-2">
          {detail.amenities.map((item) => (
            <li key={item} className="flex items-center gap-2">
              <CheckCircle2 size={14} className="text-emerald-500" />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  </div>
);

const TourSection = ({ detail }: { detail: TourDetail }) => (
  <div className="space-y-6">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="bg-slate-50 p-6 rounded-3xl">
        <h4 className="font-bold mb-4">Tour bao gồm</h4>
        <ul className="space-y-2 text-sm text-slate-600">
          {detail.includes.map((item) => (
            <li key={item} className="flex items-center gap-2">
              <CheckCircle2 size={14} className="text-emerald-500" />
              {item}
            </li>
          ))}
        </ul>
      </div>
      <div className="bg-slate-50 p-6 rounded-3xl">
        <h4 className="font-bold mb-4">Không bao gồm</h4>
        <ul className="space-y-2 text-sm text-slate-600">
          {detail.excludes.map((item) => (
            <li key={item} className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-rose-500" />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>

    <div className="bg-slate-50 p-6 rounded-3xl">
      <h4 className="font-bold mb-5">Lịch trình</h4>
      <div className="space-y-5">
        {detail.itinerary.map((item) => (
          <div key={item.day} className="border-l-2 border-sky-200 pl-4">
            <p className="text-sky-600 font-bold text-sm mb-1">Ngày {item.day}</p>
            <p className="font-semibold text-slate-900 mb-2">{item.title}</p>
            <ul className="space-y-1 text-sm text-slate-600">
              {item.activities.map((activity) => (
                <li key={activity}>• {activity}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const AttractionSection = ({ detail }: { detail: AttractionDetail }) => (
  <div className="space-y-6">
    <div className="bg-slate-50 p-6 rounded-3xl">
      <h4 className="font-bold mb-4">Thông tin sử dụng</h4>
      <div className="space-y-3 text-sm text-slate-600">
        <p><span className="font-semibold text-slate-800">Danh mục:</span> {detail.category}</p>
        <p><span className="font-semibold text-slate-800">Giờ mở cửa:</span> {detail.openingHours}</p>
        <p><span className="font-semibold text-slate-800">Hạn sử dụng:</span> {detail.validUntil}</p>
        <p><span className="font-semibold text-slate-800">Điểm gặp:</span> {detail.meetingPoint}</p>
      </div>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="bg-slate-50 p-6 rounded-3xl">
        <h4 className="font-bold mb-4">Điểm nổi bật</h4>
        <ul className="space-y-2 text-sm text-slate-600">
          {detail.highlights.map((item) => (
            <li key={item}>• {item}</li>
          ))}
        </ul>
      </div>

      <div className="bg-slate-50 p-6 rounded-3xl">
        <h4 className="font-bold mb-4">Hướng dẫn sử dụng vé</h4>
        <ol className="space-y-2 text-sm text-slate-600 list-decimal list-inside">
          {detail.usageGuide.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ol>
      </div>
    </div>
  </div>
);

const DetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const detail = getTicketDetailById(id || '');

  if (!detail) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Không tìm thấy thông tin chi tiết</h2>
          <button onClick={() => navigate('/')} className="text-sky-600 font-bold">Quay lại trang chủ</button>
        </div>
      </div>
    );
  }

  const priceUnitLabel = detail.price.unit === 'person' ? '/ khách' : '/ vé';
  const sideMeta = detail.type === 'flight'
    ? [
        { label: 'Hành trình', value: `${detail.route.from} → ${detail.route.to}` },
        { label: 'Khởi hành', value: `${detail.schedule.departureDate} ${detail.schedule.departureTime}` },
        { label: 'Thời lượng', value: detail.schedule.duration }
      ]
    : detail.type === 'tour'
      ? [
          { label: 'Số ngày', value: `${detail.durationDays} ngày` },
          { label: 'Khởi hành', value: detail.startDate },
          { label: 'Nhóm tối đa', value: `${detail.maxGroupSize} người` }
        ]
      : [
          { label: 'Danh mục', value: detail.category },
          { label: 'Giờ mở cửa', value: detail.openingHours },
          { label: 'Hiệu lực', value: detail.validUntil }
        ];

  return (
    <div className="bg-slate-50 min-h-screen pb-20">
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
          <div className="lg:col-span-2 space-y-8">
            <div className="rounded-[40px] overflow-hidden shadow-2xl shadow-slate-200">
              <img
                src={detail.media.cover}
                alt={detail.title}
                className="w-full h-[320px] md:h-[500px] object-cover"
                referrerPolicy="no-referrer"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = FALLBACK_IMAGE;
                }}
              />
            </div>

            <div className="grid grid-cols-3 gap-4">
              {detail.media.gallery.slice(0, 3).map((image) => (
                <img
                  key={image}
                  src={image}
                  alt={detail.title}
                  className="h-24 md:h-32 w-full rounded-2xl object-cover border border-slate-100"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = FALLBACK_IMAGE;
                  }}
                />
              ))}
            </div>

            <div className="bg-white rounded-[40px] p-8 md:p-10 border border-slate-100 shadow-sm">
              <div className="flex flex-wrap items-center gap-3 mb-6">
                <span className="bg-sky-100 text-sky-600 px-4 py-1.5 rounded-full text-sm font-bold uppercase tracking-wider">
                  {typeLabel[detail.type]}
                </span>
                <div className="flex items-center gap-1 text-amber-400">
                  <Star size={18} className="fill-current" />
                  <span className="font-bold text-slate-900">{detail.rating}</span>
                  <span className="text-slate-400 text-sm">({detail.reviews} đánh giá)</span>
                </div>
              </div>

              <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">{detail.title}</h1>
              <div className="flex items-center gap-2 text-slate-500 mb-4">
                <MapPin size={20} className="text-sky-500" />
                <span className="text-lg">{detail.location}</span>
              </div>

              <div className="flex flex-wrap gap-2 mb-8">
                {detail.badges.map((badge) => (
                  <span key={badge} className="text-xs font-bold text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full">
                    {badge}
                  </span>
                ))}
              </div>

              <div className="prose prose-slate max-w-none mb-8">
                <h3 className="text-xl font-bold mb-3">Mô tả chi tiết</h3>
                <p className="text-slate-600 leading-relaxed">{detail.description}</p>
              </div>

              {detail.type === 'flight' && <FlightSection detail={detail} />}
              {detail.type === 'tour' && <TourSection detail={detail} />}
              {detail.type === 'attraction' && <AttractionSection detail={detail} />}

              <div className="mt-8 bg-slate-50 p-6 rounded-3xl">
                <h4 className="font-bold mb-4">Chính sách</h4>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li><span className="font-semibold text-slate-800">Hủy:</span> {detail.policy.cancellation}</li>
                  <li><span className="font-semibold text-slate-800">Hoàn tiền:</span> {detail.policy.refund}</li>
                  <li><span className="font-semibold text-slate-800">Đổi lịch:</span> {detail.policy.reschedule}</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="sticky top-28 space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white rounded-[40px] p-8 border border-slate-100 shadow-xl shadow-sky-100/50"
              >
                <div className="mb-6">
                  <p className="text-slate-500 mb-1">Giá chỉ từ</p>
                  <div className="flex items-end gap-2">
                    <span className="text-4xl font-extrabold text-sky-600">{formatPrice(detail.price.amount)}đ</span>
                    <span className="text-slate-400 text-sm mb-1">{priceUnitLabel}</span>
                  </div>
                  {detail.price.originalAmount && (
                    <p className="text-sm text-slate-400 line-through mt-1">
                      {formatPrice(detail.price.originalAmount)}đ
                    </p>
                  )}
                </div>

                <div className="space-y-3 mb-8">
                  {sideMeta.map((item) => (
                    <div key={item.label} className="p-4 bg-slate-50 rounded-2xl border border-slate-100">
                      <p className="text-xs text-slate-400 uppercase tracking-wider mb-1">{item.label}</p>
                      <p className="font-bold text-slate-800">{item.value}</p>
                    </div>
                  ))}
                </div>

                <button
                  onClick={() => navigate(`/booking/${detail.id}`)}
                  className="w-full bg-sky-500 hover:bg-sky-600 text-white font-bold py-5 rounded-2xl shadow-lg shadow-sky-200 transition-all text-lg"
                >
                  Đặt ngay
                </button>

                <div className="mt-6 flex items-center justify-center gap-2 text-xs text-slate-400">
                  <ShieldCheck size={14} />
                  Thanh toán bảo mật & Xác nhận tức thì
                </div>
              </motion.div>

              <div className="bg-emerald-50 p-6 rounded-3xl border border-emerald-100">
                <h4 className="text-emerald-700 font-bold mb-2">Ưu đãi đặc biệt</h4>
                <p className="text-emerald-600 text-sm">
                  Nhập mã <span className="font-bold">VIVU2024</span> để được giảm thêm 10% cho lần đặt đầu tiên.
                </p>
              </div>

              <div className="bg-white p-6 rounded-3xl border border-slate-100">
                <h4 className="font-bold mb-4">Thông tin nhanh</h4>
                <div className="space-y-2 text-sm text-slate-600">
                  <div className="flex items-center gap-2">
                    <Clock size={16} className="text-sky-500" />
                    Hỗ trợ 24/7 trước và trong chuyến đi
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar size={16} className="text-sky-500" />
                    Xác nhận booking ngay sau thanh toán
                  </div>
                  <div className="flex items-center gap-2">
                    <Users size={16} className="text-sky-500" />
                    Có thể xuất hóa đơn theo yêu cầu
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailPage;
