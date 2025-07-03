
import { CheckCircle2, Mail, Quote, ShieldCheck, Zap } from 'lucide-react';
import { CheckoutForm } from '@/components/checkout-form';
import { ProductCarousel } from '@/components/product-carousel';
import { Card, CardContent } from '@/components/ui/card';

const features = [
  { icon: CheckCircle2, text: '1,500+ Audio Speeches' },
  { icon: CheckCircle2, text: '1,300+ E-books' },
  { icon: CheckCircle2, text: '500+ Satsangs' },
  { icon: CheckCircle2, text: 'All Hindi Discourses' },
  { icon: CheckCircle2, text: 'All English Discourses' },
  { icon: CheckCircle2, text: 'Osho Photos' },
];

const testimonials = [
  {
    quote: "This vault transformed my spiritual practice. Having access to Osho's entire library in one place is an incredible gift.",
    author: "Priya S.",
  },
  {
    quote: "I start my day with one of Osho's talks. The quality and organization of this collection are top-notch. Highly recommended!",
    author: "Mark T.",
  },
  {
    quote: "An unparalleled digital archive. It feels like having a direct line to Osho's wisdom anytime, anywhere. Truly priceless.",
    author: "Anja K.",
  },
];

const accessFeatures = [
    {
        icon: ShieldCheck,
        title: "One-Time Payment",
        description: "Pay once and get access to the entire vault forever. No subscriptions, no hidden fees."
    },
    {
        icon: Zap,
        title: "Instant Digital Access",
        description: "Your unique access link is sent to your email and WhatsApp moments after payment."
    },
    {
        icon: Mail,
        title: "Lifetime Updates",
        description: "Receive all future additions to the Osho Wisdom Vault at no extra cost."
    },
]

export default function Home() {
  return (
    <div className="bg-background min-h-screen text-foreground font-body pb-24 lg:pb-0">
      <header className="text-center py-12 md:py-16">
        <h1 className="text-4xl md:text-6xl font-extrabold font-headline tracking-tight text-primary">
          Osho Wisdom Vault
        </h1>
        <p className="mt-4 text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
          Explore the timeless wisdom of Osho with this comprehensive digital collection. All his life's learnings, available to you instantly.
        </p>
      </header>
      <main className="container mx-auto px-4 pb-16">
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
          {/* Left Section */}
          <div className="lg:col-span-3">
            <ProductCarousel />
          </div>

          {/* Right Section */}
          <div className="lg:col-span-2 flex flex-col justify-center h-full">
            <CheckoutForm />
          </div>
        </div>

        {/* --- Other Sections --- */}
        <div className="space-y-24 mt-24">
          
          {/* What You Get Section */}
          <section id="what-you-get">
            <h2 className="text-4xl md:text-5xl font-extrabold text-primary mb-12 text-center">
              What You Get
            </h2>
            <div className="bg-card p-8 sm:p-12 rounded-2xl shadow-lg border border-accent/20">
              <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <feature.icon className="w-7 h-7 text-accent shrink-0" />
                    <span className="text-lg text-muted-foreground">{feature.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Testimonials Section */}
          <section id="testimonials">
            <h2 className="text-4xl md:text-5xl font-extrabold text-primary mb-12 text-center">
              Loved by Seekers Worldwide
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="bg-card p-6 rounded-2xl shadow-lg">
                  <CardContent className="p-0 flex flex-col h-full">
                    <Quote className="w-8 h-8 text-accent mb-4" />
                    <p className="text-muted-foreground italic flex-grow">"{testimonial.quote}"</p>
                    <p className="font-bold text-primary mt-4 text-right">— {testimonial.author}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
          
          {/* Secure Access Section */}
          <section id="secure-access" className="text-center bg-muted/70 py-20 rounded-2xl">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl md:text-5xl font-extrabold text-primary mb-12">
                Secure & Instant Access
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl mx-auto mb-10">
                    {accessFeatures.map((feature) => (
                        <div key={feature.title} className="flex flex-col items-center">
                            <feature.icon className="w-12 h-12 text-accent mb-4" />
                            <h3 className="text-xl font-bold text-primary">{feature.title}</h3>
                            <p className="text-muted-foreground mt-2">{feature.description}</p>
                        </div>
                    ))}
                </div>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                    Your purchase is securely handled by Razorpay, a trusted payment gateway. After a single one-time payment, you'll have lifetime access to the entire digital vault.
                </p>
            </div>
          </section>
        </div>
      </main>

      <footer className="border-t border-accent/20 mt-24 py-12 bg-muted/30">
        <div className="container mx-auto px-4 text-center md:text-left">
            <h3 className="text-2xl font-bold text-primary mb-4">Support</h3>
            <div className="text-muted-foreground space-y-2">
                <p>
                    <strong>📱 WhatsApp Support:</strong> <a href="https://wa.me/918980000968" target="_blank" rel="noopener noreferrer" className="hover:text-primary hover:underline">8980000968</a>
                </p>
                <p>
                    <strong>✉️ Email:</strong> <a href="mailto:support@oshomedia.shop" className="hover:text-primary hover:underline">support@oshomedia.shop</a>
                </p>
            </div>
        </div>
      </footer>
    </div>
  );
}
