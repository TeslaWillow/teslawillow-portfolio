// ./src/components/atoms/Typewriter.tsx
import React, { useState, useEffect } from 'react';

interface TypewriterProps {
  words: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseTime?: number;
}

/**
 * Typewriter Atom
 * Handles typing/deleting logic for a list of strings.
 */
const Typewriter: React.FC<TypewriterProps> = ({ 
  words, 
  typingSpeed = 150, 
  deletingSpeed = 100, 
  pauseTime = 2000 
}) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    // Guard Clause: No words, no typing
    if (words.length === 0) return;

    const currentFullWord = words[currentWordIndex];
    
    const handleTyping = () => {
      if (!isDeleting) {
        // Adding characters
        setCurrentText(currentFullWord.substring(0, currentText.length + 1));
        
        if (currentText === currentFullWord) {
          // Pause before deleting
          setTimeout(() => setIsDeleting(true), pauseTime);
        }
      } else {
        // Deleting characters
        setCurrentText(currentFullWord.substring(0, currentText.length - 1));
        
        if (currentText === '') {
          setIsDeleting(false);
          setCurrentWordIndex((prev) => (prev + 1) % words.length);
        }
      }
    };

    const timer = setTimeout(
      handleTyping, 
      isDeleting ? deletingSpeed : typingSpeed
    );

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentWordIndex, words, typingSpeed, deletingSpeed, pauseTime]);

  return (
    <span className="inline-flex items-center">
      {/* Content */}
      <div className="min-h-[1.0em]">
        <p>{ '>' + currentText + ' '}</p>
      </div>
      
      {/* Cursor */}
      <span className="ml-1 inline-block w-1 h-[1em] bg-white animate-pulse shadow-[0_0_8px_#fff]" />
    </span>
  );
};

export default Typewriter;