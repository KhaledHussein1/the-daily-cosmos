'use client';

import Image from 'next/image';

type ApodData = {
  title: string;
  explanation: string;
  url: string;
};

export default function ApodCard({ data }: { data: ApodData }) {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8 md:py-12">
      {/* Card with glowing effect */}
      <div className="rounded-t-none rounded-b-2xl backdrop-blur-xl bg-white/10 border border-white/20 shadow-2xl overflow-hidden glow-effect">
        {/* Image with a fixed height */}
        <div className="relative w-full h-60 md:h-96">
          <Image
            src={data.url}
            alt={data.title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 768px"
            priority
          />
        </div>

        {/* Text content */}
        <div className="p-6 md:p-8 text-white">
          <h1 className="text-2xl md:text-3xl text-center font-semibold mb-4">
            {data.title}
          </h1>
          <p className="leading-relaxed text-base md:text-lg text-white/80">
            {data.explanation}
          </p>
        </div>
      </div>
    </div>
  );
}

