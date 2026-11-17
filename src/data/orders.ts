import { Order } from "@/types";
import { PRODUCTS } from "./products";

export const INITIAL_ORDERS: Order[] = [
  {
    id: "WL-2026-9041",
    createdAt: "2026-11-07T14:32:00Z",
    customer: {
      fullName: "Nouran El-Shazly",
      phone: "+20 100 847 2911",
      email: "nouran.shazly@artcollective.com",
      address: "Villa 42, Palm Hills Estate, 6th of October City",
      city: "Giza / Cairo",
      country: "Egypt",
      preferredContact: "WhatsApp",
      notes: "Please confirm with me before delivery. We are installing ambient gallery picture lights."
    },
    items: [
      {
        product: PRODUCTS[0], // Solace in Terracotta & Gold
        quantity: 1,
        selectedFraming: "Gilded Gold"
      }
    ],
    subtotal: 480,
    shipping: 0,
    total: 480,
    status: "Confirmed",
    paymentMethod: "Bank Transfer / WhatsApp Coordination"
  },
  {
    id: "WL-2026-9042",
    createdAt: "2026-11-08T09:15:00Z",
    customer: {
      fullName: "Karim Mansour",
      phone: "+20 122 394 8812",
      email: "karim.mansour@designstudio.eg",
      address: "18 Hassan Sabry Street, Floor 4, Zamalek",
      city: "Cairo",
      country: "Egypt",
      preferredContact: "WhatsApp",
      notes: "Client request for reception lounge. Urgent dispatch appreciated."
    },
    items: [
      {
        product: PRODUCTS[1], // Oceanic Depths: Emerald & Deep Teal
        quantity: 1,
        selectedFraming: "Unframed Canvas Edge"
      },
      {
        product: PRODUCTS[4], // Aura Vessel: Hand-Coiled Terracotta & Teal
        quantity: 1
      }
    ],
    subtotal: 1010,
    shipping: 0,
    total: 1010,
    status: "Pending",
    paymentMethod: "Bank Transfer / WhatsApp Coordination"
  },
  {
    id: "WL-2026-9038",
    createdAt: "2026-11-05T16:45:00Z",
    customer: {
      fullName: "Soraya Haddad",
      phone: "+971 50 491 8234",
      email: "soraya.haddad@dubaiarts.ae",
      address: "Penthouse 12B, Jumeirah Beach Residence",
      city: "Dubai",
      country: "United Arab Emirates",
      preferredContact: "WhatsApp",
      notes: "Special international art crate packaging requested. Certificate of Authenticity required."
    },
    items: [
      {
        product: PRODUCTS[2], // Coral Dawn: Ethereal Diptych
        quantity: 1,
        selectedFraming: "Natural Wood"
      }
    ],
    subtotal: 740,
    shipping: 60,
    total: 800,
    status: "Shipped",
    paymentMethod: "Bank Transfer / WhatsApp Coordination"
  },
  {
    id: "WL-2026-9030",
    createdAt: "2026-10-29T11:20:00Z",
    customer: {
      fullName: "Dr. Farida Mourad",
      phone: "+20 111 726 3940",
      email: "farida.mourad@cairoclinic.org",
      address: "14 Gezira Street, Garden City",
      city: "Cairo",
      country: "Egypt",
      preferredContact: "Phone Call",
      notes: "Delivered directly to private clinic. Signed by Lydia Malak."
    },
    items: [
      {
        product: PRODUCTS[3], // Whispering Flora: Sculpted Botanical Panel
        quantity: 1,
        selectedFraming: "Natural Wood"
      }
    ],
    subtotal: 530,
    shipping: 0,
    total: 530,
    status: "Delivered",
    paymentMethod: "Cash on Art Delivery"
  }
];
