import house1 from "@/assets/house1.jpg";
import house2 from "@/assets/house2.jpg";
import house3 from "@/assets/house3.jpg";
import house4 from "@/assets/house4.jpg";
import house5 from "@/assets/house5.jpg";
import house6 from "@/assets/house6.jpg";
import house7 from "@/assets/house7.jpg";
import house8 from "@/assets/house8.jpg";
import house9 from "@/assets/house9.jpg";
import house10 from "@/assets/house10.jpg";
import house11 from "@/assets/house11.jpg";
import house12 from "@/assets/house12.jpg";

export interface Listing {
  id: number;
  title: string;
  type: "buy" | "rent";
  price: number;
  state: string;
  city: string;
  bedrooms: number;
  image: string;
  createdAt: number;
}

export const LISTINGS: Listing[] = [
  {
    id: 1,
    title: "Modern Family House",
    type: "buy",
    price: 850000,
    state: "California",
    city: "Los Angeles",
    bedrooms: 4,
    image: house1,
    createdAt: Date.now() - 2 * 24 * 60 * 60 * 1000,
  },
  {
    id: 2,
    title: "Luxury City Apartment",
    type: "buy",
    price: 620000,
    state: "New York",
    city: "New York City",
    bedrooms: 3,
    image: house2,
    createdAt: Date.now() - 1 * 24 * 60 * 60 * 1000,
  },
  {
    id: 3,
    title: "Cozy Suburban Villa",
    type: "buy",
    price: 740000,
    state: "Texas",
    city: "Austin",
    bedrooms: 4,
    image: house3,
    createdAt: Date.now(),
  },
  {
    id: 4,
    title: "Beachside Residence",
    type: "buy",
    price: 910000,
    state: "California",
    city: "San Diego",
    bedrooms: 5,
    image: house4,
    createdAt: Date.now() - 3 * 24 * 60 * 60 * 1000,
  },
  {
    id: 5,
    title: "Downtown Condo",
    type: "buy",
    price: 560000,
    state: "Illinois",
    city: "Chicago",
    bedrooms: 2,
    image: house5,
    createdAt: Date.now() - 4 * 24 * 60 * 60 * 1000,
  },
  {
    id: 6,
    title: "Modern Loft",
    type: "rent",
    price: 2800,
    state: "California",
    city: "Los Angeles",
    bedrooms: 3,
    image: house6,
    createdAt: Date.now() - 5 * 24 * 60 * 60 * 1000,
  },
  {
    id: 7,
    title: "Hilltop Villa",
    type: "buy",
    price: 790000,
    state: "Texas",
    city: "Dallas",
    bedrooms: 4,
    image: house7,
    createdAt: Date.now() - 6 * 24 * 60 * 60 * 1000,
  },
  {
    id: 8,
    title: "Cozy Apartment",
    type: "rent",
    price: 1800,
    state: "New York",
    city: "New York City",
    bedrooms: 2,
    image: house8,
    createdAt: Date.now() - 7 * 24 * 60 * 60 * 1000,
  },
  {
    id: 9,
    title: "Spacious Family Home",
    type: "buy",
    price: 650000,
    state: "Texas",
    city: "Austin",
    bedrooms: 5,
    image: house9,
    createdAt: Date.now() - 8 * 24 * 60 * 60 * 1000,
  },
  {
    id: 10,
    title: "Urban Studio",
    type: "rent",
    price: 1500,
    state: "California",
    city: "San Diego",
    bedrooms: 1,
    image: house10,
    createdAt: Date.now() - 9 * 24 * 60 * 60 * 1000,
  },
  {
    id: 11,
    title: "Luxury Penthouse",
    type: "buy",
    price: 1200000,
    state: "New York",
    city: "New York City",
    bedrooms: 4,
    image: house11,
    createdAt: Date.now() - 10 * 24 * 60 * 60 * 1000,
  },
  {
    id: 12,
    title: "Garden House",
    type: "buy",
    price: 550000,
    state: "Illinois",
    city: "Chicago",
    bedrooms: 3,
    image: house12,
    createdAt: Date.now() - 11 * 24 * 60 * 60 * 1000,
  },
];
