
"use client";

import { Card, CardContent } from "@/components/ui/card";

const videos = [
  {
    id: "v1",
    url: "https://exlaucgslmfiakllbtnq.supabase.co/storage/v1/object/public/Additional/TrivanVideo.mp4",
  }
];

export function InfluencerVideos() {
  return (
    <section className="py-20 md:py-32 bg-primary/5">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16 space-y-4">
          <h3 className="text-primary font-bold uppercase tracking-widest text-sm">Community Highlights</h3>
          <h2 className="font-headline text-4xl md:text-6xl font-bold text-foreground">
            Voices of Our Guests
          </h2>
          <p className="mt-4 text-lg text-foreground/70 max-w-2xl mx-auto">
            See why food lovers across Nagpur are choosing Trivandrum Café for their authentic South Indian fix.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-8">
          {videos.map((video) => (
            <Card key={video.id} className="overflow-hidden group rounded-2xl shadow-xl border-none max-w-md w-full">
              <CardContent className="p-0 bg-black aspect-[9/16]">
                <video
                  src={video.url}
                  className="w-full h-full object-cover"
                  controls
                  playsInline
                  preload="metadata"
                />
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
