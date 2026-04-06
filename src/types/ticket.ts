export type TicketType = 'flight' | 'tour' | 'attraction';

export interface BaseTicket {
  id: string;
  type: TicketType;
  title: string;
  description: string;
  price: number;
  image: string;
  rating: number;
  reviews: number;
  location: string;
}

export interface FlightTicket extends BaseTicket {
  type: 'flight';
  airline: string;
  airlineLogo: string;
  departureTime: string;
  arrivalTime: string;
  duration: string;
  from: string;
  to: string;
  class: 'Economy' | 'Business' | 'First';
}

export interface TourTicket extends BaseTicket {
  type: 'tour';
  durationDays: number;
  startDate: string;
  maxGroupSize: number;
  includes: string[];
}

export interface AttractionTicket extends BaseTicket {
  type: 'attraction';
  validUntil: string;
  category: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  author: string;
  date: string;
  category: string;
}

export type Ticket = FlightTicket | TourTicket | AttractionTicket;

export interface PriceInfo {
  amount: number;
  currency: 'VND';
  unit: 'person' | 'ticket';
  originalAmount?: number;
}

export interface MediaInfo {
  cover: string;
  gallery: string[];
}

export interface CommonPolicy {
  cancellation: string;
  refund: string;
  reschedule: string;
}

export interface TicketDetailBase {
  id: string;
  type: TicketType;
  slug: string;
  title: string;
  shortDescription: string;
  description: string;
  location: string;
  rating: number;
  reviews: number;
  badges: string[];
  price: PriceInfo;
  media: MediaInfo;
  policy: CommonPolicy;
}

export interface FlightDetail extends TicketDetailBase {
  type: 'flight';
  airline: {
    code: string;
    name: string;
    logo: string;
  };
  route: {
    from: string;
    to: string;
  };
  schedule: {
    departureDate: string;
    departureTime: string;
    arrivalDate: string;
    arrivalTime: string;
    duration: string;
  };
  cabinClass: 'Economy' | 'Business' | 'First';
  baggage: {
    carryOn: string;
    checked: string;
  };
  amenities: string[];
}

export interface TourItineraryItem {
  day: number;
  title: string;
  activities: string[];
}

export interface TourDetail extends TicketDetailBase {
  type: 'tour';
  durationDays: number;
  startDate: string;
  maxGroupSize: number;
  includes: string[];
  excludes: string[];
  itinerary: TourItineraryItem[];
}

export interface AttractionDetail extends TicketDetailBase {
  type: 'attraction';
  category: string;
  validUntil: string;
  openingHours: string;
  meetingPoint: string;
  highlights: string[];
  usageGuide: string[];
}

export type TicketDetail = FlightDetail | TourDetail | AttractionDetail;
