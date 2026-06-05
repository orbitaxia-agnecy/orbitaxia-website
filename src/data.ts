/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Service, Project, Industry, FAQItem } from './types';

export const SERVICES: Service[] = [
  {
    id: 'meta-ads',
    title: 'Meta Ads Management',
    tagline: 'Precision targeting on Facebook, Instagram, and Messenger to scale sales and qualified inquiries.',
    iconName: 'Megaphone',
    description: 'We build high-converting funnel architectures on Facebook & Instagram, prioritizing direct-response creatives, interactive message campaigns, and predictive lookalikes to capture genuine customers.',
    detailedDescription: 'In Bangladesh, Meta holds the largest consumer digital attention. We design end-to-end multi-segment campaign structures that bypass high CPM vanity metrics in favor of qualified leads, messenger conversions, and real checkout actions.',
    benefits: [
      'Custom ad creative formulation (videos, statutory ads, carousel structures)',
      'A/B testing of angles, hooks, and lead forms',
      'Advanced Custom & Lookalike Audience setup',
      'Continuous daily bidding and frequency optimization'
    ],
    process: [
      'Funnel Mapping: Architect custom audience pathways based on user intent.',
      'Creative Lab: Produce high-retention hooks and custom direct-response visual assets.',
      'Launch & Refine: Deploy with micro-budget controls prior to safe scaling.',
      'Weekly Reporting: Transparent analysis of cost-per-lead and ROAS metrics.'
    ],
    deliverables: [
      'Comprehensive Social Multi-Funnel Ads Setup',
      '10-15 Custom Creative Ad Variations per month',
      'Conversion API & Meta Pixel Setup',
      'Weekly performance and attribution reports'
    ]
  },
  {
    id: 'google-ads',
    title: 'Google Ads Management',
    tagline: 'Capture high-intent buyers exactly when they search for your services.',
    iconName: 'Search',
    description: 'Search campaigns, Display Ads, and YouTube funnels calibrated for maximum search dominance, targeting customers at the precise moment of intent.',
    detailedDescription: 'Reach decision-makers in Bangladesh and internationally. We specialize in local search networks, merchant center product listing configurations, call-only campaigns for physical spaces, and intent-driven search groups.',
    benefits: [
      'Laser-focused negative keyword filtering to eliminate waste budgets',
      'Frictionless call and location conversion asset setup',
      'High-quality score optimization to lower average click prices',
      'Retargeting funnels across the Google Display Network and YouTube'
    ],
    process: [
      'Intent Analysis & Keyword Mining: Discover exact search vectors that yield buyers.',
      'Copywriting & Ad Assets: Compose compelling headlines matching search terms.',
      'Bid Engine Calibration: Implement smart, value-driven target CPA settings.',
      'Attribution Mapping: Ensure phone calls, forms, and maps navigations are audited.'
    ],
    deliverables: [
      'Keyword Matrix Optimization',
      'Ad Extension and Call-out assets design',
      'Smart Campaign setup with Dynamic Search Ads',
      'Monthly comparative growth metrics presentation'
    ]
  },
  {
    id: 'web-development',
    title: 'Website Design & Development',
    tagline: 'High-speed, SEO-tuned corporate portals and interactive Web apps.',
    iconName: 'Code',
    description: 'We code custom, modern, lightning-fast landing pages and full-stack marketing platforms designed with conversion psychology as the absolute foundation.',
    detailedDescription: 'Your digital storefront needs to instantly capture emails and phone calls. We construct ultra-responsive React and Tailwind CSS sites that load in under 1.5 seconds, optimized for Bangladeshi mobile network bandwidth limitations.',
    benefits: [
      'Extreme speed scores prioritizing instant page accessibility on slow connections',
      'Intuitive layouts utilizing heatmapped conversion positions',
      'Robust SEO structure with structural schema markup',
      'Flawless responsive behavior across compact smartphones to major desktop screens'
    ],
    process: [
      'Wireframe & Component Board: Blueprint information architecture and typography.',
      'Tailwind Construction: Hand-code pristine layouts optimized for performance.',
      'Conversion Systems Integration: Mount click-to-call, WhatsApp nodes, and leads forms.',
      'QA & Launch Protocol: Global cross-device styling audits and performance tuning.'
    ],
    deliverables: [
      'High Fidelity Tailwind Website Coding',
      'Full SEO-friendly architectural structure',
      'Interactive form & WhatsApp notification routing',
      '6 Months of standard technical system updates'
    ]
  },
  {
    id: 'branding-design',
    title: 'Branding & Creative Design',
    tagline: 'Memorable brand systems and collaterals designed to win trust.',
    iconName: 'Palette',
    description: 'Cohesive logos, typographic design guides, presentation boards, and corporate print materials that build immediate authority.',
    detailedDescription: 'A newly launched agency or growing enterprise needs a distinct visual voice. We engineer structural guidelines, color systems designed for premium stature, and vector collaterals tailored to match your specific industry.',
    benefits: [
      'Polished, high-quality vector assets that keep structural crispness at any scale',
      'Distinct corporate identity matching standard modern UI practices',
      'Comprehensive brand guidelines (colors, typography, grid specs)',
      'Social media post layouts, business cards, and profile setups'
    ],
    process: [
      'Brand Audit & Mood Boarding: Research competitive positioning and select key themes.',
      'Identity Drafts: Cycle through vector logo ideas and typography match tests.',
      'Collateral Blueprint: Style secondary visual layouts (documents, letterheads, posts).',
      'Delivery System: Package scalable vector assets across clear presets.'
    ],
    deliverables: [
      'Primary Vector Brandmarks & Sub-variants',
      'Full Interactive Brand Identity PDF Guideline',
      '6 Custom Social Media Banner Layouts',
      'Corporate Stationery Templates (Invoice, Business Cards)'
    ]
  },
  {
    id: 'video-production',
    title: 'Video Production',
    tagline: 'High-production visual storytelling to establish maximum credibility.',
    iconName: 'Video',
    description: 'Short-form hooks, promotional campaigns, commercial advertisements, and explanatory animations optimized for consumer retention.',
    detailedDescription: 'Video is the single highest-performing ad asset type. We storyboard, capture, and edit videos that address specific customer pain points, creating cinematic-level trust on Facebook, Instagram, and YouTube.',
    benefits: [
      'Hook-driven short-form structures suited for Reels and TikTok attention spans',
      'Crisp motion graphics and text overlays for silent autoplay contexts',
      'Professional sound staging, mixing, and background score integration',
      'Multi-aspect ratio outputs (9:16 for stories/reels, 16:9 for YouTube/displays)'
    ],
    process: [
      'Creative Conceptualization: Storyboard attention-grabbing hook concepts.',
      'Filming/Creation: Conduct pristine video recording or high-end graphics assets.',
      'Editing Lab: Settle visual timings, sound overlays, and clear captions.',
      'Optimization Phase: Format videos for seamless direct-response ad distribution.'
    ],
    deliverables: [
      'Commercial grade marketing videos',
      'High-retention social media ad reels',
      'Dynamic typography overlays & branding stamps',
      'Raw footage archiving and standard sound licenses'
    ]
  },
  {
    id: 'seo-lead-generation',
    title: 'SEO & Lead Generation',
    tagline: 'Organic Google search presence and integrated high-conversion pipelines.',
    iconName: 'TrendingUp',
    description: 'Establish permanent organic lead flow. Optimize on-page entities, fix critical crawl blocks, and manage localized business visibility.',
    detailedDescription: 'We help local businesses dominate search queries across Bangladesh. By aligning technical, content, and local maps layers, we turn organic search into a predictable daily channel for inbound customer acquisitions.',
    benefits: [
      'Dominance in hyper-local Google Maps queries generating direct direct-calls',
      'Technical site audits solving mobile rendering, redirects, and meta errors',
      'Context-focused content hubs targeting transaction-ready user searches',
      'Clean white-hat authority signals linking high-trust portals'
    ],
    process: [
      'Deep Opportunity Search: Uncover localized terms backed with high buyer intent.',
      'Technical Hardening: Resolve script layouts, headings, and schema protocols.',
      'Content Architecture: Write clear informational assets driving conversions.',
      'Inbound Amplification: Connect organic reach to strategic lead capture modules.'
    ],
    deliverables: [
      'On-page content audit and core keyword blueprints',
      'Google Business Profile (Maps) optimization suite',
      'Schema markup injection across key landing surfaces',
      'Quarterly keyword position and traffic attribution reports'
    ]
  }
];

