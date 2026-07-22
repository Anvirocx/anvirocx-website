export type PricingPlan = {
  name: string;
  description: string;
  price: string;
  period?: string;
  features: string[];
  featured?: boolean;
  cta: string;
};

export type ServicePricing = {
  eyebrow: string;
  heading: string;
  description: string;
  note: string;
  plans: PricingPlan[];
};

const customPlan: PricingPlan = {
  name: "Enterprise",
  description:
    "A customized delivery model for larger teams, complex workflows or multi-service requirements.",
  price: "Custom",
  features: [
    "Custom team structure",
    "Multiple workflows or departments",
    "Dedicated account coordination",
    "Custom reporting requirements",
    "Flexible operating coverage",
    "Scalable long-term delivery",
  ],
  cta: "Request custom proposal",
};

export const servicePricing: Record<string, ServicePricing> = {
  "customer-support": {
    eyebrow: "Flexible support plans",
    heading: "Customer support pricing built around your workload.",
    description:
      "Choose a suitable starting model. Final pricing depends on channels, working hours, ticket volume, languages, tools and team structure.",
    note:
      "Pricing shown is indicative and may change after reviewing your exact requirements.",
    plans: [
      {
        name: "Starter",
        description:
          "Suitable for small businesses requiring structured email or chat support.",
        price: "$6",
        period: "per agent / hour",
        features: [
          "Email or chat support",
          "Defined working schedule",
          "Basic CRM updates",
          "Approved scripts and SOPs",
          "Weekly activity summary",
          "Shared delivery model",
        ],
        cta: "Discuss starter plan",
      },
      {
        name: "Growth",
        description:
          "For businesses requiring broader coverage and a more dedicated workflow.",
        price: "Custom",
        features: [
          "Multi-channel support",
          "Dedicated or semi-dedicated agents",
          "Escalation management",
          "Quality monitoring",
          "Performance reporting",
          "Flexible coverage options",
        ],
        featured: true,
        cta: "Build growth plan",
      },
      customPlan,
    ],
  },

  "virtual-assistant": {
    eyebrow: "Flexible assistant plans",
    heading: "Remote assistance based on hours and responsibilities.",
    description:
      "Pricing depends on working hours, task complexity, tools, availability and whether you require shared or dedicated support.",
    note:
      "A task and responsibility review is completed before the final quotation.",
    plans: [
      {
        name: "Task Support",
        description:
          "For selected recurring administrative tasks and limited weekly assistance.",
        price: "Custom",
        features: [
          "Defined task list",
          "Flexible weekly hours",
          "Email and document support",
          "Basic research assistance",
          "Task-status reporting",
          "Shared assistant model",
        ],
        cta: "Discuss task support",
      },
      {
        name: "Dedicated Assistant",
        description:
          "Consistent remote support for executives, founders or business teams.",
        price: "Custom",
        features: [
          "Dedicated assistant",
          "Recurring daily responsibilities",
          "Calendar and inbox support",
          "Business coordination",
          "Regular progress reporting",
          "Workflow documentation",
        ],
        featured: true,
        cta: "Hire an assistant",
      },
      customPlan,
    ],
  },

  "back-office": {
    eyebrow: "Operational pricing",
    heading: "Back-office plans aligned with process volume.",
    description:
      "Pricing is based on workflow complexity, daily volume, systems, turnaround requirements and quality-review levels.",
    note:
      "We can quote per resource, hourly engagement or defined project scope.",
    plans: [
      {
        name: "Process Support",
        description:
          "For a clearly documented and recurring operational workflow.",
        price: "Custom",
        features: [
          "One defined process",
          "Documented SOP execution",
          "Routine status updates",
          "Basic quality checks",
          "Flexible workload allocation",
          "Shared resource model",
        ],
        cta: "Discuss your process",
      },
      {
        name: "Managed Operations",
        description:
          "For multiple recurring processes requiring structured coordination.",
        price: "Custom",
        features: [
          "Multiple workflows",
          "Dedicated operational capacity",
          "Exception handling",
          "Quality review process",
          "Performance reporting",
          "Workflow optimization",
        ],
        featured: true,
        cta: "Build operations plan",
      },
      customPlan,
    ],
  },

  "website-development": {
    eyebrow: "Project-based pricing",
    heading: "Website packages for different stages of growth.",
    description:
      "Final pricing depends on pages, design complexity, functionality, integrations, content and delivery timeline.",
    note:
      "Hosting, premium third-party tools and paid integrations are quoted separately when required.",
    plans: [
      {
        name: "Landing Page",
        description:
          "A professional conversion-focused page for a campaign, service or new business.",
        price: "Custom",
        features: [
          "Responsive single-page website",
          "Premium visual layout",
          "Contact or lead form",
          "Basic SEO structure",
          "Mobile optimization",
          "Deployment assistance",
        ],
        cta: "Plan landing page",
      },
      {
        name: "Business Website",
        description:
          "A complete website for presenting your company, services and business value.",
        price: "Custom",
        features: [
          "Multiple professional pages",
          "Reusable design system",
          "Responsive development",
          "Service and contact pages",
          "SEO-ready structure",
          "Deployment support",
        ],
        featured: true,
        cta: "Build business website",
      },
      {
        name: "Advanced Website",
        description:
          "For custom functionality, integrations and larger digital experiences.",
        price: "Custom",
        features: [
          "Custom architecture",
          "Advanced functionality",
          "API or platform integrations",
          "Dynamic content",
          "Performance optimization",
          "Ongoing support options",
        ],
        cta: "Request project proposal",
      },
    ],
  },

  "shopify-development": {
    eyebrow: "Shopify packages",
    heading: "Store development based on your commerce requirements.",
    description:
      "Pricing depends on product volume, theme customization, migration, apps, integrations and custom storefront features.",
    note:
      "Shopify subscription, premium themes and paid applications are not included unless specifically stated.",
    plans: [
      {
        name: "Store Setup",
        description:
          "For brands launching a clean and properly configured Shopify store.",
        price: "Custom",
        features: [
          "Core store configuration",
          "Navigation and collections",
          "Theme setup",
          "Essential pages",
          "Mobile optimization",
          "Launch assistance",
        ],
        cta: "Start Shopify store",
      },
      {
        name: "Premium Store",
        description:
          "A stronger branded storefront with deeper customization.",
        price: "Custom",
        features: [
          "Premium theme customization",
          "Branded homepage sections",
          "Product-page improvements",
          "Collection organization",
          "App integrations",
          "Conversion-focused journey",
        ],
        featured: true,
        cta: "Build premium store",
      },
      {
        name: "Advanced Commerce",
        description:
          "For migrations, large catalogs and customized commerce workflows.",
        price: "Custom",
        features: [
          "Advanced customization",
          "Product-data migration",
          "Custom integrations",
          "Large catalog structure",
          "Store optimization",
          "Ongoing technical support",
        ],
        cta: "Request commerce proposal",
      },
    ],
  },

  "ai-automation": {
    eyebrow: "Automation pricing",
    heading: "Automation plans based on workflow complexity.",
    description:
      "The final quote depends on integrations, workflow steps, APIs, data sources, approval logic and maintenance requirements.",
    note:
      "Any paid APIs, third-party subscriptions or usage charges are billed separately.",
    plans: [
      {
        name: "Single Workflow",
        description:
          "Automate one clearly defined repetitive business process.",
        price: "Custom",
        features: [
          "Workflow discovery",
          "One automation flow",
          "Basic tool integration",
          "Testing and validation",
          "Documentation",
          "Launch assistance",
        ],
        cta: "Automate a workflow",
      },
      {
        name: "Business Automation",
        description:
          "Connect multiple steps and tools into a coordinated workflow.",
        price: "Custom",
        features: [
          "Multi-step automation",
          "Multiple tool connections",
          "Error-handling logic",
          "Human approval steps",
          "Activity tracking",
          "Optimization support",
        ],
        featured: true,
        cta: "Design automation system",
      },
      customPlan,
    ],
  },

  "video-editing": {
    eyebrow: "Content pricing",
    heading: "Editing plans based on format, volume and complexity.",
    description:
      "Pricing depends on raw footage duration, final video length, editing style, motion graphics, turnaround and revision requirements.",
    note:
      "A sample or reference video helps us provide a more accurate quotation.",
    plans: [
      {
        name: "Short-Form",
        description:
          "For reels, Shorts and vertical social content.",
        price: "Custom",
        features: [
          "Clean cuts and pacing",
          "Vertical formatting",
          "Basic captions",
          "Music synchronization",
          "Brand elements",
          "Defined revision round",
        ],
        cta: "Discuss short-form content",
      },
      {
        name: "Long-Form",
        description:
          "For YouTube, interviews, podcasts or educational content.",
        price: "Custom",
        features: [
          "Long-form editing",
          "Structured pacing",
          "Titles and graphics",
          "Audio cleanup",
          "Platform-ready export",
          "Revision workflow",
        ],
        featured: true,
        cta: "Plan editing workflow",
      },
      customPlan,
    ],
  },

  "graphic-design": {
    eyebrow: "Design pricing",
    heading: "Design support for individual projects or recurring work.",
    description:
      "Pricing depends on asset type, quantity, complexity, brand guidelines, turnaround and editable-file requirements.",
    note:
      "Final deliverables and revision rounds are confirmed before starting.",
    plans: [
      {
        name: "Design Project",
        description:
          "For a defined set of marketing or business design assets.",
        price: "Custom",
        features: [
          "Defined asset list",
          "Brand-aligned design",
          "Digital-ready exports",
          "Organized feedback process",
          "Revision round",
          "Final delivery package",
        ],
        cta: "Discuss design project",
      },
      {
        name: "Monthly Design",
        description:
          "Recurring design support for regular marketing requirements.",
        price: "Custom",
        features: [
          "Recurring design capacity",
          "Social and marketing assets",
          "Reusable templates",
          "Priority management",
          "Consistent brand direction",
          "Monthly workflow",
        ],
        featured: true,
        cta: "Build monthly plan",
      },
      customPlan,
    ],
  },

  "data-entry": {
    eyebrow: "Data operations pricing",
    heading: "Flexible pricing based on volume and validation needs.",
    description:
      "Pricing depends on source format, record volume, complexity, accuracy requirements and completion timeline.",
    note:
      "A sample dataset may be requested before finalizing the project quote.",
    plans: [
      {
        name: "Data Project",
        description:
          "For a defined dataset with a clear completion scope.",
        price: "Custom",
        features: [
          "Defined record volume",
          "Approved template",
          "Structured data entry",
          "Basic validation",
          "Progress reporting",
          "Final delivery",
        ],
        cta: "Request project quote",
      },
      {
        name: "Ongoing Data Support",
        description:
          "For regular updates, catalog management or database maintenance.",
        price: "Custom",
        features: [
          "Recurring workload",
          "Dedicated capacity options",
          "Validation rules",
          "CRM or platform updates",
          "Routine reporting",
          "Documented workflow",
        ],
        featured: true,
        cta: "Build ongoing plan",
      },
      customPlan,
    ],
  },

  "managed-remote-teams": {
    eyebrow: "Team pricing",
    heading: "Remote teams structured around your operating model.",
    description:
      "Pricing depends on team composition, working hours, roles, management requirements, tools and performance expectations.",
    note:
      "A discovery discussion is required before confirming team structure and commercial terms.",
    plans: [
      {
        name: "Small Team",
        description:
          "For businesses beginning with a focused remote support function.",
        price: "Custom",
        features: [
          "Defined roles",
          "Small remote team",
          "Workflow documentation",
          "Task coordination",
          "Routine reporting",
          "Flexible starting scope",
        ],
        cta: "Plan small team",
      },
      {
        name: "Managed Team",
        description:
          "A coordinated team handling multiple responsibilities or workflows.",
        price: "Custom",
        features: [
          "Multi-role team",
          "Central coordination",
          "Performance reporting",
          "Escalation structure",
          "Flexible scaling",
          "Ongoing workflow reviews",
        ],
        featured: true,
        cta: "Build managed team",
      },
      customPlan,
    ],
  },
};

export function getServicePricing(slug: string) {
  return servicePricing[slug];
}
