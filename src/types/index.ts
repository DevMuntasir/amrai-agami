export interface Cause {
  id: string;
  slug: string;
  title: string;
  category: string;
  image: string;
  raised: number;
  goal: number;
  progress: number;
  donorsCount: number;
  shortDescription: string;
  fullDescription?: string;
  featured?: boolean;
}

export interface EventItem {
  id: string;
  slug: string;
  title: string;
  date: string;
  time: string;
  location: string;
  image: string;
  cost: string;
  shortDescription: string;
  fullDescription?: string;
  organizer?: {
    name: string;
    phone: string;
    email: string;
  };
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  image: string;
  date: string;
  author: string;
  authorImage?: string;
  category: string;
  tags: string[];
  commentsCount: number;
  shortDescription: string;
  fullContent?: string;
}

export interface TeamMember {
  id: string;
  slug: string;
  name: string;
  designation: string;
  image: string;
  bio?: string;
  email?: string;
  phone?: string;
  socials: {
    facebook?: string;
    twitter?: string;
    linkedin?: string;
    instagram?: string;
  };
}

export interface Product {
  id: string;
  slug: string;
  name: string;
  image: string;
  price: number;
  oldPrice?: number;
  rating: number;
  reviewsCount: number;
  category: string;
  description: string;
  inStock: boolean;
}

export interface Testimonial {
  id: string;
  name: string;
  designation: string;
  image: string;
  content: string;
  rating: number;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category?: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export type CharityEvent = EventItem;
export type FAQ = FaqItem;

