"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Progress } from "@/components/ui/progress";

export function LoadingScreen() {
  const [progress, setProgress] = useState(13);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress(prev => (prev >= 95 ? 100 : prev + Math.floor(Math.random() * 8) + 5));
    }, 200);

    if (progress >= 100) {
      clearInterval(timer);
    }
    
    return () => clearInterval(timer);
  }, [progress]);

  return (
    <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background text-foreground">
      <div className="w-full max-w-md text-center p-4">
        <div className="flex items-center justify-center mb-4">
            <Image
                src="https://exlaucgslmfiakllbtnq.supabase.co/storage/v1/object/public/Additional/logo-removebg-preview.png"
                alt="Trivandrum Café Logo"
                width={240}
                height={72}
                className="h-18 w-auto animate-pulse"
                priority
            />
        </div>
        <Progress value={progress} className="w-full h-2" />
        <p className="mt-4 text-lg text-foreground/80 font-mono">{progress}%</p>
        <p className="mt-2 text-sm text-muted-foreground">Preparing a visual feast...</p>
      </div>
    </div>
  );
}
