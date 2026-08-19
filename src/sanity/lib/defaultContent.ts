import {
  GlobalSectionContent,
  PageContent,
} from "@/types";

export const defaultGlobalSectionContent: GlobalSectionContent = {
  heroSlides: [
    {
      subtitle: "Together For Humanity",
      title: "Restore Hope Through Compassionate Action",
      description:
        "Support education, food, healthcare, and emergency relief programs for vulnerable families across Bangladesh and beyond.",
      backgroundImage:
        "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=1920&q=85",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      primaryButtonLabel: "Donate Now",
      primaryButtonHref: "/donate-us",
      secondaryButtonLabel: "Watch Video",
    },
    {
      subtitle: "Every Dollar Counts",
      title: "Support Vulnerable Children & Families",
      description:
        "Together, we can build schools, train doctors, and eradicate extreme poverty across developing communities.",
      backgroundImage:
        "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?auto=format&fit=crop&w=1920&q=85",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      primaryButtonLabel: "Donate Now",
      primaryButtonHref: "/donate-us",
      secondaryButtonLabel: "Watch Video",
    },
  ],
  homeTwoHero: {
    badge: "Transforming Lives Worldwide",
    title: "Give A Little.",
    highlightedText: "Change A Lot.",
    description:
      "We connect compassionate donors with grassroots initiatives across 30+ nations to solve urgent crises in food security, healthcare, and education.",
    backgroundImage:
      "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?auto=format&fit=crop&w=1920&q=85",
    sideImage:
      "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=800&q=80",
    primaryButtonLabel: "Donate To Emergency Relief",
    primaryButtonHref: "/donate-us",
    secondaryButtonLabel: "Discover Causes",
    secondaryButtonHref: "/causes",
  },
  homeThreeHero: {
    badge: "Non-profit Humanitarian Action",
    title: "Be The Reason Someone",
    highlightedText: "Smiles Today",
    description:
      "From supplying clean water wells to providing life-saving surgical care and building schools, your kindness builds a better tomorrow.",
    backgroundImage:
      "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=1920&q=85",
    primaryButtonLabel: "Start Donating Today",
    primaryButtonHref: "/donate-us",
    secondaryButtonLabel: "Join As Volunteer",
    secondaryButtonHref: "/become-volunteer",
  },
  aboutSection: {
    badge: "About Amrai Agami",
    title: "A Mission Rooted In Dignity, Relief, And Long-Term Change",
    description:
      "We work with donors, volunteers, and community leaders to fund education, clean water, emergency support, and practical development for underserved families.",
    primaryImage:
      "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=800&q=80",
    secondaryImage:
      "https://images.unsplash.com/photo-1532629345422-7515f3d16bb9?auto=format&fit=crop&w=600&q=80",
    experienceYears: "10+",
    experienceLabel: "Years of Service",
    featureCards: [
      {
        title: "Child Education",
        description: "Scholarships, supplies, and safe learning spaces for children in need.",
        icon: "fa-solid fa-graduation-cap",
        accent: "blue",
      },
      {
        title: "Clean Water Access",
        description: "Sustainable wells and safe drinking water for at-risk communities.",
        icon: "fa-solid fa-hand-holding-droplet",
        accent: "red",
      },
    ],
    ctaLabel: "Learn More",
    ctaHref: "/about-us",
    phoneLabel: "Have Questions?",
    phoneNumber: "+880 1874303208",
  },
  causesSection: {
    badge: "Our Urgent Causes",
    title: "Explore Our Causes & Campaigns",
    viewAllLabel: "View All Causes",
  },
  eventsSection: {
    badge: "Events & Fundraisers",
    title: "Join Our Upcoming Charity Events",
    viewAllLabel: "View All Events",
  },
  blogSection: {
    badge: "Our Latest News",
    title: "Insights, Stories & Campaign Updates",
    viewAllLabel: "View All Stories",
  },
  counterSection: {
    items: [
      { number: "25,000+", label: "Generous Donors", icon: "fa-solid fa-hand-holding-dollar" },
      { number: "৳12.8M+", label: "Funds Distributed", icon: "fa-solid fa-coins" },
      { number: "180+", label: "Completed Projects", icon: "fa-solid fa-school" },
      { number: "5,400+", label: "Active Volunteers", icon: "fa-solid fa-users" },
    ],
  },
  volunteerSection: {
    badge: "Become a Volunteer",
    title: "Join Our Community of Change Makers Around The Globe",
    description:
      "Whether you are a healthcare professional, educator, logistics specialist, or simply have a kind heart, your time and passion can save lives and restore dignity.",
    backgroundImage:
      "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=1920&q=85",
    primaryButtonLabel: "Register As Volunteer",
    primaryButtonHref: "/become-volunteer",
    secondaryButtonLabel: "Our Global Impact",
    secondaryButtonHref: "/about-us",
    reasonsTitle: "Why Volunteer With Us?",
    reasons: [
      "Direct on-the-ground impact with marginalized families.",
      "Flexible schedules: remote, local, or international missions.",
      "Certified leadership and humanitarian credentials provided.",
    ],
  },
  testimonialSection: {
    badge: "What People Say",
    title: "Voices of Donors & Volunteers",
  },
  faqSectionHeader: {
    badge: "Frequently Asked Questions",
    title: "Answers To Common Inquiries",
  },
  sponsorSection: {
    logos: [
      { image: "/assets/images/sponsor/one.png", alt: "Sponsor 1" },
      { image: "/assets/images/sponsor/two.png", alt: "Sponsor 2" },
      { image: "/assets/images/sponsor/three.png", alt: "Sponsor 3" },
      { image: "/assets/images/sponsor/four.png", alt: "Sponsor 4" },
      { image: "/assets/images/sponsor/five.png", alt: "Sponsor 5" },
    ],
  },
};

