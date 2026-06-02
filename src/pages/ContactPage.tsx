import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Mail, MapPin } from 'lucide-react';
import Testimonials from '../components/Testimonials/Testimonials';

const WA_NUMBER = "919999999999";
const WA_LINK = `https://wa.me/${WA_NUMBER}?text=Hi%20AR%20Prints!%20I'm%20interested%20in%20a%20custom%20order.%20Can%20you%20help%3F`;

const WAIcon = ({ size = 22 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
  </svg>
);

const faqs = [
  { q: 'What is your minimum order quantity?', a: 'We accept even single-piece orders for most products. Bulk orders get additional discounts — just ask us!' },
  { q: 'How long does delivery take?', a: 'Most orders are delivered within 24–48 hours. Same-day delivery is available for urgent orders within the city.' },
  { q: 'Can you work with my design file?', a: 'Yes! Send us your file in any format (PNG, JPG, PDF, AI, PSD) via WhatsApp and we\'ll optimize it for printing.' },
  { q: 'Do you ship across India?', a: 'Yes, we ship pan-India. Local orders get priority same-day delivery. PAN India typically takes 3–5 business days.' },
  { q: 'What if I\'m not happy with the quality?', a: 'We offer a 100% satisfaction guarantee. If you\'re not happy, we\'ll reprint or refund — no questions asked.' },
];

export default function ContactPage() {
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
        <div className="page-hero-orb" style={{ width: 420, height: 420, background: 'rgba(245,197,24,0.08)', top: -80, right: '5%' }} />
        <div className="page-hero-orb" style={{ width: 280, height: 280, background: 'rgba(37,211,102,0.06)', bottom: -40, left: '20%' }} />
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <Link to="/">Home</Link>
            <span>›</span>
            <span style={{ color: 'var(--gold)' }}>Contact</span>
          </nav>
          <span className="section-label" style={{ marginBottom: 12 }}>Let's Talk</span>
          <h1>Get in <span className="text-gradient">Touch</span></h1>
          <p>Message us on WhatsApp for instant quotes, design help, and order updates.</p>
        </div>
      </div>

      {/* Contact Cards + WhatsApp */}
      <section className="section" id="contact-main" aria-label="Contact information">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 60, alignItems: 'start' }}>

            {/* Left: Contact Options */}
            <div className="reveal" ref={el => { refs.current[0] = el as HTMLElement; }}>
              <span className="section-label">Reach Us</span>
              <h2 style={{ marginBottom: 36 }}>
                We Reply <span className="text-gradient">Instantly</span>
              </h2>

              {/* WhatsApp Card */}
              <div style={{
                background: 'linear-gradient(135deg, #128C7E, #25D366)',
                borderRadius: 20, padding: 32, marginBottom: 20, color: 'white',
                boxShadow: '0 12px 40px rgba(37,211,102,0.35)',
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 16 }}>
                  <div style={{ width: 48, height: 48, background: 'rgba(255,255,255,0.15)', borderRadius: 12, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <WAIcon size={26} />
                  </div>
                  <div>
                    <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 17 }}>WhatsApp</div>
                    <div style={{ fontSize: 13, opacity: 0.8 }}>Fastest way to reach us</div>
                  </div>
                </div>
                <p style={{ fontSize: 15, opacity: 0.9, lineHeight: 1.6, marginBottom: 20 }}>
                  Send us your design idea, order details, or any questions. We respond within minutes and provide instant quotes.
                </p>
                <a
                  href={WA_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  id="contact-wa-btn"
                  aria-label="Open WhatsApp chat"
                  style={{
                    display: 'inline-flex', alignItems: 'center', gap: 10,
                    background: 'white', color: '#128C7E',
                    padding: '12px 24px', borderRadius: 12,
                    fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 14,
                    transition: 'all 0.3s',
                  }}
                >
                  <WAIcon size={16} />
                  +91 99999 99999
                </a>
              </div>

              {/* Email Card */}
              <div style={{
                background: 'var(--white)', border: '1.5px solid var(--border)',
                borderRadius: 20, padding: 28, marginBottom: 20,
                boxShadow: 'var(--shadow-card)',
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 12 }}>
                  <div style={{ width: 44, height: 44, background: 'rgba(245,197,24,0.12)', borderRadius: 12, display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--gold)' }}>
                    <Mail size={20} />
                  </div>
                  <div>
                    <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 16, color: 'var(--text-primary)' }}>Email</div>
                    <div style={{ fontSize: 13, color: 'var(--text-secondary)' }}>For detailed inquiries</div>
                  </div>
                </div>
                <a href="mailto:hello@arprints.in" style={{ color: 'var(--accent)', fontWeight: 600, fontSize: 15 }}>hello@arprints.in</a>
              </div>

              {/* Location Card */}
              <div style={{
                background: 'var(--white)', border: '1.5px solid var(--border)',
                borderRadius: 20, padding: 28,
                boxShadow: 'var(--shadow-card)',
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 12 }}>
                  <div style={{ width: 44, height: 44, background: 'rgba(245,197,24,0.12)', borderRadius: 12, display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--gold)' }}>
                    <MapPin size={20} />
                  </div>
                  <div>
                    <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 16, color: 'var(--text-primary)' }}>Location</div>
                    <div style={{ fontSize: 13, color: 'var(--text-secondary)' }}>Visit us in person</div>
                  </div>
                </div>
                <p style={{ color: 'var(--text-secondary)', fontSize: 15 }}>Your City, India<br />Mon–Sat: 9am – 8pm</p>
              </div>
            </div>

            {/* Right: FAQ */}
            <div className="reveal" ref={el => { refs.current[1] = el as HTMLElement; }} style={{ transitionDelay: '0.15s' }}>
              <span className="section-label">FAQ</span>
              <h2 style={{ marginBottom: 36 }}>
                Common <span className="text-gradient">Questions</span>
              </h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                {faqs.map((faq, i) => (
                  <details
                    key={i}
                    style={{
                      background: 'var(--white)', border: '1.5px solid var(--border)',
                      borderRadius: 16, overflow: 'hidden',
                      boxShadow: '0 4px 16px rgba(11,19,43,0.06)',
                    }}
                    id={`faq-${i + 1}`}
                  >
                    <summary style={{
                      padding: '18px 24px', cursor: 'pointer', listStyle: 'none',
                      fontFamily: 'var(--font-display)', fontWeight: 700,
                      fontSize: 15, color: 'var(--text-primary)',
                      display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                      userSelect: 'none',
                    }}>
                      {faq.q}
                      <span style={{ color: 'var(--gold)', fontSize: 18, flexShrink: 0 }}>+</span>
                    </summary>
                    <div style={{ padding: '0 24px 20px', color: 'var(--text-secondary)', fontSize: 15, lineHeight: 1.7 }}>
                      {faq.a}
                    </div>
                  </details>
                ))}
              </div>

              <div style={{ marginTop: 40, padding: 28, background: 'linear-gradient(135deg, #0B132B, #1a2a5e)', borderRadius: 20 }}>
                <h3 style={{ color: 'white', fontSize: 20, marginBottom: 10 }}>Still have questions?</h3>
                <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: 15, marginBottom: 20 }}>
                  Just message us! We're happy to answer anything.
                </p>
                <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="btn btn-wa" id="contact-faq-cta" style={{ padding: '12px 24px', fontSize: 14 }}>
                  <WAIcon size={16} />
                  Chat on WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Testimonials />
    </>
  );
}
