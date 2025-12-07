"use client"

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import HeroCarouselLogo from '@/components/sections/hero/heroCarouselLogo/HeroCarouselLogo';
import SplitAboutCards from '@/components/sections/about/SplitAboutCards';
import FeatureCardFifteen from '@/components/sections/feature/FeatureCardFifteen';
import MetricCardSeven from '@/components/sections/metrics/MetricCardSeven';
import TestimonialCardNine from '@/components/sections/testimonial/TestimonialCardNine';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import FaqDouble from '@/components/sections/faq/FaqDouble';
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FooterSplit from '@/components/sections/footer/FooterSplit';
import { Mail, Globe } from 'lucide-react';

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="hover-magnetic"
      defaultTextAnimation="entrance-slide"
      borderRadius="pill"
      contentWidth="large"
      sizing="largeSizeMediumTitles"
      background="circleGradient"
      cardStyle="outline-light"
      primaryButtonStyle="diagonal-gradient"
      secondaryButtonStyle="radial-glow"
      headingFontWeight="extrabold"
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingOverlay
          navItems={[
            { name: "About", id: "about" },
            { name: "Experience", id: "experience" },
            { name: "Impact", id: "metrics" },
            { name: "Contact", id: "contact" }
          ]}
          logoSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1765131208438-in22fd74.jpg"
          logoAlt="Gabriele Ghione"
          brandName="Gabriele Ghione"
          button={{
            text: "Get In Touch",
            href: "contact"
          }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroCarouselLogo
          logoText="GABRIELE GHIONE"
          description="Founder and CEO of Counselly, AI college admissions platform. Building the future of educational technology through innovation, leadership, and a deep commitment to solving real-world problems."
          buttons={[
            { text: "View My Work", href: "experience" },
            { text: "Connect", href: "contact" }
          ]}
          slides={[
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1765131209222-qcacxx96.jpg",
              imageAlt: "Entrepreneurship and startup innovation"
            },
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1765131210109-e49giaom.jpg",
              imageAlt: "Artificial intelligence and technology"
            },
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1765131210788-fibonm4h.jpg",
              imageAlt: "Business leadership and impact"
            }
          ]}
          autoplayDelay={4000}
          showDimOverlay={true}
        />
      </div>

      <div id="about" data-section="about">
        <SplitAboutCards
          tag="Who I Am"
          title="Founder & AI Innovator"
          description="I'm a 20-year-old builder and entrepreneur focused on leveraging AI and technology to solve critical problems in education and sustainability. With a Presidential Scholar background across USC, HKUST, and Bocconi, I bring a global perspective to every challenge."
          features={[
            {
              id: "leadership",
              title: "Visionary Leadership",
              description: "Building Counselly to transform how students navigate college admissions with AI-powered conversations and personalized guidance.",
              label: "Founder & CEO"
            },
            {
              id: "innovation",
              title: "Research & Innovation", 
              description: "Advancing sustainable technology through machine learning research in agrivoltaics and clean energy optimization.",
              label: "ML Research Fellow"
            }
          ]}
          buttons={[
            { text: "Explore My Journey", href: "experience" }
          ]}
          useInvertedBackground="noInvert"
        />
      </div>

      <div id="experience" data-section="experience">
        <FeatureCardFifteen
          title="Experience & Expertise"
          description="A journey through startup building, investment analysis, AI research, and global education across leading institutions and companies."
          features={[
            {
              id: "1",
              title: "Counselly.ai",
              description: "Building a personal AI college counselor platform transforming student-college matching and admissions guidance",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1765131213839-vxgv0lkn.jpg",
              imageAlt: "Counselly AI platform"
            },
            {
              id: "2",
              title: "AI & Sustainability Research",
              description: "Machine learning fellow researching agrivoltaics and clean energy optimization across Asia, Europe, and North America",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1765131214973-nhmpozcu.jpg",
              imageAlt: "Sustainable technology research"
            },
            {
              id: "3",
              title: "Private Equity Analysis",
              description: "Investment analyst at Stonepeak supporting $1B+ infrastructure deals and AI applications in PE workflows",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1765131216252-yh8yoifg.jpg",
              imageAlt: "Private equity investment"
            },
            {
              id: "4",
              title: "Strategic Consulting",
              description: "AI and strategy consultant at Rutopía advancing custom travel planning through GPT-4 and intelligent automation",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1765131217004-jh9bukhm.jpg",
              imageAlt: "Strategic consulting"
            }
          ]}
          animationType="slide-up"
          textboxLayout="default"
          useInvertedBackground="noInvert"
          tag="Professional Journey"
          speed={45}
        />
      </div>

      <div id="metrics" data-section="metrics">
        <MetricCardSeven
          title="Impact & Achievements"
          description="Key milestones that demonstrate commitment to innovation, leadership, and meaningful impact."
          metrics={[
            {
              id: "1",
              value: "20",
              title: "Years young with global experience",
              items: ["3 world-class universities", "Presidential Scholar status", "4 continents of work"]
            },
            {
              id: "2",
              value: "500+",
              title: "Professional network connections",
              items: ["Top investment firms", "Tech entrepreneurs", "Industry leaders"]
            },
            {
              id: "3",
              value: "3.93",
              title: "GPA at top-tier universities",
              items: ["USC World Bachelor Program", "Consistent academic excellence", "AI minor specialization"]
            },
            {
              id: "4",
              value: "$1B+",
              title: "In infrastructure deals analyzed",
              items: ["Live transaction experience", "BESS platform expertise", "Energy sector focus"]
            }
          ]}
          gridVariant="uniform-all-items-equal"
          animationType="slide-up"
          containerStyle="default"
          textboxLayout="default"
          useInvertedBackground="noInvert"
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardNine
          testimonials={[
            {
              id: "1",
              quote: "Gabriele demonstrates exceptional leadership and vision. His work on Counselly is transforming how students approach college admissions with authentic conversations and real guidance.",
              name: "Industry Leader",
              role: "Technology Sector",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1765131217802-2mqok35k.jpg",
              imageAlt: "Industry professional"
            },
            {
              id: "2",
              quote: "His research contributions to sustainable technology and AI applications have shown remarkable depth for someone so early in their career. A true innovator.",
              name: "Research Mentor",
              role: "AI & Sustainability",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1765131218589-nntt4gxr.jpg",
              imageAlt: "Research professional"
            },
            {
              id: "3",
              quote: "Gabriele brings both analytical rigor and strategic vision to every project. His performance across multiple roles demonstrates exceptional adaptability.",
              name: "Investment Partner",
              role: "Private Equity",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1765131219085-a4byi5ih.jpg",
              imageAlt: "Investment professional"
            },
            {
              id: "4",
              quote: "Working with Gabriele on strategic initiatives showed his unique ability to blend business acumen with cutting-edge technology to drive real value.",
              name: "CEO & Founder",
              role: "Travel Tech Startup",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1765131219610-szh7dsv0.jpg",
              imageAlt: "CEO professional"
            }
          ]}
          variant="card"
          title="Trusted By Industry Leaders"
          description="What partners and mentors say about working with Gabriele"
          textboxLayout="default"
          useInvertedBackground="noInvert"
        />
      </div>

      <div id="social-proof" data-section="social-proof">
        <SocialProofOne
          logos={[
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1765131223127-h76a9h65.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1765131221297-d4aojp1l.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1765131221897-rl5cf8jm.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1765131222419-3qrdjiiu.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1765131223808-m7787fag.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1765131224656-cn9dhlmh.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1765131225343-dio1k0in.jpg"
          ]}
          title="Associated With Leading Organizations"
          description="Building experience across world-class institutions and innovative companies"
          textboxLayout="default"
          useInvertedBackground="noInvert"
          speed={40}
          showCard={true}
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqDouble
          title="Frequently Asked Questions"
          description="Get to know more about my background, work, and vision for the future."
          faqs={[
            {
              id: "1",
              title: "What is Counselly?",
              content: "Counselly is an AI-powered personal college admissions platform that helps students have real conversations to explore their interests, choose majors, compare universities, and navigate the full application process. It transforms the traditionally stressful admissions journey into a personalized, supportive experience."
            },
            {
              id: "2",
              title: "What is your educational background?",
              content: "I'm a Presidential Scholar pursuing a Triple-Degree World Bachelor in Business Program across USC, HKUST, and Bocconi, with a minor in Artificial Intelligence. This unique educational path has given me a global perspective and deep technical foundation."
            },
            {
              id: "3",
              title: "What is your focus at USC Center for Sustainability?",
              content: "I'm researching AI and machine learning applications to accelerate agrivoltaics adoption. This involves developing predictive models to optimize solar panel orientation, crop selection, and resource efficiency through field research across multiple continents."
            },
            {
              id: "4",
              title: "Tell me about your private equity experience",
              content: "I was a Private Equity Analyst at Stonepeak, supporting live infrastructure and real assets transactions including a $1B+ BESS platform in Japan. My responsibilities included financial modeling, valuation, investment due diligence, and designing training sessions on AI applications in PE."
            },
            {
              id: "5",
              title: "How can I work with you?",
              content: "I'm open to collaboration on projects involving AI innovation, education technology, sustainable development, and strategic consulting. Feel free to reach out through the contact section below with your ideas and opportunities."
            },
            {
              id: "6",
              title: "What's your vision for the future?",
              content: "I want to build products and systems that solve meaningful problems at scale. Whether through Counselly transforming education, advancing sustainable technology, or applying AI to critical challenges, my focus is always on creating positive impact."
            }
          ]}
          textboxLayout="default"
          useInvertedBackground="noInvert"
          animationType="smooth"
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactSplit
          tag="Stay Updated"
          title="Let's Build Something Together"
          description="Whether you're interested in Counselly, collaboration opportunities, or discussing AI innovation and education technology, I'd love to connect. Subscribe for updates on new projects and insights."
          useInvertedBackground="noInvert"
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1765131220589-6d0ek0c5.jpg"
          imageAlt="Gabriele working on projects"
          mediaPosition="right"
          inputPlaceholder="your@email.com"
          buttonText="Subscribe"
          termsText="I respect your privacy. Unsubscribe anytime."
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterSplit
          logoText="Gabriele Ghione"
          logoAlt="Gabriele Ghione Logo"
          columns={[
            {
              title: "Navigation",
              items: [
                { label: "About", href: "#about" },
                { label: "Experience", href: "#experience" },
                { label: "Impact", href: "#metrics" },
                { label: "Contact", href: "#contact" }
              ]
            },
            {
              title: "Resources",
              items: [
                { label: "Counselly.ai", href: "https://counselly.ai" },
                { label: "LinkedIn", href: "https://linkedin.com/in/gabriele-ghione" },
                { label: "Forbes Article", href: "https://forbes.it" }
              ]
            },
            {
              title: "Education",
              items: [
                { label: "USC", href: "https://usc.edu" },
                { label: "HKUST", href: "https://hkust.edu.hk" },
                { label: "Bocconi", href: "https://unibocconi.it" }
              ]
            }
          ]}
          title="Building the future through innovation, leadership, and technology"
          contactItems={[
            { icon: Mail, text: "contact@gabrieleghione.com" },
            { icon: "Linkedin", text: "LinkedIn Profile" },
            { icon: Globe, text: "Milan, Italy · Global" }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}