export interface ServiceItem {
  id: number;
  number: string;
  title: string;
  tagline: string;
  longDescription: string;
  benefits: string[];
  approach: string;
  caseStudy: {
    client: string;
    challenge: string;
    solution: string;
    outcome: string;
  };
  color?: 'dark' | 'light';
}

export const services: ServiceItem[] = [
  // list of services
  {
    id: 1,
    number: '01',
    title: 'Investment Advisory Services',
    tagline:
      'End-to-end consultancy services for businesses, investors, and developers operating within Special Economic Zones',
    longDescription:
      'We provide end-to-end consultancy services for businesses, investors, and developers operating within Special Economic Zones.',
    benefits: [
      'Licensing of EPZ & SEZ enterprises',
      'Licensing of EPZ & SEZ developers and operators',
      'Regulatory compliance advisory',
      'Tax incentive and customs advisory',
      'Government liaison and stakeholder coordination',
      'Environmental and operational compliance advisory',
      'Gazettement advisory including feasibility study preparation',
      'KRA iTax status facilitation for licensed enterprises',
      'SEZ operational advisory services',
      'Work permit acquisition for SEZ enterprise personnel through SEZA',
      'General SEZ & EPZ advisory services'
    ],
    approach:
      'We accelerate investment success by removing administrative complexity and regulatory uncertainty. Our approach integrates licensing strategy with operational readiness, coordinates seamlessly across multiple government agencies through established stakeholder relationships, and provides pragmatic on-the-ground support as investors transition from licensing to operational status. We leverage operational presence across all major zones to deliver consistent, responsive advisory.',
    caseStudy: {
      client: 'International Investment Consortium',
      challenge:
        'A multinational investor group required seamless licensing coordination across both SEZ and EPZ frameworks, tax incentive structuring, and rapid government liaison to launch operations within a tight timeline.',
      solution:
        'Coordinated end-to-end licensing processes for multiple entities, structured tax-optimized investment arrangements, facilitated critical KRA engagements for iTax status, and managed expedited work permit processing through SEZA partnerships.',
      outcome:
        'Successfully licensed across both zones, achieved optimal tax incentive positioning, mobilized skilled workforce on schedule, and launched operations with zero regulatory delays.',
    },
    color: 'dark',
  },
  {
    id: 2,
    number: '02',
    title: 'Investment & Market Entry Advisory',
    tagline:
      'End-to-end strategy, FDI facilitation, and market entry support tailored for investors in African markets',
    longDescription:
      'Helping local and international investors establish, expand, and scale operations within African markets.',
    benefits: [
      'Foreign Direct Investment (FDI) facilitation and investor onboarding support',
      'Data-driven market entry strategy, feasibility studies, and market research',
      'Compliant investment structuring and cross-border expansion advisory',
      'Strategic partnership facilitation to accelerate local market integration',
    ],
    approach:
      'We combine deep market research with practical regulatory insight to build robust entry strategies. Our approach focuses on structuring investments securely, navigating local compliance, facilitating strategic local partnerships, and onboarding investors efficiently to minimize time-to-market.',
    caseStudy: {
      client: 'International Manufacturing Group',
      challenge:
        'An overseas investor needed to navigate regulatory hurdles, evaluate market feasibility, and establish a compliant operational structure to enter East African markets.',
      solution:
        'Conducted a comprehensive feasibility study, designed an optimized investment structure, and facilitated critical local strategic partnerships and onboarding.',
      outcome:
        'The client successfully launched regional operations within budget, secured regulatory clearance, and established a scalable local presence.',
    },
    color: 'light',
  },
  {
    id: 3,
    number: '03',
    title: 'Corporate & Legal Advisory',
    tagline:
      'Comprehensive corporate secretarial, governance, and structural legal support tailored for SEZ compliance',
    longDescription:
      'Comprehensive corporate support designed to ensure legal compliance and operational efficiency within the Special Economic Zones.',
    benefits: [
      'Seamless company incorporation and specialized SEZ licensing setup',
      'Reliable corporate secretarial services, governance, and board advisory',
      'Robust commercial contract drafting and tailored regulatory compliance tracking',
      'Meticulous structuring of shareholder and investment agreements',
    ],
    approach:
      'We simplify complex corporate legalities by aligning statutory compliance with operational strategy. Our approach focuses on establishing clean corporate structures from day one, drafting watertight commercial agreements, and providing proactive secretarial support to keep your SEZ enterprise fully compliant with evolving frameworks.',
    caseStudy: {
      client: 'Fast-Growing SEZ Enterprise',
      challenge:
        'A multi-shareholder venture needed to rapidly incorporate, structure complex investment agreements, and establish a compliant governance framework to qualify for SEZ operational licenses.',
      solution:
        'Drafted tailored shareholder agreements, managed the end-to-end incorporation process, and structured their corporate governance policies to satisfy strict regulatory benchmarks.',
      outcome:
        'Achieved full compliance and successful incorporation, enabling the client to secure their SEZ license and launch operations with clear investor protections.',
    },
    color: 'dark',
  },
  {
    id: 4,
    number: '04',
    title: 'Industrial Park & Infrastructure Advisory',
    tagline:
      'Strategic planning, PPP structuring, and development advisory for world-class industrial parks and logistics hubs',
    longDescription:
      'Strategic consulting for industrial parks, logistics hubs, and economic zone development projects.',
    benefits: [
      'Comprehensive SEZ & industrial park development advisory and framework design',
      'Rigorous project feasibility studies and industrial ecosystem planning',
      'End-to-end Public-Private Partnership (PPP) advisory and structuring support',
      'Strategic infrastructure planning coordination and investor attraction strategies',
    ],
    approach:
      'We take megaprojects from concept to execution by bridging the gap between infrastructure planning, financial viability, and regulatory design. Our approach focuses on modeling sustainable industrial ecosystems, alignment with PPP frameworks, and structuring environments that actively attract world-class anchor investors.',
    caseStudy: {
      client: 'Regional Logistics Hub Developer',
      challenge:
        'A development consortium required robust feasibility validation and a clear operational framework to structure a multi-million dollar industrial park project under a public-private framework.',
      solution:
        'Delivered a comprehensive master-planning feasibility study, mapped out the industrial ecosystem dependencies, and designed a compliant PPP operational framework.',
      outcome:
        'The project successfully advanced past the regulatory planning phase, secured critical government approvals, and established a clear roadmap to attract tier-one logistics operators.',
    },
    color: 'light',
  },
  {
    id: 5,
    number: '05',
    title: 'Trade, Customs & Export Advisory',
    tagline:
      'Strategic customs optimization, compliance, and market access advisory under AfCFTA, AGOA, and global trade frameworks',
    longDescription:
      'Supporting businesses engaged in international trade and export-oriented operations.',
    benefits: [
      'Rigorous export compliance advisory and supply chain compliance auditing',
      'Strategic customs & duty optimization to minimize landed costs and tariffs',
      'Comprehensive trade documentation support and logistics facilitation',
      'Specialized market access advisory under AfCFTA, AGOA, and international treaties',
    ],
    approach:
      'We streamline global trade complexities by integrating cross-border regulatory compliance with supply chain efficiency. Our approach focuses on structuring duty-optimized supply chains, mitigating customs bottleneck risks, and positioning exporters to fully leverage regional and international preferential trade agreements.',
    caseStudy: {
      client: 'Agricultural Export Enterprise',
      challenge:
        'A large-scale exporter faced complex duty structures, customs clearance delays, and missed utilization targets for regional preferential trade tariffs.',
      solution:
        'Audited and re-structured their documentation workflows, implemented a customs optimization strategy, and aligned operations with AfCFTA compliance benchmarks.',
      outcome:
        'Reduced average customs clearance times, achieved complete regulatory compliance, and realized substantial tariff savings on regional shipments.',
    },
    color: 'dark',
  },
  {
    id: 6,
    number: '06',
    title: 'ESG & Sustainability Advisory',
    tagline:
      'Driving green industrialization, carbon asset monetization, and climate finance solutions for sustainable enterprises',
    longDescription:
      'Driving sustainable industrialization through environmental, social, and governance solutions.',
    benefits: [
      'Comprehensive ESG compliance auditing, framework development, and reporting',
      'Strategic green industrialization and renewable energy transition support',
      'End-to-end carbon credit advisory, carbon removal, and biochar project structuring',
      'Targeted climate finance advisory to unlock sustainable development capital',
    ],
    approach:
      'We embed sustainability directly into industrial operations to create measurable commercial value. Our approach focuses on translating complex global ESG standards into practical operational frameworks, setting up high-integrity carbon removal projects, and aligning green assets with international climate finance criteria.',
    caseStudy: {
      client: 'Industrial Agro-Processor',
      challenge:
        'An industrial manufacturing facility wanted to transition to renewable energy and structure a biochar carbon removal project, but lacked the framework to attract green funding.',
      solution:
        'Designed a comprehensive green industrialization strategy, structured the carbon removal methodology, and aligned the project with climate finance requirements.',
      outcome:
        'Successfully established a compliant ESG reporting framework, unlocked verified carbon credit potential, and positioned the facility to capture premium sustainable investments.',
    },
    color: 'light',
  },
  {
    id: 7,
    number: '07',
    title: 'Immigration & Workforce Solutions',
    tagline:
      'End-to-end workforce mobility, work permit processing, and local content compliance for seamless global operations',
    longDescription:
      'Supporting businesses with workforce mobility and regulatory employment compliance.',
    benefits: [
      'Streamlined investor & work permit processing with direct regulatory tracking',
      'Comprehensive expatriate relocation support and transition advisory',
      'Proactive immigration compliance auditing and workforce regulatory support',
      'Strategic local content compliance frameworks to satisfy regional labor laws',
    ],
    approach:
      'We mitigate the friction of international talent deployment by aligning immigration strategy with local labor laws. Our approach ensures complete compliance with statutory ratios, accelerates permit turnaround times, and provides hands-on relocation logistics to get your cross-border teams operational without legal bottlenecks.',
    caseStudy: {
      client: 'Multinational Engineering Firm',
      challenge:
        'An international firm needed to mobilize a specialized technical team for an SEZ project on a tight timeline while maintaining strict adherence to local content and employment quotas.',
      solution:
        'Managed the expedited processing of investor and specialist work permits, audited workforce ratios, and structured a compliant local talent integration plan.',
      outcome:
        'Successfully deployed the expatriate team ahead of schedule with zero regulatory disruptions, ensuring full compliance with local employment mandates.',
    },
    color: 'dark',
  },
  {
    id: 8,
    number: '08',
    title: 'Capital & Transaction Advisory',
    tagline:
      'Strategic transaction structuring, investor readiness, and financial advisory to secure institutional and DFI capital',
    longDescription:
      'Helping businesses and developers access strategic capital and structure complex transactions.',
    benefits: [
      'Comprehensive project finance advisory and capital raising strategies',
      'Rigorous investor readiness support and institutional financial due diligence',
      'Optimized transaction structuring and complex Public-Private Partnership models',
      'Targeted Development Finance Institution (DFI) and multilateral engagement',
    ],
    approach:
      'We bridge the gap between capital seekers and tier-one financiers by engineering bankable investment opportunities. Our approach focuses on de-risking financial structures, validating assumptions through airtight due diligence, and curating transaction frameworks that align with the specific mandates of commercial lenders, private equity, and DFIs.',
    caseStudy: {
      client: 'Infrastructure Development Consortium',
      challenge:
        'A large-scale project developer required institutional-grade transaction structuring and investor readiness documentation to unlock critical DFI project financing.',
      solution:
        'Conducted extensive financial due diligence, built an optimized capital raising model, and structured the transaction to meet strict multilateral environmental and financial covenants.',
      outcome:
        'Successfully advanced the project to investor-ready status, opened active funding pipelines with major DFIs, and secured the initial tranche of strategic capital financing.',
    },
    color: 'light',
  },
  {
    id: 9,
    number: '09',
    title: 'Digital & Innovation Advisory',
    tagline:
      'Architecting smart SEZ solutions, investor portals, and secure digital compliance engines for modern ecosystems',
    longDescription:
      'Modern solutions for smart industrial ecosystems and digital transformation.',
    benefits: [
      'Strategic planning and deployment of integrated Smart SEZ Solutions',
      'Custom investor portal development to streamline onboarding and management',
      'Robust e-governance advisory and automated digital compliance systems',
      'Data engineering, reporting systems, and end-to-end operational digitalization',
    ],
    approach:
      'We bridge physical industrial processes with modern software architectures to eliminate administrative friction. Our approach centers on developing scannable data pipelines, secure user portals with intuitive workflows, and automated compliance tracking systems that provide real-time reporting metrics to operators and regulatory authorities alike.',
    caseStudy: {
      client: 'Special Economic Zone Authority',
      challenge:
        'An industrial zone authority needed to modernize its paper-heavy investor application tracking and parcel management workflows to reduce processing turnaround times.',
      solution:
        'Designed a secure, centralized digital investor portal with integrated compliance reporting, data-driven tracking metrics, and an e-governance workflow engine.',
      outcome:
        'Reduced application processing times significantly, created absolute reporting clarity for management, and delivered a seamless, modern onboarding experience for incoming international enterprises.',
    },
    color: 'dark',
  },
];

export function getServiceById(id: number): ServiceItem | undefined {
  return services.find((s) => s.id === id);
}

export function getNextServiceId(currentId: number): number {
  const idx = services.findIndex((s) => s.id === currentId);
  if (idx === -1) return services[0].id;
  return services[(idx + 1) % services.length].id;
}

export function getPrevServiceId(currentId: number): number {
  const idx = services.findIndex((s) => s.id === currentId);
  if (idx === -1) return services[services.length - 1].id;
  return services[(idx - 1 + services.length) % services.length].id;
}

