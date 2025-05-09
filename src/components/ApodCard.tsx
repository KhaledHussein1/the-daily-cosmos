'use client';

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
        <img
          src={data.url}
          alt={data.title}
          className="w-full object-cover max-h-[600px] aspect-video border-b border-white/20"
        />
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
