import { PrismaPg } from '@prisma/adapter-pg';
import { PrismaClient, ServiceType } from '../generated/prisma/client';

const adapter = new PrismaPg({
  connectionString: process.env.DATABASE_URL,
});
const prisma = new PrismaClient({ adapter });

const services = [
  // ============================================
  // MAIN PACKAGES
  // ============================================
  {
    type: ServiceType.MAIN,
    title: 'Starter Package',
    slug: 'starter-package',
    description:
      'Perfect for first-time travelers. Includes basic visa consultation, document checklist, and application guidance to help you get started on your journey.',
    price: 299.0,
    oldPrice: 399.0,
    images: [
      'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800',
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800',
    ],
    specs: {
      processingTime: '7-14 business days',
      support: 'Email support',
      revisions: '1 revision included',
      consultations: '1 consultation session',
    },
    features: [
      'Initial visa eligibility assessment',
      'Document checklist preparation',
      'Application form guidance',
      'Email support',
      '1 revision included',
    ],
    region: null,
    isActive: true,
  },
  {
    type: ServiceType.MAIN,
    title: 'Professional Package',
    slug: 'professional-package',
    description:
      'Our most popular choice for serious travelers. Comprehensive visa assistance including document review, application submission support, and priority processing.',
    price: 599.0,
    oldPrice: 799.0,
    images: [
      'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800',
      'https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800',
    ],
    specs: {
      processingTime: '5-10 business days',
      support: 'Email & phone support',
      revisions: '3 revisions included',
      consultations: '3 consultation sessions',
    },
    features: [
      'Everything in Starter Package',
      'Full document review & optimization',
      'Application submission assistance',
      'Interview preparation guide',
      'Phone & email support',
      '3 revisions included',
      'Flight & hotel recommendations',
    ],
    region: null,
    isActive: true,
  },
  {
    type: ServiceType.MAIN,
    title: 'Premium Package',
    slug: 'premium-package',
    description:
      'The ultimate travel experience. End-to-end visa processing, dedicated consultant, express handling, and complete travel planning with white-glove service.',
    price: 999.0,
    oldPrice: 1299.0,
    images: [
      'https://images.unsplash.com/photo-1503220317375-aaad61436b1b?w=800',
      'https://images.unsplash.com/photo-1530789253388-582c481c54b0?w=800',
    ],
    specs: {
      processingTime: '3-5 business days',
      support: '24/7 dedicated support',
      revisions: 'Unlimited revisions',
      consultations: 'Unlimited consultations',
    },
    features: [
      'Everything in Professional Package',
      'Dedicated personal consultant',
      'Express visa processing',
      '24/7 priority support',
      'Unlimited revisions',
      'Complete travel itinerary planning',
      'Airport pickup coordination',
      'Travel insurance assistance',
      'Embassy appointment booking',
    ],
    region: null,
    isActive: true,
  },

  // ============================================
  // MICRO SERVICES
  // ============================================
  {
    type: ServiceType.MICRO,
    title: 'Document Review Service',
    slug: 'document-review-service',
    description:
      'Expert review of your visa application documents to ensure they meet all requirements and maximize your approval chances.',
    price: 49.0,
    oldPrice: null,
    images: ['https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800'],
    specs: {
      turnaround: '24-48 hours',
      documentsIncluded: 'Up to 10 documents',
    },
    features: [
      'Thorough document analysis',
      'Error identification & correction',
      'Improvement recommendations',
      'Format verification',
    ],
    region: null,
    isActive: true,
  },
  {
    type: ServiceType.MICRO,
    title: 'Interview Coaching Session',
    slug: 'interview-coaching-session',
    description:
      'One-on-one visa interview preparation with an experienced consultant. Practice common questions and build confidence.',
    price: 79.0,
    oldPrice: 99.0,
    images: [
      'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=800',
    ],
    specs: {
      duration: '60 minutes',
      format: 'Video call',
    },
    features: [
      '60-minute coaching session',
      'Mock interview practice',
      'Common questions & best answers',
      'Body language tips',
      'Recording for review',
    ],
    region: null,
    isActive: true,
  },
  {
    type: ServiceType.MICRO,
    title: 'Travel Insurance Assistance',
    slug: 'travel-insurance-assistance',
    description:
      'Get help finding the right travel insurance policy that meets visa requirements and provides comprehensive coverage.',
    price: 29.0,
    oldPrice: null,
    images: [
      'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800',
    ],
    specs: {
      coverage: 'Worldwide',
      comparison: 'Up to 5 providers',
    },
    features: [
      'Policy comparison & recommendation',
      'Coverage verification for visa',
      'Claims process guidance',
      'Emergency contact setup',
    ],
    region: null,
    isActive: true,
  },
  {
    type: ServiceType.MICRO,
    title: 'Embassy Appointment Booking',
    slug: 'embassy-appointment-booking',
    description:
      'We handle the stressful embassy appointment scheduling process for you, securing the earliest available slot.',
    price: 39.0,
    oldPrice: null,
    images: [
      'https://images.unsplash.com/photo-1568992687947-868a62a9f521?w=800',
    ],
    specs: {
      availability: 'Subject to embassy schedule',
      rescheduling: '1 free reschedule',
    },
    features: [
      'Earliest available slot booking',
      'Appointment confirmation',
      'Reminder notifications',
      'One free rescheduling',
    ],
    region: null,
    isActive: true,
  },
  {
    type: ServiceType.MICRO,
    title: 'Cover Letter Writing',
    slug: 'cover-letter-writing',
    description:
      'Professional visa cover letter crafted by experts to strengthen your application and present your case compellingly.',
    price: 59.0,
    oldPrice: 69.0,
    images: [
      'https://images.unsplash.com/photo-1455390582262-044cdead277a?w=800',
    ],
    specs: {
      delivery: '48 hours',
      revisions: '2 revisions included',
    },
    features: [
      'Custom-written cover letter',
      'Tailored to destination country',
      'Professional formatting',
      '2 revisions included',
    ],
    region: null,
    isActive: true,
  },

  // ============================================
  // DIGITAL PRODUCTS
  // ============================================
  {
    type: ServiceType.DIGITAL,
    title: 'Canada Visa Guide 2026',
    slug: 'canada-visa-guide-2026',
    description:
      'Comprehensive guide to Canadian visa applications. Covers tourist, student, and work visas with step-by-step instructions and insider tips.',
    price: 19.99,
    oldPrice: 29.99,
    images: [
      'https://images.unsplash.com/photo-1517935706615-2717063c2225?w=800',
    ],
    specs: {
      format: 'PDF',
      pages: '85 pages',
      lastUpdated: 'January 2026',
    },
    features: [
      'Step-by-step application process',
      'Document templates included',
      'Sample cover letters',
      'Interview questions & answers',
      'Free updates for 1 year',
    ],
    region: 'North America',
    isActive: true,
  },
  {
    type: ServiceType.DIGITAL,
    title: 'Schengen Visa Masterclass',
    slug: 'schengen-visa-masterclass',
    description:
      'Everything you need to know about Schengen visas. Covers all 27 countries with specific requirements and application strategies.',
    price: 24.99,
    oldPrice: 39.99,
    images: [
      'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=800',
    ],
    specs: {
      format: 'PDF + Video',
      duration: '3 hours of video',
      pages: '120 pages',
    },
    features: [
      'All 27 Schengen countries covered',
      '3 hours of video tutorials',
      'Country-specific checklists',
      'Sample itineraries',
      'Embassy contact directory',
    ],
    region: 'Europe',
    isActive: true,
  },
  {
    type: ServiceType.DIGITAL,
    title: 'UK Visa Application Toolkit',
    slug: 'uk-visa-application-toolkit',
    description:
      'Complete toolkit for UK visa applications including visitor, student, and skilled worker visas. Updated for 2026 requirements.',
    price: 21.99,
    oldPrice: null,
    images: [
      'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=800',
    ],
    specs: {
      format: 'PDF + Excel Templates',
      pages: '95 pages',
      templates: '15 templates included',
    },
    features: [
      'Visitor, student & work visa guides',
      'Excel budget calculator',
      'Document organizer templates',
      'CAS guidance for students',
      'Points calculator for skilled workers',
    ],
    region: 'Europe',
    isActive: true,
  },
  {
    type: ServiceType.DIGITAL,
    title: 'USA Tourist Visa Success Guide',
    slug: 'usa-tourist-visa-success-guide',
    description:
      'Master the B1/B2 visa application process. Learn how to demonstrate strong ties, prepare for the interview, and avoid common mistakes.',
    price: 22.99,
    oldPrice: 29.99,
    images: [
      'https://images.unsplash.com/photo-1485738422979-f5c462d49f74?w=800',
    ],
    specs: {
      format: 'PDF',
      pages: '70 pages',
      lastUpdated: 'December 2025',
    },
    features: [
      'DS-160 form walkthrough',
      'Interview preparation guide',
      'Strong ties demonstration strategies',
      '50+ sample interview Q&As',
      'Common rejection reasons & solutions',
    ],
    region: 'North America',
    isActive: true,
  },
  {
    type: ServiceType.DIGITAL,
    title: 'Australia ETA & Visa Guide',
    slug: 'australia-eta-visa-guide',
    description:
      'Navigate the Australian visa system with ease. Covers ETA, eVisitor, tourist, and working holiday visas for all nationalities.',
    price: 18.99,
    oldPrice: null,
    images: [
      'https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?w=800',
    ],
    specs: {
      format: 'PDF',
      pages: '65 pages',
      lastUpdated: 'January 2026',
    },
    features: [
      'ETA vs eVisitor comparison',
      'Health insurance requirements',
      'Working holiday visa guide',
      'Genuine Temporary Entrant tips',
      'Biometrics appointment guide',
    ],
    region: 'Oceania',
    isActive: true,
  },
  {
    type: ServiceType.DIGITAL,
    title: 'Dubai & UAE Visa Handbook',
    slug: 'dubai-uae-visa-handbook',
    description:
      'Your complete guide to UAE visas including tourist, transit, and business visas. Includes Dubai-specific tips and requirements.',
    price: 15.99,
    oldPrice: 19.99,
    images: [
      'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800',
    ],
    specs: {
      format: 'PDF',
      pages: '55 pages',
      lastUpdated: 'November 2025',
    },
    features: [
      'Visa on arrival eligibility',
      'Pre-arranged visa process',
      'Business visa requirements',
      'Transit visa guide',
      'Visa extension procedures',
    ],
    region: 'Middle East',
    isActive: true,
  },
];

async function main() {
  console.log('🌱 Starting seed...');

  // Clear existing services
  await prisma.service.deleteMany({});
  console.log('🗑️  Cleared existing services');

  // Create services
  for (const service of services) {
    const created = await prisma.service.create({
      data: service,
    });
    console.log(`✅ Created service: ${created.title}`);
  }

  console.log(`\n🎉 Seed completed! Created ${services.length} services.`);
  console.log('   - MAIN packages: 3');
  console.log('   - MICRO services: 5');
  console.log('   - DIGITAL products: 6');
}

main()
  .catch((e) => {
    console.error('❌ Seed failed:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
