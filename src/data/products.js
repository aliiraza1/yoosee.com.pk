// src/data/products.js
import productimg1 from '../assets/product-img2.png';
import productimg2 from '../assets/product-img3.png';

const dummyProducts = [
  {
    id: "1",
    name: "Yoosee GW-C10 Indoor Camera",
    price: 4500,
    description: "Indoor WiFi camera with 1080p HD, motion detection, and real-time mobile alerts.",
    features: ["Motion Tracking", "Night Vision", "Two-Way Audio", "Mobile App Support"],
    images: [productimg1, productimg2],
  },
  {
    id: "2",
    name: "Yoosee GW-C20 PTZ Camera",
    price: 5200,
    description: "360° PTZ camera with advanced AI detection and smooth rotation control.",
    features: ["360° Rotation", "Smart Detection", "Cloud Storage"],
    images: [productimg2, productimg1],
  },
];

export default dummyProducts;
