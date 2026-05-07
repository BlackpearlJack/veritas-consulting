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
  {
    id: 1,
    number: '01',
    title: 'Special Economic Zone (SEZ) Advisory Services',
    tagline:
      'End-to-end advisory and on-the-ground support for SEZ developers and enterprises in Kenya',
    longDescription:
      'Veritas Crest is a leading advisor on Special Economic Zone (SEZ) matters in Kenya, with a proven track record of delivering strategic, results-driven solutions to a diverse portfolio of clients. We maintain an operational presence across all SEZs in the country, enabling seamless, on-the-ground advisory services to both zone developers and enterprises. Our close working relationship with the Special Economic Zones Authority (SEZA) gives us deep regulatory insight and a practical understanding of the evolving SEZ landscape.',
    benefits: [
      'Gazettement advisory and feasibility support for SEZ developers',
      'End-to-end licensing of SEZ developers, operators and enterprises',
      'One-Stop-Shop coordination with regulators and government agencies',
      'Operational advisory including work permits and iTax status support',
      'Practical regulatory guidance informed by SEZA engagement',
    ],
    approach:
      'We combine regulatory insight, feasibility analysis and hands-on implementation to guide clients from concept to licensed, operational SEZ status. Our approach is pragmatic: we draft documentation required for gazettement, coordinate stakeholders across government and industry, secure licenses, and help enterprises operationalise within SEZs.',
    caseStudy: {
      client: 'Confidential SEZ Developer',
      challenge:
        'A large developer required gazettement and licensing for a mixed-use SEZ while coordinating multiple national agencies and a complex land title environment.',
      solution:
        'Led feasibility work, prepared gazettement submissions and coordinated a One-Stop-Shop engagement with regulators, accelerating licensing and enabling phased construction.',
      outcome:
        'Developer obtained SEZ status and licenses within planned timelines enabling the first tranche of investors to mobilise on schedule.',
    },
    color: 'dark',
  },

  {
    id: 2,
    number: '02',
    title: 'HR Outsourcing & Consulting',
    tagline:
      'End-to-end HR outsourcing, recruitment and strategy services tailored for Kenyan organisations',
    longDescription:
      'Veritas Crest delivers strategic HR outsourcing and advisory services that help organisations optimise human capital functions through efficient, compliant and scalable models. We combine local regulatory expertise with operational experience to deliver practical HR solutions aligned with business objectives.',
    benefits: [
      'Comprehensive HR consultancy and outsourcing',
      'Recruitment and talent acquisition services',
      'Strategy development, workforce planning and policy design',
      'MSME-focused advisory and compliance support',
    ],
    approach:
      'We diagnose current HR capabilities, design fit-for-purpose outsourcing models and implement HR operations that scale. Our work emphasises regulatory compliance, streamlined payroll and benefits administration, and hands-on recruitment to fill critical roles quickly.',
    caseStudy: {
      client: 'National MSME Platform',
      challenge:
        'An organisation needed to scale HR operations rapidly to support growth across multiple Kenyan counties while remaining compliant with local labor laws.',
      solution:
        'Designed an outsourcing model, implemented payroll and benefits administration and ran targeted recruitment for key roles.',
      outcome:
        'Client reduced time-to-hire, improved payroll accuracy and achieved compliance across operations.',
    },
    color: 'light',
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

