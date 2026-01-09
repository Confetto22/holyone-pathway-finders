import React from "react";
import {
  CheckCircle2,
  FileText,
  Globe,
  GraduationCap,
  Briefcase,
  FileCheck,
  Plane,
  ShieldCheck,
} from "lucide-react";

// --- Types ---
export type ServiceCategory = "main" | "micro" | "digital";

export interface RichContent {
  intro?: string;
  whyChooseThis?: string[];
  benefits?: { title: string; desc: string }[];
}

export interface ServiceSpecs {
  processingTime?: string;
  validity?: string;
  docSupport?: string;
  consultation?: string;
  language?: string;
  groupSize?: string;
  category?: string;
  // Deprecated/Optional legacy fields kept for compatibility if needed, but intended for removal
  accommodation?: string;
  meals?: string;
  transportation?: string;
  animal?: string;
  ageRange?: string;
  season?: string;
}

export interface BaseServiceItem {
  id: string;
  title: string;
  description: string;
  price: number; // For ranges, we might need a display string or just use the lower bound here
  priceRange?: string;
  oldPrice?: number;
  specs?: ServiceSpecs;
  longDescription?: string;
  images?: string[];
  type: ServiceCategory;
  richContent?: RichContent;
}

export interface MainServiceItem extends BaseServiceItem {
  type: "main";
  icon: React.ReactNode;
  features: string[];
  ctaLabel: string;
  popular?: boolean;
}

export interface MicroServiceItem extends BaseServiceItem {
  type: "micro";
  icon: React.ReactNode;
}

export interface DigitalServiceItem extends BaseServiceItem {
  type: "digital";
  benefit: string;
  image: string;
  region?: string; // e.g., Canada, Europe, New Zealand
}

export type ServiceItem =
  | MainServiceItem
  | MicroServiceItem
  | DigitalServiceItem;

// --- Data ---
export const mainServices: MainServiceItem[] = [
  {
    type: "main",
    id: "pkg-starter",
    title: "Starter Guidance Package",
    description: "Essential guidance for a smooth start.",
    price: 100,
    priceRange: "$100 - $150",
    icon: <CheckCircle2 className="w-8 h-8 text-white" />,
    features: [
      "Visa eligibility assessment",
      "School or pathway recommendation",
      "Document review",
      "Email support",
    ],
    ctaLabel: "Get Started",
    specs: {
      category: "Guidance",
      processingTime: "1-2 Weeks",
      consultation: "Email Support",
    },
    images: [
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80",
    ],
  },
  {
    type: "main",
    id: "pkg-pro",
    title: "Professional Visa Support",
    description: "Comprehensive support for serious applicants.",
    price: 300,
    priceRange: "$300 - $700",
    popular: true,
    icon: <FileText className="w-8 h-8 text-white" />,
    features: [
      "Everything in Starter",
      "SOP / Motivation letter review",
      "CV / Resume formatting (ATS standard)",
      "Step-by-step application guidance",
      "Priority WhatsApp support",
    ],
    ctaLabel: "Choose Professional",
    specs: {
      category: "Full Support",
      processingTime: "2-8 Weeks",
      consultation: "Priority WhatsApp",
    },
    images: [
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&q=80",
    ],
  },
  {
    type: "main",
    id: "pkg-premium",
    title: "Premium Full-Service Handling",
    description: "White-glove service for complete peace of mind.",
    price: 1000,
    priceRange: "$1,000 - $4,000",
    icon: <Briefcase className="w-8 h-8 text-white" />,
    features: [
      "Everything in Professional",
      "Unlimited consultations",
      "Job search support (if applicable)",
      "Dedicated case officer",
      "Interview preparation",
      "Full visa coaching",
      "Dedicated take-off support",
    ],
    ctaLabel: "Get Premium",
    specs: {
      category: "Premium",
      processingTime: "Priority",
      consultation: "Unlimited & Dedicated",
    },
    images: [
      "https://images.unsplash.com/photo-1521791136064-7985c2d1100b?w=800&q=80",
    ],
  },
];

