import { useEffect, useRef } from 'react';
import { Award, Zap, PenTool, Banknote } from 'lucide-react';

const features = [
  {
    icon: <Award size={28} />,
    title: 'Premium Quality',
    description: 'We use industry-grade printers and premium materials to ensure every print meets the highest standard of quality.',
    id: 'quality',
  },
  {
    icon: <Zap size={28} />,
    title: 'Fast Turnaround',
    description: 'Same-day delivery for urgent orders. We understand deadlines and always deliver on time, without compromising quality.',
    id: 'speed',
  },
  {
    icon: <PenTool size={28} />,
    title: 'Custom Designs',
    description: 'Our in-house design team brings your ideas to life. Share a concept, photo, or brief — we handle the rest.',
    id: 'design',
  },
  {
    icon: <Banknote size={28} />,
    title: 'Affordable Pricing',
    description: 'Transparent pricing with no hidden costs. Premium quality at prices that make sense for individuals and businesses alike.',
    id: 'price',
  },
];

export default function WhyUs() {
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
    <section className="section section-dark" id="why-us" aria-label="Why choose us">
      <div className="container">
        <div
          className="reveal"
          ref={el => { refs.current[0] = el; }}
          style={{ textAlign: 'center', marginBottom: 0 }}
        >
          <span className="section-label">Why Choose Us</span>
          <h2 style={{ color: 'var(--white)' }}>
            Built on <span className="text-gradient">Trust</span> & Craft
          </h2>
          <p className="section-dark text-secondary-light" style={{ marginTop: 16, maxWidth: 500, margin: '16px auto 0', fontSize: 17 }}>
            Four pillars that define every order we fulfill — from the first message to the final delivery.
          </p>
        </div>

        <div className="why-grid">
          {features.map((feat, i) => (
            <div
              key={feat.id}
              className="why-card reveal"
              ref={el => { refs.current[i + 1] = el; }}
              style={{ transitionDelay: `${i * 100}ms` }}
              id={`why-${feat.id}`}
            >
              <div className="why-icon" role="img" aria-label={feat.title}>
                {feat.icon}
              </div>
              <h3>{feat.title}</h3>
              <p>{feat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
