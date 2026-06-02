import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import tshirtImg from '../assets/tshirt.png';
import mugImg from '../assets/mug.png';
import pillowImg from '../assets/pillow.png';
import giftImg from '../assets/gift.png';
import nameboardImg from '../assets/nameboard.png';
import visitingCardImg from '../assets/visiting_card.png';

const WA_LINK = "https://wa.me/919999999999?text=Hi%20AR%20Prints!%20I'm%20interested%20in%20ordering%20something%20similar.%20Can%20you%20help%3F";

const allItems = [
  { id: 'p1', src: tshirtImg, alt: 'Custom printed t-shirts', label: 'T-Shirts', category: 'tshirts', wide: true },
  { id: 'p2', src: mugImg, alt: 'Custom printed mugs', label: 'Mugs', category: 'mugs' },
  { id: 'p3', src: pillowImg, alt: 'Custom printed pillows', label: 'Pillows', category: 'pillows', tall: true },
  { id: 'p4', src: giftImg, alt: 'Personalized gift sets', label: 'Gifts', category: 'gifts' },
  { id: 'p5', src: nameboardImg, alt: 'Custom name board signage', label: 'Boards', category: 'boards', wide: true },
  { id: 'p6', src: visitingCardImg, alt: 'Premium visiting cards', label: 'Cards', category: 'cards' },
  { id: 'p7', src: tshirtImg, alt: 'Custom team uniforms', label: 'T-Shirts', category: 'tshirts' },
  { id: 'p8', src: mugImg, alt: 'Corporate gift mugs', label: 'Mugs', category: 'mugs', wide: true },
  { id: 'p9', src: giftImg, alt: 'Personalized birthday gifts', label: 'Gifts', category: 'gifts' },
];

const filters = ['All', 'T-Shirts', 'Mugs', 'Boards', 'Cards', 'Gifts'];
const categoryMap: Record<string, string> = {
  'All': 'all', 'T-Shirts': 'tshirts', 'Mugs': 'mugs',
  'Boards': 'boards', 'Cards': 'cards', 'Gifts': 'gifts',
};

export default function PortfolioPage() {
  const [activeFilter, setActiveFilter] = useState('All');
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.reveal').forEach((el, i) => {
              setTimeout(() => el.classList.add('visible'), i * 80);
            });
          }
        });
      },
      { threshold: 0.05 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const visibleItems = allItems.filter(item => {
    const cat = categoryMap[activeFilter];
    return cat === 'all' || item.category === cat;
  });

  return (
    <>
      {/* Page Hero */}
      <div className="page-hero">
        <div className="page-hero-orb" style={{ width: 450, height: 450, background: 'rgba(245,197,24,0.07)', top: -120, right: -60 }} />
        <div className="page-hero-orb" style={{ width: 250, height: 250, background: 'rgba(255,122,0,0.06)', bottom: -40, left: '20%' }} />
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <Link to="/">Home</Link>
            <span>›</span>
            <span style={{ color: 'var(--gold)' }}>Portfolio</span>
          </nav>
          <span className="section-label" style={{ marginBottom: 12 }}>Our Work</span>
          <h1>Work We're <span className="text-gradient">Proud Of</span></h1>
          <p>A gallery of creations that have delighted hundreds of happy clients across India.</p>
        </div>
      </div>

      {/* Portfolio Section */}
      <section className="section" id="portfolio-grid" aria-label="Portfolio gallery" ref={sectionRef}>
        <div className="container">
          {/* Filters */}
          <div className="portfolio-filters reveal" role="tablist" aria-label="Portfolio filter">
            {filters.map(f => (
              <button
                key={f}
                className={`filter-btn${activeFilter === f ? ' active' : ''}`}
                onClick={() => setActiveFilter(f)}
                role="tab"
                aria-selected={activeFilter === f}
                id={`portfolio-filter-${f.toLowerCase()}`}
              >
                {f}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="portfolio-grid" role="list">
            {visibleItems.map(item => (
              <div
                key={item.id}
                className={`portfolio-item reveal${item.wide ? ' wide' : ''}${item.tall ? ' tall' : ''}`}
                role="listitem"
                id={`portfolio-item-${item.id}`}
              >
                <img src={item.src} alt={item.alt} loading="lazy" />
                <div className="portfolio-overlay">
                  <div>
                    <p style={{ fontFamily: 'var(--font-display)', fontWeight: 800, color: 'var(--white)', marginBottom: 14, fontSize: 28, letterSpacing: '-0.02em', textShadow: '0 4px 12px rgba(0,0,0,0.5)' }}>
                      {item.label}
                    </p>
                    <a
                      href={WA_LINK}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-gold"
                      style={{ padding: '12px 24px', fontSize: 14 }}
                      id={`portfolio-order-${item.id}`}
                      aria-label={`Order similar ${item.label} on WhatsApp`}
                    >
                      Order Similar
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div style={{ textAlign: 'center', marginTop: 64 }}>
            <p style={{ color: 'var(--text-secondary)', marginBottom: 24, fontSize: 17 }}>
              Don't see what you need? We create completely custom designs too.
            </p>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-gold"
              id="portfolio-custom-cta"
              style={{ fontSize: 16, padding: '16px 36px' }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
              Discuss Your Custom Design
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
