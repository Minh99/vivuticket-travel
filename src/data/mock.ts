import { BlogPost, Ticket, TicketDetail, TicketType } from '../types/ticket';

export const MOCK_TICKET_DETAILS: TicketDetail[] = [
  {
    id: 'f1',
    type: 'flight',
    slug: 'ha-noi-den-tp-hcm-vna',
    title: 'Hà Nội (HAN) - TP.HCM (SGN)',
    shortDescription: 'Chuyến bay thẳng buổi sáng, giờ đẹp, phù hợp công tác và du lịch.',
    description: 'Lựa chọn lý tưởng cho hành trình từ Hà Nội đến TP.HCM với giờ bay thuận tiện, dịch vụ ổn định và thủ tục nhanh chóng.',
    location: 'Việt Nam',
    rating: 4.8,
    reviews: 1240,
    badges: ['Bay thẳng', 'Xác nhận nhanh', 'Đổi lịch linh hoạt'],
    price: {
      amount: 1250000,
      currency: 'VND',
      unit: 'ticket',
      originalAmount: 1590000
    },
    media: {
      cover: 'https://images.unsplash.com/photo-1542296332-2e4473faf563?auto=format&fit=crop&q=80&w=1200',
      gallery: [
        'https://images.unsplash.com/photo-1542296332-2e4473faf563?auto=format&fit=crop&q=80&w=1200',
        'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&q=80&w=1200',
        'https://images.unsplash.com/photo-1517479149777-5f3b1511d5ad?auto=format&fit=crop&q=80&w=1200'
      ]
    },
    policy: {
      cancellation: 'Hủy trước 24 giờ: phí từ 20% giá vé.',
      refund: 'Hoàn tiền 5-10 ngày làm việc theo điều kiện hạng vé.',
      reschedule: 'Đổi ngày/giờ trước 6 giờ khởi hành.'
    },
    airline: {
      code: 'VN',
      name: 'Vietnam Airlines',
      logo: 'https://www.vietnamairlines.com/~/media/Images/VNANew/Global/Logo/logo-vna.png'
    },
    route: {
      from: 'HAN',
      to: 'SGN'
    },
    schedule: {
      departureDate: '2026-05-10',
      departureTime: '08:00',
      arrivalDate: '2026-05-10',
      arrivalTime: '10:15',
      duration: '2h 15m'
    },
    cabinClass: 'Economy',
    baggage: {
      carryOn: '07kg',
      checked: '23kg'
    },
    amenities: ['Suất ăn nhẹ', 'Giải trí trên không', 'Hỗ trợ check-in online']
  },
  {
    id: 't1',
    type: 'tour',
    slug: 'tour-ha-long-2n1d-du-thuyen',
    title: 'Tour Khám Phá Vịnh Hạ Long 2 Ngày 1 Đêm',
    shortDescription: 'Du thuyền 5 sao, chèo kayak và khám phá hang động nổi tiếng.',
    description: 'Hành trình trọn gói khám phá Vịnh Hạ Long với du thuyền cao cấp, lịch trình cân bằng giữa nghỉ dưỡng và trải nghiệm.',
    location: 'Quảng Ninh',
    rating: 4.9,
    reviews: 850,
    badges: ['Best Seller', 'Đã gồm ăn uống', 'Hướng dẫn viên chuyên nghiệp'],
    price: {
      amount: 3500000,
      currency: 'VND',
      unit: 'person',
      originalAmount: 4200000
    },
    media: {
      cover: 'https://images.unsplash.com/photo-1559592442-7e182c9c03f1?auto=format&fit=crop&q=80&w=1200',
      gallery: [
        'https://images.unsplash.com/photo-1559592442-7e182c9c03f1?auto=format&fit=crop&q=80&w=1200',
        'https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&q=80&w=1200',
        'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&q=80&w=1200'
      ]
    },
    policy: {
      cancellation: 'Hủy trước 72 giờ: miễn phí.',
      refund: 'Hoàn tiền 100% khi đủ điều kiện hủy.',
      reschedule: 'Đổi ngày trước 48 giờ nếu còn chỗ.'
    },
    durationDays: 2,
    startDate: '2026-05-15',
    maxGroupSize: 20,
    includes: ['Du thuyền 5 sao', 'Ăn 3 bữa', 'Vé tham quan', 'Hướng dẫn viên', 'Kayak'],
    excludes: ['Đồ uống có cồn', 'Chi tiêu cá nhân', 'VAT'],
    itinerary: [
      {
        day: 1,
        title: 'Hà Nội - Hạ Long - Nhận phòng du thuyền',
        activities: ['Di chuyển đến cảng', 'Ăn trưa trên du thuyền', 'Tham quan hang động', 'Ngắm hoàng hôn']
      },
      {
        day: 2,
        title: 'Làng chài - Kayak - Trở về',
        activities: ['Tập thái cực quyền', 'Chèo kayak', 'Brunch trên tàu', 'Trả phòng và về Hà Nội']
      }
    ]
  },
  {
    id: 'a1',
    type: 'attraction',
    slug: 'sun-world-ba-na-hills',
    title: 'Vé Sun World Ba Na Hills',
    shortDescription: 'Trải nghiệm Cầu Vàng, cáp treo kỷ lục và tổ hợp giải trí hàng đầu.',
    description: 'Vé tham quan trọn ngày tại Sun World Ba Na Hills, phù hợp cho gia đình và nhóm bạn yêu thích check-in, vui chơi và cảnh quan.',
    location: 'Đà Nẵng',
    rating: 4.7,
    reviews: 2100,
    badges: ['Vé điện tử', 'Quét QR vào cổng', 'Không cần in vé'],
    price: {
      amount: 900000,
      currency: 'VND',
      unit: 'ticket'
    },
    media: {
      cover: 'https://images.unsplash.com/photo-1585032226651-759b368d7246?auto=format&fit=crop&q=80&w=1200',
      gallery: [
        'https://images.unsplash.com/photo-1585032226651-759b368d7246?auto=format&fit=crop&q=80&w=1200',
        'https://images.unsplash.com/photo-1508804185872-d7badad00f7d?auto=format&fit=crop&q=80&w=1200',
        'https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&q=80&w=1200'
      ]
    },
    policy: {
      cancellation: 'Không hỗ trợ hủy sau khi xuất vé.',
      refund: 'Hoàn tiền khi hệ thống từ chối xác nhận.',
      reschedule: 'Đổi ngày sử dụng trước 24 giờ.'
    },
    category: 'Công viên chủ đề',
    validUntil: '2026-12-31',
    openingHours: '08:00 - 22:00',
    meetingPoint: 'Cổng chính Sun World Ba Na Hills',
    highlights: ['Check-in Cầu Vàng', 'Cáp treo đạt kỷ lục', 'Fantasy Park'],
    usageGuide: ['Nhận QR qua email', 'Đến cổng soát vé', 'Quét QR để vào cổng']
  },
  {
    id: 'f2',
    type: 'flight',
    slug: 'da-nang-den-seoul-vj',
    title: 'Đà Nẵng (DAD) - Seoul (ICN)',
    shortDescription: 'Chuyến bay đêm tiết kiệm, thuận tiện cho lịch trình khám phá Hàn Quốc.',
    description: 'Giải pháp bay quốc tế tối ưu chi phí, kết nối thẳng từ Đà Nẵng đến Seoul, phù hợp du lịch và công tác ngắn ngày.',
    location: 'Hàn Quốc',
    rating: 4.6,
    reviews: 450,
    badges: ['Bay quốc tế', 'Giá tốt', 'Hỗ trợ mua thêm hành lý'],
    price: {
      amount: 4800000,
      currency: 'VND',
      unit: 'ticket',
      originalAmount: 5390000
    },
    media: {
      cover: 'https://images.unsplash.com/photo-1517154421773-0529f29ea451?auto=format&fit=crop&q=80&w=1200',
      gallery: [
        'https://images.unsplash.com/photo-1517154421773-0529f29ea451?auto=format&fit=crop&q=80&w=1200',
        'https://images.unsplash.com/photo-1474302770737-173ee21bab63?auto=format&fit=crop&q=80&w=1200',
        'https://images.unsplash.com/photo-1521727857535-28d2047314ac?auto=format&fit=crop&q=80&w=1200'
      ]
    },
    policy: {
      cancellation: 'Hủy trước 48 giờ: phí từ 35% giá vé.',
      refund: 'Theo điều kiện từng hạng vé và thuế phí.',
      reschedule: 'Đổi chuyến trước 12 giờ khởi hành.'
    },
    airline: {
      code: 'VJ',
      name: 'VietJet Air',
      logo: 'https://vj-prod-static.azureedge.net/images/logo-vj.png'
    },
    route: {
      from: 'DAD',
      to: 'ICN'
    },
    schedule: {
      departureDate: '2026-06-08',
      departureTime: '23:30',
      arrivalDate: '2026-06-09',
      arrivalTime: '06:00',
      duration: '4h 30m'
    },
    cabinClass: 'Economy',
    baggage: {
      carryOn: '07kg',
      checked: 'Mua thêm theo nhu cầu'
    },
    amenities: ['Check-in online', 'Suất ăn mua thêm', 'Hỗ trợ thủ tục nhóm']
  },
  {
    id: 't2',
    type: 'tour',
    slug: 'tour-sapa-fansipan-3n2d',
    title: 'Tour Sapa 3 Ngày 2 Đêm - Chinh Phục Fansipan',
    shortDescription: 'Khám phá bản làng, thưởng thức đặc sản và chinh phục nóc nhà Đông Dương.',
    description: 'Tour trọn gói phù hợp cho du khách yêu thiên nhiên và văn hóa Tây Bắc, kết hợp trải nghiệm địa phương và nghỉ dưỡng.',
    location: 'Lào Cai',
    rating: 4.8,
    reviews: 620,
    badges: ['Lịch trình cân bằng', 'Khách sạn 3-4 sao', 'Có cáp treo Fansipan'],
    price: {
      amount: 2800000,
      currency: 'VND',
      unit: 'person',
      originalAmount: 3300000
    },
    media: {
      cover: 'https://images.unsplash.com/photo-1508804185872-d7badad00f7d?auto=format&fit=crop&q=80&w=1200',
      gallery: [
        'https://images.unsplash.com/photo-1508804185872-d7badad00f7d?auto=format&fit=crop&q=80&w=1200',
        'https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&q=80&w=1200',
        'https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&q=80&w=1200'
      ]
    },
    policy: {
      cancellation: 'Hủy trước 5 ngày: miễn phí.',
      refund: 'Hoàn 100% nếu hủy đúng hạn.',
      reschedule: 'Đổi ngày trước 72 giờ nếu còn suất.'
    },
    durationDays: 3,
    startDate: '2026-06-10',
    maxGroupSize: 15,
    includes: ['Khách sạn', 'Xe đưa đón', 'Vé cáp treo', 'Ăn uống'],
    excludes: ['Đồ uống', 'Tip hướng dẫn viên', 'Chi phí cá nhân'],
    itinerary: [
      {
        day: 1,
        title: 'Hà Nội - Sapa - Bản Cát Cát',
        activities: ['Di chuyển lên Sapa', 'Nhận phòng', 'Tham quan Cát Cát', 'Ăn tối đặc sản']
      },
      {
        day: 2,
        title: 'Fansipan - Thị trấn Sapa',
        activities: ['Đi cáp treo Fansipan', 'Tham quan trung tâm', 'Tự do cafe/chợ đêm']
      },
      {
        day: 3,
        title: 'Moana - Trả phòng - Về Hà Nội',
        activities: ['Check-in điểm ngắm cảnh', 'Mua quà địa phương', 'Khởi hành về Hà Nội']
      }
    ]
  },
  {
    id: 'a2',
    type: 'attraction',
    slug: 'vinwonders-phu-quoc',
    title: 'Vé VinWonders Phú Quốc',
    shortDescription: 'Công viên chủ đề lớn với nhiều trò chơi, show diễn và khu check-in độc đáo.',
    description: 'Vé vào cổng VinWonders Phú Quốc với hàng trăm hoạt động giải trí phù hợp gia đình, cặp đôi và nhóm bạn.',
    location: 'Kiên Giang',
    rating: 4.9,
    reviews: 3200,
    badges: ['Xác nhận tức thì', 'Vé điện tử', 'Hỗ trợ đổi ngày'],
    price: {
      amount: 950000,
      currency: 'VND',
      unit: 'ticket'
    },
    media: {
      cover: 'https://images.unsplash.com/photo-1596288027458-73a825f244ff?auto=format&fit=crop&q=80&w=1200',
      gallery: [
        'https://images.unsplash.com/photo-1596288027458-73a825f244ff?auto=format&fit=crop&q=80&w=1200',
        'https://images.unsplash.com/photo-1483683804023-6ccdb62f86ef?auto=format&fit=crop&q=80&w=1200',
        'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80&w=1200'
      ]
    },
    policy: {
      cancellation: 'Hủy miễn phí trước ngày sử dụng 1 ngày.',
      refund: 'Hoàn tiền theo chính sách đối tác.',
      reschedule: 'Đổi ngày linh hoạt trước 24 giờ.'
    },
    category: 'Công viên giải trí',
    validUntil: '2026-12-31',
    openingHours: '09:00 - 20:00',
    meetingPoint: 'Khu vực cổng chính VinWonders Phú Quốc',
    highlights: ['Thế giới lốc xoáy', 'Thủy cung', 'Show biểu diễn nhạc nước'],
    usageGuide: ['Mở email lấy mã QR', 'Đến quầy hỗ trợ nếu cần', 'Quét mã tại cổng vào']
  }
];