export const INDUSTRIES: Industry[] = [
  {
    id: 'hospitals-diagnostic',
    name: 'Hospitals & Diagnostic Centers',
    iconName: 'Activity',
    description: 'Boost patient appointments and build therapeutic trust. We optimize local search maps, run specific health-checkup Meta Ads, and simplify booking paths.',
    growthTactics: [
      'Hyper-localized Google Search ads for emergency & specialized clinics',
      'Educational carousel posts on Facebook detailing diagnostic benefits',
      'Frictionless "Call Now" and WhatsApp inquiry automations for appointment desk'
    ]
  },
  {
    id: 'real-estate',
    name: 'Real Estate Companies',
    iconName: 'Building',
    description: 'Deliver highly qualified prospective buyers for premium residential projects and commercial spaces through targeted multi-step lead filtering.',
    growthTactics: [
      'High-intent Facebook Instant Forms asking pre-qualification budget questions',
      'Immersive video walkthrough ads on YouTube highlighting key premium layouts',
      'Automated SMS & WhatsApp CRM sync to instantly nudge sales executives'
    ]
  },
  {
    id: 'educational-institutions',
    name: 'Educational Institutions',
    iconName: 'GraduationCap',
    description: 'Secure admission registrations and course enrollments. We craft school tours, structure admission landing pages, and target prospective students and parents.',
    growthTactics: [
      'Admission seasonal campaigns targeting parents with specific quality metrics',
      'Virtual tour reels and student achievements video promotions',
      'Clean landing portals to request physical campus visits or brochures'
    ]
  },
  {
    id: 'smes',
    name: 'SMEs & E-commerce',
    iconName: 'ShoppingBag',
    description: 'Accelerate digital product sales, custom order volume, and local inquiries. Direct conversions designed for newly launched businesses seeking rapid expansion.',
    growthTactics: [
      'Direct-response messenger/WhatsApp ads for rapid client transactions',
      'Retargeting campaigns focused on abandoned cart offers or service bundles',
      'Polished single-page catalogs to maximize transaction simplicity'
    ]
  },
  {
    id: 'corporate-businesses',
    name: 'Corporate & service providers',
    iconName: 'Briefcase',
    description: 'Build B2B lead generation funnels, construct sophisticated pitch portals, and establish brand preeminence among institutional buyers.',
    growthTactics: [
      'LinkedIn and Google Search target frameworks for high-tier decision makers',
      'Strategic B2B case-study downloadable leads funnels',
      'Polished modern company profile PDFs and corporate websites'
    ]
  }
];

