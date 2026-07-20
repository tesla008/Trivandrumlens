"use client";

import { useState } from 'react';
import Image from 'next/image';
import { Card } from '@/components/ui/card';
import { Dialog, DialogContent, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { X, ZoomIn } from 'lucide-react';

const galleryImages = [
    { id: 'fam-1', src: 'https://exlaucgslmfiakllbtnq.supabase.co/storage/v1/object/public/Additional/pic1.png', alt: 'Family enjoying a meal', title: 'Quality Time', category: 'Families' },
    { id: 'fam-2', src: 'https://exlaucgslmfiakllbtnq.supabase.co/storage/v1/object/public/Additional/pic2.png', alt: 'Happy customers at the cafe', title: 'Shared Moments', category: 'Families' },
    { id: 'fam-3', src: 'https://exlaucgslmfiakllbtnq.supabase.co/storage/v1/object/public/Additional/pic3.png', alt: 'Guests dining together', title: 'Making Memories', category: 'Families' },
    { id: 'fam-4', src: 'https://exlaucgslmfiakllbtnq.supabase.co/storage/v1/object/public/Additional/pic4.png', alt: 'A group of friends at the cafe', title: 'Good Company', category: 'Families' },
    { id: 'amb-1', src: 'https://exlaucgslmfiakllbtnq.supabase.co/storage/v1/object/public/Additional/AMB1.JPG', alt: 'Interior of the cafe', title: 'Warm & Inviting', category: 'Ambience' },
    { id: 'amb-2', src: 'https://exlaucgslmfiakllbtnq.supabase.co/storage/v1/object/public/Additional/AMB2.jpg', alt: 'Cafe seating area', title: 'Comfortable Seating', category: 'Ambience' },
    { id: 'amb-3', src: 'https://exlaucgslmfiakllbtnq.supabase.co/storage/v1/object/public/Additional/AMB3.JPG', alt: 'Cafe decor details', title: 'Authentic Touches', category: 'Ambience' },
    { id: 'dish-1', src: 'https://exlaucgslmfiakllbtnq.supabase.co/storage/v1/object/public/Additional/Punugulu.jpeg', alt: 'Punugulu', title: 'Crispy Punugulu', category: 'Dishes' },
    { id: 'dish-2', src: 'https://exlaucgslmfiakllbtnq.supabase.co/storage/v1/object/public/Additional/idliSambhar.JPG', alt: 'Idli Sambhar', title: 'Soft Idli Sambhar', category: 'Dishes' },
    { id: 'dish-3', src: 'https://exlaucgslmfiakllbtnq.supabase.co/storage/v1/object/public/Additional/GheePodiThatteIdli.JPG', alt: 'Ghee Podi Thatte Idli', title: 'Signature Ghee Podi', category: 'Dishes' },
    { id: 'dish-4', src: 'https://exlaucgslmfiakllbtnq.supabase.co/storage/v1/object/public/Additional/Sambharvada.JPG', alt: 'Sambhar Vada', title: 'Golden Vadas', category: 'Dishes' },
    { id: 'dish-5', src: 'https://exlaucgslmfiakllbtnq.supabase.co/storage/v1/object/public/Additional/mushroomcurry.jpeg', alt: 'Mushroom Curry with Malabari Paratha', title: 'Mushroom Curry with Malabari Paratha', category: 'Dishes' },
    { id: 'dish-6', src: 'https://exlaucgslmfiakllbtnq.supabase.co/storage/v1/object/public/Additional/gheeroast.jpeg', alt: 'Ghee Roast Paneer with Malabari Paratha', title: 'Ghee Roast Paneer with Malabari Paratha', category: 'Dishes' }
];

export default function GalleryPage() {
    const [selectedImage, setSelectedImage] = useState<typeof galleryImages[0] | null>(null);

    return (
        <div className="bg-background min-h-screen pt-32 pb-24 overflow-x-hidden">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center mb-16 space-y-4">
                    <h1 className="font-headline text-5xl md:text-7xl font-bold text-primary uppercase">Gallery</h1>
                    <p className="text-lg text-foreground/70 max-w-2xl mx-auto italic">
                        Capturing the essence of tradition, warmth, and flavor at Trivandrum Café.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {galleryImages.map((image) => (
                        <Card 
                            key={image.id} 
                            className="group relative overflow-hidden rounded-2xl border-none shadow-md hover:shadow-2xl transition-all duration-500 cursor-pointer aspect-[4/5]"
                            onClick={() => setSelectedImage(image)}
                        >
                            <Image
                                src={image.src}
                                alt={image.alt}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                            />
                            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-4">
                                <ZoomIn className="text-white h-10 w-10 mb-4 scale-50 group-hover:scale-100 transition-transform duration-300" />
                                <h3 className="text-white font-headline text-xl text-center translate-y-4 group-hover:translate-y-0 transition-transform duration-300 px-4">
                                    {image.title}
                                </h3>
                                <p className="text-primary text-xs uppercase tracking-widest mt-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                                    {image.category}
                                </p>
                            </div>
                        </Card>
                    ))}
                </div>
            </div>

            <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
                <DialogContent className="max-w-none w-screen h-screen bg-black/95 border-0 shadow-none p-0 flex items-center justify-center">
                    <div className="sr-only">
                        <DialogTitle>{selectedImage?.title || 'Gallery Image'}</DialogTitle>
                        <DialogDescription>{selectedImage?.alt || 'Full screen preview'}</DialogDescription>
                    </div>
                    {selectedImage && (
                        <div className="relative w-full h-full p-4 md:p-12 flex items-center justify-center">
                            <div className="relative w-full h-full max-w-5xl">
                                <Image
                                    src={selectedImage.src}
                                    alt={selectedImage.alt}
                                    fill
                                    className="object-contain"
                                    sizes="100vw"
                                    quality={100}
                                    priority
                                />
                            </div>
                            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-center text-white hidden md:block w-full px-4">
                                <h2 className="font-headline text-2xl md:text-3xl mb-2">{selectedImage.title}</h2>
                                <p className="text-primary uppercase tracking-widest text-sm">{selectedImage.category}</p>
                            </div>
                        </div>
                    )}
                    <button 
                        onClick={() => setSelectedImage(null)} 
                        className="absolute top-6 right-6 text-white p-2 rounded-full bg-black/50 hover:bg-black/80 transition-colors z-[60] min-h-[44px] min-w-[44px] flex items-center justify-center"
                    >
                        <X className="h-8 w-8" />
                        <span className="sr-only">Close</span>
                    </button>
                </DialogContent>
            </Dialog>
        </div>
    );
}
