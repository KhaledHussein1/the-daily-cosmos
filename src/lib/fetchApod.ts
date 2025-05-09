// src/lib/fetchApod.ts
export async function fetchApod() {
    const apiKey = process.env.NASA_API_KEY;
  
    if (!apiKey) throw new Error('NASA API key is not defined');
  
    const res = await fetch(
      `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`, 
      {
        next: { revalidate: 86400 },
      }
    );
  
    if (!res.ok) throw new Error('Failed to fetch APOD');
    return res.json();
  }
  