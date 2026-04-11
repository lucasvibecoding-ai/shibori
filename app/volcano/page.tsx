import type { Metadata } from "next";
import Image from "next/image";
import CheckoutButton from "../CheckoutButton";
import CountdownBar from "../CountdownBar";
import FaqAccordion from "./FaqAccordion";

export const metadata: Metadata = {
  title: "Build a Stunning Volcano Terrarium With Lava Flowing Through It",
  description:
    "Learn to build stunning miniature volcano terrariums at home with no experience. Step by step guide to creating a living jungle in glass.",
};

export default function Home() {
  return (
    <main className="overflow-hidden">
      <CountdownBar />

      <style dangerouslySetInnerHTML={{ __html: `
        :root {
          --bg: #ffffff;
          --bg-warm: #f5f5f5;
          --card: #ffffff;
          --ink: #1a2e1a;
          --ink-soft: rgb(38, 50, 38);
          --ink-muted: #687668;
          --green: #2d7a4f;
          --green-deep: #1a5c36;
          --green-soft: #4aa86c;
          --green-pale: rgba(45,122,79,0.06);
          --gold: #3a8f7a;
          --gold-light: #5cb8a0;
          --gold-pale: rgba(58,143,122,0.08);
          --terra: #5a8f6c;
          --sand: #c0d4c4;
          --stone: #a8c0ac;
          --cream: #fafafa;
          --radius: 10px;
          --accent: #E07A5F;
        }

        /* BASE TYPOGRAPHY */
        .bonsai-page { font-family: 'Lora', 'Lora Fallback', serif; color: rgb(38, 50, 38); line-height: 1.8; font-weight: 400; font-size: 20px; }
        .bonsai-page .container { max-width: 1080px; margin: 0 auto; padding: 0 40px; }

        /* Headings */
        .bonsai-page h1, .bonsai-page h2, .bonsai-page h3 { font-family: 'Lora', serif; color: var(--ink); line-height: 1.25; }
        .bonsai-page h1 { font-size: clamp(2.4rem, 6vw, 3.6rem); font-weight: 600; letter-spacing: -0.5px; text-align: center; margin-bottom: 20px; }
        .bonsai-page h2 { font-size: clamp(1.6rem, 3.5vw, 2.4rem); font-weight: 500; margin-bottom: 24px; }
        .bonsai-page h3 { font-size: 30px; font-weight: 600; color: var(--green-deep); margin-bottom: 8px; }

        /* Body text */
        .bonsai-page p { margin-bottom: 24px; }
        .bonsai-page strong { color: var(--ink); font-weight: 600; }
        .bonsai-page em { font-style: italic; }
        .bonsai-page a { color: var(--green); text-decoration: none; }

        /* Utilities */
        .bonsai-divider { width: 100%; height: 1px; background: linear-gradient(90deg, transparent, var(--sand), transparent); margin: 20px 0; }
        .sm-divider { width: 36px; height: 2px; background: var(--gold); margin: 0 auto; opacity: 0.5; }
        .bonsai-center { text-align: center; }

        /* Badge */
        .badge { display: inline-block; padding: 6px 16px; border: 1.5px solid var(--green); border-radius: 100px; font-size: 12px; font-weight: 700; letter-spacing: 2.5px; text-transform: uppercase; color: var(--green); margin-bottom: 20px; }
        .no-exp { font-size: 16px; letter-spacing: 2.5px; margin-bottom: 20px; }
        .hero-sub { font-size: clamp(1.1rem, 2.5vw, 1.5rem); }
        .course-intro { padding: 80px 0 0; }

        /* Hero */
        .hero-img { width: 100%; max-width: 860px; margin: 0 auto; border-radius: 12px; overflow: hidden; aspect-ratio: 16/9; background: var(--bg-warm); border: 1px solid var(--sand); display: flex; align-items: center; justify-content: center; }
        .hero h1 .accent { color: var(--green-deep); font-style: italic; }

        /* Philosophy blocks */
        .phil-block { margin-bottom: 32px; padding: 28px 32px; background: var(--card); border-radius: 12px; border: 1px solid var(--sand); }
        .phil-kanji { font-size: 32px; color: var(--gold); margin-bottom: 6px; }
        .phil-title { font-size: 22px; font-weight: 700; color: var(--ink); margin-bottom: 4px; }
        .phil-rom { font-size: 15px; color: var(--ink-muted); letter-spacing: 1px; text-transform: uppercase; margin-bottom: 14px; font-weight: 600; }
        .phil-block p { margin-bottom: 0; }

        /* Transform quote */
        .transform { padding: 48px 0; text-align: center; }
        .transform-line { font-size: clamp(1rem, 2.2vw, 1.3rem); color: var(--ink); font-weight: 400; font-style: italic; max-width: 560px; margin: 0 auto; line-height: 1.5; }

        /* Instructor */
        .instructor { padding: 56px 0; display: flex; gap: 32px; align-items: flex-start; }
        .instructor-img { width: 420px; min-width: 420px; border-radius: var(--radius); flex-shrink: 0; overflow: hidden; }

        /* Students */
        .students { padding: 48px 0; text-align: center; }

        /* Objections */
        .objection { padding: 56px 0; }

        /* Module cards */
        .modules-grid { display: flex; flex-direction: column; gap: 16px; }
        .module-card { background: var(--card); border-radius: 12px; padding: 28px; margin-bottom: 16px; border: 1px solid var(--sand); }
        .module-label { font-size: 12px; font-weight: 800; letter-spacing: 2.5px; text-transform: uppercase; color: var(--accent); margin-bottom: 6px; }
        .module-sub { font-size: 18px; color: var(--ink); margin-bottom: 14px; }
        .module-body { display: flex; gap: 28px; align-items: flex-start; }
        .module-card ul { list-style: none; padding: 0; flex: 1; }
        .module-card li { padding: 6px 0; font-size: 18px; line-height: 1.6; }
        .module-img { width: 280px; min-width: 280px; height: 260px; border-radius: 8px; background: linear-gradient(135deg, var(--bg-warm), var(--sand)); display: flex; align-items: center; justify-content: center; font-size: 28px; border: 1px solid var(--sand); overflow: hidden; position: relative; }

        .hereswhatyouget-mobile { display: none; }
        .hero-text-mobile { display: none; }

        /* CTA */
        .cta-block { text-align: center; padding: 56px 0; }
        .price-old { font-size: 34px; color: var(--ink-muted); text-decoration: line-through; margin-bottom: 4px; }
        .price { font-size: 56px; color: var(--green-deep); margin-bottom: 4px; font-weight: 700; }
        .price-note { font-size: 20px; color: var(--ink-muted); margin-bottom: 24px; font-weight: 400; }
        .lifetime-break { display: none; }
        .guarantee-badge { display: flex; align-items: center; gap: 10px; justify-content: center; margin-top: 20px; font-size: 15px; color: var(--ink-muted); }
        .guarantee-icon { width: 40px; height: 40px; border-radius: 50%; background: var(--cream); border: 1.5px solid var(--gold); display: flex; align-items: center; justify-content: center; font-size: 16px; flex-shrink: 0; }
        .payment-icons { display: flex; gap: 6px; justify-content: center; margin-top: 14px; opacity: 0.4; }
        .payment-icons span { font-size: 12px; padding: 4px 10px; border: 1px solid var(--stone); border-radius: 3px; color: var(--ink-muted); font-weight: 500; }
        .ps-note { margin-top: 16px; font-size: 18px; color: var(--ink-muted); font-style: italic; }

        /* Guarantee section */
        .guarantee-section { padding: 48px 0; text-align: center; }
        .guarantee-section p { max-width: 640px; margin: 0 auto 16px; font-size: 20px; }

        /* Bonus cards */
        .bonus-card { background: var(--card); border-radius: 12px; padding: 28px; margin-bottom: 16px; border: 1px solid var(--sand); }
        .bonus-body { display: flex; gap: 28px; align-items: flex-start; }
        .bonus-img { width: 280px; min-width: 280px; height: 260px; border-radius: 8px; background: linear-gradient(135deg, var(--bg-warm), var(--sand)); display: flex; align-items: center; justify-content: center; font-size: 28px; border: 1px solid var(--sand); overflow: hidden; position: relative; }
        .bonus-card ul { flex: 1; }
        .bonus-header { display: flex; align-items: center; gap: 12px; margin-bottom: 6px; }
        .bonus-label { font-size: 12px; font-weight: 800; letter-spacing: 2.5px; text-transform: uppercase; color: var(--accent); }
        .bonus-value { font-size: 12px; color: var(--green); font-weight: 700; background: rgba(45,122,79,0.1); padding: 2px 10px; border-radius: 100px; letter-spacing: 0.5px; }
        .bonus-card h3 { font-size: 30px; color: var(--ink); margin-bottom: 4px; }
        .module-card h3 { color: var(--ink); }
        .bonus-desc { font-size: 18px; color: var(--ink-muted); margin-bottom: 14px; }
        .bonus-card ul { list-style: none; padding: 0; }
        .bonus-card li { padding: 6px 0; font-size: 18px; line-height: 1.6; }
        .mega { border-color: rgba(45,122,79,0.3); background: linear-gradient(135deg, var(--card), var(--gold-pale)); }

        /* Stack */
        .stack-row { display: flex; justify-content: space-between; padding: 10px 0; border-bottom: 1px solid rgba(0,0,0,0.05); max-width: 520px; margin-left: auto; margin-right: auto; }
        .stack-row .label { color: var(--ink-soft); }
        .stack-row .val { color: var(--green-deep); font-weight: 800; font-size: 17px; }
        .stack-total { font-weight: 700; border-bottom: 2px solid var(--green); padding-bottom: 10px; margin-bottom: 6px; }
        .stack-total .label { color: var(--ink); }

        /* FAQ */
        .faq-list { display: flex; flex-direction: column; gap: 12px; }
        .faq-item { background: var(--cream); border-radius: 12px; padding: 4px 20px; border: 1px solid var(--sand); }
        .faq-q { width: 100%; display: flex; align-items: center; gap: 14px; padding: 18px 0; background: none; border: none; cursor: pointer; text-align: left; font-family: 'Lora', serif; font-size: 18px; }
        .faq-badge { width: 28px; height: 28px; border-radius: 50%; background: var(--green-pale); color: var(--green); font-size: 13px; font-weight: 700; display: flex; align-items: center; justify-content: center; flex-shrink: 0; }
        .faq-q-text { flex: 1; font-weight: 700; color: var(--ink); }
        .faq-icon { color: var(--green); font-size: 20px; transition: transform 0.2s; flex-shrink: 0; }
        .faq-icon.open { transform: rotate(45deg); }
        .faq-answer { max-height: 0; overflow: hidden; transition: max-height 0.3s ease, padding 0.3s; }
        .faq-answer.open { max-height: 400px; padding-bottom: 18px; }
        .faq-answer-inner { padding-left: 42px; }
        .faq-a { color: var(--ink-muted); line-height: 1.75; margin: 0; }

        /* Closing */
        .closing { padding: 56px 0; text-align: center; }
        .closing-quote { font-size: clamp(1.3rem, 2.5vw, 1.8rem); color: var(--ink); font-style: italic; max-width: 520px; margin: 0 auto 28px; line-height: 1.5; }

        /* Footer */
        .bonsai-footer { padding: 44px 0; text-align: center; font-size: 14px; color: #999; background: #000; margin-top: 48px; }
        .bonsai-footer a { color: #1a9e8f; }
        .bonsai-footer p { color: #999; }

        /* Split layout */
        .split { display: flex; gap: 40px; align-items: center; padding: 56px 0; }
        .split-text { flex: 1; }
        .split-text h2 { font-size: clamp(1.6rem, 4vw, 2.4rem); }
        .split-img { flex: 1 1 50%; height: 380px; border-radius: 12px; background: transparent; border: none; display: flex; align-items: center; justify-content: center; overflow: hidden; }

        @media (max-width: 768px) {
          .fillpic-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .bonsai-page .container { padding: 0 24px; }
          .bonsai-page section { padding-left: 0; padding-right: 0; }
          .split { flex-direction: column; gap: 24px; }
          .split-img { flex: none; width: 100%; height: auto; }
          .split-text { flex: 1 !important; }
          .module-body { flex-direction: column; }
          .module-img { width: 100%; min-width: unset; height: auto; aspect-ratio: 1/1; }
          .bonus-body { flex-direction: column; }
          .bonus-img { width: 100%; min-width: unset; height: auto; aspect-ratio: 1/1; }
          .module-card, .bonus-card { padding: 20px; }
          .instructor { flex-direction: column; align-items: center; }
          .instructor-text { text-align: left; }
          .course-intro { padding-top: 20px !important; }
          .hero-divider { display: none !important; }
          .price-old { font-size: 28px !important; }
          .checkout-box { padding: 24px 16px !important; padding-bottom: 16px !important; }
          .cta-btn { font-size: 1.3rem !important; }
          .ps-note { font-size: 16px !important; margin-bottom: 0 !important; }
          .instructor-img { width: 100% !important; max-width: 400px !important; height: auto !important; padding: 0 24px; border-radius: 16px; }
          .phil-block { padding: 20px; }
          .stack-row { max-width: 100%; }
          .closing-quote { font-size: 1.2rem; }
          .bonus-header { flex-wrap: wrap; }
          .no-exp { font-size: 14px !important; letter-spacing: 1.5px !important; margin-bottom: 12px !important; }
          .hero-sub { font-size: 18px !important; }
          .hero-split { padding-top: 12px !important; }
        }
        @media (max-width: 480px) {
          .lifetime-break { display: block; }
          .bonsai-page .container { padding: 0 24px; }
          .bonsai-page { font-size: 20px; }
          .bonsai-page p:not(.now-only):not(.no-exp):not(.hero-sub):not(.guarantee-text):not(.ps-note), .bonsai-page li { font-size: 20px !important; }
          .hero-sub { font-size: 18px !important; }
          .module-img, .bonus-img { height: auto; aspect-ratio: 1/1; }
          .hereswhatyouget-desktop { display: none !important; }
          .hereswhatyouget-mobile { display: block !important; }
          .hero-text-desktop { display: none !important; }
          .hero-text-mobile { display: block !important; }
          .no-exp { font-size: 14px !important; letter-spacing: 1.5px !important; margin-bottom: 12px !important; }
          .bonus-card h3, .module-card h3 { margin-bottom: 14px !important; }
          .bonus-desc, .module-sub { margin-bottom: 22px !important; }
          .badge { font-size: 10px; letter-spacing: 1.5px; padding: 5px 12px; }
          .payment-method-btn { font-size: 13px; padding: 10px 12px; }
          #hero { width: 100% !important; margin-top: 16px; }
          .anyone-section { padding-top: 0px !important; }
          .store-bought-section { padding-bottom: 40px !important; }
          .impossible-section { padding-top: 24px !important; }
          .whats-inside { font-size: 32px !important; }
          .module-card h3, .bonus-card h3 { font-size: 24px !important; }
          .now-only { font-size: 36px !important; }
          .price-old { font-size: 28px !important; }
          .cta-btn { font-size: 1.3rem !important; }
          .faq-q-text { font-weight: 500 !important; font-size: 18px !important; }
          .faq-q { font-size: 18px !important; }
          .stack-row { padding: 6px 0 !important; font-size: 18px; }
          .stack-row .val { font-size: 18px !important; }
          .checkout-box { padding: 24px 20px !important; }
        }
      `}} />

      <div className="bonsai-page">
        <div className="container">

          {/* HERO */}
          <section style={{ paddingTop: 64, paddingBottom: 48, textAlign: 'center' }}>
            <p className="no-exp" style={{ fontWeight: 700, textTransform: 'uppercase', color: 'var(--ink-muted)' }}>Even if you&apos;ve never built a terrarium before</p>
            <h1>Build a Stunning <span style={{ background: 'linear-gradient(135deg, #E07A5F, #e8947d)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', filter: 'drop-shadow(0 0 4px rgba(45,122,79,0.2))' }}>Volcano Terrarium</span> With Lava Flowing Through It</h1>
            <p className="hero-sub" style={{ color: 'var(--ink-muted)', marginTop: 8, fontStyle: 'italic' }}>Make it in a single weekend using materials you can pick up locally.</p>

            <div style={{ display: 'flex', justifyContent: 'center', paddingTop: 28 }}>
              <div id="hero" style={{ width: '75%', maxWidth: 500, aspectRatio: '1/1', borderRadius: 16, overflow: 'hidden', position: 'relative', boxShadow: '0 12px 40px rgba(0,0,0,0.2), 0 4px 12px rgba(0,0,0,0.1)' }}>
                <Image src="/hero_new_volcano2.png" alt="Miniature volcano terrarium" fill style={{ objectFit: 'cover' }} priority />
              </div>
            </div>
          </section>

          {/* IMAGINE IF YOU COULD */}
          <section style={{ padding: '24px 0 56px' }}>
            <div style={{ maxWidth: 672, margin: '0 auto' }}>
              <h2 style={{ fontSize: 'clamp(1.875rem, 4vw, 2.25rem)', fontWeight: 500, marginBottom: 16 }}>
                Imagine if you could:
              </h2>

              <div style={{ display: 'flex', flexDirection: 'column', gap: 16, fontSize: 'clamp(1.125rem, 2vw, 1.25rem)', lineHeight: 1.75 }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: 16 }}>
                  <span style={{ color: 'var(--accent)', marginTop: 4, flexShrink: 0 }}>&#8594;</span>
                  <p style={{ margin: 0 }}>
                    <strong style={{ color: 'var(--accent)' }}>build a living miniature jungle with a real flowing volcano.</strong> Something people stop and stare at.
                  </p>
                </div>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: 16 }}>
                  <span style={{ color: 'var(--accent)', marginTop: 4, flexShrink: 0 }}>&#8594;</span>
                  <p style={{ margin: 0 }}>
                    <strong style={{ color: 'var(--accent)' }}>transform any room with a piece of living art</strong> that grows more beautiful over time.
                  </p>
                </div>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: 16 }}>
                  <span style={{ color: 'var(--accent)', marginTop: 4, flexShrink: 0 }}>&#8594;</span>
                  <p style={{ margin: 0 }}>
                    <strong style={{ color: 'var(--accent)' }}>have the most calming, rewarding hobby</strong> that takes you offline and into a tiny world of moss, lava rock, and stone.
                  </p>
                </div>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: 16 }}>
                  <span style={{ color: 'var(--accent)', marginTop: 4, flexShrink: 0 }}>&#8594;</span>
                  <p style={{ margin: 0 }}>
                    <strong style={{ color: 'var(--accent)' }}>create a stunning handmade gift</strong> that costs under $40 but looks like it belongs in a boutique.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* THE MOMENT IT CLICKS */}
          <section className="impossible-section" style={{ padding: '64px 0 24px' }}>
            <h2 className="bonsai-center" style={{ marginBottom: 44 }}>You might be thinking this is extremely hard.</h2>
            <p>A miniature volcano with real plants? It sounds like something <strong>only artists or professionals can pull off.</strong></p>
            <p>But what if I told you that <strong>you don&apos;t need artistic talent, expensive tools, or any prior experience?</strong></p>
            <p>Maybe you&apos;ve tried crafts before and gave up because the results never matched what you saw online.</p>
            <p>Maybe you&apos;ve never built anything at all, but something about volcano terrariums pulls you in. You just don&apos;t know where to start.</p>
          </section>

          <section style={{ padding: '48px 0 32px' }}>
            <h2 className="bonsai-center" style={{ marginBottom: 44 }}>Here&apos;s what most people don&apos;t realize.</h2>
            <p><strong>The best terrariums aren&apos;t complicated.</strong></p>
            <p>A few layers of stone, the right moss, and a small LED kit. That&apos;s all it takes to create something breathtaking.</p>
            <p>As long as the drainage, substrate, and plant placement are right, <strong>nature does the rest.</strong></p>
            <p>You place one stone. Then some moss. Then the lava starts glowing. And suddenly, it&apos;s alive.</p>
          </section>

          <section style={{ padding: '48px 0 64px', marginTop: 32 }}>
              <h2 style={{ marginBottom: 44, textAlign: 'center' }}>&quot;Isn&apos;t <span style={{ color: 'var(--accent)' }}>terrarium building</span> expensive?&quot;</h2>
              <p><strong>Your first volcano terrarium costs less than dinner out.</strong></p>
              <p>A glass container is <strong>$10 to $15</strong>. A small water pump is <strong>$8 to $12</strong> (don&apos;t worry, water pumps are incredibly easy to use). Moss, stones, and plants cost <strong>under $15.</strong></p>
              <p>That&apos;s it. No $200 specialty supplies. No professional equipment.</p>
              <p>And once it&apos;s built, <strong>maintenance is practically free</strong>. A terrarium recycles its own water and barely needs attention. Two minutes a week is all it takes to keep it thriving.</p>
          </section>

          <section style={{ padding: '0 0 64px' }}>
              <h2 style={{ marginBottom: 44, textAlign: 'center' }}>&quot;I&apos;m not <span style={{ color: 'var(--accent)' }}>creative</span> enough for this.&quot;</h2>
              <p>You&apos;re not sculpting a masterpiece from scratch. You&apos;re following a proven layout, placing natural materials in the right order, and asking one question: <strong>&quot;Does this look good to me?&quot;</strong></p>
              <p>That&apos;s it. Your eye is already good enough for that.</p>
          </section>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 12, marginBottom: 40 }} className="fillpic-grid">
            <div style={{ borderRadius: 10, overflow: 'hidden', aspectRatio: '1/1', position: 'relative' }}><Image src="/fillpic1_volcano.jpg" alt="Volcano terrarium example" fill style={{ objectFit: 'cover' }} /></div>
            <div style={{ borderRadius: 10, overflow: 'hidden', aspectRatio: '1/1', position: 'relative' }}><Image src="/fillpic2_volcano.jpg" alt="Volcano terrarium example" fill style={{ objectFit: 'cover' }} /></div>
            <div style={{ borderRadius: 10, overflow: 'hidden', aspectRatio: '1/1', position: 'relative' }}><Image src="/fillpic3_volcano.png" alt="Volcano terrarium example" fill style={{ objectFit: 'cover' }} /></div>
            <div style={{ borderRadius: 10, overflow: 'hidden', aspectRatio: '1/1', position: 'relative' }}><Image src="/fillpic_volcano4.jpg" alt="Volcano terrarium example" fill style={{ objectFit: 'cover' }} /></div>
          </div>

          <section className="store-bought-section" style={{ padding: '40px 0 64px' }}>
              <h2 style={{ marginBottom: 44, textAlign: 'center' }}>&quot;Will it actually look like those <span style={{ color: 'var(--accent)' }}>amazing ones</span> I see online?&quot;</h2>
              <p><strong>Yes, and you&apos;ll understand exactly why.</strong></p>
              <p>Stunning terrariums aren&apos;t magic. They follow the same principles you&apos;ll learn in this course: <strong>layering, lava flow, and plant placement.</strong></p>
              <p>The difference between a terrarium that looks muddy and one that looks like a jungle paradise comes down to three things: substrate layers, lava glow placement, and moss selection.</p>
          </section>

          {/* ANYONE CAN LEARN */}
          <section className="anyone-section" style={{ padding: '48px 0' }}>
            <h2 className="bonsai-center" style={{ marginBottom: 64 }}>Anyone can build a <span style={{ color: 'var(--accent)' }}>volcano terrarium</span>.</h2>
            <div style={{ maxWidth: 640, margin: '0 auto', fontSize: 20 }}>
              <p><span style={{ color: 'var(--accent)', fontWeight: 700 }}>&rarr; Even if you&apos;ve never built anything with your hands.</span> A clear step by step method that works with basic materials and zero experience.</p>
              <p><span style={{ color: 'var(--accent)', fontWeight: 700 }}>&rarr; Even if you think terrariums are too complicated.</span> They&apos;re not. You just never had the right method.</p>
              <p><span style={{ color: 'var(--accent)', fontWeight: 700 }}>&rarr; Even if you&apos;ve killed every plant you&apos;ve owned.</span> Terrariums are self sustaining ecosystems. They practically take care of themselves.</p>
              <p><span style={{ color: 'var(--accent)', fontWeight: 700 }}>&rarr; Even if you don&apos;t consider yourself &quot;artistic.&quot;</span> Some rocks, moss, an LED kit, and a little patience. That&apos;s it.</p>
            </div>
          </section>

          {/* INSTRUCTOR */}
          <section className="instructor">
            <div className="instructor-img">
              <div style={{ width: '100%', aspectRatio: '4/5', borderRadius: 16, overflow: 'hidden', position: 'relative' }}>
                <Image src="/creator_waterfall_volcano.png" alt="Emma Wilson" fill style={{ objectFit: 'cover' }} />
              </div>
            </div>
            <div className="instructor-text">
              <h2>My name is Emma Wilson.</h2>
              <p><strong>10+ years building terrariums.</strong> From tiny desk pieces to 3-foot living walls.<br /><br />Over <strong>150 original terrarium designs</strong> created. Taught <strong>400+ students</strong> in workshops to build their first volcano terrarium from scratch.</p>
              <p>Best part about building terrariums? Watching someone step back and realize they just built something beautiful with their own hands. <strong>That moment never gets old.</strong></p>
            </div>
          </section>

          {/* COURSE INTRO */}
          <section className="bonsai-center course-intro">
            <h2 style={{ marginBottom: 4, fontSize: 'clamp(2.2rem, 5vw, 3.2rem)', fontWeight: 600 }}>Introducing: The Volcano<br />Terrarium Masterclass</h2>
            <p style={{ fontStyle: 'italic', color: 'var(--ink-muted)' }}>From glass box to living jungle. The complete system</p>
          </section>

          {/* HERESWHATYOUGET IMAGE */}
          <div className="bonsai-center" style={{ marginBottom: 32 }}>
            <div className="hereswhatyouget-desktop" style={{ position: 'relative', width: '100%', maxWidth: 700, margin: '0 auto' }}>
              <Image src="/hereswhatyouget_volcano.jpg" alt="Everything included in the course" width={700} height={500} style={{ width: '100%', height: 'auto', borderRadius: 12 }} />
            </div>
            <div className="hereswhatyouget-mobile" style={{ position: 'relative', width: '100%', margin: '0 auto' }}>
              <Image src="/hereswhatyouget_volcano_mobile.jpg" alt="Everything included in the course" width={400} height={600} style={{ width: '100%', height: 'auto', borderRadius: 12 }} />
            </div>
          </div>

          {/* MODULES */}
          <section style={{ padding: '20px 0 40px' }}>
            <h2 className="bonsai-center whats-inside" style={{ marginTop: 86, marginBottom: 24 }}>&#10022; What&apos;s Inside &#10022;</h2>

            <div className="module-card">
              <div className="module-label">Module 1</div>
              <h3><span style={{ color: 'var(--accent)' }}>The Science of Miniature Ecosystems</span> (And Why Yours Will Thrive)</h3>
              <div className="module-sub">The principles behind every stunning terrarium, broken down for beginners.</div>
              <div className="module-body">
                <div className="module-img"><Image src="/module1_waterfall_volcano.png" alt="Module 1 - Science of Ecosystems" fill style={{ objectFit: 'cover' }} /></div>
                <ul>
                  <li>&#10022; How <strong>self sustaining ecosystems work</strong> and why terrariums practically maintain themselves</li>
                  <li>&#10022; The <strong>4 layers</strong> every terrarium needs to stay alive and look incredible</li>
                  <li>&#10022; Why <strong>simple builds with the right foundation</strong> outperform complex ones every time</li>
                  <li>&#10022; How to <strong>choose the right container</strong> for maximum visual impact</li>
                </ul>
              </div>
            </div>

            <div className="module-card">
              <div className="module-label">Module 2</div>
              <h3><span style={{ color: 'var(--accent)' }}>What Materials to Buy</span> (And What&apos;s a Waste of Money)</h3>
              <div className="module-sub">Your complete shopping list and workspace setup.</div>
              <div className="module-body">
                <div className="module-img"><Image src="/module2_volcano.png" alt="Module 2 - Materials" fill style={{ objectFit: 'cover' }} /></div>
                <ul>
                  <li>&#10022; The <strong>$35 shopping list</strong> that gives you everything you need</li>
                  <li>&#10022; The <strong>best moss, stones, and plants for beginners</strong></li>
                  <li>&#10022; The <strong>only LED kit you need</strong> and how to size it correctly</li>
                  <li>&#10022; <strong>Natural vs artificial elements</strong>. The choice that determines the final look</li>
                </ul>
              </div>
            </div>

            <div className="module-card">
              <div className="module-label">Module 3</div>
              <h3><span style={{ color: 'var(--accent)' }}>Building the Foundation:</span> Rocks, Layers, and Lava Flow</h3>
              <div className="module-sub">This is where raw materials become YOUR miniature jungle. The moment that hooks you.</div>
              <div className="module-body">
                <div className="module-img"><Image src="/module3_volcano.png" alt="Module 3 - Building the Foundation" fill style={{ objectFit: 'cover' }} /></div>
                <ul>
                  <li>&#10022; How to <strong>design the lava path</strong> before placing a single stone</li>
                  <li>&#10022; <strong>Stacking and sculpting rocks</strong> to create a natural looking cliff face</li>
                  <li>&#10022; <strong>Installing the LED module and wiring</strong> so everything stays hidden and silent</li>
                  <li>&#10022; <strong>Testing and adjusting flow</strong> until the volcano looks exactly right</li>
                </ul>
              </div>
            </div>

            <div className="module-card">
              <div className="module-label">Module 4</div>
              <h3><span style={{ color: 'var(--accent)' }}>Planting the Jungle:</span> Moss, Ferns, and Living Details</h3>
              <div className="module-sub">Where rocks and light transform into a living scene that grows more beautiful every week.</div>
              <div className="module-body">
                <div className="module-img"><Image src="/module4_volcano.png" alt="Module 4 - Planting the Jungle" fill style={{ objectFit: 'cover' }} /></div>
                <ul>
                  <li>&#10022; How to <strong>attach moss to stone</strong> so it grows naturally over time</li>
                  <li>&#10022; <strong>Choosing and placing ferns, creeping plants, and ground cover</strong> for a jungle look</li>
                  <li>&#10022; Creating <strong>depth and dimension</strong> that makes your terrarium look 10x bigger than it is</li>
                  <li>&#10022; The <strong>finishing touches</strong> that make people say &quot;wait, you built that?&quot;</li>
                </ul>
              </div>
            </div>

            <div className="module-card">
              <div className="module-label">Module 5</div>
              <h3><span style={{ color: 'var(--accent)' }}>Sealing, Curing, and Long Term Care</span></h3>
              <div className="module-sub">How to finish your build so it stays alive and beautiful for months and years to come.</div>
              <div className="module-body">
                <div className="module-img"><Image src="/module5_volcano.png" alt="Module 5 - Sealing and Care" fill style={{ objectFit: 'cover' }} /></div>
                <ul>
                  <li>&#10022; <strong>How to seal your terrarium</strong> so the humidity cycle runs itself</li>
                  <li>&#10022; The <strong>first 48 hours</strong> and what to watch for as the ecosystem settles</li>
                  <li>&#10022; <strong>Lava light, light, and temperature</strong> settings that keep everything thriving</li>
                  <li>&#10022; A <strong>simple weekly routine</strong> that takes 2 minutes and prevents 90% of problems</li>
                </ul>
              </div>
            </div>
          </section>


          {/* CTA after modules */}
          <section style={{ padding: '56px 0' }}>
            <div className="bonsai-center" style={{ marginBottom: 32 }}>
              <p style={{ maxWidth: 720, textAlign: 'left', fontSize: 24, margin: '0 auto 20px' }}>You&apos;ve seen what&apos;s inside. Five modules. A complete system for designing, building, and maintaining volcano terrariums at home.</p>
              <p style={{ maxWidth: 720, textAlign: 'left', fontSize: 24, margin: '0 auto 20px' }}>The full price for this course is <strong><s>$97</s></strong>.</p>
              <p style={{ maxWidth: 720, textAlign: 'left', fontSize: 24, margin: '0 auto 20px' }}>You&apos;re not going to pay that today. And the reason is simple.</p>
              <p style={{ maxWidth: 720, textAlign: 'left', fontSize: 24, margin: '0 auto 20px' }}>This is the first time I&apos;ve offered this course to the public. I want <strong>50 people</strong> to go through it. I want to read your emails, see your builds, find out where you get stuck and where you surprise yourself.</p>
              <p style={{ maxWidth: 720, textAlign: 'left', fontSize: 24, margin: '0 auto 20px' }}>That feedback is worth more to me right now than charging full price. Honestly, I also need to find out if I can handle 50 support inboxes without forgetting to water my own terrariums.</p>
              <p style={{ maxWidth: 720, textAlign: 'left', fontSize: 24, margin: '0 auto 20px' }}>So for this first group, the price is <strong>dramatically lower</strong>. Once those 50 spots fill, this page comes down and the full price goes live.</p>
            </div>
            <div className="checkout-box" style={{ maxWidth: 520, margin: '0 auto', padding: '40px 44px', borderRadius: 14, border: '2px solid rgba(45,122,79,0.25)', background: '#ffffff', boxShadow: '0 4px 24px rgba(0,0,0,0.06)', textAlign: 'center' }}>
              <div className="price-old">Normally $97</div>
              <p id="get-access" className="now-only" style={{ fontSize: 44, color: 'var(--ink)', fontWeight: 700, marginBottom: 8 }}>Now Only <span style={{ color: '#1a9e8f' }}>$47</span></p>
              <div className="price-note">One time payment. <span className="lifetime-break" />Lifetime access.</div>
              <div style={{ marginTop: 20 }}><CheckoutButton productName="Volcano Terrarium Masterclass" /></div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginTop: 20 }}>
                <div style={{ flex: 1, height: 1, background: 'rgba(0,0,0,0.12)' }} />
                <p style={{ margin: 0, fontWeight: 500, fontSize: 16, whiteSpace: 'nowrap', color: 'var(--ink-muted)' }} className="guarantee-text">90 Day Money Back Guarantee</p>
                <div style={{ flex: 1, height: 1, background: 'rgba(0,0,0,0.12)' }} />
              </div>
              <p style={{ color: 'var(--ink-muted)', marginBottom: 12, marginTop: 20 }}>&#128274; Secure payment &#128274;</p>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 16 }}>
                <Image src="/visa.svg" alt="Visa" width={40} height={26} style={{ height: 26, width: 'auto' }} />
                <Image src="/mastercard.svg" alt="Mastercard" width={40} height={26} style={{ height: 26, width: 'auto' }} />
                <Image src="/american-express.svg" alt="Amex" width={40} height={26} style={{ height: 26, width: 'auto' }} />
                <Image src="/discover.svg" alt="Discover" width={40} height={26} style={{ height: 26, width: 'auto' }} />
                <Image src="/paypal.svg" alt="PayPal" width={40} height={26} style={{ height: 26, width: 'auto' }} />
              </div>
              <div style={{ width: 48, height: 1, background: 'rgba(0,0,0,0.1)', margin: '20px auto' }} />
              <p className="ps-note">P.S. If the next page doesn&apos;t load... I&apos;m sorry, but the deal has ended!</p>
            </div>
          </section>

          {/* GUARANTEE */}
          <section className="guarantee-section">
            <Image src="/guarantee1.webp" alt="90 Day Money Back Guarantee" width={160} height={160} style={{ width: 130, height: 130, marginBottom: 16, margin: '0 auto 16px', display: 'block' }} />
            <h2 style={{ textAlign: 'center' }}>Try it risk-free</h2>
            <p style={{ fontSize: 20 }}><strong>You don&apos;t have to make the final decision now.</strong></p>
            <p style={{ textAlign: 'left', fontSize: 20 }}>Get access to the full course. Choose your first materials. Learn how to build properly. Create your first volcano terrarium. Watch your skills grow with every new build.</p>
            <p style={{ textAlign: 'left', fontSize: 20 }}>If you don&apos;t love it, email hello@emmasterrariums.com within 90 days for a full refund. Within 24 hours. <strong>No questions asked.</strong></p>
          </section>

          {/* BONUSES */}
          <section style={{ padding: '36px 0' }}>
            <p className="bonsai-center" style={{ color: 'var(--ink-muted)', marginBottom: 8 }}>But wait, there&apos;s more</p>
            <h2 className="bonsai-center" style={{ marginBottom: 24 }}>Order today and you also get:</h2>

            <div className="bonus-card">
              <div className="bonus-header"><div className="bonus-label">Bonus 1</div><div className="bonus-value">$47 value</div></div>
              <h3><span style={{ color: 'var(--accent)' }}>Maintenance Mastery:</span> Keep It Alive Forever</h3>
              <div className="bonus-desc">The care guide that keeps your terrarium thriving for years.</div>
              <div className="bonus-body">
                <div className="bonus-img"><Image src="/bonus1_waterfall_volcano.png" alt="Bonus 1 - Maintenance Mastery" fill style={{ objectFit: 'cover' }} /></div>
                <ul>
                  <li>&#10022; The <strong>weekly 2-minute check</strong> that prevents 90% of problems</li>
                  <li>&#10022; <strong>Lava light management</strong>: how much, how often, and the signs to watch for</li>
                  <li>&#10022; How to <strong>handle algae, mold, and yellowing</strong> before they spread</li>
                  <li>&#10022; <strong>Seasonal adjustments</strong> so your terrarium looks stunning year-round</li>
                </ul>
              </div>
            </div>

            <div className="bonus-card">
              <div className="bonus-header"><div className="bonus-label">Bonus 2</div><div className="bonus-value">$37 value</div></div>
              <h3>The <span style={{ color: 'var(--accent)' }}>Perfect Balance</span> Guide</h3>
              <div className="bonus-desc">Fine tune every element so your terrarium looks and runs flawlessly.</div>
              <div className="bonus-body">
                <div className="bonus-img"><Image src="/bonus2_waterfall_volcano.png" alt="Bonus 2 - The Perfect Balance Guide" fill style={{ objectFit: 'cover' }} /></div>
                <ul>
                  <li>&#10022; How to <strong>get the perfect lava flow rate</strong> for a natural sounding cascade</li>
                  <li>&#10022; <strong>Dialing in humidity</strong> so your glass stays crystal clear</li>
                  <li>&#10022; The <strong>light and temperature sweet spot</strong> that keeps plants lush and vibrant</li>
                  <li>&#10022; <strong>15+ pro adjustments</strong> that take a good build and make it stunning</li>
                </ul>
              </div>
            </div>

            <div className="bonus-card">
              <div className="bonus-header"><div className="bonus-label">Bonus 3</div><div className="bonus-value">$27 value</div></div>
              <h3>The <span style={{ color: 'var(--accent)' }}>Plant Picker</span></h3>
              <div className="bonus-desc">A visual guide to the 20 best terrarium plants so you always know exactly what to use.</div>
              <div className="bonus-body">
                <div className="bonus-img"><Image src="/bonus3_waterfall_volcano.png" alt="Bonus 3 - The Plant Picker" fill style={{ objectFit: 'cover' }} /></div>
                <ul>
                  <li>&#10022; <strong>20 plants ranked by difficulty</strong> so you start with the ones that are hardest to kill</li>
                  <li>&#10022; <strong>Photos of each plant</strong> at 1 week, 1 month, and 3 months inside a terrarium</li>
                  <li>&#10022; Which plants <strong>grow fast vs stay small</strong> so your build looks right long term</li>
                  <li>&#10022; The <strong>5 combinations that always look good together</strong> no matter the container</li>
                </ul>
              </div>
            </div>
          </section>

          {/* FIRST STACK + CTA */}
          <section style={{ padding: '36px 0' }} id="pricing">
            <h2 className="bonsai-center" style={{ marginBottom: 18 }}>Here&apos;s everything you get:</h2>
            <div className="stack-row stack-total"><span className="label">&#10003; 5 Core Modules</span><span className="val">$139</span></div>
            <div className="stack-row"><span className="label">&#10003; Maintenance Mastery</span><span className="val">$47</span></div>
            <div className="stack-row"><span className="label">&#10003; The Perfect Balance Guide</span><span className="val">$37</span></div>
            <div className="stack-row"><span className="label">&#10003; The Plant Picker</span><span className="val">$27</span></div>
            <div className="stack-row" style={{ borderBottom: 'none' }}><span className="label" style={{ fontWeight: 700, color: 'var(--ink)' }}>Total Value</span><span className="val" style={{ fontSize: 16 }}>$250</span></div>
          </section>

          <div className="checkout-box" style={{ maxWidth: 520, margin: '0 auto', padding: '40px 44px', borderRadius: 14, border: '2px solid rgba(45,122,79,0.25)', background: '#ffffff', boxShadow: '0 4px 24px rgba(0,0,0,0.06)', textAlign: 'center' }}>
            <div className="price-old">Normally $97</div>
            <p className="now-only" style={{ fontSize: 44, color: 'var(--ink)', fontWeight: 700, marginBottom: 8 }}>Now Only <span style={{ color: '#1a9e8f' }}>$47</span></p>
            <div className="price-note">One time payment. <span className="lifetime-break" />Lifetime access.</div>
            <div style={{ marginTop: 20 }}><CheckoutButton productName="Volcano Terrarium Masterclass" /></div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginTop: 20 }}>
              <div style={{ flex: 1, height: 1, background: 'rgba(0,0,0,0.12)' }} />
              <p style={{ margin: 0, fontWeight: 500, fontSize: 16, whiteSpace: 'nowrap', color: 'var(--ink-muted)' }} className="guarantee-text">90 Day Money Back Guarantee</p>
              <div style={{ flex: 1, height: 1, background: 'rgba(0,0,0,0.12)' }} />
            </div>
            <p style={{ color: 'var(--ink-muted)', marginBottom: 12, marginTop: 20 }}>&#128274; Secure payment &#128274;</p>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 16 }}>
              <Image src="/visa.svg" alt="Visa" width={40} height={26} style={{ height: 26, width: 'auto' }} />
              <Image src="/mastercard.svg" alt="Mastercard" width={40} height={26} style={{ height: 26, width: 'auto' }} />
              <Image src="/american-express.svg" alt="Amex" width={40} height={26} style={{ height: 26, width: 'auto' }} />
              <Image src="/discover.svg" alt="Discover" width={40} height={26} style={{ height: 26, width: 'auto' }} />
              <Image src="/paypal.svg" alt="PayPal" width={40} height={26} style={{ height: 26, width: 'auto' }} />
            </div>
            <div style={{ width: 48, height: 1, background: 'rgba(0,0,0,0.1)', margin: '20px auto' }} />
            <p className="ps-note">P.S. If the next page doesn&apos;t load... I&apos;m sorry, but the deal has ended!</p>
          </div>

          {/* MEGA BONUS */}
          <section style={{ padding: '64px 0 64px' }}>
            <p className="bonsai-center" style={{ color: 'var(--ink-muted)', marginBottom: 8 }}>One last thing...</p>
            <h2 className="bonsai-center" style={{ marginBottom: 18 }}>Order today and you also get:</h2>

            <div className="bonus-card mega">
              <div className="bonus-header"><div className="bonus-label">Mega Bonus</div><div className="bonus-value">$79 value</div></div>
              <h3><span style={{ color: 'var(--accent)' }}>The Desert Terrarium:</span> A Complete Second Build</h3>
              <div className="bonus-desc">A full step by step guide to building a miniature desert landscape with sand, succulents, and dry rock formations.</div>
              <div className="bonus-body">
                <div className="bonus-img"><Image src="/megabonus_waterfall_volcano.png" alt="Mega Bonus - Desert Terrarium" fill style={{ objectFit: 'cover' }} /></div>
                <ul>
                  <li>&#10022; <strong>Complete build guide</strong> from container selection to finished desert scene</li>
                  <li>&#10022; How to <strong>layer sand and gravel</strong> for a natural canyon look</li>
                  <li>&#10022; <strong>Choosing and placing succulents, cacti, and air plants</strong> that thrive with zero effort</li>
                  <li>&#10022; Adding <strong>driftwood, dry stones, and pebble paths</strong> for realistic detail</li>
                  <li>&#10022; <strong>Full material list and cost breakdown</strong> for the entire build</li>
                </ul>
              </div>
            </div>
          </section>

          <div className="bonsai-divider" />

          {/* FAQ */}
          <section style={{ padding: '40px 0' }}>
            <h2 className="bonsai-center" style={{ marginBottom: 24 }}>Frequently Asked Questions</h2>
            <FaqAccordion />
          </section>

          <div className="bonsai-divider" />

          {/* SECOND STACK + CTA */}
          <section style={{ padding: '36px 0' }}>
            <h2 className="bonsai-center" style={{ marginBottom: 18 }}>Here&apos;s everything you get:</h2>
            <div className="stack-row stack-total"><span className="label">&#10003; 5 Core Modules</span><span className="val">$139</span></div>
            <div className="stack-row"><span className="label">&#10003; Maintenance Mastery</span><span className="val">$47</span></div>
            <div className="stack-row"><span className="label">&#10003; The Perfect Balance Guide</span><span className="val">$37</span></div>
            <div className="stack-row"><span className="label">&#10003; The Plant Picker</span><span className="val">$27</span></div>
            <div className="stack-row"><span className="label">&#10003; The Desert Terrarium Build</span><span className="val">$79</span></div>
            <div className="stack-row" style={{ borderBottom: 'none' }}><span className="label" style={{ fontWeight: 700, color: 'var(--ink)' }}>Total Value</span><span className="val" style={{ fontSize: 16 }}>$329</span></div>
          </section>

          <div className="checkout-box" style={{ maxWidth: 520, margin: '0 auto', padding: '40px 44px', borderRadius: 14, border: '2px solid rgba(45,122,79,0.25)', background: '#ffffff', boxShadow: '0 4px 24px rgba(0,0,0,0.06)', textAlign: 'center' }}>
            <div className="price-old">Normally $97</div>
            <p className="now-only" style={{ fontSize: 44, color: 'var(--ink)', fontWeight: 700, marginBottom: 8 }}>Now Only <span style={{ color: '#1a9e8f' }}>$47</span></p>
            <div className="price-note">One time payment. <span className="lifetime-break" />Lifetime access.</div>
            <div style={{ marginTop: 20 }}><CheckoutButton productName="Volcano Terrarium Masterclass" /></div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginTop: 20 }}>
              <div style={{ flex: 1, height: 1, background: 'rgba(0,0,0,0.12)' }} />
              <p style={{ margin: 0, fontWeight: 500, fontSize: 16, whiteSpace: 'nowrap', color: 'var(--ink-muted)' }} className="guarantee-text">90 Day Money Back Guarantee</p>
              <div style={{ flex: 1, height: 1, background: 'rgba(0,0,0,0.12)' }} />
            </div>
            <p style={{ color: 'var(--ink-muted)', marginBottom: 12, marginTop: 20 }}>&#128274; Secure payment &#128274;</p>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 16 }}>
              <Image src="/visa.svg" alt="Visa" width={40} height={26} style={{ height: 26, width: 'auto' }} />
              <Image src="/mastercard.svg" alt="Mastercard" width={40} height={26} style={{ height: 26, width: 'auto' }} />
              <Image src="/american-express.svg" alt="Amex" width={40} height={26} style={{ height: 26, width: 'auto' }} />
              <Image src="/discover.svg" alt="Discover" width={40} height={26} style={{ height: 26, width: 'auto' }} />
              <Image src="/paypal.svg" alt="PayPal" width={40} height={26} style={{ height: 26, width: 'auto' }} />
            </div>
            <div style={{ width: 48, height: 1, background: 'rgba(0,0,0,0.1)', margin: '20px auto' }} />
            <p className="ps-note">P.S. If the next page doesn&apos;t load... I&apos;m sorry, but the deal has ended!</p>
          </div>

          <div className="bonsai-divider" />


        </div>
      </div>

{/* FOOTER */}
      <footer className="bonsai-footer" style={{ paddingBottom: 100 }}>
        <p>&copy; 2026 Volcano Terrariums. All rights reserved.</p>
        <p style={{ marginTop: 5 }}><a href="/privacy">Privacy</a> &middot; <a href="/terms">Terms</a></p>
        <p style={{ marginTop: 16, fontSize: 11, color: '#666', maxWidth: 600, margin: '16px auto 0', lineHeight: 1.5 }}>This site is not a part of the Facebook website or Facebook Inc. Additionally, this site is NOT endorsed by Facebook in any way. FACEBOOK is a trademark of FACEBOOK, Inc.</p>
      </footer>
    </main>
  );
}
