export type ProfileStatus = "live" | "draft";

export type Social = {
  platform: "linkedin" | "instagram" | "twitter" | "github" | "dribbble" | "youtube" | "tiktok";
  url: string;
};

export type Profile = {
  id: string;
  slug: string;
  template: "minimal" | "gradient" | "bold";
  status: ProfileStatus;
  firstName: string;
  lastName: string;
  jobTitle: string;
  company: string;
  bio: string;
  email: string;
  phone: string;
  whatsapp: string;
  website: string;
  avatar: string;
  cover: string;
  accent: string;
  socials: Social[];
  visibility: {
    email: boolean;
    phone: boolean;
    whatsapp: boolean;
    website: boolean;
    socials: boolean;
  };
  views: number;
  saves: number;
  updatedAt: string;
};

export const TEMPLATES = [
  {
    id: "minimal" as const,
    name: "Minimal",
    description: "Clean, editorial, mobile-first. Perfect for executives and consultants.",
    accent: "#0d0d0f",
  },
  {
    id: "gradient" as const,
    name: "Gradient",
    description: "Warm gradient cover with soft glassy details. Made for creators.",
    accent: "#ff5a3c",
  },
  {
    id: "bold" as const,
    name: "Bold",
    description: "Statement typography on solid color. Best for founders and designers.",
    accent: "#6e6bff",
  },
];

export const initialProfiles: Profile[] = [
  {
    id: "p_1",
    slug: "camille-laurent",
    template: "gradient",
    status: "live",
    firstName: "Camille",
    lastName: "Laurent",
    jobTitle: "Brand Designer",
    company: "Studio Nord",
    bio: "Independent designer crafting identities for ambitious European startups. Based in Paris, available worldwide.",
    email: "camille@studionord.fr",
    phone: "+33 6 12 34 56 78",
    whatsapp: "+33 6 12 34 56 78",
    website: "studionord.fr",
    avatar: "https://i.pravatar.cc/240?img=47",
    cover: "",
    accent: "#ff5a3c",
    socials: [
      { platform: "linkedin", url: "https://linkedin.com/in/camille" },
      { platform: "instagram", url: "https://instagram.com/camille" },
      { platform: "dribbble", url: "https://dribbble.com/camille" },
    ],
    visibility: { email: true, phone: true, whatsapp: true, website: true, socials: true },
    views: 1284,
    saves: 73,
    updatedAt: "2026-05-08",
  },
  {
    id: "p_2",
    slug: "thomas-renard",
    template: "minimal",
    status: "live",
    firstName: "Thomas",
    lastName: "Renard",
    jobTitle: "Head of Sales",
    company: "Veltra",
    bio: "Helping B2B teams shorten their sales cycle. Ex-Salesforce, ex-Pennylane.",
    email: "thomas@veltra.io",
    phone: "+33 7 88 12 04 22",
    whatsapp: "+33 7 88 12 04 22",
    website: "veltra.io",
    avatar: "https://i.pravatar.cc/240?img=12",
    cover: "",
    accent: "#0d0d0f",
    socials: [
      { platform: "linkedin", url: "https://linkedin.com/in/thomas" },
      { platform: "twitter", url: "https://twitter.com/thomas" },
    ],
    visibility: { email: true, phone: true, whatsapp: false, website: true, socials: true },
    views: 642,
    saves: 41,
    updatedAt: "2026-05-10",
  },
  {
    id: "p_3",
    slug: "lina-okonkwo",
    template: "bold",
    status: "draft",
    firstName: "Lina",
    lastName: "Okonkwo",
    jobTitle: "Founder & CEO",
    company: "Halonn",
    bio: "Building Halonn — the operating system for modern French restaurants.",
    email: "lina@halonn.co",
    phone: "+33 6 55 09 11 02",
    whatsapp: "+33 6 55 09 11 02",
    website: "halonn.co",
    avatar: "https://i.pravatar.cc/240?img=32",
    cover: "",
    accent: "#6e6bff",
    socials: [
      { platform: "linkedin", url: "https://linkedin.com/in/lina" },
      { platform: "twitter", url: "https://twitter.com/lina" },
    ],
    visibility: { email: true, phone: false, whatsapp: true, website: true, socials: true },
    views: 0,
    saves: 0,
    updatedAt: "2026-05-12",
  },
];

export const PRODUCTS = [
  {
    id: "nfc-card-black",
    name: "Tqui NFC — Onyx",
    price: 29,
    description: "Carte PVC noire mate avec puce NFC intégrée. Partagez votre profil d'un simple tap.",
    image: "linear-gradient(135deg, #0d0d0f 0%, #2a2a2e 100%)",
  },
  {
    id: "nfc-card-ivory",
    name: "Tqui NFC — Ivoire",
    price: 29,
    description: "Finition ivoire soft-touch avec logo gaufré. Raffinée et intemporelle.",
    image: "linear-gradient(135deg, #f1efe8 0%, #d8d4c4 100%)",
  },
  {
    id: "nfc-keychain",
    name: "Porte-clés connecté",
    price: 19,
    description: "Porte-clés NFC compact. Toujours sur vous, toujours prêt à partager.",
    image: "linear-gradient(135deg, #ff5a3c 0%, #ffb86b 100%)",
  },
  {
    id: "qr-stand",
    name: "Support QR Display",
    price: 39,
    description: "Support QR en acrylique premium pour boutiques, événements et accueils.",
    image: "linear-gradient(135deg, #6e6bff 0%, #b8b6ff 100%)",
  },
];

export const FAKE_ORDERS = [
  { id: "ORD-2042", product: "Tqui NFC — Onyx", qty: 2, total: 58, status: "Livré", date: "2026-04-22" },
  { id: "ORD-2031", product: "Support QR Display", qty: 1, total: 39, status: "Expédié", date: "2026-04-10" },
  { id: "ORD-2018", product: "Porte-clés connecté", qty: 3, total: 57, status: "En cours", date: "2026-05-09" },
];

export const FAKE_TICKETS = [
  { id: "T-118", subject: "Domaine personnalisé pour mon profil", status: "Ouvert", updated: "il y a 2h" },
  { id: "T-104", subject: "Comment recommander des cartes NFC ?", status: "Résolu", updated: "il y a 3 jours" },
  { id: "T-097", subject: "Commande groupée pour 25 employés", status: "En attente", updated: "il y a 5 jours" },
];
