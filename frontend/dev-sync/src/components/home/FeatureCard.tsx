
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  link: string;
  className?: string;
  iconClassName?: string;
  delay?: number;
}

export default function FeatureCard({ 
  icon: Icon, 
  title, 
  description, 
  link,
  className,
  iconClassName,
  delay = 0
}: FeatureCardProps) {
  return (
    <div 
      className={cn(
        "glass-card p-6 rounded-xl flex flex-col h-full transition-all duration-300 hover:shadow-lg group opacity-0 animate-fade-in",
        className
      )}
      style={{ animationDelay: `${delay}s` }}
    >
      <div className={cn(
        "p-3 rounded-lg mb-4 w-fit bg-primary/10 text-primary",
        iconClassName
      )}>
        <Icon className="h-6 w-6" />
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-muted-foreground flex-grow mb-4">{description}</p>
      <Button variant="ghost" className="justify-start p-0 group" asChild>
        <Link to={link} className="flex items-center text-primary">
          Learn more
          <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </Button>
    </div>
  );
}
