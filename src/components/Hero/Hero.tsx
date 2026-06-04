import { useEffect, useRef } from 'react';
import CloudinaryImg from '../UI/CloudinaryImg';

const WA_LINK = "https://wa.me/919949256844?text=Hi%20AR%20Prints!%20I'm%20interested%20in%20a%20custom%20order.%20Can%20you%20help%3F";

const WAIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
  </svg>
);

export default function Hero() {
  const ctaBtnRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const btn = ctaBtnRef.current;
    if (!btn) return;
    const handleMouseMove = (e: MouseEvent) => {
      const rect = btn.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      btn.style.transform = `translate(${x * 0.15}px, ${y * 0.15}px) translateY(-2px)`;
    };
    const handleMouseLeave = () => {
      btn.style.transform = '';
    };
    btn.addEventListener('mousemove', handleMouseMove);
    btn.addEventListener('mouseleave', handleMouseLeave);
    return () => {
      btn.removeEventListener('mousemove', handleMouseMove);
      btn.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <section className="hero noise-overlay" id="home" aria-label="Hero section">
      {/* Background orbs */}
      <div className="hero-bg-orb hero-bg-orb-1" aria-hidden="true" />
      <div className="hero-bg-orb hero-bg-orb-2" aria-hidden="true" />

      <div className="container" style={{ width: '100%' }}>
        <div className="hero-grid">
          {/* Content */}
          <div className="hero-content">
            <div className="hero-badge" aria-label="Premium Custom Printing">
              <span className="dot" aria-hidden="true" />
              Premium Custom Printing Studio
            </div>

            <h1 className="hero-title">
              Your Vision,{' '}
              <span className="text-gradient">Perfectly</span>{' '}
              Printed
            </h1>

            <p className="hero-sub">
              Transforming Ideas into Personalized Creations — from T-shirts and mugs to name boards and corporate gifts, crafted with precision.
            </p>

            <div className="hero-ctas">
              <a
                ref={ctaBtnRef}
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-gold"
                id="hero-whatsapp-cta"
                aria-label="Get instant quote on WhatsApp"
              >
                <WAIcon />
                Get Instant Quote
              </a>
              <a
                href="#portfolio"
                className="btn btn-ghost"
                id="hero-portfolio-cta"
                aria-label="View our work"
              >
                View Our Work
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                  <path d="M7 17L17 7M17 7H7M17 7v10"/>
                </svg>
              </a>
            </div>

            {/* Trust Bar */}
            <div className="trust-bar" role="list" aria-label="Trust indicators">
              {[
                '500+ Happy Clients',
                'Same Day Delivery',
                'Premium Quality',
                'Custom Designs',
              ].map(item => (
                <div key={item} className="trust-item" role="listitem">
                  <span className="trust-star" aria-hidden="true">✦</span>
                  {item}
                </div>
              ))}
            </div>
          </div>

          {/* Floating Mockups */}
          <div className="hero-mockups" aria-hidden="true">
            <div className="mockup-glow" />
            <div className="mockup-card mockup-tshirt">
              <CloudinaryImg publicId="tshirt_my65rk" alt="Custom printed t-shirt mockup" />
            </div>
            <div className="mockup-card mockup-mug">
              <CloudinaryImg publicId="mug_uc74ct" alt="Custom printed mug mockup" />
            </div>
            <div className="mockup-card mockup-pillow">
              <CloudinaryImg publicId="pillow_sj9rxq" alt="Custom printed pillow mockup" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
