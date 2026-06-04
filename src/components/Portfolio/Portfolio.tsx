import { useState, useEffect, useRef } from 'react';

import CloudinaryImg from '../UI/CloudinaryImg';

const WA_LINK = "https://wa.me/919949256844?text=Hi%20AR%20Prints!%20I'm%20interested%20in%20ordering%20something%20similar.%20Can%20you%20help%3F";

type PortfolioItem = {
  id: string;
  alt: string;
  label: string;
  category: string;
  src?: string;
  cloudinaryId?: string;
  wide?: boolean;
  tall?: boolean;
};

const portfolioItems: PortfolioItem[] = [
  { id: 'p1', cloudinaryId: 'tshirt_my65rk', alt: 'Custom printed t-shirts', label: 'T-Shirts', category: 'tshirts', wide: true },
  { id: 'p2', cloudinaryId: 'mug_uc74ct', alt: 'Custom printed mugs', label: 'Mugs', category: 'mugs' },
  { id: 'p3', cloudinaryId: 'pillow_sj9rxq', alt: 'Custom printed pillows', label: 'Pillows', category: 'pillows', tall: true },
  { id: 'p4', cloudinaryId: 'gift_uqvsof', alt: 'Personalized gift sets', label: 'Gifts', category: 'gifts' },
  { id: 'p5', cloudinaryId: 'nameboard_dnjdjo', alt: 'Custom name board signage', label: 'Boards', category: 'boards', wide: true },
  { id: 'p6', cloudinaryId: 'visiting_card_rlrpdr', alt: 'Premium visiting cards', label: 'Cards', category: 'cards' },
  { id: 'c1', cloudinaryId: '4711f6b9-6c13-494f-b1c9-2315513ad02a_qsr76y', alt: 'Portfolio Item', label: 'Custom', category: 'gifts' },
  { id: 'c2', cloudinaryId: '267050a4-d117-44a4-8191-a3dfc34b10f9_gt2sxi', alt: 'Portfolio Item', label: 'Custom', category: 'gifts' },
  { id: 'c3', cloudinaryId: '233b9736-4cc1-4f8b-ba86-4268b5d1cea2_egitvo', alt: 'Portfolio Item', label: 'Custom', category: 'gifts' },
  { id: 'c4', cloudinaryId: '0688f11e-bd8f-4bd7-a373-6681d4e59811_smvf5h', alt: 'Portfolio Item', label: 'Custom', category: 'gifts' },
  { id: 'c5', cloudinaryId: 'b6942b7d-14b0-486d-8b9d-de1261e8bfe2_o9xb22', alt: 'Portfolio Item', label: 'Custom', category: 'gifts' },
  { id: 'c6', cloudinaryId: 'e8fb13cb-d34d-497d-9c96-5f761a49fc69_fzystq', alt: 'Portfolio Item', label: 'Custom', category: 'gifts' },
  { id: 'c7', cloudinaryId: 'b4c3fe3c-3621-4912-b650-3d6894958c8b_wfbxho', alt: 'Portfolio Item', label: 'Custom', category: 'gifts' },
  { id: 'c8', cloudinaryId: 'fa4e87a4-4ac9-4d40-b454-365a7b5a93e5_zvagbo', alt: 'Portfolio Item', label: 'Custom', category: 'gifts' },
  { id: 'c9', cloudinaryId: 'bfe08790-0c9b-402e-a8d9-bff025894ef4_plbeq8', alt: 'Portfolio Item', label: 'Custom', category: 'gifts' },
  { id: 'c10', cloudinaryId: 'b18a15ac-7f23-4b08-9d7c-2a9fc5034988_jtwozt', alt: 'Portfolio Item', label: 'Custom', category: 'gifts' },
  { id: 'c11', cloudinaryId: 'c718095c-e133-4cce-b38d-38b9065dce72_hyfz05', alt: 'Portfolio Item', label: 'Custom', category: 'gifts' },
  { id: 'c12', cloudinaryId: 'f996a32e-0504-4ca1-b646-286706109909_dtbgus', alt: 'Portfolio Item', label: 'Custom', category: 'gifts' },
];

const filters = ['All', 'T-Shirts', 'Mugs', 'Boards', 'Cards', 'Gifts'];
const categoryMap: Record<string, string> = {
  'All': 'all',
  'T-Shirts': 'tshirts',
  'Mugs': 'mugs',
  'Boards': 'boards',
  'Cards': 'cards',
  'Gifts': 'gifts',
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
              {item.cloudinaryId ? (
                <CloudinaryImg publicId={item.cloudinaryId} alt={item.alt} />
              ) : (
                <img src={item.src} alt={item.alt} loading="lazy" />
              )}
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