export const PORTFOLIO: Project[] = [
  {
    id: 'capital-diagnostic',
    title: 'Healthcare Appointment Funnel',
    category: 'Meta Ads & SEO',
    clientType: 'Hospitals & Diagnostic Centers',
    achievement: '+180% Monthly Diagnostic Bookings',
    tags: ['Meta Lead Ads', 'Local SEO', 'WhatsApp CRM'],
    summary: 'A complete patient acquisition system designed for a multi-specialty medical facility looking to increase executive checkup bookings.',
    description: 'The client needed to fill slots for their executive diagnostic packages. We overhauled their organic Google Maps profile and combined it with targeted Facebook/Instagram ad funnels prioritizing immediate localized inquiries.',
    challenge: 'Prior campaigns generated high chat volume but low actual show-up rates, due to non-qualified casual clicks.',
    solution: 'We integrated Meta Instant Forms with three custom pre-qualification filters (identifying region, health packages of choice, and preferred booking date) coupled with an immediate click-to-WhatsApp hotline.',
    results: [
      '180% surge in confirmed package diagnostic appointments within 60 days',
      'Decreased customer acquisition cost (CAC) by 34%',
      'Top 3 ranking across 12 prominent localized medical diagnostics search-terms'
    ]
  },
  {
    id: 'primeland-residences',
    title: 'Premium Real Estate Lead Engine',
    category: 'Google Ads & Web Dev',
    clientType: 'Real Estate Companies',
    achievement: '14 Premium Apartment Sales within 3 Months',
    tags: ['Google Search', 'High-speed Landing Page', 'Retargeting'],
    summary: 'An elite search funnel driving high-net-worth buyer inquiries for luxury apartments in Dhaka.',
    description: 'The client struggled with low-quality leads from broad social media campaigns. We built an intent-centric Google Ads program targeted strictly at high-intent residential searchers, directing them to a high-speed landing page.',
    challenge: 'Broad targeting was driving agency time towards low-budget inquiries who could not qualify for premium luxury projects.',
    solution: 'Constructed an ultra-fast, modern single-project showcase web portal featuring interactive site blueprints, and set Google bids strictly on exact-match queries like "3 bedroom apartment purchase in Dhaka".',
    results: [
      'Generated 135 highly qualified buyer inquiries over one quarter',
      'Resulted in 14 confirmed high-ticket sales directly attributed to the channel',
      'Page load-time optimized to 1.1s, minimizing prospect drop-offs'
    ]
  },
  {
    id: 'pathway-school',
    title: 'Institution Registration Drive',
    category: 'Video Production & Meta Ads',
    clientType: 'Educational Institutions',
    achievement: '+45% New Student Enrollments',
    tags: ['Video Campaign', 'Lead Acquisition', 'Social Media'],
    summary: 'An authentic visual storytelling program that significantly boosted year-end student admissions.',
    description: 'Faced with tough local competition, this educational provider wanted to highlight their high-end computing labs and state-of-the-art sports complex to boost student intakes.',
    challenge: 'Static banners failed to capture the engaging, vibrant student experience offered by the campus.',
    solution: 'We storyboarded and produced three high-production reels showcasing student science labs, sports activities, and teacher interviews. These were run as local video ads targeted directly to parents residing within a 5km radius.',
    results: [
      'Video ads achieved over 150,000 localized video completions',
      '45% year-on-year growth in actual physical school-admission admissions',
      'Acquired admissions leads at a record-low cost per form submit'
    ]
  },
  {
    id: 'apex-logistics',
    title: 'B2B Corporate Digital Portal',
    category: 'Website Design & Development',
    clientType: 'Corporate Businesses',
    achievement: '99.9% Portal Uptime & Instant Quote Funnel',
    tags: ['React & Tailwind', 'SEO-tuned', 'Interactive UI'],
    summary: 'A fast corporate web platform designed to streamline logistic container pricing requests.',
    description: 'A legacy logistics firm required a modern, highly professional digital portal to acquire commercial shipping contracts and present global capabilities.',
    challenge: 'Their existing old portal took over 8 seconds to load, losing valuable international enterprise requests.',
    solution: 'We hand-coded an ultra-premium, modern website with custom illustrations (powered by Tailwind), featuring an interactive quote generator and full corporate service breakdowns.',
    results: [
      'Reduced average bounce rate from 62% down to 18%',
      '68% increase in digital corporate pricing quote inquiries',
      'Achieved a perfect mobile page speed performance rating of 98'
    ]
  }
];

