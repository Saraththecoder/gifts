import { useState, useEffect, useRef } from 'react';
import tshirtImg from '../../assets/tshirt.png';
import mugImg from '../../assets/mug.png';
import pillowImg from '../../assets/pillow.png';
import giftImg from '../../assets/gift.png';
import nameboardImg from '../../assets/nameboard.png';
import visitingCardImg from '../../assets/visiting_card.png';

const WA_LINK = "https://wa.me/919999999999?text=Hi%20AR%20Prints!%20I'm%20interested%20in%20ordering%20something%20similar.%20Can%20you%20help%3F";

const portfolioItems = [
  { id: 'p1', src: tshirtImg, alt: 'Custom printed t-shirts', label: 'T-Shirts', category: 'tshirts', wide: true },
  { id: 'p2', src: mugImg, alt: 'Custom printed mugs', label: 'Mugs', category: 'mugs' },
  { id: 'p3', src: pillowImg, alt: 'Custom printed pillows', label: 'Pillows', category: 'pillows', tall: true },
  { id: 'p4', src: giftImg, alt: 'Personalized gift sets', label: 'Gifts', category: 'gifts' },
  { id: 'p5', src: nameboardImg, alt: 'Custom name board signage', label: 'Boards', category: 'boards', wide: true },
  { id: 'p6', src: visitingCardImg, alt: 'Premium visiting cards', label: 'Cards', category: 'cards' },
];

const filters = ['All', 'T-Shirts', 'Mugs', 'Boards', 'Cards'];
const categoryMap: Record<string, string> = {
  'All': 'all',
  'T-Shirts': 'tshirts',
  'Mugs': 'mugs',
  'Boards': 'boards',
  'Cards': 'cards',
};

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('All');
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.reveal').forEach((el, i) => {
              setTimeout(() => el.classList.add('visible'), i * 100);
            });
          }
        });
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const visibleItems = portfolioItems.filter(item => {
    const cat = categoryMap[activeFilter];
    return cat === 'all' || item.category === cat;
  });

  return (
    <section className="section section-dark" id="portfolio" aria-label="Our portfolio" ref={sectionRef}>
      <div className="container">
        <div className="reveal" style={{ marginBottom: 40 }}>
          <span className="section-label">Our Portfolio</span>
          <h2 style={{ color: 'var(--white)' }}>
            Work We're <span className="text-gradient">Proud Of</span>
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.6)', marginTop: 16, fontSize: 17 }}>
            A glimpse into the creations that have delighted hundreds of clients.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="portfolio-filters reveal" role="tablist" aria-label="Portfolio filter">
          {filters.map(filter => (
            <button
              key={filter}
              className={`filter-btn${activeFilter === filter ? ' active' : ''}`}
              onClick={() => setActiveFilter(filter)}
              role="tab"
              aria-selected={activeFilter === filter}
              id={`filter-${filter.toLowerCase().replace(/\s/g, '-')}`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="portfolio-grid" role="list">
          {visibleItems.map((item) => (
            <div
              key={item.id}
              className={`portfolio-item reveal${item.wide ? ' wide' : ''}${item.tall ? ' tall' : ''}`}
              role="listitem"
              id={`portfolio-${item.id}`}
            >
              <img src={item.src} alt={item.alt} loading="lazy" />
              <div className="portfolio-overlay">
                <div>
                  <p style={{
                    fontFamily: 'var(--font-accent)',
                    fontWeight: 700,
                    color: 'var(--white)',
                    marginBottom: 12,
                    fontSize: 16,
                  }}>
                    {item.label}
                  </p>
                  <a
                    href={WA_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-gold"
                    style={{ padding: '10px 20px', fontSize: 13 }}
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
      </div>
    </section>
  );
}
