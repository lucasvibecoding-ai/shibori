'use client';

import { useState } from 'react';

const faqs = [
  {
    q: 'Do I need any experience with dyeing or textiles?',
    a: "None at all. This course is built for complete beginners, including people who've never touched fabric dye. Module 1 starts with the fundamentals of shibori and walks you through your very first piece step by step.",
  },
  {
    q: 'How much does everything cost to get started?',
    a: "Under $30 total. A pre-reduced indigo dye kit ($12 to $15), rubber bands and string ($3 to $5), and plain white cotton fabric ($5 to $10). The course includes a complete shopping guide with links. You do NOT need expensive specialty supplies.",
  },
  {
    q: 'Will you tell me which materials to buy and where to get them?',
    a: "Yes. Module 2 walks you through exactly which materials to start with based on the technique you want to learn first. It also includes a shopping guide with specific links so you know exactly where to buy everything and what to avoid.",
  },
  {
    q: 'What materials do I need for my first piece?',
    a: "Everything you need costs under $30. A basic starter kit includes: pre-reduced indigo dye, a plastic bucket, rubber bands or string, rubber gloves, plain white cotton fabric, and water. Module 2 covers exactly what to buy and where.",
  },
  {
    q: 'Can I do this in a small apartment?',
    a: "Absolutely. All you need is a kitchen counter or table, a bucket, and access to water. No studio, no workshop, no special equipment. Most of our students dye at their kitchen sink. You can even do it on a balcony.",
  },
  {
    q: 'Will this work with materials available in my country?',
    a: "Yes. The materials used in this course are available worldwide through online retailers. Indigo dye kits ship internationally, and most other supplies (rubber bands, string, cotton fabric) are available anywhere. The course covers alternatives for hard-to-find items.",
  },
  {
    q: 'How much time does a piece take?',
    a: "Your first shibori piece takes about 45 minutes to 1 hour from folding to finished. The folding and binding takes 15 to 20 minutes, dyeing takes 10 to 20 minutes, and unfolding plus rinsing takes another 10 minutes. It's one of the most rewarding creative hobbies for the time invested.",
  },
  {
    q: 'How long until my work looks like the stunning pieces I see online?',
    a: "Your very first piece will have that signature shibori look. That happens in under an hour. The patterns are created by the folding technique, not years of practice. The initial \"wow\" moment is immediate. Every piece after that just gets more refined.",
  },
  {
    q: "I'm not artistic at all. Can I still do this?",
    a: "Shibori is fundamentally different from freehand art. The patterns are created by folding, binding, and dipping, not by drawing or painting. If you can fold a piece of fabric and wrap a rubber band around it, you can create stunning shibori. The technique does the artistry for you.",
  },
  {
    q: 'What if my first piece doesn\'t turn out well?',
    a: "The Troubleshooting Guide covers every common mistake so you can fix almost any issue on your next piece. But honestly, even imperfect shibori looks beautiful. That's the magic of this art form. Each piece is unique. And with fabric costing a few dollars, a learning experience is never a disaster.",
  },
  {
    q: "What's the refund policy?",
    a: "90-day money-back guarantee. Try the entire course. Get your materials. Dye your first piece. If you don't love it, email us within 90 days and we'll refund you in full. No questions asked. No hoops.",
  },
  {
    q: 'How is the content delivered?',
    a: "Instant access to our private course platform. All video lessons and downloadable PDFs organized by module. Watch on any device: phone, tablet, or computer. Lifetime access, so go at your own pace. There's no schedule and no expiration.",
  },
  {
    q: 'Is it safe to purchase online?',
    a: "Yes. Payments are processed through Stripe, the same secure payment platform used by millions of businesses worldwide (including Amazon, Google, and Shopify). We never see your card details.",
  },
  {
    q: 'Is the dye dangerous or harmful to my skin?',
    a: "No. Natural indigo is non-toxic and has been used safely for over a thousand years. It can temporarily stain your hands blue, but it washes off within a day or two. The course recommends wearing rubber gloves to keep things clean, but even direct skin contact is completely harmless. There are no harsh chemicals involved.",
  },
  {
    q: 'Have a specific question?',
    a: "Email us at hello@shiboriclass.com and we'll get back to you as soon as possible.",
  },
];

export default function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="faq-list">
      {faqs.map((faq, i) => (
        <div key={i} className="faq-item">
          <button
            className="faq-q"
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
            type="button"
          >
            <span className="faq-q-text">{faq.q}</span>
            <span className={`faq-icon ${openIndex === i ? 'open' : ''}`}>+</span>
          </button>
          <div className={`faq-answer ${openIndex === i ? 'open' : ''}`}>
            <div className="faq-answer-inner">
              <p className="faq-a">{faq.a}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
