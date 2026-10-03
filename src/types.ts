export interface MenuItem {
  id: number;
  name: string;
  category: string;
  image: string;
  fallbackImage?: string;
  description: string;
  priceDisplay: string;
  priceEstimate?: number;
  isPopular?: boolean;
  isChefSpecial?: boolean;
  tag?: string;
}

export interface CartItem {
  item: MenuItem;
  quantity: number;
  notes?: string;
  extraOptions?: string[];
}

export type OrderType = 'delivery' | 'pickup' | 'dinein';

export interface Review {
  id: number;
  author: string;
  rating: number;
  date: string;
  comment: string;
}