export const defaultPageContent: Record<string, PageContent> = {
  "about-us": {
    pageKey: "about-us",
    banner: {
      title: "About Our Organization",
      subtitle:
        "Dedicated to lifting underprivileged communities through transparent giving and sustainable development.",
    },
    teamSection: {
      badge: "Expert Leadership",
      title: "Meet The Dedicated Team Behind Amrai Agami",
    },
  },
  "contact-us": {
    pageKey: "contact-us",
    banner: {
      title: "Contact Our Team",
      subtitle: "Have a question or want to collaborate? We would love to hear from you.",
    },
    contactSection: {
      infoBadge: "Get In Touch",
      infoTitle: "We Are Always Ready To Help You",
      infoDescription:
        "Our support and logistics teams operate across multiple timezones to assist donors, volunteers, and media partners.",
      addressTitle: "Main Headquarters",
      address: "3900, Feni sadar Feni, Bangladesh",
      emailTitle: "Email Inquiry",
      email: "support@amraiagami.org",
      phoneTitle: "Phone Number",
      phone: "+880 1874303208",
      formTitle: "Leave A Message",
      successTitle: "Message Sent!",
      successMessage: "Thank you for reaching out. We will get back to you shortly at {{email}}.",
      resetButtonLabel: "Send Another Message",
      submitButtonLabel: "Send Message",
    },
  },
  faq: {
    pageKey: "faq",
    banner: {
      title: "Frequently Asked Questions",
      subtitle:
        "Common questions about our humanitarian initiatives, financial transparency, and volunteering.",
    },
  },
  "donate-us": {
    pageKey: "donate-us",
    banner: {
      title: "Make A Secure Donation",
      subtitle:
        "100% of your tax-deductible donation directly empowers underprivileged children and struggling families.",
    },
    donateSection: {
      badge: "Direct Giving Portal",
      title: "Your Compassion Transforms Real Lives",
      description:
        "Select an amount below or specify a custom donation. All transactions are SSL encrypted.",
    },
  },
  "become-volunteer": {
    pageKey: "become-volunteer",
    banner: {
      title: "Become A Volunteer",
      subtitle:
        "Join our community of passionate humanitarians making tangible impact around the world.",
    },
    volunteerFormSection: {
      badge: "Registration Form",
      title: "Volunteer Application",
      description:
        "Please fill out the form below with your background and area of interest.",
      successTitle: "Application Received!",
      successMessage:
        "Thank you, {{name}}! Our volunteer coordinator will review your profile and contact you at {{email}} within 48 hours.",
      resetButtonLabel: "Submit Another Application",
      submitButtonLabel: "Submit Volunteer Application",
    },
  },
  causes: {
    pageKey: "causes",
    banner: {
      title: "Our Urgent Causes",
      subtitle:
        "Every contribution brings vital resources, hope, and real change to families in urgent need.",
    },
  },
  events: {
    pageKey: "events",
    banner: {
      title: "Charity Events & Galas",
      subtitle:
        "Be a part of transformative gatherings, benefit galas, and community action drives.",
    },
  },
  blog: {
    pageKey: "blog",
    banner: {
      title: "Our News & Stories",
      subtitle:
        "Insights, field stories, and transparency reports on how your donations impact real lives.",
    },
  },
  "our-team": {
    pageKey: "our-team",
    banner: {
      title: "Meet Our Dedicated Team",
      subtitle:
        "The compassionate leaders, healthcare workers, and coordinators driving our global initiatives.",
    },
  },
  shop: {
    pageKey: "shop",
    banner: {
      title: "Our Charity Shop",
      subtitle:
        "100% of all profits from your purchases directly support children's education and clean water wells.",
    },
  },
};
