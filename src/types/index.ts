export type Category = 
  | "All"
  | "Textured Canvas"
  | "Resin & Mixed Media"
  | "Sculptural Vessels"
  | "Fluid Art"
  | "Botanical Wall Art";

export interface ArtworkProduct {
  id: string;
  slug: string;
  name: string;
  category: Category;
  price: number; // Demo price in USD
  originalPrice?: number;
  description: string;
  story: string;
  dimensions: string;
  medium: string;
  year: number;
  isOneOfAKind: boolean;
  isFeatured?: boolean;
  isNewArrival?: boolean;
  inStock: boolean;
  images: string[];
  palette: string[]; // hex codes reflecting the color notes
  tags: string[];
}

export interface CartItem {
  product: ArtworkProduct;
  quantity: number;
  selectedFraming?: "Natural Wood" | "Gilded Gold" | "Unframed Canvas Edge";
}

export type OrderStatus = "Pending" | "Confirmed" | "Shipped" | "Delivered" | "Cancelled";

export interface CustomerDetails {
  fullName: string;
  phone: string;
  email: string;
  address: string;
  city: string;
  country: string;
  notes?: string;
  preferredContact: "WhatsApp" | "Email" | "Phone Call";
}

export interface Order {
  id: string; // e.g. "WL-2026-8812"
  createdAt: string;
  customer: CustomerDetails;
  items: CartItem[];
  subtotal: number;
  shipping: number;
  total: number;
  status: OrderStatus;
  paymentMethod: "Bank Transfer / WhatsApp Coordination" | "Cash on Art Delivery";
}
