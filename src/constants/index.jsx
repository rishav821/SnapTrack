import { BotMessageSquare } from "lucide-react";
import { BatteryCharging } from "lucide-react";
import { Fingerprint } from "lucide-react";
import { ShieldHalf } from "lucide-react";
import { PlugZap } from "lucide-react";
import { GlobeLock } from "lucide-react";

import user1 from "../assets/profile-pictures/user1.jpg";
import user2 from "../assets/profile-pictures/user2.jpg";
import user3 from "../assets/profile-pictures/user3.jpg";
import user4 from "../assets/profile-pictures/user4.jpg";
import user5 from "../assets/profile-pictures/user5.jpg";
import user6 from "../assets/profile-pictures/user6.jpg";

export const navItems = [
  { label: "Home", href: "/home" },
  { label: "Features", href: "#features" },
  { label: "Pricing", href: "#pricing" },
  { label: "Scan", href: "/scan" },
];

export const testimonials = [
  {
    user: "John Doe",
    company: "Stellar Solutions",
    image: user1,
    text: "This app has saved me so much time! I used to spend hours organizing receipts for my expenses. Now, I just snap a picture, and it does the rest. The automatic categorization is spot-on!",
  },
  {
    user: "Jane Smith",
    company: "Blue Horizon Technologies",
    image: user2,
    text: "I love the analytics feature. It’s so easy to see where my money is going, and the charts make it clear. Helps me stay within budget and avoid overspending",
  },
  {
    user: "David Johnson",
    company: "Quantum Innovations",
    image: user3,
    text: "The OCR feature is fantastic. It recognizes the receipt details instantly, and I rarely have to make corrections. Definitely one of the most accurate scanners I’ve used!",
  },
  {
    user: "Ronee Brown",
    company: "Fusion Dynamics",
    image: user4,
    text: "I use this app for tracking my work-related expenses, and it’s a lifesaver! Exporting reports is easy, and my accountant loves it. Just wish it supported more export formats.",
  },
  {
    user: "Michael Wilson",
    company: "Visionary Creations",
    image: user5,
    text: "Knowing my receipts are stored securely in the cloud gives me peace of mind. I don’t have to worry about losing important documents ever again!",
  },
  {
    user: "Emily Davis",
    company: "Synergy Systems",
    image: user6,
    text: "The app is super easy to use. The layout is clean, and it doesn’t take long to get the hang of it. Even my parents are using it now for their monthly bills!",
  },
];

export const features = [
  {
    icon: <BotMessageSquare />,
    text: "Effortless Receipt Scanning",
    description:
      "Capture high-quality images of your receipts directly through the app or upload saved photos from your device. Our app uses advanced scanning technology to enhance image quality and ensure accuracy.",
  },
  {
    icon: <Fingerprint />,
    text: "Automatic Text Recognition (OCR)",
    description:
      "Harness the power of Optical Character Recognition (OCR) to automatically read and extract essential information, like merchant name, date, total amount, and itemized details from your receipts in seconds.",
  },
  {
    icon: <ShieldHalf />,
    text: "Intelligent Data Categorization",
    description:
      "Automatically categorize your receipts into different spending categories, such as groceries, dining, travel, or utilities, making it easy to track your expenses effortlessly.",
  },
  {
    icon: <BatteryCharging />,
    text: "Expense Summary and AnalyticsExpense Summary and Analytics",
    description:
      "Access detailed insights into your spending habits with charts and summaries, allowing you to monitor spending patterns and manage your finances efficiently.",
  },
  {
    icon: <PlugZap />,
    text: "Secure Cloud Storage and Backup",
    description:
      "Save your receipts to secure cloud storage, so you never lose a record. Your data remains private, accessible only to you, and is backed up automatically.",
  },
  {
    icon: <GlobeLock />,
    text: "Export and Share Reports",
    description:
      "Generate monthly or quarterly reports and export your receipt data in various formats (PDF, Excel). Easily share reports with others for seamless expense management, especially useful for budgeting or tax preparation.",
  },
];

export const checklistItems = [
  {
    title: "Scan Receipts Instantly",
    description:
      "Easily scan receipts using your device’s camera, capturing clear images for quick processing.",
  },
  {
    title: "Accurate Text Recognition (OCR)",
    description:
      "Use advanced OCR to extract essential details like date, amount, and merchant name, reducing manual entry.",
  },
  {
    title: "Organize Expenses Automatically",
    description:
      "Categorize receipts into various spending categories automatically, making expense tracking effortless.",
  },
  {
    title: "Access Receipts Anytime",
    description:
      "Securely store and access all your receipts in one place, with cloud storage for reliable backup.",
  },
  {
    title: "Generate Expense Reports",
    description:
      "Create and export detailed reports to track your spending habits over time, perfect for budgeting or taxes.",
  },
];


export const pricingOptions = [
  {
    title: "Basic",
    price: "$0",
    features: [
      "Scan up to 30 receipts per month",
      "Basic expense tracking",
      "Secure cloud storage (5 GB)",
      "Basic reporting tools",
    ],
  },
  {
    title: "Plus",
    price: "$9.99",
    features: [
      "Scan unlimited receipts",
      "Advanced expense tracking",
      "Secure cloud storage (20 GB)",
      "Customizable reporting tools",
      "Export to CSV/Excel",
    ],
  },
  {
    title: "Premium",
    price: "$19.99",
    features: [
      "All features in Plus plan",
      "Advanced OCR technology",
      "Receipt categorization and tagging",
      "Priority customer support",
      "Unlimited cloud storage",
    ],
  },
];


export const resourcesLinks = [
  { href: "#", text: "Getting Started" },
  { href: "#", text: "Documentation" },
  { href: "#", text: "Tutorials" },
  { href: "#", text: "API Reference" },
  { href: "#", text: "Community Forums" },
];

export const platformLinks = [
  { href: "#", text: "Features" },
  { href: "#", text: "Supported Devices" },
  { href: "#", text: "System Requirements" },
  { href: "#", text: "Downloads" },
  { href: "#", text: "Release Notes" },
];

export const communityLinks = [
  { href: "#", text: "Events" },
  { href: "#", text: "Meetups" },
  { href: "#", text: "Conferences" },
  { href: "#", text: "Hackathons" },
  { href: "#", text: "Jobs" },
];
