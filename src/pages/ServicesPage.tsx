import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import tshirtImg from '../assets/tshirt.png';
import mugImg from '../assets/mug.png';
import pillowImg from '../assets/pillow.png';
import giftImg from '../assets/gift.png';
import nameboardImg from '../assets/nameboard.png';
import visitingCardImg from '../assets/visiting_card.png';
import radiumImg from '../assets/radium_board.png';
import fluteImg from '../assets/flute_board.png';
import fireExitImg from '../assets/fire_exit_board.png';
import Process from '../components/Process/Process';

const WA_BASE = "https://wa.me/919999999999?text=Hi%20AR%20Prints!%20I'm%20interested%20in%20";

const services = [
  { icon: '👕', image: tshirtImg, name: 'T-Shirt Printing', waText: 'T-Shirt%20Printing.%20Can%20you%20help%3F', id: 'tshirt', desc: 'High-resolution custom prints on premium cotton blends. Perfect for teams, events, and personal style. We support round-neck, polo, and full-sleeve styles.', tag: 'Most Popular' },
  { icon: '☕', image: mugImg, name: 'Mug Printing', waText: 'Mug%20Printing.%20Can%20you%20help%3F', id: 'mugs', desc: 'Dishwasher-safe sublimation printing on 11oz and 15oz ceramic mugs. Ideal for gifts, corporate giveaways, and memories.', tag: '' },
  { icon: '🛋️', image: pillowImg, name: 'Pillow Printing', waText: 'Pillow%20Printing.%20Can%20you%20help%3F', id: 'pillows', desc: 'Soft-touch fabric printing on plush cushions. Transform photos and designs into cozy keepsakes in 12"×12" or 16"×16" sizes.', tag: '' },
  { icon: '🎁', image: giftImg, name: 'Customized Gifts', waText: 'Customized%20Gifts.%20Can%20you%20help%3F', id: 'gifts', desc: 'Curated personalized gift sets for every occasion — birthdays, anniversaries, festivals, and corporate gifting.', tag: 'Gift Ready' },
  { icon: '🪧', image: nameboardImg, name: 'Name Boards', waText: 'Name%20Boards.%20Can%20you%20help%3F', id: 'nameboards', desc: 'Premium acrylic, ACP, and metal name boards for offices, homes, clinics, and commercial spaces. Sharp and durable.', tag: '' },
  { icon: '🌟', image: radiumImg, name: 'Radium Boards', waText: 'Radium%20Boards.%20Can%20you%20help%3F', id: 'radium', desc: 'Glow-in-the-dark radium signage for maximum visibility in low-light conditions. Safety meets professional style.', tag: 'Safety' },
  { icon: '📋', image: fluteImg, name: 'Flute Boards', waText: 'Flute%20Boards.%20Can%20you%20help%3F', id: 'flute', desc: 'Lightweight, weather-resistant corrugated plastic boards perfect for promotional displays, events, and outdoor signage.', tag: '' },
  { icon: '🚪', image: fireExitImg, name: 'Fire Exit Boards', waText: 'Fire%20Exit%20Boards.%20Can%20you%20help%3F', id: 'fire-exit', desc: 'Fully compliant fire safety signage with high-visibility printing. Essential for offices, malls, schools, and all commercial premises.', tag: 'Compliance' },
  { icon: '💼', image: visitingCardImg, name: 'Visiting Cards', waText: 'Visiting%20Cards.%20Can%20you%20help%3F', id: 'visiting-cards', desc: 'Premium business cards with matte, glossy, spot-UV, or embossed finish. Leave a lasting first impression every time.', tag: 'Fast Turnaround' },
];

export default function ServicesPage() {
  const revealRefs = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    window.scrollTo(0, 0);
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }),
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );
    revealRefs.current.forEach(r => r && observer.observe(r));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* Page Hero */}
      <div className="page-hero">
        <div className="page-hero-orb" style={{ width: 400, height: 400, background: 'rgba(245,197,24,0.07)', top: -100, right: 0 }} />
        <div className="page-hero-orb" style={{ width: 280, height: 280, background: 'rgba(255,122,0,0.06)', bottom: -60, left: '15%' }} />
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <Link to="/">Home</Link>
            <span>›</span>
            <span style={{ color: 'var(--gold)' }}>Services</span>
          </nav>
          <span className="section-label" style={{ marginBottom: 12 }}>What We Offer</span>
          <h1>Our <span className="text-gradient">Services</span></h1>
          <p>From personal prints to large corporate orders — premium quality, fast turnaround.</p>
        </div>
      </div>

      {/* Services Grid */}
      <section className="section" id="services-grid" aria-label="All services">
        <div className="container">
          <div className="services-grid">
            {services.map((s, i) => (
              <div
                key={s.id}
                className="service-card reveal"
                ref={el => { revealRefs.current[i] = el as HTMLElement; }}
                style={{ transitionDelay: `${(i % 3) * 100}ms`, padding: 0, overflow: 'hidden' }}
                id={`service-${s.id}`}
              >
                {/* Tag Badge */}
                {s.tag && (
                  <div style={{
                    position: 'absolute', top: 12, right: 12, zIndex: 5,
                    background: 'var(--gradient-gold)', color: 'var(--primary)',
                    padding: '4px 12px', borderRadius: 100,
                    fontFamily: 'var(--font-accent)', fontSize: 11, fontWeight: 700,
                    letterSpacing: '0.5px',
                  }}>
                    {s.tag}
                  </div>
                )}
                {/* Image */}
                <div style={{ width: '100%', height: 180, overflow: 'hidden', borderRadius: '22px 22px 0 0', background: 'linear-gradient(135deg, #0B132B 0%, #1a2a5e 100%)' }}>
                  <img src={s.image} alt={s.name} loading="lazy" className="service-card-img" style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s cubic-bezier(0.4,0,0.2,1)' }} />
                </div>
                {/* Body */}
                <div style={{ padding: '24px 28px 28px' }}>
                  <h3>{s.name}</h3>
                  <p style={{ marginTop: 8 }}>{s.desc}</p>
                  <a
                    href={`${WA_BASE}${s.waText}`}
                    target="_blank" rel="noopener noreferrer"
                    className="btn btn-gold"
                    id={`services-cta-${s.id}`}
                    aria-label={`Get quote for ${s.name} on WhatsApp`}
                    style={{ marginTop: 20, padding: '12px 24px', fontSize: 13 }}
                  >
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                    </svg>
                    Get Instant Quote
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Process />
    </>
  );
}
