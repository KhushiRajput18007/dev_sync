
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/home/Hero";
import Features from "@/components/home/Features";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Code, BookOpen, FileText, HelpCircle, Check, ArrowRight } from "lucide-react";

export default function Index() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <Hero />
        <Features />
        
       
        <section className="py-20 bg-secondary/50">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
              <p className="text-lg text-muted-foreground">
                Our platform integrates AI technology with developer tools to provide a seamless experience.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center text-center p-6">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <span className="text-primary font-bold">1</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Sign Up</h3>
                <p className="text-muted-foreground">
                  Create your account to access all our tools and save your progress.
                </p>
              </div>
              
              <div className="flex flex-col items-center text-center p-6">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <span className="text-primary font-bold">2</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Choose a Tool</h3>
                <p className="text-muted-foreground">
                  Select from our code debugger, learning path generator, resume builder, or programming quizzes.
                </p>
              </div>
              
              <div className="flex flex-col items-center text-center p-6">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <span className="text-primary font-bold">3</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Get Results</h3>
                <p className="text-muted-foreground">
                  Receive AI-powered solutions, personalized learning paths, professional resumes, or test your knowledge.
                </p>
              </div>
            </div>
          </div>
        </section>
  
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Users Say</h2>
              <p className="text-lg text-muted-foreground">
                Join thousands of developers who have transformed their skills with our platform.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[1, 2, 3].map((i) => (
                <div key={i} className="glass-card p-6 rounded-xl">
                  <div className="flex space-x-1 mb-4">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <svg
                        key={star}
                        className="w-5 h-5 text-amber-500"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="mb-4 text-foreground">
                    {i === 1 && "The AI code debugger saved me hours of troubleshooting. It's like having a senior developer by your side at all times."}
                    {i === 2 && "I've landed two job interviews thanks to the resume generator. The AI suggestions helped me highlight skills I didn't know were valuable."}
                    {i === 3 && "The learning path generator created a perfect roadmap for me to transition from frontend to full-stack development."}
                  </p>
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-3">
                      <span className="text-primary font-medium">{i === 1 ? "JD" : i === 2 ? "SL" : "AP"}</span>
                    </div>
                    <div>
                      <p className="font-semibold">
                        {i === 1 ? "John Doe" : i === 2 ? "Sarah Lee" : "Alex Park"}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {i === 1 ? "Frontend Developer" : i === 2 ? "Software Engineer" : "Full-Stack Developer"}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
      
        <section className="py-20 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Elevate Your Skills?</h2>
            <p className="text-xl opacity-90 max-w-2xl mx-auto mb-8">
              Join our platform today and unlock the power of AI-driven developer tools.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild>
                <Link to="/signup" className="group">
                  Get Started 
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="bg-transparent border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10" asChild>
                <Link to="/features">Explore Features</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
       
     
      
      <Footer />
    </div>
  );
}