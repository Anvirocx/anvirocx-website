export type ServiceCapability = {
  title: string;
  description: string;
};

export type ServiceProcessStep = {
  number: string;
  title: string;
  description: string;
};

export type ServiceFaq = {
  question: string;
  answer: string;
};

export type ServicePage = {
  slug: string;
  iconName: string;
  eyebrow: string;
  title: string;
  highlightedTitle: string;
  description: string;
  overview: string;
  services: ServiceCapability[];
  industries: string[];
  benefits: string[];
  process: ServiceProcessStep[];
  faqs: ServiceFaq[];
  chatbotQuestions: string[];
  relatedSlugs: string[];
};

const commonProcess: ServiceProcessStep[] = [
  {
    number: "01",
    title: "Discovery",
    description:
      "We understand your business, objectives, existing workflow, challenges and expected outcomes.",
  },
  {
    number: "02",
    title: "Solution design",
    description:
      "We recommend the right team structure, tools, processes, communication model and delivery plan.",
  },
  {
    number: "03",
    title: "Onboarding",
    description:
      "Our team is aligned with your brand guidelines, systems, quality standards and operating procedures.",
  },
  {
    number: "04",
    title: "Launch",
    description:
      "The engagement goes live with defined responsibilities, reporting cycles and escalation paths.",
  },
  {
    number: "05",
    title: "Optimization",
    description:
      "We review performance regularly and improve the workflow as your requirements evolve.",
  },
];

