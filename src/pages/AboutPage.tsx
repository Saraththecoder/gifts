import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import WhyUs from '../components/WhyUs/WhyUs';
import Process from '../components/Process/Process';

const WA_LINK = "https://wa.me/919949256844?text=Hi%20AR%20Prints!%20I'd%20like%20to%20learn%20more%20about%20your%20services.";

const milestones = [
  { year: '2018', title: 'Founded', desc: 'AR Prints started with a single printer and a big dream — to bring premium custom printing to everyone.' },
  { year: '2020', title: 'Expanded', desc: 'Grew our studio and added corporate gifting, name boards, and safety signage to our offerings.' },
  { year: '2022', title: '500+ Clients', desc: 'Crossed 500 happy clients milestone with same-day delivery capabilities across the city.' },
  { year: '2024', title: 'Premium Studio', desc: 'Upgraded to industrial-grade DTF and sublimation printers for unmatched color accuracy and quality.' },
];

export default function AboutPage() {
  const refs = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    window.scrollTo(0, 0);
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }),
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );
    refs.current.forEach(r => r && observer.observe(r));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* Page Hero */}
      <div className="page-hero">
        <div className="page-hero-orb" style={{ width: 400, height: 400, background: 'rgba(245,197,24,0.08)', top: -80, right: '10%' }} />
        <div className="page-hero-orb" style={{ width: 300, height: 300, background: 'rgba(255,122,0,0.05)', bottom: -60, left: 0 }} />
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <Link to="/">Home</Link>
            <span>›</span>
            <span style={{ color: 'var(--gold)' }}>About</span>
          </nav>
          <span className="section-label" style={{ marginBottom: 12 }}>Our Story</span>
          <h1>Built on <span className="text-gradient">Passion</span> & Craft</h1>
          <p>A premium custom printing studio committed to quality, creativity, and fast delivery.</p>
        </div>
      </div>

      {/* Story Section */}
      <section className="section" id="about-story" aria-label="Our story">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'center' }}>
            <div className="reveal" ref={el => { refs.current[0] = el as HTMLElement; }}>
              <span className="section-label">Who We Are</span>
              <h2 style={{ marginBottom: 24 }}>
                More Than a <span className="text-gradient">Print Shop</span>
              </h2>
              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.85, marginBottom: 20 }}>
                AR Prints & Customized Gifts is a premium custom printing studio based in India. We don't just print — we transform your ideas into high-quality physical experiences that make people feel something.
              </p>
              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.85, marginBottom: 32 }}>
                Whether you need a single personalized gift or 500 branded corporate items, we bring the same dedication to quality, the same attention to detail, and the same commitment to delivery — every single time.
              </p>
              <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="btn btn-gold" id="about-cta">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
                Talk to Us on WhatsApp
              </a>
            </div>

            {/* Timeline */}
            <div className="reveal" ref={el => { refs.current[1] = el as HTMLElement; }} style={{ transitionDelay: '0.15s' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
                {milestones.map((m, i) => (
                  <div key={m.year} style={{ display: 'flex', gap: 24, paddingBottom: i < milestones.length - 1 ? 32 : 0, position: 'relative' }}>
                    {/* Timeline line */}
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flexShrink: 0 }}>
                      <div style={{
                        width: 48, height: 48, borderRadius: '50%',
                        background: 'var(--gradient-gold)',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        fontFamily: 'var(--font-accent)', fontSize: 12, fontWeight: 700,
                        color: 'var(--primary)', flexShrink: 0,
                        boxShadow: 'var(--shadow-gold)',
                      }}>
                        {m.year}
                      </div>
                      {i < milestones.length - 1 && (
                        <div style={{ width: 2, flex: 1, background: 'linear-gradient(to bottom, var(--gold), var(--accent))', marginTop: 8, minHeight: 24, opacity: 0.4 }} />
                      )}
                    </div>
                    <div style={{ paddingTop: 10 }}>
                      <h3 style={{ fontSize: 18, fontWeight: 700, color: 'var(--text-primary)', marginBottom: 6 }}>{m.title}</h3>
                      <p style={{ fontSize: 15, color: 'var(--text-secondary)', lineHeight: 1.65 }}>{m.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <WhyUs />
      <Process />
    </>
  );
}
