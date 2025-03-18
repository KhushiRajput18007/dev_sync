
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  const [loaded, setLoaded] = useState(false);
  const phrases = ["Career", "Skills", "Learning", "Code", "Resume"];
  const [currentPhrase, setCurrentPhrase] = useState(phrases[0]);
  const [phraseIndex, setPhraseIndex] = useState(0);

  useEffect(() => {
    setLoaded(true);
    
    const interval = setInterval(() => {
      setPhraseIndex((prevIndex) => {
        const newIndex = (prevIndex + 1) % phrases.length;
        setCurrentPhrase(phrases[newIndex]);
        return newIndex;
      });
    }, 3000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block py-1 px-3 mb-5 rounded-full bg-primary/10 text-sm font-medium text-primary animate-fade-in opacity-0" style={{ animationDelay: "0.1s" }}>
            AI-Powered Developer Tools
          </span>
          
          <h1 className="text-4xl md:text-6xl font-bold leading-tight md:leading-tight mb-6 opacity-0 animate-fade-in" style={{ animationDelay: "0.3s" }}>
            Transform Your <br className="hidden md:block" />
            <span className="relative">
              <span className="text-gradient">
                {currentPhrase}
              </span>
              <span className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-primary/0 via-primary/50 to-primary/0"></span>
            </span>
            <br className="hidden md:block" />
            With AI Innovation
          </h1>
          
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto opacity-0 animate-fade-in" style={{ animationDelay: "0.5s" }}>
            Revolutionize your development journey with our suite of AI-powered tools. 
            Debug code, create personalized learning paths, generate resumes, and test 
            your skills in one integrated platform.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center opacity-0 animate-fade-in" style={{ animationDelay: "0.7s" }}>
            <Button size="lg" asChild>
              <Link to="/signup" className="group">
                Get Started 
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link to="/features">Explore Features</Link>
            </Button>
          </div>
        </div>
      </div>


      <div className="absolute top-1/4 left-10 w-72 h-72 bg-primary/5 rounded-full filter blur-3xl opacity-0 animate-fade-in" style={{ animationDelay: "0.2s" }}></div>
      <div className="absolute bottom-1/4 right-10 w-60 h-60 bg-primary/5 rounded-full filter blur-3xl opacity-0 animate-fade-in" style={{ animationDelay: "0.4s" }}></div>
    </section>
  );
}