export const servicePages: ServicePage[] = [
  {
    slug: "customer-support",
    iconName: "headphones",
    eyebrow: "Customer experience operations",
    title: "Customer Support",
    highlightedTitle: "that protects your brand.",
    description:
      "Professional email, chat and voice support designed to improve response quality, customer satisfaction and operational consistency.",
    overview:
      "ANVIROCX helps businesses manage customer conversations across multiple channels. Our support professionals work within your existing tools, follow your approved processes and represent your brand with clarity, empathy and accountability.",
    services: [
      {
        title: "Email support",
        description:
          "Structured handling of enquiries, complaints, account issues, refunds and follow-up conversations.",
      },
      {
        title: "Live chat support",
        description:
          "Fast, conversational assistance for website visitors and existing customers.",
      },
      {
        title: "Voice support",
        description:
          "Professional inbound and outbound calling based on your scripts, policies and escalation rules.",
      },
      {
        title: "Order management",
        description:
          "Assistance with order status, cancellations, replacements, returns and delivery-related concerns.",
      },
      {
        title: "Technical assistance",
        description:
          "First-level troubleshooting, guided resolutions and escalation to specialist teams when required.",
      },
      {
        title: "CRM management",
        description:
          "Accurate ticket categorization, customer notes, follow-ups and record maintenance.",
      },
      {
        title: "Social support",
        description:
          "Customer communication across social inboxes, comments and brand support channels.",
      },
      {
        title: "Quality monitoring",
        description:
          "Review frameworks, coaching inputs and reporting to maintain consistent service quality.",
      },
    ],
    industries: [
      "E-commerce",
      "SaaS",
      "Healthcare",
      "Education",
      "Travel",
      "Logistics",
      "Real estate",
      "Professional services",
    ],
    benefits: [
      "Email, chat and voice support options",
      "Flexible working-hour coverage",
      "Brand-aligned communication",
      "Documented escalation workflows",
      "CRM and helpdesk compatibility",
      "Quality checks and reporting",
      "Scalable dedicated or shared teams",
      "NDA-ready engagement model",
    ],
    process: commonProcess,
    faqs: [
      {
        question: "Which customer support channels can you manage?",
        answer:
          "We can support email, live chat, inbound and outbound calls, social media messages and CRM-based ticket workflows.",
      },
      {
        question: "Can your team work inside our existing helpdesk?",
        answer:
          "Yes. We can work with your approved CRM, ticketing system, knowledge base and internal communication tools.",
      },
      {
        question: "Can the service be customized for our business?",
        answer:
          "Yes. Channels, team size, working hours, scripts, workflows, reporting and escalation procedures can be customized.",
      },
      {
        question: "How do you maintain brand consistency?",
        answer:
          "We use your approved tone, SOPs, templates, knowledge resources and quality guidelines during onboarding and delivery.",
      },
      {
        question: "Do you provide dedicated agents?",
        answer:
          "Dedicated, shared and project-based delivery models can be discussed according to workload and requirements.",
      },
    ],
    chatbotQuestions: [
      "Which support channels are available?",
      "Can I hire dedicated agents?",
      "How does onboarding work?",
      "Can you provide multilingual support?",
    ],
    relatedSlugs: [
      "back-office",
      "virtual-assistant",
      "managed-remote-teams",
    ],
  },
  {
    slug: "virtual-assistant",
    iconName: "user-round-check",
    eyebrow: "Remote business assistance",
    title: "Virtual Assistants",
    highlightedTitle: "for your daily operations.",
    description:
      "Reliable remote assistance for administrative, operational, research and coordination responsibilities.",
    overview:
      "Our virtual assistants help founders, executives and growing teams reduce administrative workload. Responsibilities can be organized around defined schedules, recurring tasks or ongoing business support.",
    services: [
      {
        title: "Inbox management",
        description:
          "Email organization, follow-up tracking, categorization and response preparation.",
      },
      {
        title: "Calendar coordination",
        description:
          "Meeting scheduling, reminders, availability coordination and calendar maintenance.",
      },
      {
        title: "Research support",
        description:
          "Structured online research, data collection and summarized findings.",
      },
      {
        title: "Document preparation",
        description:
          "Business documents, reports, spreadsheets, presentations and routine updates.",
      },
      {
        title: "Customer follow-ups",
        description:
          "Professional follow-up communication with customers, leads, vendors and partners.",
      },
      {
        title: "Administrative support",
        description:
          "Recurring operational tasks managed according to your instructions and priorities.",
      },
    ],
    industries: [
      "Consulting",
      "E-commerce",
      "Real estate",
      "Coaching",
      "SaaS",
      "Healthcare",
      "Recruitment",
      "Professional services",
    ],
    benefits: [
      "Flexible task allocation",
      "Documented workflows",
      "Daily or weekly reporting",
      "Reduced administrative workload",
      "Dedicated support options",
      "Confidentiality-focused delivery",
    ],
    process: commonProcess,
    faqs: [
      {
        question: "Can I hire a virtual assistant for selected hours?",
        answer:
          "The engagement can be structured according to recurring hours, selected tasks or a dedicated working model.",
      },
      {
        question: "Can the assistant use our tools?",
        answer:
          "Yes. Access can be provided to approved tools based on the permissions and security process you define.",
      },
      {
        question: "How are tasks tracked?",
        answer:
          "Tasks can be tracked through your preferred task-management platform, shared documents or scheduled reports.",
      },
      {
        question: "Can I change responsibilities later?",
        answer:
          "Yes. Responsibilities can evolve as long as the updated scope, expectations and required training are clearly defined.",
      },
    ],
    chatbotQuestions: [
      "What tasks can a virtual assistant handle?",
      "Can I hire an assistant part-time?",
      "How are tasks and hours tracked?",
      "Can you support executives?",
    ],
    relatedSlugs: ["data-entry", "back-office", "managed-remote-teams"],
  },
  {
    slug: "back-office",
    iconName: "briefcase-business",
    eyebrow: "Business process support",
    title: "Back Office",
    highlightedTitle: "operations made simpler.",
    description:
      "Structured operational support for repetitive, documentation-heavy and process-driven business responsibilities.",
    overview:
      "We help businesses manage routine back-office activities with clearly documented processes. The service can support internal teams by reducing manual workload and improving operational organization.",
    services: [
      {
        title: "Order processing",
        description:
          "Order verification, system updates, documentation and coordination with relevant teams.",
      },
      {
        title: "Records management",
        description:
          "Accurate organization and maintenance of digital business records.",
      },
      {
        title: "Invoice support",
        description:
          "Invoice preparation assistance, record updates and basic reconciliation support.",
      },
      {
        title: "Catalog operations",
        description:
          "Product details, listing updates, categorization and inventory-related data maintenance.",
      },
      {
        title: "Reporting support",
        description:
          "Routine operational reports prepared using approved formats and data sources.",
      },
      {
        title: "Workflow coordination",
        description:
          "Follow-ups and status tracking across internal teams, vendors and operational systems.",
      },
    ],
    industries: [
      "E-commerce",
      "Retail",
      "Logistics",
      "Healthcare",
      "Finance operations",
      "Travel",
      "Manufacturing",
      "Professional services",
    ],
    benefits: [
      "Reduced repetitive workload",
      "Clearly documented procedures",
      "Improved record organization",
      "Flexible operational capacity",
      "Regular activity reporting",
      "Process-focused execution",
    ],
    process: commonProcess,
    faqs: [
      {
        question: "Which back-office processes can you manage?",
        answer:
          "We can assist with order processing, records, catalog operations, documentation, reporting and other rule-based workflows.",
      },
      {
        question: "Can you follow our internal SOPs?",
        answer:
          "Yes. Work is delivered according to approved instructions, access levels and quality requirements.",
      },
      {
        question: "Can the team handle recurring daily work?",
        answer:
          "Yes. Recurring workflows can be scheduled and reported through an agreed operating rhythm.",
      },
      {
        question: "How is accuracy maintained?",
        answer:
          "Accuracy can be supported through checklists, reviews, validation rules and documented exception handling.",
      },
    ],
    chatbotQuestions: [
      "Which back-office tasks can you manage?",
      "Can you handle daily recurring workflows?",
      "How do you maintain accuracy?",
      "Can you work with our internal tools?",
    ],
    relatedSlugs: ["data-entry", "customer-support", "virtual-assistant"],
  },
  {
    slug: "website-development",
    iconName: "code-2",
    eyebrow: "Digital product development",
    title: "Website Development",
    highlightedTitle: "built for business growth.",
    description:
      "Modern, responsive and performance-focused websites designed around your brand, users and business objectives.",
    overview:
      "We build professional websites for businesses that need stronger presentation, better user experience and a scalable digital foundation. Projects can include design, development, integrations, deployment and ongoing improvements.",
    services: [
      {
        title: "Business websites",
        description:
          "Professional websites presenting your company, services, value proposition and contact journey.",
      },
      {
        title: "Landing pages",
        description:
          "Conversion-focused campaign and service pages with clear messaging and calls to action.",
      },
      {
        title: "E-commerce websites",
        description:
          "Online storefronts with product pages, cart, checkout and operational integrations.",
      },
      {
        title: "Frontend development",
        description:
          "Responsive interfaces developed with modern web technologies and reusable components.",
      },
      {
        title: "Website redesign",
        description:
          "Visual, structural and usability improvements for existing websites.",
      },
      {
        title: "Maintenance",
        description:
          "Updates, content changes, issue resolution and ongoing technical support.",
      },
    ],
    industries: [
      "E-commerce",
      "SaaS",
      "Professional services",
      "Healthcare",
      "Education",
      "Hospitality",
      "Real estate",
      "Startups",
    ],
    benefits: [
      "Responsive mobile-first layouts",
      "Clear conversion journeys",
      "Scalable component architecture",
      "Performance-conscious development",
      "SEO-ready page structure",
      "Deployment and launch assistance",
    ],
    process: commonProcess,
    faqs: [
      {
        question: "Which technologies do you use?",
        answer:
          "The technology stack is selected according to the project. This may include Next.js, React, Shopify and supporting services.",
      },
      {
        question: "Can you redesign an existing website?",
        answer:
          "Yes. We can improve the visual design, information structure, responsiveness and user journey of an existing site.",
      },
      {
        question: "Will the website work on mobile devices?",
        answer:
          "Responsive behavior is included so that the website can adapt across common desktop, tablet and mobile screen sizes.",
      },
      {
        question: "Can you maintain the website after launch?",
        answer:
          "Ongoing maintenance, updates and improvement support can be discussed as a separate engagement.",
      },
    ],
    chatbotQuestions: [
      "How much does a website cost?",
      "Which technology will you use?",
      "Can you redesign my current website?",
      "How long does development take?",
    ],
    relatedSlugs: ["shopify-development", "graphic-design", "ai-automation"],
  },
  {
    slug: "shopify-development",
    iconName: "shopping-bag",
    eyebrow: "Commerce experience development",
    title: "Shopify Development",
    highlightedTitle: "for modern online stores.",
    description:
      "Shopify design, development and optimization services for brands that want a professional and manageable storefront.",
    overview:
      "We help businesses launch and improve Shopify stores with branded layouts, product organization, conversion-focused pages and practical integrations.",
    services: [
      {
        title: "Store setup",
        description:
          "Core Shopify configuration, navigation, collections and essential store settings.",
      },
      {
        title: "Theme customization",
        description:
          "Brand-focused theme adjustments, layouts, sections and responsive improvements.",
      },
      {
        title: "Product migration",
        description:
          "Structured transfer and organization of product information where technically possible.",
      },
      {
        title: "Conversion improvements",
        description:
          "User journey, product-page and checkout-related recommendations and implementation.",
      },
      {
        title: "App integration",
        description:
          "Integration of suitable Shopify applications based on business requirements.",
      },
      {
        title: "Store maintenance",
        description:
          "Ongoing updates, content changes, troubleshooting and storefront improvements.",
      },
    ],
    industries: [
      "Jewellery",
      "Fashion",
      "Beauty",
      "Home products",
      "Accessories",
      "Lifestyle",
      "Food brands",
      "Digital products",
    ],
    benefits: [
      "Branded storefront experience",
      "Mobile-responsive layouts",
      "Organized product structure",
      "Clear shopping journey",
      "Practical app integrations",
      "Ongoing store support options",
    ],
    process: commonProcess,
    faqs: [
      {
        question: "Can you build a new Shopify store?",
        answer:
          "Yes. We can assist with store setup, theme customization, product structure and essential configuration.",
      },
      {
        question: "Can you improve my existing Shopify store?",
        answer:
          "Yes. We can review design, navigation, product pages, collections and the overall shopping experience.",
      },
      {
        question: "Can products be migrated from another platform?",
        answer:
          "Migration possibilities depend on the source platform and available export data. We review this before confirming the scope.",
      },
      {
        question: "Do you provide support after launch?",
        answer:
          "Maintenance and improvement support can be arranged according to your requirements.",
      },
    ],
    chatbotQuestions: [
      "Can you build a new Shopify store?",
      "Can you redesign my current store?",
      "Do you migrate products?",
      "Do you provide ongoing maintenance?",
    ],
    relatedSlugs: ["website-development", "graphic-design", "data-entry"],
  },
  {
    slug: "ai-automation",
    iconName: "bot",
    eyebrow: "Workflow intelligence",
    title: "AI Automation",
    highlightedTitle: "for repetitive workflows.",
    description:
      "Practical automation solutions that connect tools, reduce repetitive work and improve operational response times.",
    overview:
      "We identify repetitive business workflows and design practical automations using approved tools and integrations. Solutions are planned around business value, reliability and human oversight.",
    services: [
      {
        title: "Lead automation",
        description:
          "Capture, organize, route and follow up with incoming leads through connected workflows.",
      },
      {
        title: "Support automation",
        description:
          "Automated classification, routing, knowledge suggestions and routine customer responses.",
      },
      {
        title: "Reporting automation",
        description:
          "Scheduled consolidation and delivery of operational information from approved sources.",
      },
      {
        title: "Data workflows",
        description:
          "Movement, formatting and validation of information across compatible business tools.",
      },
      {
        title: "AI assistants",
        description:
          "Purpose-built assistants for internal knowledge, qualification or guided customer interactions.",
      },
      {
        title: "Workflow integration",
        description:
          "Connections between compatible platforms to reduce repeated manual updates.",
      },
    ],
    industries: [
      "SaaS",
      "E-commerce",
      "Customer support",
      "Marketing",
      "Recruitment",
      "Real estate",
      "Professional services",
      "Operations",
    ],
    benefits: [
      "Reduced repetitive manual work",
      "Faster information movement",
      "Consistent workflow execution",
      "Human review where required",
      "Documented automation logic",
      "Scalable improvement roadmap",
    ],
    process: commonProcess,
    faqs: [
      {
        question: "Which processes can be automated?",
        answer:
          "Repetitive, rules-based workflows involving compatible digital tools are usually the strongest candidates.",
      },
      {
        question: "Will automation replace our team?",
        answer:
          "The goal is usually to reduce repetitive work and help people focus on decisions, customers and higher-value responsibilities.",
      },
      {
        question: "Can you connect our existing tools?",
        answer:
          "Integration depends on available APIs, permissions and technical compatibility. These are reviewed during discovery.",
      },
      {
        question: "How do you handle reliability?",
        answer:
          "Workflows can include validation, error handling, activity logs and human approval steps where appropriate.",
      },
    ],
    chatbotQuestions: [
      "Which workflows can be automated?",
      "Can you integrate our existing tools?",
      "Can you build an AI chatbot?",
      "How do you handle errors?",
    ],
    relatedSlugs: [
      "website-development",
      "customer-support",
      "back-office",
    ],
  },
  {
    slug: "video-editing",
    iconName: "clapperboard",
    eyebrow: "Content production support",
    title: "Video Editing",
    highlightedTitle: "that keeps viewers engaged.",
    description:
      "Professional editing for social content, advertisements, educational videos, interviews and brand communication.",
    overview:
      "Our editing service helps businesses and creators convert raw footage into clear, branded and platform-ready content. Editing style, turnaround and deliverables are defined before production begins.",
    services: [
      {
        title: "Short-form videos",
        description:
          "Reels, Shorts and vertical social content edited for pace, clarity and mobile viewing.",
      },
      {
        title: "YouTube editing",
        description:
          "Long-form videos structured with clean cuts, graphics and audience-focused pacing.",
      },
      {
        title: "Corporate videos",
        description:
          "Professional editing for company profiles, presentations, training and internal communication.",
      },
      {
        title: "Advertisement edits",
        description:
          "Product and campaign videos prepared for selected advertising platforms.",
      },
      {
        title: "Podcast editing",
        description:
          "Clean multi-speaker edits, clips and platform-ready versions for video podcasts.",
      },
      {
        title: "Motion graphics",
        description:
          "Titles, captions, transitions and branded graphic elements where required.",
      },
    ],
    industries: [
      "Creators",
      "E-commerce",
      "Education",
      "Marketing agencies",
      "Coaches",
      "Real estate",
      "SaaS",
      "Corporate teams",
    ],
    benefits: [
      "Platform-specific formats",
      "Defined brand style",
      "Organized revision workflow",
      "Caption and graphic options",
      "Recurring editing capacity",
      "Secure asset handling",
    ],
    process: commonProcess,
    faqs: [
      {
        question: "Which video formats do you edit?",
        answer:
          "We can discuss short-form, long-form, advertisements, interviews, podcasts, training and corporate content.",
      },
      {
        question: "Can you follow a reference editing style?",
        answer:
          "Yes. References help define pacing, captions, transitions and the overall visual direction.",
      },
      {
        question: "Are revisions included?",
        answer:
          "Revision rounds and their scope are agreed before the project starts.",
      },
      {
        question: "Can you handle recurring monthly content?",
        answer:
          "Yes. Recurring editing can be structured around expected volume, turnaround and production requirements.",
      },
    ],
    chatbotQuestions: [
      "Which videos do you edit?",
      "Can you edit monthly content?",
      "Are revisions included?",
      "Can you follow a reference style?",
    ],
    relatedSlugs: ["graphic-design", "virtual-assistant", "data-entry"],
  },
  {
    slug: "graphic-design",
    iconName: "palette",
    eyebrow: "Brand communication design",
    title: "Graphic Design",
    highlightedTitle: "with a consistent identity.",
    description:
      "Professional visual assets for marketing, social media, presentations, websites and day-to-day brand communication.",
    overview:
      "We create practical brand assets that help businesses communicate consistently across digital channels. Every project begins with an understanding of your brand, audience and intended use.",
    services: [
      {
        title: "Social media creatives",
        description:
          "Branded post, story, advertisement and campaign graphics for selected platforms.",
      },
      {
        title: "Marketing materials",
        description:
          "Brochures, flyers, banners, promotional assets and digital communication pieces.",
      },
      {
        title: "Presentation design",
        description:
          "Structured business, sales and pitch presentations with a professional visual hierarchy.",
      },
      {
        title: "Website graphics",
        description:
          "Hero visuals, promotional graphics, icons and supporting website assets.",
      },
      {
        title: "E-commerce creatives",
        description:
          "Product listing graphics, promotional banners and campaign materials.",
      },
      {
        title: "Brand templates",
        description:
          "Reusable templates to maintain consistency across routine communications.",
      },
    ],
    industries: [
      "E-commerce",
      "SaaS",
      "Education",
      "Healthcare",
      "Hospitality",
      "Real estate",
      "Professional services",
      "Creators",
    ],
    benefits: [
      "Consistent visual direction",
      "Platform-ready deliverables",
      "Reusable brand templates",
      "Organized feedback cycles",
      "Digital and print-ready options",
      "Recurring design support",
    ],
    process: commonProcess,
    faqs: [
      {
        question: "Which design assets can you create?",
        answer:
          "We can discuss social graphics, presentations, website assets, advertisements, brochures and e-commerce creatives.",
      },
      {
        question: "Can you follow our existing brand guidelines?",
        answer:
          "Yes. Existing logos, typography, colors and brand rules can be incorporated into the design workflow.",
      },
      {
        question: "Do you provide editable source files?",
        answer:
          "Source-file requirements should be confirmed before starting because deliverables depend on the project and design tool.",
      },
      {
        question: "Can you provide recurring design support?",
        answer:
          "Yes. Recurring requirements can be organized through a monthly or workload-based model.",
      },
    ],
    chatbotQuestions: [
      "Which design assets can you create?",
      "Can you follow our brand guidelines?",
      "Do you provide editable files?",
      "Can I hire a recurring designer?",
    ],
    relatedSlugs: [
      "video-editing",
      "website-development",
      "shopify-development",
    ],
  },
  {
    slug: "data-entry",
    iconName: "database",
    eyebrow: "Structured data operations",
    title: "Data Entry",
    highlightedTitle: "with organized workflows.",
    description:
      "Accurate data entry, cleansing, formatting and digital record maintenance for recurring business requirements.",
    overview:
      "We support businesses with structured data-related workflows using approved templates, validation rules and source materials. The exact approach is defined according to volume, format and quality requirements.",
    services: [
      {
        title: "Spreadsheet data entry",
        description:
          "Structured entry and updating of information in approved spreadsheet formats.",
      },
      {
        title: "CRM updates",
        description:
          "Customer, lead and account information maintained in approved systems.",
      },
      {
        title: "Product data",
        description:
          "Product titles, descriptions, attributes, categories and listing-related information.",
      },
      {
        title: "Data cleansing",
        description:
          "Identification and correction of formatting issues, duplicates and incomplete records.",
      },
      {
        title: "Document conversion",
        description:
          "Transfer of structured information between compatible document and data formats.",
      },
      {
        title: "Database maintenance",
        description:
          "Routine updates and checks based on documented business rules.",
      },
    ],
    industries: [
      "E-commerce",
      "Healthcare",
      "Real estate",
      "Logistics",
      "Research",
      "Recruitment",
      "Education",
      "Professional services",
    ],
    benefits: [
      "Template-based execution",
      "Validation and review options",
      "Flexible workload capacity",
      "Organized file handling",
      "Routine progress reporting",
      "Confidentiality-focused process",
    ],
    process: commonProcess,
    faqs: [
      {
        question: "Which data formats can you work with?",
        answer:
          "The team can work with approved spreadsheets, CRM systems, online platforms and structured documents depending on access and compatibility.",
      },
      {
        question: "How is accuracy checked?",
        answer:
          "Validation rules, sampling, duplicate checks and review stages can be included according to project requirements.",
      },
      {
        question: "Can you manage large data volumes?",
        answer:
          "Capacity depends on complexity, source quality, deadlines and the validation process required.",
      },
      {
        question: "Can you maintain data regularly?",
        answer:
          "Yes. Recurring data maintenance can be scheduled as an ongoing workflow.",
      },
    ],
    chatbotQuestions: [
      "Which data formats do you support?",
      "How do you check accuracy?",
      "Can you handle recurring data entry?",
      "Can you manage product listings?",
    ],
    relatedSlugs: ["back-office", "virtual-assistant", "shopify-development"],
  },
  {
    slug: "managed-remote-teams",
    iconName: "users-round",
    eyebrow: "Scalable remote operations",
    title: "Managed Remote Teams",
    highlightedTitle: "aligned with your goals.",
    description:
      "Flexible remote teams assembled around defined roles, workflows, tools and performance expectations.",
    overview:
      "ANVIROCX helps businesses create remote delivery capacity without building every operational layer internally. Teams can be organized around customer support, administration, back-office, content or mixed responsibilities.",
    services: [
      {
        title: "Role planning",
        description:
          "Responsibilities, required skills, coverage and reporting expectations defined before team formation.",
      },
      {
        title: "Team coordination",
        description:
          "Structured communication, task ownership and routine operational alignment.",
      },
      {
        title: "Workflow documentation",
        description:
          "Processes, checklists, escalation paths and recurring responsibilities documented clearly.",
      },
      {
        title: "Performance reporting",
        description:
          "Activity and operational reporting structured around agreed expectations.",
      },
      {
        title: "Capacity scaling",
        description:
          "Team requirements reviewed as workload and business priorities change.",
      },
      {
        title: "Multi-service teams",
        description:
          "Combined support across administration, customer service, data and back-office functions.",
      },
    ],
    industries: [
      "Startups",
      "SaaS",
      "E-commerce",
      "Agencies",
      "Healthcare",
      "Real estate",
      "Education",
      "Professional services",
    ],
    benefits: [
      "Flexible team structures",
      "Defined roles and ownership",
      "Centralized coordination",
      "Documented operating procedures",
      "Scalable delivery capacity",
      "Regular business communication",
    ],
    process: commonProcess,
    faqs: [
      {
        question: "Which roles can be included in a remote team?",
        answer:
          "Teams can include customer support, virtual assistance, data entry, back-office and selected creative or technical roles.",
      },
      {
        question: "Can the team work with our managers?",
        answer:
          "Yes. Communication and reporting lines can be designed around your existing management structure.",
      },
      {
        question: "Can the team size change later?",
        answer:
          "Capacity can be reviewed as workload, priorities and responsibilities evolve.",
      },
      {
        question: "How is performance tracked?",
        answer:
          "Tracking can use agreed tasks, quality indicators, schedules and reporting formats appropriate to the work.",
      },
    ],
    chatbotQuestions: [
      "Which roles can be included?",
      "Can I start with a small team?",
      "How is performance tracked?",
      "Can the team use our tools?",
    ],
    relatedSlugs: [
      "customer-support",
      "virtual-assistant",
      "back-office",
    ],
  },
];

export function getServiceBySlug(slug: string) {
  const aliases: Record<string, string> = {
    "shopify": "shopify-development",
    "shopify-design": "shopify-development",
    "shopify-website": "shopify-development",
    "virtual-assistants": "virtual-assistant",
    "virtual-assistance": "virtual-assistant",
    "website-design": "website-development",
    "website-designing": "website-development",
    "web-development": "website-development",
    "web-design": "website-development",
  };

  const normalizedSlug = aliases[slug] ?? slug;

  return servicePages.find(
    (service) => service.slug === normalizedSlug
  );
}
