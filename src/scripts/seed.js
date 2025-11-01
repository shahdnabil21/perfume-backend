import mongoose from "mongoose";
import Product from "../models/product.js";

import dotenv from "dotenv";

dotenv.config();

const env = process.env;

console.log(env);

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb+srv://shahdelmahdy22:fnU77oxDCprZqKup@cluster0.e5nztew.mongodb.net/?appName=PerfumeStore");
    console.log("MongoDB Connected");
  } catch (err) {
    console.error("Database connection error:", err);
    process.exit(1);
  }
};

const quickProducts = [
  {
    name: "Midnight Elegance",

    price: 89.99,
    image: "/luxury-perfume-bottle-midnight-elegance.jpg",
    description: "A sophisticated blend of dark florals and woody notes",
    notes: ["Bergamot", "Jasmine", "Sandalwood"],

    stock: 25,
  },
  {
    name: "Summer Breeze",
    price: 65.99,
    image: "/light-fresh-perfume-bottle-summer.jpg",
    description: "Light and refreshing citrus fragrance perfect for warm days",
    notes: ["Lemon", "Coconut", "Musk"],
    stock: 15,
  },
  {
    name: "Rose Garden",
    price: 75.99,
    image: "/rose-perfume-bottle-floral.jpg",
    description: "Romantic rose fragrance with hints of vanilla",
    notes: ["Rose", "Peony", "Vanilla"],
    stock: 52,
  },
  {
    name: "Ocean Mist",
    price: 72.99,
    image: "/aquatic-perfume-bottle-ocean.jpg",
    description: "Fresh aquatic scent with marine and mineral notes",
    notes: ["Sea Salt", "Ambroxan", "Driftwood"],
    stock: 45,
  },
  {
    name: "Spice Noir",
    price: 95.99,
    image: "/dark-spice-perfume-bottle-oriental.jpg",
    description: "Warm and sensual with exotic spices and amber",
    notes: ["Cardamom", "Cinnamon", "Amber"],
    stock: 21,
  },
  {
    name: "Citrus Sunrise",
    price: 68.99,
    image: "/citrus-perfume-bottle-sunrise.jpg",
    description: "Energizing citrus blend to start your day",
    notes: ["Orange", "Grapefruit", "Neroli"],
    stock: 2,
  },
  {
    name: "Velvet Nights",
    price: 99.99,
    image: "/luxury-dark-perfume-bottle-velvet.jpg",
    description: "Deep and mysterious with oud and leather notes",
    notes: ["Oud", "Leather", "Musk"],
    stock: 0,
  },
  {
    name: "Lavender Dreams",
    price: 62.99,
    image: "/lavender-perfume-bottle-calming.jpg",
    description: "Calming lavender with soft floral undertones",
    notes: ["Lavender", "Chamomile", "Geranium"],
    stock: 10,
  },
  {
    name: "Amber Dusk",
    price: 88.5,
    image: "/amber-perfume-bottle-dusk.jpg",
    description: "Golden amber with smoky vanilla and patchouli",
    notes: ["Amber", "Patchouli", "Vanilla"],
    stock: 15,
  },
  {
    name: "Jasmine Whisper",
    price: 74.99,
    image: "/jasmine-perfume-bottle-white.jpg",
    description: "Delicate jasmine petals with soft musk and vanilla",
    notes: ["Jasmine", "Musk", "Vanilla"],
    stock: 5,
  },
  {
    name: "Noir Intense",
    price: 105.99,
    image: "/black-perfume-bottle-noir-intense.jpg",
    description: "Bold and powerful with black pepper and tobacco",
    notes: ["Black Pepper", "Tobacco", "Cedarwood"],
    stock: 14,
  },
  {
    name: "Pure Blossom",
    price: 64.99,
    image: "/white-blossom-perfume-bottle.jpg",
    description: "Gentle floral blend with lily and freesia notes",
    notes: ["Lily", "Freesia", "Pear"],

    stock: 45,
  },
  {
    name: "Mystic Oud",
    price: 110.0,
    image: "/oud-perfume-bottle-mystic.jpg",
    description: "Rich oriental oud with incense and rose accents",
    notes: ["Oud", "Rose", "Incense"],
    stock: 5,
  },
  {
    name: "Vanilla Sky",
    price: 71.99,
    image: "/vanilla-sky-perfume-bottle.jpg",
    description: "Sweet and creamy vanilla wrapped in soft musk",
    notes: ["Vanilla", "Musk", "Coconut"],
    stock: 12,
  },
  {
    name: "Cedar Whisper",
    price: 78.99,
    image: "/cedar-wood-perfume-bottle.jpg",
    description: "Earthy and grounding blend of cedarwood and vetiver",
    notes: ["Cedarwood", "Vetiver", "Amber"],
    stock: 11,
  },
  {
    name: "Crimson Bloom",
    price: 85.0,
    image: "/crimson-floral-perfume-bottle.jpg",
    description: "Vibrant floral bouquet with pomegranate and rose",
    notes: ["Pomegranate", "Rose", "Peony"],
    stock: 10,
  },
  {
    name: "Silver Rain",
    price: 69.99,
    image: "/silver-rain-perfume-bottle.jpg",
    description: "Clean and airy with citrus and white musk notes",
    notes: ["Lime", "Aqua", "White Musk"],

    rating: 4.4,
    stock: 15,
  },
  {
    name: "Arabian Nights",
    price: 120.0,
    image: "/arabian-nights-perfume-bottle.jpg",
    description: "Exotic blend of oud, saffron, and amber inspired by the Mt",
    notes: ["Oud", "Saffron", "Amber"],
    stock: 0,
  },
  {
    name: "Peach Blossom",
    price: 67.99,
    image: "/peach-blossom-perfume-bottle.jpg",
    description: "Sweet fruity fragrance with peach and jasmine notes",
    notes: ["Peach", "Jasmine", "Vanilla"],
    stock: 0,
  },
];

const seedDatabase = async () => {
  try {
    await connectDB();

    // Insert new products
    console.log("Inserting sample products...");
    const products = await Product.insertMany(quickProducts);

    console.log(`✅ Successfully added ${products.length} products:`);
    products.forEach((p) => console.log(`   - ${p.name} ($${p.price})`));
  } catch (error) {
    console.error("❌ Error seeding database:", error);
  } finally {
    await mongoose.connection.close();
    console.log("Database connection closed");
  }
};

// Run the seeder
seedDatabase();
