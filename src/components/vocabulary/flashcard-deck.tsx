'use client';

import { useState } from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { Card, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import type { VocabularyItem } from '@/lib/types';
import './flashcard.css';

function Flashcard({ word, definition, definitionFR, example }: VocabularyItem) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div className="flashcard-container" onClick={() => setIsFlipped(!isFlipped)}>
      <div className={cn('flashcard', { 'is-flipped': isFlipped })}>
        <Card className="flashcard-face flashcard-front">
          <CardContent className="flex flex-col items-center justify-center h-full text-center p-6">
            <p className="text-3xl md:text-4xl font-bold font-headline">{word}</p>
          </CardContent>
        </Card>
        <Card className="flashcard-face flashcard-back">
          <CardContent className="flex flex-col items-center justify-center h-full text-center p-6 space-y-4">
            <div>
              <p className="text-sm font-semibold text-muted-foreground">DEFINITION (EN)</p>
              <p className="text-lg md:text-xl font-medium">{definition}</p>
            </div>
             <div>
              <p className="text-sm font-semibold text-muted-foreground">DÉFINITION (FR)</p>
              <p className="text-lg md:text-xl font-medium">{definitionFR}</p>
            </div>
            <div>
              <p className="text-sm font-semibold text-muted-foreground">EXAMPLE</p>
              <p className="text-lg md:text-xl italic">"{example}"</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export function FlashcardDeck({ initialWords }: { initialWords: VocabularyItem[] }) {
  const [words] = useState(initialWords);

  return (
    <Carousel
      opts={{
        align: 'center',
      }}
      className="w-full max-w-sm md:max-w-md"
    >
      <CarouselContent>
        {words.map((item, index) => (
          <CarouselItem key={index}>
            <Flashcard {...item} />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
