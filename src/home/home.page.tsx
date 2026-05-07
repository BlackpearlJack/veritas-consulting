import { CountryProfile, Hero, Services } from '@/home/components';
import type { StatItem } from '@/home/types';

const economyStats: StatItem[] = [
  {
	title: 'Economic Core',
	description: 'Strategic continental location\n' +
	  'providing preferred access to 300M+ consumers across the EAC trade bloc.',
  },
  {
	title: 'Digital First',
	description: 'A global leader in mobile money\n' +
	  'penetration and digital infrastructure, fostering a unique leapfrog economy.',
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
		thesisLabel="Investment Thesis"
		mainHeading="The East African Growth Engine"
		description={
		  'Kenya serves as the undisputed gateway to East Africa, combining a robust regulatory\n' +
		  'framework with a demographic dividend that few regions can match.'
		}
		stats={economyStats}
	  />
	</>
  );
}