const toListingTicket = (detail: TicketDetail): Ticket => {
  if (detail.type === 'flight') {
    return {
      id: detail.id,
      type: 'flight',
      title: detail.title,
      description: detail.shortDescription,
      price: detail.price.amount,
      image: detail.media.cover,
      rating: detail.rating,
      reviews: detail.reviews,
      location: detail.location,
      airline: detail.airline.name,
      airlineLogo: detail.airline.logo,
      departureTime: detail.schedule.departureTime,
      arrivalTime: detail.schedule.arrivalTime,
      duration: detail.schedule.duration,
      from: detail.route.from,
      to: detail.route.to,
      class: detail.cabinClass
    };
  }

  if (detail.type === 'tour') {
    return {
      id: detail.id,
      type: 'tour',
      title: detail.title,
      description: detail.shortDescription,
      price: detail.price.amount,
      image: detail.media.cover,
      rating: detail.rating,
      reviews: detail.reviews,
      location: detail.location,
      durationDays: detail.durationDays,
      startDate: detail.startDate,
      maxGroupSize: detail.maxGroupSize,
      includes: detail.includes
    };
  }

  return {
    id: detail.id,
    type: 'attraction',
    title: detail.title,
    description: detail.shortDescription,
    price: detail.price.amount,
    image: detail.media.cover,
    rating: detail.rating,
    reviews: detail.reviews,
    location: detail.location,
    validUntil: detail.validUntil,
    category: detail.category
  };
};

