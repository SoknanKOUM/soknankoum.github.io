import { Hero } from '@/components/home/Hero';
import { FeaturedProjects } from '@/components/home/FeaturedProjects';
import { ContactPreview } from '@/components/home/ContactPreview';

export default function Home() {
  return (
    <>
      <Hero />

      <FeaturedProjects />

      <ContactPreview />
    </>
  );
}
