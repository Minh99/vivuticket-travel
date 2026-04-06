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
