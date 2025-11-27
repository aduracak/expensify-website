import { useState, useEffect } from 'react';

// Different slogans to rotate through
const slogans = [
  'Business Agility',
  'Digital Innovation', 
  'Growth Solutions',
  'Tech Excellence'
];

export default function Hero() {

  const [currentSloganIndex, setCurrentSloganIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    const currentSlogan = slogans[currentSloganIndex];

    const handleTyping = () => {
      if (!isDeleting) {
        // Typing forward
        if (displayedText.length < currentSlogan.length) {
          setDisplayedText(currentSlogan.substring(0, displayedText.length + 1));
          setTypingSpeed(150);
        } else {
          // Pause before deleting
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        // Deleting
        if (displayedText.length > 0) {
          setDisplayedText(currentSlogan.substring(0, displayedText.length - 1));
          setTypingSpeed(75);
        } else {
          // Move to next slogan
          setIsDeleting(false);
          setCurrentSloganIndex((prev) => (prev + 1) % slogans.length);
        }
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, currentSloganIndex, typingSpeed]);

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-dark via-[#0a1414] to-dark text-white overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 right-20 w-96 h-96 bg-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-accent rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-20 text-center animate-fade-in">
        {/* Badge */}
        <div className="inline-flex items-center px-4 py-2 mb-8 rounded-full border border-primary/30 bg-primary/10 backdrop-blur-sm">
          <span className="text-primary text-sm font-semibold">Premium Digital Solutions</span>
        </div>

        {/* Main Heading */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
          Unlock Next-Level <br />
          <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
            {displayedText}
            <span className="animate-pulse">|</span>
          </span>
        </h1>
        
        <p className="text-lg md:text-xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
          Drive innovation, efficiency, and measurable growth with expert-led digital transformation, 
          project management, and development services. Partner with a proven team trusted by leaders 
          worldwide to deliver lasting business impact.
        </p>
        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a 
            href="#contact" 
            className="group inline-flex items-center gap-2 bg-primary hover:bg-accent text-white font-semibold px-8 py-4 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-primary/50"
          >
            Start Your Transformation
            <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
          
          <a 
            href="#services" 
            className="inline-flex items-center gap-2 bg-transparent border-2 border-gray-700 hover:border-primary text-white font-semibold px-8 py-4 rounded-lg text-lg transition-all duration-300 hover:bg-primary/10"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
            </svg>
            Discover Our Solutions
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
}
