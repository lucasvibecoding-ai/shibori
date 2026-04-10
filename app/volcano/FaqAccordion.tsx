'use client';

import { useState } from 'react';

const faqs = [
  {
    q: 'Do I need any experience with terrariums or plants?',
    a: "None at all. This course is built for complete beginners, including people who've never kept a plant alive. Module 1 starts by teaching you how terrarium ecosystems work and walks you through your very first build step by step.",
  },
  {
    q: 'How much does everything cost to get started?',
    a: "Under $40 total. A glass container ($10 to $15), a small LED lava kit ($8 to $12), substrate materials ($5 to $8), and moss/plants ($8 to $12). The course includes a complete shopping guide with links. You do NOT need expensive specialty supplies.",
  },
  {
    q: 'Will you tell me which materials to buy and where to get them?',
    a: "Yes. Module 2 walks you through exactly which materials to start with based on the design you want to build. It also includes a shopping guide with specific links so you know exactly where to buy everything and what to avoid.",
  },
  {
    q: 'What materials do I need for my first terrarium?',
    a: "Everything you need costs under $40. A basic starter kit includes: a glass container, small LED module, tubing, river rocks, activated charcoal, sphagnum moss, and 2-3 small ferns or tropical plants. Module 2 covers exactly what to buy and where.",
  },
  {
    q: 'Can I build this in a small apartment?',
    a: "Absolutely. All you need is a table and the materials. No garage, no workshop, no power tools. Most of our students build at their kitchen table or desk. The finished terrarium can be as small as a shoebox.",
  },
  {
    q: 'Will this work with materials available in my country?',
    a: "Yes. The materials used in this course are available worldwide through online retailers and local garden centers. The course covers alternatives for hard to find items, and the shopping guide includes international suppliers. If you can order online, you can get everything you need.",
  },
  {
    q: 'How much time does the build take?',
    a: "Your first volcano terrarium takes about 2 to 3 hours from start to finish. After that, most builds take 1 to 2 hours. The ecosystem establishes itself over the following weeks.you just watch it grow. It's one of the most rewarding creative hobbies for the time invested.",
  },
  {
    q: 'How long until it actually looks like the ones I see online?',
    a: 'Your build will look stunning the moment you finish. That happens in one afternoon. The moss fills in and the plants establish over 2 to 4 weeks, and it only gets more beautiful from there. The initial "wow" moment is immediate. The long term beauty is a bonus.',
  },
  {
    q: "I've killed every plant I've ever owned. Can I still do this?",
    a: "Terrariums are fundamentally different from potted plants. They're self sustaining ecosystems.the sealed environment recycles moisture and nutrients. Once built correctly, they practically take care of themselves. If you can build it right (which this course ensures), keeping it alive is the easy part.",
  },
  {
    q: 'What if my build turns out terrible?',
    a: "The Troubleshooting Guide covers every common mistake so you can fix almost any issue. But honestly, even experienced builders have off days. That's why we start you with affordable materials. A failed $30 experiment is a lesson, not a disaster. And the next one will be better because of what you learned.",
  },
  {
    q: "What's the refund policy?",
    a: "90-day money back guarantee. Try the entire course. Choose your materials. Build your first terrarium. If you don't love it, email us within 90 days and we'll refund you in full. No questions asked. No hoops.",
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
    q: 'Have a specific question?',
    a: "Email us at hello@volcanoterrariums.com and we'll get back to you as soon as possible.",
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
