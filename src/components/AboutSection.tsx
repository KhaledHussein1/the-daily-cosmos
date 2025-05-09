// src/components/AboutSection.tsx

export default function AboutSection() {
    return (
      <section className="bg-gray-900 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-semibold mb-6">
            Welcome to The Daily Cosmos
          </h2>
          <p className="text-lg md:text-xl mb-6">
            The Daily Cosmos is your window to the wonders of the universe. Each day, we feature a stunning
            image from NASA's Astronomy Picture of the Day (APOD), accompanied by an insightful
            explanation from scientists, offering you a glimpse into the vast beauty of space.
          </p>
          <p className="text-lg md:text-xl mb-6">
            Whether you're a space enthusiast or just curious about the cosmos, The Daily Cosmos makes it easy
            for you to discover the mysteries of our universe. From galaxies far away to the tiniest details of
            our own solar system, we bring you fresh perspectives every day, with the goal of sparking curiosity
            and inspiring awe.
          </p>
          <p className="text-lg md:text-xl">
            So sit back, relax, and explore the infinite beauty of space—one image at a time.
          </p>
        </div>
      </section>
    );
  }
  