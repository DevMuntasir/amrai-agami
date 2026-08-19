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

export interface HomeHeroSlide {
  subtitle: string;
  title: string;
  description: string;
  backgroundImage: string;
  videoUrl?: string;
  primaryButtonLabel?: string;
  primaryButtonHref?: string;
  secondaryButtonLabel?: string;
}

export interface HomeTwoHeroContent {
  badge: string;
  title: string;
  highlightedText?: string;
  description: string;
  backgroundImage: string;
  sideImage?: string;
  primaryButtonLabel: string;
  primaryButtonHref: string;
  secondaryButtonLabel: string;
  secondaryButtonHref: string;
}

export interface HomeThreeHeroContent {
  badge: string;
  title: string;
  highlightedText?: string;
  description: string;
  backgroundImage: string;
  primaryButtonLabel: string;
  primaryButtonHref: string;
  secondaryButtonLabel: string;
  secondaryButtonHref: string;
}

export interface AboutFeatureCard {
  title: string;
  description: string;
  icon: string;
  accent?: string;
}

export interface AboutSectionContent {
  badge: string;
  title: string;
  description: string;
  primaryImage: string;
  secondaryImage?: string;
  experienceYears: string;
  experienceLabel: string;
  featureCards: AboutFeatureCard[];
  ctaLabel: string;
  ctaHref: string;
  phoneLabel: string;
  phoneNumber: string;
}

export interface SectionHeaderContent {
  badge: string;
  title: string;
  viewAllLabel?: string;
}

export interface CounterItem {
  number: string;
  label: string;
  icon: string;
}

export interface VolunteerSectionContent {
  badge: string;
  title: string;
  description: string;
  backgroundImage: string;
  primaryButtonLabel: string;
  primaryButtonHref: string;
  secondaryButtonLabel: string;
  secondaryButtonHref: string;
  reasonsTitle: string;
  reasons: string[];
}

export interface TestimonialSectionContent {
  badge: string;
  title: string;
}

export interface SponsorLogo {
  image: string;
  alt: string;
  url?: string;
}

export interface PageBannerContent {
  title: string;
  subtitle?: string;
  backgroundImage?: string;
}

export interface ContactSectionContent {
  infoBadge: string;
  infoTitle: string;
  infoDescription: string;
  addressTitle: string;
  address: string;
  emailTitle: string;
  email: string;
  phoneTitle: string;
  phone: string;
  formTitle: string;
  successTitle: string;
  successMessage: string;
  resetButtonLabel: string;
  submitButtonLabel: string;
}

export interface VolunteerFormSectionContent {
  badge: string;
  title: string;
  description: string;
  successTitle: string;
  successMessage: string;
  resetButtonLabel: string;
  submitButtonLabel: string;
}

export interface DonateSectionContent {
  badge: string;
  title: string;
  description: string;
}

export interface TeamSectionContent {
  badge: string;
  title: string;
}

export interface PageContent {
  pageKey: string;
  banner?: Partial<PageBannerContent>;
  teamSection?: Partial<TeamSectionContent>;
  donateSection?: Partial<DonateSectionContent>;
  contactSection?: Partial<ContactSectionContent>;
  volunteerFormSection?: Partial<VolunteerFormSectionContent>;
}

export interface GlobalSectionContent {
  heroSlides: HomeHeroSlide[];
  homeTwoHero: HomeTwoHeroContent;
  homeThreeHero: HomeThreeHeroContent;
  aboutSection: AboutSectionContent;
  causesSection: SectionHeaderContent;
  eventsSection: SectionHeaderContent;
  blogSection: SectionHeaderContent;
  counterSection: {
    items: CounterItem[];
  };
  volunteerSection: VolunteerSectionContent;
  testimonialSection: TestimonialSectionContent;
  faqSectionHeader: {
    badge: string;
    title: string;
  };
  sponsorSection: {
    logos: SponsorLogo[];
  };
}

export type CharityEvent = EventItem;
export type FAQ = FaqItem;
