'use client'
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'animate.css';
import { useEffect } from 'react';
export default function ServicesSection() {
  const services = [
    {
  title: "Mobile First Design",
  description:
    "We build your site for mobile devices first to ensure a lean, optimized codebase free from unnecessary bloat. This approach enhances responsiveness and performance across all devices.",
  items: [
    "Mobile-first approach",
    "Clean, optimized code",
    "Enhanced responsiveness",
    "No unnecessary bloat",
    "Modern development standards",
    "Improved user experience",
  ],
},
{
  title: "Fully Responsive",
  description:
    "Your website will seamlessly adapt to all screen sizes—from mobile phones to desktops—ensuring a beautiful experience for every visitor, on any device.",
  items: [
    "Mobile, tablet & desktop support",
    "Consistent design across devices",
    "User-friendly navigation",
    "Fluid layouts",
    "Media queries for adaptability",
    "Cross-browser compatibility",
  ],
},
{
  title: "Optimized Page Speed",
  description:
    "A delay in page load time can cost you up to 50% of your traffic. Our websites load in under a second, giving visitors immediate access and improving engagement.",
  items: [
    "Sub-1 second load times",
    "Code and asset optimization",
    "Lazy loading techniques",
    "Image compression",
    "Performance testing",
    "Core Web Vitals compliance",
  ],
},
{
  title: "SEO Services",
  description:
    "Our in-house SEO specialist understands local SEO strategies that help your business rank in your local market. We provide proven results and monthly performance reports.",
  items: [
    "Local SEO expertise",
    "On-page optimization",
    "Keyword research",
    "Content strategy",
    "Monthly reporting",
    "Case studies with results",
  ],
},
{
  title: "Google PPC Ads",
  description:
    "Our certified Google Ads expert crafts high-performing Pay-Per-Click campaigns designed to drive results and maximize your return on investment.",
  items: [
    "Google Ads setup",
    "Keyword targeting",
    "Ad copywriting",
    "Campaign optimization",
    "ROI tracking",
    "PPC performance reports",
  ],
},
{
  title: "Website Maintenance",
  description:
    "We offer ongoing website maintenance to keep your site secure, up-to-date, and performing optimally. From plugin updates to regular backups, we've got you covered.",
  items: [
    "Security monitoring",
    "Performance optimization",
    "Plugin and software updates",
    "Regular backups",
    "Bug fixes and support",
    "Uptime monitoring",
  ],
}

  ]
  useEffect(() => {
  AOS.init({
    once: true,
  });
  AOS.refresh();
}, []);
  return (
    <section className="px-[10px] md:px-8 py-20 bg-[#0b0b13] text-white font-inter" id="service">
      <div className="mb-16 site-section-title">
        <div className="text-5xl font-bold text-white mb-4 site-section-title-h2">Service</div>
        <div className="site-section-title-gradient"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="p-8 rounded-md bg-gradient-to-br from-[#2d0d0d] via-[#1d112f] to-[#0b0b2e] animate__animated" data-aos="fade-up" data-aos-delay={`${index * 200}`} data-aos-duration="800"
          >
            <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
            <p className="text-white/80 mb-6 text-sm leading-relaxed">
              {service.description}
            </p>
            <ul className="space-y-2 text-sm list-disc list-inside text-white/90">
              {service.items.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
