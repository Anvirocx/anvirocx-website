import {
  Bot,
  BriefcaseBusiness,
  Code2,
  Database,
  Headphones,
  LayoutDashboard,
  Palette,
  PlayCircle,
  ShoppingBag,
  Users2,
  type LucideIcon,
} from "lucide-react";

export type ServicePageData = {
  slug: string;
  icon: LucideIcon;
  eyebrow: string;
  title: string;
  highlightedTitle: string;
  description: string;
  overview: string;
  services: {
    title: string;
    description: string;
  }[];
  benefits: string[];
  process: {
    number: string;
    title: string;
    description: string;
  }[];
  faqs: {
    question: string;
    answer: string;
  }[];
};

export const servicePages: ServicePageData[] = [
  {
    slug: "customer-support",
    icon: Headphones,
    eyebrow: "Customer Experience Operations",
    title: "Customer support that builds",
    highlightedTitle: "long-term loyalty.",
    description:
      "Professional email, chat and voice support designed to improve response times, customer satisfaction and retention.",
    overview:
      "ANVIROCX helps businesses deliver dependable customer experiences through trained support professionals, structured workflows and clear performance monitoring.",
    services: [
      {
        title: "Email Support",
        description:
          "Clear and professional email responses for customer questions, complaints, refunds and account-related concerns.",
      },
      {
        title: "Live Chat Support",
        description:
          "Fast real-time assistance that helps customers receive answers without unnecessary waiting.",
      },
      {
        title: "Voice Support",
        description:
          "Professional inbound and outbound call support with a customer-first communication approach.",
      },
      {
        title: "Order Assistance",
        description:
          "Support for order status, cancellations, returns, replacements and delivery-related concerns.",
      },
      {
        title: "Technical Assistance",
        description:
          "Structured first-level troubleshooting and issue escalation based on your business processes.",
      },
      {
        title: "Customer Retention",
        description:
          "Thoughtful resolution handling focused on rebuilding trust and reducing customer churn.",
      },
    ],
    benefits: [
      "Faster customer response times",
      "Consistent communication quality",
      "Email, chat and voice coverage",
      "Flexible team scaling",
      "Documented workflows and reporting",
      "Improved customer satisfaction",
    ],
    process: [
      {
        number: "01",
        title: "Requirement discovery",
        description:
          "We understand your products, customers, support channels and current challenges.",
      },
      {
        number: "02",
        title: "Workflow setup",
        description:
          "We create support guidelines, escalation paths, templates and quality standards.",
      },
      {
        number: "03",
        title: "Team onboarding",
        description:
          "The assigned support team is trained on your systems, policies and brand tone.",
      },
      {
        number: "04",
        title: "Ongoing delivery",
        description:
          "We manage daily customer interactions with monitoring, reporting and continuous improvement.",
      },
    ],
    faqs: [
      {
        question: "Which customer support channels do you provide?",
        answer:
          "We can support customers through email, live chat and voice, depending on your business requirements.",
      },
      {
        question: "Can the team work with our existing software?",
        answer:
          "Yes. The team can be trained to use your existing CRM, ticketing, e-commerce and communication systems.",
      },
      {
        question: "Can the support team scale during busy periods?",
        answer:
          "Yes. Team capacity can be adjusted based on seasonal demand, campaign activity or business growth.",
      },
    ],
  },
  {
    slug: "virtual-assistants",
    icon: Users2,
    eyebrow: "Remote Business Assistance",
    title: "Reliable virtual assistance for",
    highlightedTitle: "everyday execution.",
    description:
      "Dedicated remote professionals for administrative work, research, coordination and recurring operational tasks.",
    overview:
      "Our virtual assistants help business owners and internal teams save time by managing recurring tasks with consistency, organization and clear communication.",
    services: [
      {
        title: "Inbox Management",
        description:
          "Organizing, prioritizing and responding to business emails using approved communication guidelines.",
      },
      {
        title: "Calendar Support",
        description:
          "Scheduling meetings, managing appointments and reducing calendar conflicts.",
      },
      {
        title: "Online Research",
        description:
          "Structured research for competitors, markets, products, leads and business opportunities.",
      },
      {
        title: "Documentation",
        description:
          "Creating and organizing documents, reports, presentations and internal records.",
      },
      {
        title: "Task Coordination",
        description:
          "Following up on tasks, deadlines and communication across teams and stakeholders.",
      },
      {
        title: "Administrative Support",
        description:
          "Handling routine operational activities so your team can focus on higher-value work.",
      },
    ],
    benefits: [
      "Reduced administrative workload",
      "More time for strategic priorities",
      "Flexible part-time or full-time support",
      "Organized daily operations",
      "Clear task tracking",
      "Dependable remote execution",
    ],
    process: [
      {
        number: "01",
        title: "Task assessment",
        description:
          "We identify the tasks, tools, communication style and working hours required.",
      },
      {
        number: "02",
        title: "Assistant matching",
        description:
          "A suitable professional is selected based on your business needs.",
      },
      {
        number: "03",
        title: "Onboarding",
        description:
          "Processes, access permissions and expectations are documented clearly.",
      },
      {
        number: "04",
        title: "Ongoing support",
        description:
          "Tasks are completed with regular updates, reporting and coordination.",
      },
    ],
    faqs: [
      {
        question: "Can I hire a virtual assistant part-time?",
        answer:
          "Yes. Engagements can be structured around part-time, full-time or flexible weekly requirements.",
      },
      {
        question: "Can the assistant work in my time zone?",
        answer:
          "Working hours can be aligned with your preferred time zone and business schedule.",
      },
      {
        question: "Can I change the task responsibilities later?",
        answer:
          "Yes. Responsibilities can be adjusted as your workload and priorities evolve.",
      },
    ],
  },
  {
    slug: "back-office",
    icon: LayoutDashboard,
    eyebrow: "Back Office Operations",
    title: "Structured support behind",
    highlightedTitle: "smooth operations.",
    description:
      "Reliable administrative and operational support for documentation, reporting, records and repetitive workflows.",
    overview:
      "ANVIROCX helps businesses reduce operational pressure through organized back-office execution, documented processes and dependable task ownership.",
    services: [
      {
        title: "Document Processing",
        description:
          "Reviewing, organizing and maintaining business documents and digital records.",
      },
      {
        title: "Order Processing",
        description:
          "Managing order information, updates, verification and internal coordination.",
      },
      {
        title: "Reporting Support",
        description:
          "Preparing recurring operational reports using your preferred templates and systems.",
      },
      {
        title: "CRM Updates",
        description:
          "Maintaining accurate customer, lead and account records inside business platforms.",
      },
      {
        title: "Quality Checks",
        description:
          "Reviewing completed work for accuracy, completeness and process compliance.",
      },
      {
        title: "Process Administration",
        description:
          "Supporting recurring workflows that require structured coordination and follow-up.",
      },
    ],
    benefits: [
      "Improved process accuracy",
      "Reduced internal workload",
      "Better record organization",
      "Consistent operational execution",
      "Scalable resource support",
      "Transparent reporting",
    ],
    process: [
      {
        number: "01",
        title: "Process review",
        description:
          "We study your current workflow, responsibilities and operational challenges.",
      },
      {
        number: "02",
        title: "Documentation",
        description:
          "Tasks, standards, turnaround times and quality expectations are documented.",
      },
      {
        number: "03",
        title: "Controlled launch",
        description:
          "The workflow begins with monitored execution and quality checks.",
      },
      {
        number: "04",
        title: "Optimization",
        description:
          "Performance is reviewed regularly to improve accuracy and efficiency.",
      },
    ],
    faqs: [
      {
        question: "What type of back-office tasks can be outsourced?",
        answer:
          "Document handling, order processing, CRM updates, reporting, data verification and other repeatable operational tasks can be supported.",
      },
      {
        question: "Can you follow our existing process?",
        answer:
          "Yes. We can work within your established process or help organize it more clearly.",
      },
      {
        question: "How is quality maintained?",
        answer:
          "Quality standards, review checkpoints and reporting requirements are defined during onboarding.",
      },
    ],
  },
  {
    slug: "web-development",
    icon: Code2,
    eyebrow: "Website Development",
    title: "Modern websites built to",
    highlightedTitle: "perform and convert.",
    description:
      "Fast, responsive and conversion-focused websites for growing brands, agencies and modern businesses.",
    overview:
      "We build premium websites with clear messaging, strong visual design, responsive layouts and performance-focused development.",
    services: [
      {
        title: "Business Websites",
        description:
          "Professional multi-page websites designed to establish trust and communicate your services clearly.",
      },
      {
        title: "Landing Pages",
        description:
          "Focused landing pages built for lead generation, campaigns and product launches.",
      },
      {
        title: "Next.js Development",
        description:
          "Fast and scalable websites using modern React and Next.js architecture.",
      },
      {
        title: "Website Redesign",
        description:
          "Modernizing outdated websites with better design, structure and responsiveness.",
      },
      {
        title: "Responsive Development",
        description:
          "Layouts optimized for desktops, tablets and mobile devices.",
      },
      {
        title: "Performance Optimization",
        description:
          "Improving loading speed, usability and technical website performance.",
      },
    ],
    benefits: [
      "Premium and professional design",
      "Mobile-responsive layouts",
      "Fast loading performance",
      "SEO-friendly structure",
      "Scalable development",
      "Clear conversion pathways",
    ],
    process: [
      {
        number: "01",
        title: "Discovery",
        description:
          "We understand your audience, services, brand direction and website objectives.",
      },
      {
        number: "02",
        title: "Structure and design",
        description:
          "Page hierarchy, content sections and visual direction are planned.",
      },
      {
        number: "03",
        title: "Development",
        description:
          "The website is developed with responsive and reusable components.",
      },
      {
        number: "04",
        title: "Testing and launch",
        description:
          "The final website is tested across devices before deployment.",
      },
    ],
    faqs: [
      {
        question: "Which technology do you use?",
        answer:
          "Depending on the project, we can use Next.js, React, Shopify or another suitable platform.",
      },
      {
        question: "Will the website work on mobile devices?",
        answer:
          "Yes. Every website is designed and tested for desktop, tablet and mobile screens.",
      },
      {
        question: "Can you redesign an existing website?",
        answer:
          "Yes. We can redesign and improve an existing website without necessarily rebuilding everything from the beginning.",
      },
    ],
  },
  {
    slug: "shopify",
    icon: ShoppingBag,
    eyebrow: "Shopify Solutions",
    title: "Shopify stores designed for",
    highlightedTitle: "stronger online sales.",
    description:
      "Premium Shopify setup, design and optimization for brands building a reliable e-commerce experience.",
    overview:
      "ANVIROCX helps brands launch and improve Shopify stores with polished design, organized product presentation and conversion-focused user journeys.",
    services: [
      {
        title: "Store Setup",
        description:
          "Complete Shopify configuration including navigation, pages, settings and essential store structure.",
      },
      {
        title: "Theme Customization",
        description:
          "Customizing Shopify themes to match your brand identity and visual direction.",
      },
      {
        title: "Product Upload",
        description:
          "Organized product listings with titles, descriptions, images, variants and collections.",
      },
      {
        title: "Payment Setup",
        description:
          "Supporting payment gateway, shipping and checkout-related configuration.",
      },
      {
        title: "Conversion Optimization",
        description:
          "Improving product pages, calls to action, trust elements and checkout flow.",
      },
      {
        title: "Store Maintenance",
        description:
          "Ongoing updates, product changes and technical support for your online store.",
      },
    ],
    benefits: [
      "Professional branded storefront",
      "Organized product experience",
      "Mobile-friendly shopping",
      "Improved conversion structure",
      "Reliable store configuration",
      "Ongoing support available",
    ],
    process: [
      {
        number: "01",
        title: "Store planning",
        description:
          "We understand your products, target customers, categories and brand direction.",
      },
      {
        number: "02",
        title: "Design setup",
        description:
          "Theme, pages, collections and visual elements are configured.",
      },
      {
        number: "03",
        title: "Product integration",
        description:
          "Products, variants, descriptions and essential store settings are added.",
      },
      {
        number: "04",
        title: "Testing and launch",
        description:
          "Checkout, mobile responsiveness, payments and store navigation are reviewed.",
      },
    ],
    faqs: [
      {
        question: "Can you build a new Shopify store from scratch?",
        answer:
          "Yes. We can handle store setup, theme customization, product uploads and essential configuration.",
      },
      {
        question: "Can you improve my existing Shopify store?",
        answer:
          "Yes. We can redesign sections, improve product pages and optimize the overall shopping experience.",
      },
      {
        question: "Can you upload a large product catalog?",
        answer:
          "Yes. Product catalog upload and organization can be handled based on the information available.",
      },
    ],
  },
  {
    slug: "video-editing",
    icon: PlayCircle,
    eyebrow: "Video Editing",
    title: "Video content shaped for",
    highlightedTitle: "attention and impact.",
    description:
      "Professional editing for social media, advertisements, products and business communication.",
    overview:
      "We transform raw footage into polished video content that communicates clearly, maintains brand consistency and performs across digital platforms.",
    services: [
      {
        title: "Short-form Videos",
        description:
          "Engaging reels, shorts and vertical content for social media platforms.",
      },
      {
        title: "Product Videos",
        description:
          "Clean product-focused edits for e-commerce, advertising and promotions.",
      },
      {
        title: "Corporate Videos",
        description:
          "Professional business videos for internal communication, presentations and marketing.",
      },
      {
        title: "Advertisement Editing",
        description:
          "Focused promotional content with clear messaging and calls to action.",
      },
      {
        title: "YouTube Editing",
        description:
          "Structured long-form editing with pacing, transitions and visual enhancement.",
      },
      {
        title: "Motion Graphics",
        description:
          "Text animation, titles and graphical elements that improve visual communication.",
      },
    ],
    benefits: [
      "Professional visual presentation",
      "Platform-ready formats",
      "Consistent brand styling",
      "Clearer communication",
      "Faster content production",
      "Flexible editing support",
    ],
    process: [
      {
        number: "01",
        title: "Creative brief",
        description:
          "We understand the platform, audience, objective and preferred editing style.",
      },
      {
        number: "02",
        title: "Asset collection",
        description:
          "Raw footage, brand files, references and instructions are organized.",
      },
      {
        number: "03",
        title: "Editing",
        description:
          "The content is edited with pacing, text, transitions and visual refinement.",
      },
      {
        number: "04",
        title: "Review and delivery",
        description:
          "Feedback is applied and final files are prepared in the required format.",
      },
    ],
    faqs: [
      {
        question: "Which type of videos do you edit?",
        answer:
          "We can edit short-form social media videos, product videos, advertisements, corporate content and YouTube videos.",
      },
      {
        question: "Can you follow a specific editing style?",
        answer:
          "Yes. You can provide references, brand guidelines or sample videos for direction.",
      },
      {
        question: "Do you provide videos in different formats?",
        answer:
          "Yes. Final videos can be exported in formats suitable for Instagram, YouTube, websites and advertisements.",
      },
    ],
  },
  {
    slug: "graphic-design",
    icon: Palette,
    eyebrow: "Graphic Design",
    title: "Visual design that keeps your",
    highlightedTitle: "brand consistent.",
    description:
      "Professional graphic design for websites, social media, advertising and branded communication.",
    overview:
      "ANVIROCX creates polished visual assets that strengthen brand consistency and help businesses communicate more professionally.",
    services: [
      {
        title: "Social Media Creatives",
        description:
          "Branded graphics for Instagram, LinkedIn, Facebook and digital campaigns.",
      },
      {
        title: "Advertisement Design",
        description:
          "Focused promotional creatives designed around campaign objectives.",
      },
      {
        title: "Website Graphics",
        description:
          "Banners, visual sections, icons and supporting graphics for websites.",
      },
      {
        title: "Presentation Design",
        description:
          "Professional business presentations with clear structure and visual consistency.",
      },
      {
        title: "Marketing Materials",
        description:
          "Brochures, flyers, posters and other branded marketing assets.",
      },
      {
        title: "E-commerce Creatives",
        description:
          "Product banners, listing images and promotional visuals for online stores.",
      },
    ],
    benefits: [
      "Consistent brand presentation",
      "Professional visual quality",
      "Platform-specific formats",
      "Improved marketing communication",
      "Flexible creative support",
      "Reusable design systems",
    ],
    process: [
      {
        number: "01",
        title: "Brief",
        description:
          "We understand the objective, audience, platform and brand requirements.",
      },
      {
        number: "02",
        title: "Visual direction",
        description:
          "References, typography, color and layout direction are established.",
      },
      {
        number: "03",
        title: "Design creation",
        description:
          "The creative is developed based on the approved direction.",
      },
      {
        number: "04",
        title: "Review and delivery",
        description:
          "Feedback is applied before final files are delivered.",
      },
    ],
    faqs: [
      {
        question: "Can you design according to our brand guidelines?",
        answer:
          "Yes. Existing brand colors, fonts, logos and visual guidelines can be followed.",
      },
      {
        question: "Do you provide social media design packages?",
        answer:
          "Yes. Recurring creative support can be structured based on your monthly content requirements.",
      },
      {
        question: "Can you create product listing images?",
        answer:
          "Yes. We can create product-focused listing images and promotional e-commerce graphics.",
      },
    ],
  },
  {
    slug: "data-entry",
    icon: Database,
    eyebrow: "Data Entry Services",
    title: "Accurate data for",
    highlightedTitle: "better business decisions.",
    description:
      "Organized data processing for spreadsheets, product catalogs, records and digital business systems.",
    overview:
      "Our data entry support helps businesses maintain accurate, organized and usable information across spreadsheets, platforms and internal systems.",
    services: [
      {
        title: "Spreadsheet Entry",
        description:
          "Accurate entry and organization of business information in spreadsheets.",
      },
      {
        title: "Product Catalog Entry",
        description:
          "Uploading and organizing product titles, descriptions, images and variants.",
      },
      {
        title: "CRM Data Entry",
        description:
          "Maintaining customer, lead and account information inside CRM platforms.",
      },
      {
        title: "Data Verification",
        description:
          "Reviewing records for missing, inconsistent or incorrect information.",
      },
      {
        title: "Data Formatting",
        description:
          "Standardizing information into clear and consistent formats.",
      },
      {
        title: "Database Maintenance",
        description:
          "Supporting recurring updates and organization of digital records.",
      },
    ],
    benefits: [
      "Improved data accuracy",
      "Organized business records",
      "Reduced manual workload",
      "Consistent formatting",
      "Scalable volume support",
      "Quality review processes",
    ],
    process: [
      {
        number: "01",
        title: "Data assessment",
        description:
          "We review the source information, destination system and required format.",
      },
      {
        number: "02",
        title: "Template setup",
        description:
          "Fields, standards, validation rules and output structure are confirmed.",
      },
      {
        number: "03",
        title: "Data processing",
        description:
          "Information is entered, formatted and organized systematically.",
      },
      {
        number: "04",
        title: "Quality review",
        description:
          "Completed data is checked for accuracy, duplication and completeness.",
      },
    ],
    faqs: [
      {
        question: "Can you handle large data-entry projects?",
        answer:
          "Yes. Team size and workflow can be adjusted according to project volume and timeline.",
      },
      {
        question: "Can you work with product catalogs?",
        answer:
          "Yes. Product information can be organized and uploaded to e-commerce platforms or templates.",
      },
      {
        question: "How do you maintain accuracy?",
        answer:
          "Validation rules, standardized templates and quality checks are used throughout the workflow.",
      },
    ],
  },
  {
    slug: "ai-automation",
    icon: Bot,
    eyebrow: "AI Automation",
    title: "Smarter workflows with",
    highlightedTitle: "less manual effort.",
    description:
      "Practical automation systems that improve speed, consistency and efficiency across recurring business processes.",
    overview:
      "ANVIROCX helps businesses identify repetitive work and replace unnecessary manual steps with practical automation and AI-assisted workflows.",
    services: [
      {
        title: "Workflow Automation",
        description:
          "Connecting tools and steps to automate repetitive business activities.",
      },
      {
        title: "AI Content Workflows",
        description:
          "Structured AI-assisted processes for content drafts, summaries and internal documentation.",
      },
      {
        title: "Lead Automation",
        description:
          "Supporting lead capture, organization, follow-up and routing workflows.",
      },
      {
        title: "Support Automation",
        description:
          "Automating ticket classification, response assistance and internal support tasks.",
      },
      {
        title: "Reporting Automation",
        description:
          "Reducing manual report preparation through connected data workflows.",
      },
      {
        title: "Process Integration",
        description:
          "Connecting business applications to improve information flow and execution.",
      },
    ],
    benefits: [
      "Reduced repetitive workload",
      "Faster process execution",
      "Improved consistency",
      "Fewer manual errors",
      "Better operational visibility",
      "Scalable business workflows",
    ],
    process: [
      {
        number: "01",
        title: "Process discovery",
        description:
          "We identify repetitive tasks, bottlenecks and automation opportunities.",
      },
      {
        number: "02",
        title: "Workflow design",
        description:
          "The future process, tools, triggers and actions are planned.",
      },
      {
        number: "03",
        title: "Implementation",
        description:
          "The automation is configured, connected and tested.",
      },
      {
        number: "04",
        title: "Optimization",
        description:
          "Performance is reviewed and the workflow is improved over time.",
      },
    ],
    faqs: [
      {
        question: "Which processes can be automated?",
        answer:
          "Repetitive processes involving data movement, notifications, reporting, content assistance and task routing are often suitable.",
      },
      {
        question: "Do we need to replace our existing software?",
        answer:
          "Not always. Many automation workflows can connect and improve the tools you already use.",
      },
      {
        question: "Will automation completely replace employees?",
        answer:
          "The objective is usually to reduce repetitive work so employees can focus on judgment, communication and higher-value responsibilities.",
      },
    ],
  },
  {
    slug: "managed-remote-teams",
    icon: BriefcaseBusiness,
    eyebrow: "Managed Remote Teams",
    title: "Flexible remote teams built",
    highlightedTitle: "around your goals.",
    description:
      "Dedicated remote professionals supported through structured onboarding, coordination and performance management.",
    overview:
      "ANVIROCX helps businesses build dependable remote capacity without the complexity of independently recruiting, onboarding and managing every resource.",
    services: [
      {
        title: "Dedicated Professionals",
        description:
          "Remote specialists assigned according to your role and workload requirements.",
      },
      {
        title: "Team Coordination",
        description:
          "Clear responsibilities, schedules and communication systems for daily execution.",
      },
      {
        title: "Performance Monitoring",
        description:
          "Structured tracking of tasks, quality, productivity and agreed outcomes.",
      },
      {
        title: "Flexible Scaling",
        description:
          "Adjusting team capacity as your business demand changes.",
      },
      {
        title: "Process Documentation",
        description:
          "Creating documented workflows that support consistency and accountability.",
      },
      {
        title: "Operational Reporting",
        description:
          "Regular reporting to provide visibility into progress and performance.",
      },
    ],
    benefits: [
      "Faster team expansion",
      "Reduced hiring complexity",
      "Flexible resource scaling",
      "Clear performance ownership",
      "Structured remote operations",
      "Multiple skills through one partner",
    ],
    process: [
      {
        number: "01",
        title: "Requirement planning",
        description:
          "Roles, responsibilities, skills, working hours and outcomes are defined.",
      },
      {
        number: "02",
        title: "Team selection",
        description:
          "Suitable professionals are selected according to the engagement needs.",
      },
      {
        number: "03",
        title: "Onboarding",
        description:
          "Tools, workflows, communication channels and expectations are established.",
      },
      {
        number: "04",
        title: "Managed execution",
        description:
          "Daily work is coordinated with regular performance and quality reviews.",
      },
    ],
    faqs: [
      {
        question: "Can I begin with only one remote professional?",
        answer:
          "Yes. You can begin with a single dedicated resource and expand the team when required.",
      },
      {
        question: "Who manages the remote team?",
        answer:
          "Management structure can be customized. ANVIROCX can support coordination, reporting and performance monitoring.",
      },
      {
        question: "Can different skills be included in one team?",
        answer:
          "Yes. A combined team can include professionals from customer support, administration, design, development and operations.",
      },
    ],
  },
];

export function getServiceBySlug(slug: string) {
  return servicePages.find((service) => service.slug === slug);
}
