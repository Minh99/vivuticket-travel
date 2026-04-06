import { Ticket, BlogPost } from '../types/ticket';

export const MOCK_TICKETS: Ticket[] = [
  {
    id: 'f1',
    type: 'flight',
    title: 'Hà Nội (HAN) - TP.HCM (SGN)',
    description: 'Chuyến bay thẳng từ thủ đô đến thành phố mang tên Bác.',
    price: 1250000,
    image: 'https://images.unsplash.com/photo-1542296332-2e4473faf563?auto=format&fit=crop&q=80&w=800',
    rating: 4.8,
    reviews: 1240,
    location: 'Việt Nam',
    airline: 'Vietnam Airlines',
    airlineLogo: 'https://www.vietnamairlines.com/~/media/Images/VNANew/Global/Logo/logo-vna.png',
    departureTime: '08:00',
    arrivalTime: '10:15',
    duration: '2h 15m',
    from: 'HAN',
    to: 'SGN',
    class: 'Economy'
  },
  {
    id: 't1',
    type: 'tour',
    title: 'Tour Khám Phá Vịnh Hạ Long 2 Ngày 1 Đêm',
    description: 'Trải nghiệm du thuyền 5 sao, chèo kayak và thăm hang động kỳ vĩ.',
    price: 3500000,
    image: 'https://images.unsplash.com/photo-1559592442-7e182c9c03f1?auto=format&fit=crop&q=80&w=800',
    rating: 4.9,
    reviews: 850,
    location: 'Quảng Ninh',
    durationDays: 2,
    startDate: '2024-05-15',
    maxGroupSize: 20,
    includes: ['Ăn sáng', 'Du thuyền', 'Hướng dẫn viên', 'Vé tham quan']
  },
  {
    id: 'a1',
    type: 'attraction',
    title: 'Vé Sun World Ba Na Hills',
    description: 'Check-in Cầu Vàng nổi tiếng thế giới và trải nghiệm cáp treo đạt kỷ lục.',
    price: 900000,
    image: 'https://images.unsplash.com/photo-1585032226651-759b368d7246?auto=format&fit=crop&q=80&w=800',
    rating: 4.7,
    reviews: 2100,
    location: 'Đà Nẵng',
    validUntil: '2024-12-31',
    category: 'Công viên chủ đề'
  },
  {
    id: 'f2',
    type: 'flight',
    title: 'Đà Nẵng (DAD) - Seoul (ICN)',
    description: 'Chuyến bay quốc tế giá rẻ đến xứ sở Kim Chi.',
    price: 4800000,
    image: 'https://images.unsplash.com/photo-1517154421773-0529f29ea451?auto=format&fit=crop&q=80&w=800',
    rating: 4.6,
    reviews: 450,
    location: 'Hàn Quốc',
    airline: 'VietJet Air',
    airlineLogo: 'https://vj-prod-static.azureedge.net/images/logo-vj.png',
    departureTime: '23:30',
    arrivalTime: '06:00',
    duration: '4h 30m',
    from: 'DAD',
    to: 'ICN',
    class: 'Economy'
  },
  {
    id: 't2',
    type: 'tour',
    title: 'Tour Sapa 3 Ngày 2 Đêm - Chinh Phục Fansipan',
    description: 'Khám phá bản làng, thưởng thức đặc sản vùng cao và lên đỉnh Fansipan.',
    price: 2800000,
    image: 'https://images.unsplash.com/photo-1508804185872-d7badad00f7d?auto=format&fit=crop&q=80&w=800',
    rating: 4.8,
    reviews: 620,
    location: 'Lào Cai',
    durationDays: 3,
    startDate: '2024-06-10',
    maxGroupSize: 15,
    includes: ['Khách sạn', 'Xe đưa đón', 'Vé cáp treo', 'Ăn uống']
  },
  {
    id: 'a2',
    type: 'attraction',
    title: 'Vé VinWonders Phú Quốc',
    description: 'Công viên chủ đề lớn nhất Việt Nam với hàng trăm trò chơi hấp dẫn.',
    price: 950000,
    image: 'https://images.unsplash.com/photo-1596288027458-73a825f244ff?auto=format&fit=crop&q=80&w=800',
    rating: 4.9,
    reviews: 3200,
    location: 'Kiên Giang',
    validUntil: '2024-12-31',
    category: 'Công viên giải trí'
  }
];

export const MOCK_BLOGS: BlogPost[] = [
  {
    id: 'b1',
    title: 'Kinh nghiệm du lịch Đà Nẵng tự túc từ A-Z',
    excerpt: 'Đà Nẵng không chỉ nổi tiếng với những bãi biển đẹp mà còn có nền ẩm thực vô cùng phong phú...',
    content: 'Đà Nẵng là một trong những thành phố đáng sống nhất Việt Nam. Với bãi biển Mỹ Khê quyến rũ, bán đảo Sơn Trà hùng vĩ và những cây cầu độc đáo, Đà Nẵng luôn là điểm đến hấp dẫn du khách trong và ngoài nước. Trong bài viết này, chúng tôi sẽ chia sẻ những kinh nghiệm du lịch Đà Nẵng tự túc chi tiết nhất để bạn có một chuyến đi trọn vẹn.',
    image: 'https://images.unsplash.com/photo-1559592442-7e182c9c03f1?auto=format&fit=crop&q=80&w=800',
    author: 'Admin',
    date: '2024-03-20',
    category: 'Kinh nghiệm'
  },
  {
    id: 'b2',
    title: 'Top 10 địa điểm check-in cực hot tại Sapa',
    excerpt: 'Sapa mùa nào cũng đẹp, nhưng để có những bức ảnh triệu like thì bạn không nên bỏ qua những địa điểm này...',
    content: 'Sapa luôn mang trong mình vẻ đẹp huyền ảo của sương mù và núi rừng Tây Bắc. Nếu bạn đang lên kế hoạch cho chuyến đi Sapa sắp tới, hãy lưu lại ngay danh sách 10 địa điểm check-in cực hot này để có những bức hình lung linh nhất.',
    image: 'https://images.unsplash.com/photo-1508804185872-d7badad00f7d?auto=format&fit=crop&q=80&w=800',
    author: 'Vivu Team',
    date: '2024-03-18',
    category: 'Địa điểm'
  }
];

export const getTicketById = (id: string): Ticket | undefined => {
  return MOCK_TICKETS.find(t => t.id === id);
};

export const getTicketsByType = (type: string): Ticket[] => {
  const validTypes = ['flight', 'tour', 'attraction'];
  if (!validTypes.includes(type)) return MOCK_TICKETS;
  return MOCK_TICKETS.filter(t => t.type === type);
};

export const getBlogById = (id: string): BlogPost | undefined => {
  return MOCK_BLOGS.find(b => b.id === id);
};