export const MOCK_TICKETS: Ticket[] = MOCK_TICKET_DETAILS.map(toListingTicket);

export const MOCK_BLOGS: BlogPost[] = [
  {
    id: 'b1',
    title: 'Kinh nghiệm du lịch Đà Nẵng tự túc từ A-Z',
    excerpt: 'Đà Nẵng không chỉ nổi tiếng với những bãi biển đẹp mà còn có nền ẩm thực vô cùng phong phú...',
    content: 'Đà Nẵng là một trong những thành phố đáng sống nhất Việt Nam. Với bãi biển Mỹ Khê quyến rũ, bán đảo Sơn Trà hùng vĩ và những cây cầu độc đáo, Đà Nẵng luôn là điểm đến hấp dẫn du khách trong và ngoài nước. Trong bài viết này, chúng tôi sẽ chia sẻ những kinh nghiệm du lịch Đà Nẵng tự túc chi tiết nhất để bạn có một chuyến đi trọn vẹn.',
    image: 'https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&q=80&w=800',
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
  const validTypes: TicketType[] = ['flight', 'tour', 'attraction'];
  if (!validTypes.includes(type as TicketType)) return MOCK_TICKETS;
  return MOCK_TICKETS.filter(t => t.type === type);
};

export const getTicketDetailById = (id: string): TicketDetail | undefined => {
  return MOCK_TICKET_DETAILS.find(t => t.id === id);
};

export const getTicketDetailsByType = (type: TicketType): TicketDetail[] => {
  return MOCK_TICKET_DETAILS.filter(t => t.type === type);
};

export const getBlogById = (id: string): BlogPost | undefined => {
  return MOCK_BLOGS.find(b => b.id === id);
};
