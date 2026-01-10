import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import { 
  CheckCircle2, 
  ArrowRight, 
  Calendar, 
  Briefcase, 
  MessageSquare,
  Star,
  FileText,
  UserRound,
  Menu
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from "@/components/ui/sheet";

/**
 * Jordana Laporte Coaching - SEO Optimized Website
 * Style: Apple Minimalist (Professional, Neutral Colors, Modern Typography)
 */

export default function Home() {
  const bookingUrl = "https://koalendar.com/e/introductory-call-with-jordana";

  const NavLinks = ({ className = "" }) => (
    <div className={className}>
      <a href="#about" className="hover:text-slate-900 transition-colors">About Me</a>
      <a href="#coaching" className="hover:text-slate-900 transition-colors">Coaching Services</a>
      <a href="#testimonials" className="hover:text-slate-900 transition-colors">Testimonials</a>
      <a href="#faq" className="hover:text-slate-900 transition-colors">FAQ</a>
      <a href="#contact" className="hover:text-slate-900 transition-colors">Contact</a>
    </div>
  );

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-slate-200">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 h-24 flex items-center justify-between">
          <div className="flex items-center">
            <Image 
              src="/images/logo.png" 
              alt="Jordana Laporte Coaching - Career Transition Coach Toronto" 
              width={180} 
              height={90} 
              className="object-contain"
              priority
            />
          </div>
          
          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
            <NavLinks className="flex items-center gap-8" />
            <a href={bookingUrl} target="_blank" rel="noopener noreferrer">
              <Button variant="default" className="bg-slate-900 text-white hover:bg-slate-800 rounded-full px-6">
                Book a Call
              </Button>
            </a>
          </div>

          {/* Mobile Nav */}
          <div className="md:hidden flex items-center gap-4">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <SheetTitle className="text-left mb-8">Menu</SheetTitle>
                <div className="flex flex-col gap-6 mt-8">
                  <NavLinks className="flex flex-col gap-6 text-lg font-medium text-slate-600" />
                  <a href={bookingUrl} target="_blank" rel="noopener noreferrer" className="mt-4">
                    <Button className="w-full bg-slate-900 text-white hover:bg-slate-800 rounded-full h-12">
                      Book a Call
                    </Button>
                  </a>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>

      <main>
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
          <div className="absolute inset-0 -z-10 opacity-40">
            <Image 
              src="/images/hero-bg.png" 
              alt="Career Transition Coaching Toronto Background" 
              fill 
              className="object-cover"
              priority
            />
          </div>
          <div className="max-w-7xl mx-auto px-6">
            <div className="max-w-3xl">
              <h1 className="text-5xl lg:text-7xl font-bold tracking-tight text-slate-900 mb-8 leading-[1.1]">
                Your Trusted <span className="text-slate-500">Career Transition Coach</span> in Toronto.
              </h1>
              <p className="text-xl text-slate-600 mb-10 leading-relaxed max-w-2xl">
                As a dedicated Career and Life Transitions Coach, I help professionals gain clarity, create actionable strategies, and navigate significant changes in a way that aligns with their true values and goals.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href={bookingUrl} target="_blank" rel="noopener noreferrer">
                  <Button size="lg" className="bg-slate-900 text-white hover:bg-slate-800 rounded-full px-8 h-14 text-base">
                    Schedule an Introductory Call
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </a>
                <a href="#coaching">
                  <Button size="lg" variant="outline" className="rounded-full px-8 h-14 text-base border-slate-200 hover:bg-slate-50">
                    Explore Coaching Services
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* About Me Section */}
        <section id="about" className="py-24 bg-slate-50">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
                <Image 
                  src="/images/jordana.png" 
                  alt="Jordana Laporte - Toronto Life Coach for Career Change" 
                  fill 
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div>
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-3xl font-bold">About Jordana Laporte</h2>
                  <Image 
                    src="/images/acc-logo.png" 
                    alt="Associate Certified Coach - International Coaching Federation" 
                    width={80} 
                    height={80} 
                    className="object-contain"
                  />
                </div>
                <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
                  <p>
                    {"I am an Associate Certified Coach credentialed with the International Coaching Federation. I'm passionate about partnering with you to facilitate the creation and achievement of your personal or professional goals through expert life coaching for career change."}
                  </p>
                  <p>
                    {"By trade, I have been a compassionate employment and social justice lawyer, empathetic career counsellor and dedicated human resources professional. I specialize in career and personal transitions, helping you navigate the complexities of professional growth."}
                  </p>
                  <p>
                    {"I have pivoted several times to craft my professional path and maintain a balance with my personal values and would love to help you do the same as your Toronto-based life transitions coach."}
                  </p>
                </div>
                <div className="grid sm:grid-cols-2 gap-6 mt-10">
                  <div className="flex items-start gap-3">
                    <div className="mt-1 bg-white p-2 rounded-lg shadow-sm">
                      <Briefcase className="h-5 w-5 text-slate-700" />
                    </div>
                    <div>
                      <h4 className="font-semibold">Former Lawyer</h4>
                      <p className="text-sm text-slate-500">Employment & Social Justice</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="mt-1 bg-white p-2 rounded-lg shadow-sm">
                      <UserRound className="h-5 w-5 text-slate-700" />
                    </div>
                    <div>
                      <h4 className="font-semibold">HR Professional</h4>
                      <p className="text-sm text-slate-500">Employee Relations Specialist</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services/Coaching Section */}
        <section id="coaching" className="py-24">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-4xl font-bold mb-6">Professional Career Coaching Services in Toronto</h2>
              <p className="text-lg text-slate-600 mb-8">
                {"Coaching is a transformative process that empowers you to navigate life and career transitions with clarity, confidence, and purpose."}
              </p>
              <a 
                href="/documents/what-exactly-is-coaching.pdf" 
                target="_blank" 
                className="inline-flex items-center gap-2 text-slate-900 font-semibold hover:underline decoration-slate-300 underline-offset-4 transition-all"
              >
                <FileText className="h-5 w-5" />
                Download: What Exactly is Coaching? (PDF Guide)
              </a>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Clarify Your Vision",
                  description: "Define what success looks like for you and create a clear roadmap to achieve it. Ideal for mid-career professionals seeking a new direction.",
                  icon: <Star className="h-6 w-6" />
                },
                {
                  title: "Build Confidence",
                  description: "Identify your strengths, uncover passions, and shift limiting beliefs. Overcome the self-doubt that often accompanies a career change.",
                  icon: <CheckCircle2 className="h-6 w-6" />
                },
                {
                  title: "Navigate Change",
                  description: "Manage transitions with resilience and trust in your own capabilities. Expert guidance for navigating life's significant shifts.",
                  icon: <ArrowRight className="h-6 w-6" />
                }
              ].map((service, i) => (
                <Card key={i} className="border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                  <CardContent className="pt-8">
                    <div className="mb-6 text-slate-900">{service.icon}</div>
                    <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                    <p className="text-slate-600 leading-relaxed">{service.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="py-24 bg-slate-50">
          <div className="max-w-3xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
              <p className="text-slate-600">Common questions about career transition coaching and life coaching in Toronto.</p>
            </div>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>What is a career transition coach?</AccordionTrigger>
                <AccordionContent>
                  A career transition coach helps professionals navigate the process of changing careers, advancing in their current field, or returning to the workforce. They provide guidance on strategy, confidence-building, and actionable steps.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>How can a life coach help with a career change?</AccordionTrigger>
                <AccordionContent>
                  A life coach for career change focuses on the intersection of your personal values and professional goals. They help you identify what truly matters to you, ensuring your next career move aligns with your overall life vision.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>Do you offer coaching services in Toronto?</AccordionTrigger>
                <AccordionContent>
                  Yes, I am a Toronto-based coach offering both in-person (where applicable) and virtual coaching sessions to clients across the Greater Toronto Area and beyond.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger>What should I expect from an introductory call?</AccordionTrigger>
                <AccordionContent>
                  The introductory call is a free 30-minute consultation where we discuss your goals, challenges, and how my coaching approach can support your specific transition.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="py-24 bg-slate-900 text-white overflow-hidden relative">
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <h2 className="text-3xl font-bold mb-16 text-center">Success Stories from Coaching Clients</h2>
            <div className="grid md:grid-cols-2 gap-12">
              <div className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10">
                <MessageSquare className="h-8 w-8 text-slate-400 mb-6" />
                <p className="text-lg italic mb-8 leading-relaxed text-slate-200">
                  {"\"I started my first coach session with a question on how to strategize for my next level in career and how to get there. By my third coaching session, I have been able to put together an extensive strategy and slowly but surely, I am steadily plowing into my next level of career opportunities. Thank you Jordana !!\""}
                </p>
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-full bg-slate-700 flex items-center justify-center font-bold">SD</div>
                  <div>
                    <p className="font-semibold">Setor D.</p>
                    <p className="text-sm text-slate-400">Career Coaching Client</p>
                  </div>
                </div>
              </div>
              <div className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10">
                <MessageSquare className="h-8 w-8 text-slate-400 mb-6" />
                <p className="text-lg italic mb-8 leading-relaxed text-slate-200">
                  {"\"I had a great experience working with Jordana. She took the time to listen and understand where I was at and where I wanted to go. She is really good at breaking down the complexity of the problem into more manageable steps which of course motivated me to stay on track. If you're looking for a coach, I definitely recommend working with Jordana.\""}
                </p>
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-full bg-slate-700 flex items-center justify-center font-bold">DA</div>
                  <div>
                    <p className="font-semibold">Dana A.</p>
                    <p className="text-sm text-slate-400">Transition Coaching Client</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact/CTA Section */}
        <section id="contact" className="py-24">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-4xl font-bold mb-8">Ready to take the next step in your career?</h2>
            <p className="text-xl text-slate-600 mb-12">
              {"Let's partner together to facilitate the creation and achievement of your personal or professional goals."}
            </p>
            <div className="inline-flex flex-col items-center gap-6">
              <a href={bookingUrl} target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="bg-slate-900 text-white hover:bg-slate-800 rounded-full px-12 h-16 text-lg">
                  Book Your Introductory Call
                </Button>
              </a>
              <p className="text-slate-400 flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                Free 30-minute consultation
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-12 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center">
            <Image src="/images/logo.png" alt="Jordana Laporte Coaching Logo" width={120} height={60} className="object-contain" />
          </div>
          <div className="flex flex-col items-center md:items-end gap-4">
            <div className="flex gap-8 text-sm text-slate-500">
              <a href="https://www.linkedin.com/in/jordana-laporte/?originalSubdomain=ca" target="_blank" rel="noopener noreferrer" className="hover:text-slate-900 transition-colors">LinkedIn</a>
              <Link href="/privacy" className="hover:text-slate-900 transition-colors">Privacy Policy</Link>
              <Link href="/terms" className="hover:text-slate-900 transition-colors">Terms of Service</Link>
            </div>
            <div className="flex items-center gap-3 text-xs text-slate-400">
              <span>Photos by</span>
              <a href="https://marycarlaquintazzi.com/" target="_blank" rel="noopener noreferrer">
                <Image src="/images/photo-credit-logo.png" alt="Marycarla Quintazzi Studio" width={60} height={24} className="object-contain opacity-60 hover:opacity-100 transition-opacity" />
              </a>
            </div>
            <p className="text-sm text-slate-400">
              © {new Date().getFullYear()} Jordana Laporte Coaching. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
