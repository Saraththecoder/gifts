import { useEffect, useRef } from 'react';
import { MessageCircle, Palette, Package, ChevronRight } from 'lucide-react';

const steps = [
  {
    num: '01',
    title: 'Share Your Idea',
    description: 'Message us on WhatsApp with your concept, design file, or just a rough idea. We\'ll respond instantly.',
    icon: <MessageCircle size={36} color="var(--primary)" />,
  },
  {
    num: '02',
    title: 'We Design It',
    description: 'Our creative team crafts a digital proof for your approval. We iterate until you\'re 100% satisfied.',
    icon: <Palette size={36} color="var(--primary)" />,
  },
  {
    num: '03',
    title: 'Delivered to You',
    description: 'Your custom creation is printed with precision and delivered right to your door — fast and secure.',
    icon: <Package size={36} color="var(--primary)" />,
  },
];

export default function Process() {
  const refs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) entry.target.classList.add('visible');
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );
    refs.current.forEach(ref => ref && observer.observe(ref));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="section" id="process" aria-label="How it works">
      <div className="container">
        <div
          className="reveal"
          ref={el => { refs.current[0] = el; }}
          style={{ textAlign: 'center' }}
        >
          <span className="section-label">How It Works</span>
          <h2>Simple. Fast. <span className="text-gradient">Perfect.</span></h2>
          <p style={{ color: 'var(--text-secondary)', marginTop: 16, maxWidth: 480, margin: '16px auto 0', fontSize: 17 }}>
            Get your custom prints in 3 easy steps — no design experience needed.
          </p>
        </div>

        <div className="process-steps">
          {steps.map((step, i) => (
            <>
              <div
                key={step.num}
                className="process-step reveal"
                ref={el => { refs.current[i + 1] = el; }}
                style={{ transitionDelay: `${i * 150}ms` }}
                id={`process-step-${i + 1}`}
              >
                <div className="step-number" aria-label={`Step ${step.num}`}>
                  {step.num}
                </div>
                <div style={{ marginBottom: 16, display: 'flex', justifyContent: 'center' }} aria-hidden="true">
                  {step.icon}
                </div>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
              {i < steps.length - 1 && (
                <div className="process-connector" aria-hidden="true" key={`connector-${i}`}>
                  <div className="connector-line">
                    <ChevronRight size={20} className="connector-arrow" />
                  </div>
                </div>
              )}
            </>
          ))}
        </div>
      </div>
    </section>
  );
}