export const microServices: MicroServiceItem[] = [
  {
    type: "micro",
    id: "ms-1",
    title: "Visa Eligibility Check",
    description: "Quick assessment to identify your best visa options.",
    price: 20,
    icon: <CheckCircle2 className="w-6 h-6 text-[#6CB43F]" />,
  },
  {
    type: "micro",
    id: "ms-2",
    title: "Document Review",
    description: "Review for errors, gaps, and inconsistencies.",
    price: 30,
    icon: <FileCheck className="w-6 h-6 text-[#6CB43F]" />,
  },
  {
    type: "micro",
    id: "ms-3",
    title: "SOP / Motivation Letter Writing",
    description: "Professionally written statement aligned with requirements.",
    price: 40,
    icon: <FileText className="w-6 h-6 text-[#6CB43F]" />,
  },
  {
    type: "micro",
    id: "ms-4",
    title: "Proof of Funds Guidance",
    description: "Understand required amounts and proper presentation.",
    price: 20,
    icon: <ShieldCheck className="w-6 h-6 text-[#6CB43F]" />,
  },
  {
    type: "micro",
    id: "ms-5",
    title: "School Admission Guidance",
    description: "Selection based on profile and budget.",
    price: 30,
    icon: <GraduationCap className="w-6 h-6 text-[#6CB43F]" />,
  },
  {
    type: "micro",
    id: "ms-6",
    title: "Canada Job Search Support",
    description: "ATS-optimized CV + leads + strategy.",
    price: 50,
    icon: <Briefcase className="w-6 h-6 text-[#6CB43F]" />,
  },
  {
    type: "micro",
    id: "ms-7",
    title: "PR Pathway Consultation",
    description: "Explore permanent residence options.",
    price: 50,
    icon: <Globe className="w-6 h-6 text-[#6CB43F]" />,
  },
  {
    type: "micro",
    id: "ms-8",
    title: "Flight Reservation",
    description: "Visa-compliant reservation (no ticket purchase).",
    price: 20,
    icon: <Plane className="w-6 h-6 text-[#6CB43F]" />,
  },
  {
    type: "micro",
    id: "ms-9",
    title: "Travel Insurance Support",
    description: "Guidance on visa-acceptable insurance.",
    price: 25,
    icon: <ShieldCheck className="w-6 h-6 text-[#6CB43F]" />,
  },
];

