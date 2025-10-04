import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t bg-card/50">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col items-center gap-4 text-center">
          <div className="flex items-center gap-2">
            <Heart className="h-5 w-5 fill-primary text-primary" />
            <span className="font-semibold">HerHealth AI</span>
          </div>
          <p className="text-sm text-muted-foreground max-w-md">
            Empowering women with AI-driven health insights and PCOS management tools.
          </p>
          <p className="text-xs text-muted-foreground">
            © 2025 HerHealth AI. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
