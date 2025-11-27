import { useState } from 'react';

// FAQ data - easy to edit and maintain
const faqData = [
  {
    id: 1,
    question: "What services does Expensify offer?",
    answer: "We offer a comprehensive range of digital solutions including web development, UI/UX design, mobile-responsive applications, performance optimization, SEO services, and ongoing maintenance and support. Our team specializes in creating premium digital products tailored to your business needs."
  },
  {
    id: 2,
    question: "How long does a typical project take?",
    answer: "Project timelines vary depending on scope and complexity. A simple website can take 2-4 weeks, while more complex web applications may take 2-3 months or longer. We provide detailed timelines during our initial consultation and keep you updated throughout the development process."
  },
  {
    id: 3,
    question: "Do you provide ongoing support after project completion?",
    answer: "Yes! We offer comprehensive maintenance and support packages to ensure your digital solution continues to perform optimally. This includes regular updates, security patches, performance monitoring, and technical support whenever you need it."
  },
  {
    id: 4,
    question: "What technologies do you work with?",
    answer: "We work with modern, industry-leading technologies including React, Next.js, Node.js, tailwind CSS, and various other frameworks and tools. We choose the best technology stack for each project based on your specific requirements and long-term goals."
  },
  {
    id: 5,
    question: "How much does a project cost?",
    answer: "Project costs vary based on complexity, features, and timeline. We offer flexible pricing models and can work within various budgets. Contact us for a free consultation where we'll discuss your needs and provide a detailed, transparent quote tailored to your project."
  },
  {
    id: 6,
    question: "Can you help with an existing project or website?",
    answer: "Absolutely! We frequently work on existing projects, whether you need improvements, new features, performance optimization, or a complete redesign. We can audit your current solution and provide recommendations for enhancements."
  }
];

// Individual FAQ Item component
function FAQItem({ faq, isOpen, onToggle }) {
  return (
    <div className="border border-gray-700 rounded-xl overflow-hidden transition-all duration-300 hover:border-primary/50">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between p-6 text-left bg-[#1a2a2a] hover:bg-[#1f3030] transition-colors duration-300"
      >
        <span className="text-lg font-semibold text-white pr-8">
          {faq.question}
        </span>
        <svg
          className={`w-6 h-6 text-primary flex-shrink-0 transform transition-transform duration-300 ${
            isOpen ? 'rotate-180' : ''
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>
      
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-96' : 'max-h-0'
        }`}
      >
        <div className="p-6 pt-0 bg-[#1a2a2a]">
          <p className="text-gray-300 leading-relaxed">
            {faq.answer}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function FAQ() {
  const [openId, setOpenId] = useState(null);

  const toggleFAQ = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="py-24 px-6 bg-dark">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-400">
            Everything you need to know about our services
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqData.map((faq) => (
            <FAQItem
              key={faq.id}
              faq={faq}
              isOpen={openId === faq.id}
              onToggle={() => toggleFAQ(faq.id)}
            />
          ))}
        </div>

        {/* CTA at bottom */}
        <div className="mt-12 text-center">
          <p className="text-gray-400 mb-4">Still have questions?</p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-primary hover:text-accent font-semibold transition-colors duration-300"
          >
            Contact us for more information
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
