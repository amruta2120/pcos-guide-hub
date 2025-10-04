import { Card, CardContent } from "@/components/ui/card";
import { Target, Users, Sparkles, Shield } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto space-y-16">
          {/* Hero */}
          <div className="text-center space-y-4">
            <h1 className="text-5xl font-bold">About HerHealth AI</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Empowering women with intelligent health insights and personalized PCOS management tools.
            </p>
          </div>

          {/* Mission */}
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-center">Our Mission</h2>
            <Card className="border-2">
              <CardContent className="pt-6">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  HerHealth AI was created to bridge the gap in women's health technology. We believe every woman deserves access to accurate, personalized health information. Our AI-powered platform helps women understand PCOS, track symptoms, and make informed decisions about their health journey.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Values */}
          <div className="space-y-8">
            <h2 className="text-3xl font-bold text-center">Our Values</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardContent className="pt-6 space-y-3">
                  <Target className="h-10 w-10 text-primary" />
                  <h3 className="text-xl font-semibold">Evidence-Based</h3>
                  <p className="text-muted-foreground">
                    Our assessments are built on peer-reviewed medical research and clinical guidelines.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6 space-y-3">
                  <Users className="h-10 w-10 text-accent" />
                  <h3 className="text-xl font-semibold">Women-Centered</h3>
                  <p className="text-muted-foreground">
                    Designed by and for women, with empathy and understanding at our core.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6 space-y-3">
                  <Sparkles className="h-10 w-10 text-primary" />
                  <h3 className="text-xl font-semibold">AI-Powered</h3>
                  <p className="text-muted-foreground">
                    Cutting-edge artificial intelligence provides personalized insights and recommendations.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6 space-y-3">
                  <Shield className="h-10 w-10 text-accent" />
                  <h3 className="text-xl font-semibold">Privacy First</h3>
                  <p className="text-muted-foreground">
                    Your health data is encrypted, secure, and never shared without your consent.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Story */}
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-center">Why We Built This</h2>
            <Card className="bg-gradient-to-br from-primary/5 to-accent/5 border-2">
              <CardContent className="pt-6">
                <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                  PCOS affects 1 in 10 women of reproductive age, yet diagnosis often takes years. Many women struggle with symptoms without understanding what's happening to their bodies.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  We created HerHealth AI to change that. Our platform provides immediate, accessible, and personalized health insights, helping women take the first step toward understanding and managing their PCOS.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default About;
