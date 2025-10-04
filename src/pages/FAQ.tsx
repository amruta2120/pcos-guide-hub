import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const FAQ = () => {
  const faqs = [
    {
      question: "What is PCOS?",
      answer: "Polycystic Ovary Syndrome (PCOS) is a hormonal disorder common among women of reproductive age. Women with PCOS may have infrequent or prolonged menstrual periods or excess male hormone (androgen) levels. The ovaries may develop numerous small collections of fluid (follicles) and fail to regularly release eggs."
    },
    {
      question: "What are the common symptoms of PCOS?",
      answer: "Common symptoms include irregular periods, excess androgen (male hormones) leading to facial hair and acne, polycystic ovaries, weight gain, thinning hair on the scalp, and darkening of skin particularly along neck creases, in the groin, and underneath breasts."
    },
    {
      question: "How is PCOS diagnosed?",
      answer: "PCOS is typically diagnosed through a combination of physical examination, blood tests to measure hormone levels, and ultrasound to check the appearance of ovaries. Doctors usually look for at least two of three main features: irregular periods, excess androgen, and polycystic ovaries."
    },
    {
      question: "Can PCOS affect fertility?",
      answer: "Yes, PCOS is one of the most common causes of female infertility. However, many women with PCOS can still conceive with proper treatment and management. Ovulation induction medications and lifestyle changes can significantly improve fertility outcomes."
    },
    {
      question: "How accurate is the HerHealth AI assessment?",
      answer: "Our AI assessment tool is based on established medical criteria and research. It provides a risk assessment and symptom analysis, but it is not a medical diagnosis. We recommend using our tool as a first step and consulting with healthcare providers for proper diagnosis and treatment."
    },
    {
      question: "Is the assessment free?",
      answer: "Yes, our PCOS assessment is completely free to use. We believe in making health information accessible to all women who need it."
    },
    {
      question: "How long does the assessment take?",
      answer: "The comprehensive assessment typically takes 5-7 minutes to complete. We recommend taking it in a quiet environment where you can focus on answering the questions accurately."
    },
    {
      question: "Is my health information secure?",
      answer: "Absolutely. We use enterprise-grade encryption to protect your data. Your personal health information is stored securely and is never shared with third parties without your explicit consent. Your privacy is our top priority."
    },
    {
      question: "Can PCOS be cured?",
      answer: "There is currently no cure for PCOS, but the symptoms can be effectively managed through lifestyle changes, medication, and proper medical care. Many women with PCOS lead healthy, fulfilling lives with appropriate treatment."
    },
    {
      question: "What lifestyle changes help with PCOS?",
      answer: "Key lifestyle changes include maintaining a healthy weight through balanced nutrition, regular physical activity (especially strength training and cardio), stress management, adequate sleep, and limiting processed foods and sugars. Even a 5-10% weight loss can significantly improve symptoms."
    },
    {
      question: "Should I see a doctor if I suspect PCOS?",
      answer: "Yes, definitely. While our assessment tool can help you understand your symptoms and risk factors, a healthcare provider can perform necessary tests, provide an accurate diagnosis, and create a personalized treatment plan."
    },
    {
      question: "Can I use HerHealth AI if I'm already diagnosed with PCOS?",
      answer: "Yes! Our platform can help you track symptoms, understand your condition better, and monitor changes over time. However, always follow your healthcare provider's treatment plan and use our tool as a complementary resource."
    },
    {
      question: "Does PCOS increase other health risks?",
      answer: "Women with PCOS have an increased risk of developing type 2 diabetes, high blood pressure, high cholesterol, heart disease, and endometrial cancer. This is why early diagnosis and management are so important."
    },
    {
      question: "How often should I retake the assessment?",
      answer: "You can retake the assessment whenever your symptoms change or every 3-6 months to track how your condition evolves. This can help you and your healthcare provider monitor the effectiveness of your treatment plan."
    },
    {
      question: "Do you offer medical consultations?",
      answer: "HerHealth AI is an educational and assessment tool, not a medical consultation service. We provide information and risk assessments, but we strongly encourage you to work with qualified healthcare providers for diagnosis and treatment."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="text-center space-y-4">
            <h1 className="text-5xl font-bold">Frequently Asked Questions</h1>
            <p className="text-xl text-muted-foreground">
              Everything you need to know about PCOS and HerHealth AI
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`} 
                className="bg-card rounded-lg px-6 border-2 hover:border-primary/50 transition-colors"
              >
                <AccordionTrigger className="text-left hover:no-underline text-lg font-semibold">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default FAQ;
