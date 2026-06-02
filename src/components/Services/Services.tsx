import { useEffect, useRef } from 'react';
import tshirtImg from '../../assets/tshirt.png';
import mugImg from '../../assets/mug.png';
import pillowImg from '../../assets/pillow.png';
import giftImg from '../../assets/gift.png';
import nameboardImg from '../../assets/nameboard.png';
import visitingCardImg from '../../assets/visiting_card.png';
import radiumImg from '../../assets/radium_board.png';
import fluteImg from '../../assets/flute_board.png';
import fireExitImg from '../../assets/fire_exit_board.png';

const WA_BASE = "https://wa.me/919999999999?text=Hi%20AR%20Prints!%20I'm%20interested%20in%20";

const services = [
  {
    icon: '👕',
    image: tshirtImg,
    name: 'T-Shirt Printing',
    description: 'High-resolution custom prints on premium cotton blends. Perfect for teams, events, and personal style.',
    waText: 'T-Shirt%20Printing.%20Can%20you%20help%3F',
    id: 'tshirt',
  },
  {
    icon: '☕',
    image: mugImg,
    name: 'Mug Printing',
    description: 'Dishwasher-safe sublimation printing on ceramic mugs. Ideal for gifts, corporate giveaways, and memories.',
    waText: 'Mug%20Printing.%20Can%20you%20help%3F',
    id: 'mugs',
  },
  {
    icon: '🛋️',
    image: pillowImg,
    name: 'Pillow Printing',
    description: 'Soft-touch fabric printing on plush cushions. Transform photos and designs into cozy keepsakes.',
    waText: 'Pillow%20Printing.%20Can%20you%20help%3F',
    id: 'pillows',
  },
  {
    icon: '🎁',
    image: giftImg,
    name: 'Customized Gifts',
    description: 'Curated personalized gift sets for every occasion — birthdays, anniversaries, festivals and corporates.',
    waText: 'Customized%20Gifts.%20Can%20you%20help%3F',
    id: 'gifts',
  },
  {
    icon: '🪧',
    image: nameboardImg,
    name: 'Name Boards',
    description: 'Premium acrylic and metal name boards for offices, homes, and commercial spaces. Sharp and durable.',
    waText: 'Name%20Boards.%20Can%20you%20help%3F',
    id: 'nameboards',
  },
  {
    icon: '🌟',
    image: radiumImg,
    name: 'Radium Boards',
    description: 'Glow-in-the-dark radium signage for visibility in low-light conditions. Safety meets style.',
    waText: 'Radium%20Boards.%20Can%20you%20help%3F',
    id: 'radium',
  },
  {
    icon: '📋',
    image: fluteImg,
    name: 'Flute Boards',
    description: 'Lightweight, weather-resistant flute boards perfect for promotional displays and outdoor signage.',
    waText: 'Flute%20Boards.%20Can%20you%20help%3F',
    id: 'flute',
  },
  {
    icon: '🚪',
    image: fireExitImg,
    name: 'Fire Exit Boards',
    description: 'Compliant fire safety signage with high-visibility printing. Essential for all commercial premises.',
    waText: 'Fire%20Exit%20Boards.%20Can%20you%20help%3F',
    id: 'fire-exit',
  },
  {
    icon: '💼',
    image: visitingCardImg,
    name: 'Visiting Cards',
    description: 'Premium business cards with matte, glossy, or spot-UV finish. Leave a lasting first impression.',
    waText: 'Visiting%20Cards.%20Can%20you%20help%3F',
    id: 'visiting-cards',
  },
];

export default function Services() {
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );

    cardRefs.current.forEach(ref => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className="section" id="services" aria-label="Our services">
      <div className="container">
        <div className="reveal" ref={el => { cardRefs.current[0] = el; }}>
          <span className="section-label">What We Create</span>
          <h2 style={{ maxWidth: 560 }}>
            Crafted for Every <span className="text-gradient">Occasion</span>
          </h2>
          <p style={{ color: 'var(--text-secondary)', marginTop: 16, maxWidth: 540, fontSize: 17 }}>
            From personal keepsakes to large corporate orders — we print, brand, and deliver excellence.
          </p>
        </div>

        <div className="services-grid">
          {services.map((service, i) => (
            <div
              key={service.id}
              className="service-card reveal"
              ref={el => { cardRefs.current[i + 1] = el; }}
              style={{ transitionDelay: `${(i % 3) * 100}ms`, padding: 0, overflow: 'hidden' }}
            >
              {/* Product Image or Emoji Fallback */}
              {service.image ? (
                <div style={{
                  width: '100%',
                  height: 180,
                  overflow: 'hidden',
                  borderRadius: '22px 22px 0 0',
                  background: 'linear-gradient(135deg, #0B132B 0%, #1a2a5e 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                  <img
                    src={service.image}
                    alt={service.name}
                    loading="lazy"
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      transition: 'transform 0.5s cubic-bezier(0.4,0,0.2,1)',
                    }}
                    className="service-card-img"
                  />
                </div>
              ) : (
                <div style={{
                  width: '100%',
                  height: 140,
                  borderRadius: '22px 22px 0 0',
                  background: 'linear-gradient(135deg, #0B132B 0%, #1a2a5e 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: 56,
                }}>
                  <span role="img" aria-label={service.name}>{service.icon}</span>
                </div>
              )}

              {/* Card Body */}
              <div style={{ padding: '24px 28px 28px' }}>
                <h3>{service.name}</h3>
                <p style={{ marginTop: 8 }}>{service.description}</p>
                <a
                  href={`${WA_BASE}${service.waText}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="service-link"
                  id={`service-cta-${service.id}`}
                  aria-label={`Get quote for ${service.name} on WhatsApp`}
                  style={{ marginTop: 16, display: 'inline-flex' }}
                >
                  Get Quote →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
