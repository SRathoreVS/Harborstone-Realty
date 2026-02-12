import listing1 from "@/assets/listings1.jpg";
import listing2 from "@/assets/listings2.jpg";
import listing3 from "@/assets/listings3.jpg";
import listing4 from "@/assets/listings4.jpg";
import listing5 from "@/assets/listings5.jpg";
import listing6 from "@/assets/listings6.jpg";
import listing7 from "@/assets/listings7.jpg";

export const PROPERTIES = [
  {
    id: 1,
    title: "Modern Family House",
    price: "$850,000",
    location: "Los Angeles, CA",
    description:
      "A modern family house offering open living spaces, premium finishes, and excellent natural lighting.",
    images: [listing1, listing2, listing3],
    agent: { name: "Sarah Johnson", city: "Los Angeles, CA" },
  },
  {
    id: 2,
    title: "Luxury City Apartment",
    price: "$620,000",
    location: "New York, NY",
    description:
      "A luxury apartment in the heart of the city with panoramic views and contemporary interiors.",
    images: [listing2, listing3, listing4],
    agent: { name: "Michael Brown", city: "New York, NY" },
  },
  {
    id: 3,
    title: "Cozy Suburban Villa",
    price: "$740,000",
    location: "Austin, TX",
    description:
      "A cozy villa located in a quiet suburban neighborhood, perfect for families.",
    images: [listing3, listing4, listing5],
    agent: { name: "Emily Davis", city: "Austin, TX" },
  },
  {
    id: 4,
    title: "Beachside Residence",
    price: "$910,000",
    location: "Malibu, CA",
    description:
      "A stunning beachside residence with ocean views and premium outdoor spaces.",
    images: [listing4, listing5, listing6],
    agent: { name: "Daniel White", city: "Malibu, CA" },
  },
  {
    id: 5,
    title: "Downtown Condo",
    price: "$560,000",
    location: "Chicago, IL",
    description:
      "A modern downtown condo close to business districts and lifestyle amenities.",
    images: [listing5, listing6, listing7],
    agent: { name: "Olivia Green", city: "Chicago, IL" },
  },
  {
    id: 6,
    title: "Modern Loft",
    price: "$680,000",
    location: "Seattle, WA",
    description:
      "A stylish loft with contemporary design and open-plan interiors.",
    images: [listing6, listing7, listing1],
    agent: { name: "James Wilson", city: "Seattle, WA" },
  },
  {
    id: 7,
    title: "Hilltop Villa",
    price: "$790,000",
    location: "Denver, CO",
    description:
      "A hilltop villa offering scenic views and spacious modern living.",
    images: [listing7, listing1, listing2],
    agent: { name: "Sophia Martinez", city: "Denver, CO" },
  },
];
