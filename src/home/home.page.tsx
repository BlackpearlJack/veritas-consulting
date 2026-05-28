import { CountryProfile, Hero, Services } from '@/home/components';
import type { StatItem } from '@/home/types';

const economyStats: StatItem[] = [
  {
	title: 'Governance',
	description: 'Strong corporate governance and compliance expertise combined with an investor-focused approach.',
  },
  {
	title: 'Networks',
	description: 'Strategic networks across public and private sectors and a commitment to sustainable growth.',
  },
];

export function HomePage() {
  return (
	<>
	  <Hero backgroundImage="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1920" />
	  <Services />
	  <CountryProfile
		imageUrl="https://lh3.googleusercontent.com/aida-public/AB6AXuDSuTjtxv2wQYTNvCzEROjj4kdb0IQzVhbJ4mvqeLZYTQpSLnLEDRGZ54TXk2U3GWuJSo_6tX44oQkrFOW2JpvnsWlAG9pgiQtmurBxmLXvIdMR7aw9_RwIhCfrXKyZr8QQVaz1eSsCIvW2-LiXZyWbFQ93bFhodUbi_aeOYejdIwyd9a3j9nesrmBOgGsujyULFfbwatXswjeqbNfOko5j0yc0VoppUfpRbFf5gpp0m21UWfm3Fp2nsfVpskhhBvsdXUd6-8XTfg"
		imageAlt="country profile image"
		quote="Momentum is the new Currency"
		thesisLabel="Strategic Value"
		mainHeading="Why Choose Us"
		description={
		  'We combine deep regulatory understanding of Special Economic Zones with a commercially driven approach and powerful strategic networks across Africa.'
		}
		stats={economyStats}
	  />
	</>
  );
}


