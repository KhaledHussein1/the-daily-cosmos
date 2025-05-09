// src/app/page.tsx
import { fetchApod } from '@/lib/fetchApod';
import ApodCard from '@/components/ApodCard';
import StarWarp from '@/components/StarWarp';
import AboutSection from '@/components/AboutSection';

export const revalidate = 7200; // 2 hours

export default async function HomePage() {
  const data = await fetchApod();

  return (
    <main>
      <StarWarp/>
      <h1 className="text-4xl font-bold text-center mt-8 mb-0">
        The Daily Cosmos
      </h1>
      <ApodCard data={data} />
      <AboutSection />
    </main>
  );
}
