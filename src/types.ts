export interface AgendaItem {
  id: string;
  time: string;
  title: string;
  subtitle?: string;
  description?: string;
}

export interface Speaker {
  id: string;
  name: string;
  title: string;
  company: string;
  avatarUrl: string;
  description?: string;
}

export interface PastReviewItem {
  id: string;
  title: string;
  imageUrl: string;
  category: string;
}

export interface VenueInfo {
  name: string;
  address: string;
  tags: string[];
  lat?: number;
  lng?: number;
  highlights: string[];
}

export interface EventData {
  title: string;
  theme: string;
  slogan: string;
  date: string;
  location: string;
  navItems: { label: string; href: string }[];
  agenda: AgendaItem[];
  speakers: Speaker[];
  venue: VenueInfo;
  pastReviews: PastReviewItem[];
  stats: { value: string; label: string }[];
  interestedProducts: string[];
}