export const FAQS: FAQItem[] = [
  {
    question: 'How does Orbitaxia guarantee lead quality?',
    answer: 'Unlike agencies that focus on cheap, automated clicks, we design multi-step qualifier funnels. We implement pre-qualification filters in our lead forms (and instant calendar/WhatsApp nodes) to ensure your sales team spends time only with highly motivated prospects.'
  },
  {
    question: 'Who will manage my advertising campaigns?',
    answer: 'Our certified ad specialists, web architects, and native creators handle campaigns directly. You get direct Slack/WhatsApp coordination and transparent dashboard reporting detailing your exact conversion statistics.'
  },
  {
    question: 'Do we need a long-term contract to start?',
    answer: 'No. We believe in earning your partnership. We offer month-to-month starter agreements with zero locking constraints, alongside clearly mapped monthly milestones and performance audits.'
  },
  {
    question: 'Do you work internationally or just in Bangladesh?',
    answer: 'While our main creative and strategic office is proudly based in Bangladesh, we run international marketing campaigns helping local enterprises reach high-value global export buyers and local physical audiences alike.'
  },
  {
    question: 'What is the standard onboarding timeline?',
    answer: 'Typically, we can launch standard Meta or Google Ads campaigns within 7 to 10 days of signing. High-end bespoke Web Design & Development projects generally scale across 3 to 4 weeks depending on database requirements and visual scopes.'
  }
];
