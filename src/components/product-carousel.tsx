
"use client";

import * as React from "react";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const carouselImages = Array.from({ length: 8 }, (_, i) => ({
  src: `/images/${i}.jpg`,
  alt: `Osho Wisdom Vault Image ${i + 1}`,
}));

export function ProductCarousel() {
  const plugin = React.useRef(
    Autoplay({ delay: 4000, stopOnInteraction: true })
  );

  return (
    <Carousel
      plugins={[plugin.current]}
      className="w-full max-w-[800px] mx-auto"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
      opts={{
        loop: true,
      }}
    >
      <CarouselContent>
        {carouselImages.map((image, index) => (
          <CarouselItem key={index}>
            <div className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl border-4 border-white bg-muted">
              <Image
                src={image.src}
                alt={image.alt}
                width={800}
                height={1000}
                className="object-cover object-center w-full h-full"
                priority={index === 0}
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="left-4" />
      <CarouselNext className="right-4" />
    </Carousel>
  );
}
