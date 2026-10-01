export const products = [
  {
    id: "iphone-15",
    name: "iPhone 15",
    brand: "Apple",
    category: "Phones",
    genre: "phones",
    price: 1250000,
    oldPrice: 1350000,
    rating: 4.8,
    stock: 12,
    image: "https://images.unsplash.com/photo-1695048133142-1a20484d2569?auto=format&fit=crop&w=900&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1695048133142-1a20484d2569?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1696446701796-da61225697cc?auto=format&fit=crop&w=1200&q=85"
    ],
    description: "Demo catalogue entry for an iPhone. Replace the image, price and specifications with Bailord's verified stock information.",
    specs: { Display: "6.1-inch", Storage: "128GB", Camera: "48MP", Warranty: "Replace with verified warranty" }
  },
  {
    id: "samsung-s24",
    name: "Galaxy S24",
    brand: "Samsung",
    category: "Phones",
    genre: "phones",
    price: 1100000,
    rating: 4.7,
    stock: 8,
    image: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?auto=format&fit=crop&w=900&q=85",
    gallery: ["https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?auto=format&fit=crop&w=1200&q=85"],
    description: "Demo catalogue entry. Replace with verified Bailord inventory data.",
    specs: { Display: "6.2-inch", Storage: "128GB", Camera: "Demo specification", Warranty: "Replace with verified warranty" }
  },
  {
    id: "ipad-air",
    name: "iPad Air",
    brand: "Apple",
    category: "Tablets",
    genre: "gadgets",
    price: 950000,
    rating: 4.7,
    stock: 6,
    image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&w=900&q=85",
    gallery: ["https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&w=1200&q=85"],
    description: "Demo catalogue entry for a tablet.",
    specs: { Display: "10.9-inch", Storage: "Demo", Connectivity: "Demo", Warranty: "Replace with verified warranty" }
  },
  {
    id: "macbook-air",
    name: "MacBook Air",
    brand: "Apple",
    category: "Laptops",
    genre: "gadgets",
    price: 1850000,
    rating: 4.9,
    stock: 4,
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=900&q=85",
    gallery: ["https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=1200&q=85"],
    description: "Demo catalogue entry for a laptop.",
    specs: { Display: "Demo", Memory: "Demo", Storage: "Demo", Warranty: "Replace with verified warranty" }
  },
  {
    id: "airpods-pro",
    name: "AirPods Pro",
    brand: "Apple",
    category: "Audio",
    genre: "gadgets",
    price: 380000,
    rating: 4.6,
    stock: 18,
    image: "https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?auto=format&fit=crop&w=900&q=85",
    gallery: ["https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?auto=format&fit=crop&w=1200&q=85"],
    description: "Demo catalogue entry for wireless earbuds.",
    specs: { Type: "Wireless earbuds", Feature: "Demo", Battery: "Demo", Warranty: "Replace with verified warranty" }
  },
  {
    id: "power-bank",
    name: "20,000mAh Power Bank",
    brand: "Bailord",
    category: "Accessories",
    genre: "gadgets",
    price: 65000,
    rating: 4.4,
    stock: 25,
    image: "https://images.unsplash.com/photo-1609592424844-6f1f4f7f4e7a?auto=format&fit=crop&w=900&q=85",
    gallery: ["https://images.unsplash.com/photo-1609592424844-6f1f4f7f4e7a?auto=format&fit=crop&w=1200&q=85"],
    description: "Demo accessory entry. Replace with verified product details.",
    specs: { Capacity: "20,000mAh", Ports: "Demo", FastCharge: "Demo", Warranty: "Replace with verified warranty" }
  }
];

export const categories = ["All", "Phones", "Tablets", "Laptops", "Audio", "Accessories"];
