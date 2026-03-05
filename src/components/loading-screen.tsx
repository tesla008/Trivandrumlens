"use client";

import { useState, useEffect } from 'react';
import { Progress } from "@/components/ui/progress";
import { Sparkles } from 'lucide-react';

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
      <div className="w-full max-w-md text-center">
        <div className="flex items-center justify-center gap-2 text-3xl font-headline font-bold text-primary mb-4">
           <Sparkles className="h-8 w-8" /> Trivandrum Café
        </div>
        <Progress value={progress} className="w-full h-2" />
        <p className="mt-4 text-lg text-foreground/80 font-mono">{progress}%</p>
        <p className="mt-2 text-sm text-muted-foreground">Preparing a visual feast...</p>
      </div>
    </div>
  );
}
