import { useEffect, useRef } from 'react';

const WA_LINK = "https://wa.me/919999999999?text=Hi%20AR%20Prints!%20I'm%20ready%20to%20print%20something%20amazing.%20Can%20you%20help%3F";

const WAIcon = ({ size = 24 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
  </svg>
);

export default function WhatsAppCTA() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.reveal').forEach((el) => el.classList.add('visible'));
          }
        });
      },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="wa-cta-section" id="contact" aria-label="WhatsApp contact section" ref={ref}>
      <div className="orb orb-1" aria-hidden="true" />
      <div className="orb orb-2" aria-hidden="true" />

      <div className="container wa-cta-content">
        <div className="reveal" style={{ transitionDelay: '0s' }}>
          <span className="section-label" style={{ justifyContent: 'center', marginBottom: 24 }}>
            Get Started Today
          </span>
          <h2 style={{ color: 'var(--white)', marginBottom: 18 }}>
            Ready to Print Something <span className="text-gradient">Amazing?</span>
          </h2>
          <p>
            Drop us a message on WhatsApp and we'll get back to you instantly. No forms, no waiting — just fast, friendly service.
          </p>
        </div>

        <div className="reveal" style={{ transitionDelay: '0.15s', display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap', marginBottom: 48 }}>
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-wa"
            id="wa-cta-main"
            aria-label="Chat on WhatsApp to start your order"
            style={{ fontSize: 17, padding: '18px 40px' }}
          >
            <WAIcon size={22} />
            Chat on WhatsApp
          </a>
        </div>

        {/* Features Row */}
        <div className="reveal" style={{ transitionDelay: '0.25s', display: 'flex', justifyContent: 'center', gap: 40, flexWrap: 'wrap' }}>
          {['⚡ Instant Response', '🎨 Free Design Consultation', '📦 Fast Delivery', '💯 Quality Guarantee'].map(feat => (
            <div
              key={feat}
              style={{
                fontFamily: 'var(--font-accent)',
                fontSize: 14,
                fontWeight: 600,
                color: 'rgba(255,255,255,0.7)',
                display: 'flex',
                alignItems: 'center',
                gap: 8,
              }}
            >
              {feat}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