export const digitalServices: DigitalServiceItem[] = [
  // Canada
  {
    type: "digital",
    id: "ds-can-1",
    title: "Canada Visa Approval Toolkit",
    description:
      "A complete step-by-step toolkit designed to simplify navigating Canadian visa applications, including checklists and form guides.",
    benefit: "Save time and avoid mistakes.",
    price: 25,
    region: "Canada",
    image:
      "https://images.unsplash.com/photo-1517935706615-2717063c2225?w=600&q=80",
  },
  {
    type: "digital",
    id: "ds-can-2",
    title: "Verified Canada Employer List",
    description:
      "A verified database of Canadian employers actively hiring foreign workers, categorized by industry and province.",
    benefit: "Target the right employers.",
    price: 30,
    region: "Canada",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80",
  },
  {
    type: "digital",
    id: "ds-can-3",
    title: "Canada PR Roadmap Guide",
    description:
      "Your ultimate roadmap to Permanent Residency, breaking down Express Entry, PNP, and documentation requirements.",
    benefit: "Clear path to PR.",
    price: 25,
    region: "Canada",
    image:
      "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?w=800&q=80",
  },

  // Europe
  {
    type: "digital",
    id: "ds-eu-1",
    title: "Study Visa SOP Template Pack",
    description:
      "Five professionally written Statement of Purpose (SOP) samples tailored for study visa success in top European universities.",
    benefit: "Write compelling SOPs.",
    price: 20,
    region: "Europe",
    image:
      "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=800&q=80",
  },
  {
    type: "digital",
    id: "ds-eu-2",
    title: "Austria Red-White-Red Card Guide",
    description:
      "A detailed guide for Austria's Red-White-Red Card, covering eligibility, point systems, and application procedures.",
    benefit: "Navigate Austrian immigration.",
    price: 30,
    region: "Europe",
    image:
      "https://images.unsplash.com/photo-1602615181009-a9dacd14e11c?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2FuYWRhJTIwc2Nob29sfGVufDB8fDB8fHww",
  },
  {
    type: "digital",
    id: "ds-eu-3",
    title: "Portugal Job Seeker Visa Guide",
    description:
      "Strategic advice for the Job Seeker Visa, including interview tips, CV formats, and finding accommodation in Portugal.",
    benefit: "Live and work in Portugal.",
    price: 20,
    region: "Europe",
    image:
      "https://images.unsplash.com/photo-1744684275002-1ce258099989?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y2FuYWRhJTIwc2Nob29sfGVufDB8fDB8fHww",
  },
  {
    type: "digital",
    id: "ds-eu-4",
    title: "Germany Opportunity Card Guide",
    description:
      "Essential checklist and step-by-step guide for Germany's new Opportunity Card (Chancenkarte) for skilled workers.",
    benefit: "Access the German job market.",
    price: 20,
    region: "Europe",
    image:
      "https://images.unsplash.com/photo-1675583102281-1f63001e22d0?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGNhbmFkYSUyMHNjaG9vbHxlbnwwfHwwfHx8MA%3D%3D",
  },

  // New Zealand
  {
    type: "digital",
    id: "ds-nz-1",
    title: "NZ Accredited Employer List",
    description:
      "A curated list of New Zealand Accredited Employers ready to support visa applications for overseas talent.",
    benefit: "Find sponsored jobs.",
    price: 25,
    region: "New Zealand",
    image:
      "https://images.unsplash.com/photo-1674676489994-e7d66897724e?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGNhbmFkYSUyMHNjaG9vbHxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    type: "digital",
    id: "ds-nz-2",
    title: "New Zealand Work Visa Guide",
    description:
      "Comprehensive instructions for New Zealand work visas, including Accredited Employer Work Visa (AEWV) details.",
    benefit: "Apply with confidence.",
    price: 15,
    region: "New Zealand",
    image:
      "https://images.unsplash.com/photo-1550084281-983b134f8eeb?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGNhbmFkYSUyMHNjaG9vbHxlbnwwfHwwfHx8MA%3D%3D",
  },

  // Others/General
  {
    type: "digital",
    id: "ds-gen-1",
    title: "Conference Visa Strategy Guide",
    description:
      "Proven strategies for securing conference visas, including invitation letter templates and interview preparation.",
    benefit: "Attend global events.",
    price: 30,
    region: "Conferences",
    image:
      "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=800&q=80",
  },
  {
    type: "digital",
    id: "ds-gen-2",
    title: "Complete Relocation Checklist",
    description:
      "The ultimate moving checklist ensuring you don't forget documents, banking, housing, or packing essentials.",
    benefit: "Stress-free move.",
    price: 15,
    region: "Relocation / Students",
    image:
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&q=80",
  },
  {
    type: "digital",
    id: "ds-gen-3",
    title: "International Student Survival Guide",
    description:
      "Essential tips for international students on culture shock, finding jobs, budgeting, and academic success abroad.",
    benefit: "Adapt quickly.",
    price: 15,
    region: "Relocation / Students",
    image:
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=600&q=80",
  },
];

export const getAllServices = (): ServiceItem[] => {
  return [...mainServices, ...microServices, ...digitalServices];
};

export const getServiceById = (id: string): ServiceItem | undefined => {
  return getAllServices().find((s) => s.id === id);
};
