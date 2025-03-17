
import { Code, BookOpen, FileText, HelpCircle } from "lucide-react";
import FeatureCard from "./FeatureCard";

export default function Features() {
  const features = [
    {
      icon: Code,
      title: "AI Code Debugger",
      description:
        "Analyze and fix your code with our AI-powered debugging tool. Get instant feedback and solutions for your programming challenges.",
      link: "/debugger",
      iconClassName: "bg-blue-50 text-blue-600 dark:bg-blue-950 dark:text-blue-400",
      delay: 0.1
    },
    {
      icon: BookOpen,
      title: "Learning Path Generator",
      description:
        "Create personalized learning roadmaps based on your goals. Our AI suggests resources and tracks your progress along the way.",
      link: "/learning",
      iconClassName: "bg-green-50 text-green-600 dark:bg-green-950 dark:text-green-400",
      delay: 0.2
    },
    {
      icon: FileText,
      title: "Resume Generator",
      description:
        "Build professional resumes with AI recommendations. Customize templates and export to PDF. Includes job matching features.",
      link: "/resume",
      iconClassName: "bg-purple-50 text-purple-600 dark:bg-purple-950 dark:text-purple-400",
      delay: 0.3
    },
    {
      icon: HelpCircle,
      title: "Programming Quizzes",
      description:
        "Test your knowledge with interactive programming quizzes across multiple languages and difficulty levels. Track your progress on the leaderboard.",
      link: "/quiz",
      iconClassName: "bg-amber-50 text-amber-600 dark:bg-amber-950 dark:text-amber-400",
      delay: 0.4
    },
  ];

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 opacity-0 animate-fade-in">Powerful Developer Tools</h2>
          <p className="text-lg text-muted-foreground opacity-0 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            Our suite of AI-powered tools designed to accelerate your development journey and enhance your skills.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              link={feature.link}
              iconClassName={feature.iconClassName}
              delay={feature.delay}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
