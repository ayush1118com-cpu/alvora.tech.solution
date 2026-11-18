export interface ProductFeature {
  number: string;
  title: string;
  description: string;
  iconName: string;
}

export interface ProductData {
  id: string;
  name: string;
  category: string;
  statusBadge: string;
  tagline: string;
  overview: string;
  conceptNote: string;
  coreAreas: string[];
  features: ProductFeature[];
}

export const productsData: ProductData[] = [
  {
    id: "restaurant-pos-kds",
    name: "Restaurant POS & Kitchen Display System",
    category: "Hospitality Technology Platform",
    statusBadge: "Product in Active Development & Pilot Readiness",
    tagline:
      "A connected restaurant operations solution designed to help food businesses manage counter orders, kitchen workflows, menus, and billing from one unified system.",
    overview:
      "The product concept bridges front-counter order entry, kitchen ticket preparation, and management reporting into an integrated, real-time workflow. It is engineered to streamline everyday restaurant tasks and provide a scalable foundation for multi-location hospitality chains.",
    conceptNote:
      "Designed specifically for quick-service restaurants, fine-dining establishments, and multi-outlet food chains aiming to eliminate order bottlenecks and manual ticket errors.",
    coreAreas: [
      "Point of Sale",
      "Kitchen Display",
      "Menu Management",
      "Orders",
      "Billing & Invoicing",
      "Payment Tracking",
      "Analytics",
      "Multi-Restaurant Admin",
    ],
    features: [
      {
        number: "01",
        title: "Counter POS",
        description:
          "Fast-touch order booking with customizable modifier options, table mapping, customer lookup, and instantaneous ticket creation.",
        iconName: "Monitor",
      },
      {
        number: "02",
        title: "Kitchen Display System",
        description:
          "Direct kitchen dispatch screen highlighting order age, priority badges, prep item status, and acoustic/visual order alert notifications.",
        iconName: "Tv",
      },
      {
        number: "03",
        title: "Menu Management",
        description:
          "Dynamic catalog management with variant pricing, item availability toggles, 86ing, categories, and tax rule configuration.",
        iconName: "BookOpen",
      },
      {
        number: "04",
        title: "Order Management",
        description:
          "Live lifecycle monitoring from placement and kitchen firing to table dispatch, takeaway pickup, and delivery tracking.",
        iconName: "ClipboardList",
      },
      {
        number: "05",
        title: "Billing & Payments",
        description:
          "Split billing, discount coupons, GST compliant tax receipts, thermal printer integration, and fast digital invoice dispatch via SMS/WhatsApp.",
        iconName: "Receipt",
      },
      {
        number: "06",
        title: "Payment Tracking",
        description:
          "Real-time reconciliation for UPI dynamic QR, credit/debit card swipe machines, cash float audits, and third-party delivery ledger balances.",
        iconName: "CreditCard",
      },
      {
        number: "07",
        title: "Order History & Analytics",
        description:
          "Deep operational insights covering peak hour sales spikes, best-selling recipe items, staff performance, and comparative weekly revenue charts.",
        iconName: "BarChart3",
      },
      {
        number: "08",
        title: "Multi-Restaurant Admin",
        description:
          "Centralized cloud administration to oversee multiple outlets, compare franchise metrics, enforce standard menus, and aggregate enterprise reports.",
        iconName: "Building2",
      },
    ],
  },
];
