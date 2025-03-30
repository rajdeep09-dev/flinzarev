'use client';

import { useState, useEffect, useRef } from 'react';

interface TypewriterTextProps {
  texts: string[];
  className?: string;
  typingSpeed?: number;
  deletingSpeed?: number;
  delayBetweenTexts?: number;
}

export default function TypewriterText({
  texts,
  className = '',
  typingSpeed = 100,
  deletingSpeed = 50,
  delayBetweenTexts = 1500
}: TypewriterTextProps) {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [isWaiting, setIsWaiting] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (isWaiting) return;

    const currentText = texts[currentTextIndex];
    const currentLength = displayText.length;

    // If not deleting and text is not fully typed
    if (!isDeleting && currentLength < currentText.length) {
      timeoutRef.current = setTimeout(() => {
        setDisplayText(currentText.substring(0, currentLength + 1));
      }, typingSpeed);
    }
    // If not deleting and text is fully typed, wait before deleting
    else if (!isDeleting && currentLength === currentText.length) {
      setIsWaiting(true);
      timeoutRef.current = setTimeout(() => {
        setIsDeleting(true);
        setIsWaiting(false);
      }, delayBetweenTexts);
    }
    // If deleting and text is not fully deleted
    else if (isDeleting && currentLength > 0) {
      timeoutRef.current = setTimeout(() => {
        setDisplayText(currentText.substring(0, currentLength - 1));
      }, deletingSpeed);
    }
    // If deleting and text is fully deleted, move to next text
    else if (isDeleting && currentLength === 0) {
      setIsDeleting(false);
      setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [currentTextIndex, displayText, isDeleting, isWaiting, texts, typingSpeed, deletingSpeed, delayBetweenTexts]);

  return (
    <span className={className}>
      {displayText}
      <span className="inline-block w-[0.5em] h-[1.2em] bg-current animate-pulse ml-1"></span>
    </span>
  );
}
