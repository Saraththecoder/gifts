import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { 
  MessageCircle, Palette, Printer, Package, 
  Award, Zap, ThumbsUp, Banknote, 
  Shirt, Coffee, Armchair, Gift, PanelTop, Briefcase, Clipboard, Sparkles, DoorOpen,
  Paperclip, CheckCircle
} from 'lucide-react';
import heroLifestyle from '../assets/hero_lifestyle.png';
import tshirtVariants from '../assets/tshirt_variants.png';
import designPreview from '../assets/design_preview.png';
import tshirtImg from '../assets/tshirt.png';
import mugImg from '../assets/mug.png';
import pillowImg from '../assets/pillow.png';
import giftImg from '../assets/gift.png';
import nameboardImg from '../assets/nameboard.png';
import visitingCardImg from '../assets/visiting_card.png';
import StatsCounter from '../components/StatsCounter/StatsCounter';
import WhyUs from '../components/WhyUs/WhyUs';

const WA_LINK = "https://wa.me/919999999999?text=Hi%20AR%20Prints!%20I'm%20interested%20in%20a%20custom%20order.%20Can%20you%20help%3F";
const WA_BASE = "https://wa.me/919999999999?text=Hi%20AR%20Prints!%20I'm%20interested%20in%20";

const WAIcon = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
  </svg>
);

/* ── Marquee Data ─────────────────────────────── */
const marqueeItems = [
  '🚚 Free Delivery on Bulk Orders',
  '⚡ Same Day Turnaround',
  '🎨 Free Design Consultation',
  '✅ 100% Quality Guarantee',
  '📦 Pan India Shipping',
  '💬 Instant WhatsApp Support',
];

/* ── How It Works steps ───────────────────────── */
const hiwSteps = [
  { num: '01', emoji: <MessageCircle size={28} />, title: 'Share Your Idea', desc: 'Message us on WhatsApp with your design, logo, or concept.' },
  { num: '02', emoji: <Palette size={28} />, title: 'We Design It', desc: 'Our team creates a digital proof — we iterate until you love it.' },
  { num: '03', emoji: <Printer size={28} />, title: 'We Print It', desc: 'Production begins using premium-grade printers and materials.' },
  { num: '04', emoji: <Package size={28} />, title: 'Delivered to You', desc: 'Fast, careful delivery right to your doorstep, same day available.' },
];

/* ── Guarantees ───────────────────────────────── */
const guarantees = [
  { icon: <Award size={28} />, title: 'Premium Quality', sub: 'Industry-grade printing' },
  { icon: <Zap size={28} />, title: 'Fast Delivery', sub: 'Same day for urgent orders' },
  { icon: <ThumbsUp size={28} />, title: '100% Satisfaction', sub: 'Reprint or full refund' },
  { icon: <Banknote size={28} />, title: 'Best Prices', sub: 'No hidden charges ever' },
];

/* ── Category Pills ───────────────────────────── */
const categories = [
  { emoji: <Shirt size={20} />, label: 'T-Shirts', to: '/services#tshirt' },
  { emoji: <Coffee size={20} />, label: 'Mugs', to: '/services#mugs' },
  { emoji: <Armchair size={20} />, label: 'Pillows', to: '/services#pillows' },
  { emoji: <Gift size={20} />, label: 'Gifts', to: '/services#gifts' },
  { emoji: <PanelTop size={20} />, label: 'Name Boards', to: '/services#nameboards' },
  { emoji: <Briefcase size={20} />, label: 'Visiting Cards', to: '/services#visiting-cards' },
  { emoji: <Clipboard size={20} />, label: 'Flute Boards', to: '/services#flute' },
  { emoji: <Sparkles size={20} />, label: 'Radium Boards', to: '/services#radium' },
  { emoji: <DoorOpen size={20} />, label: 'Fire Exit', to: '/services#fire-exit' },
];

/* ── Featured Products ───────────────────────── */
const featured = [
  { image: tshirtImg, name: 'T-Shirt Printing', tag: 'Most Popular', waText: 'T-Shirt%20Printing.%20Can%20you%20help%3F' },
  { image: mugImg, name: 'Mug Printing', tag: 'Best Seller', waText: 'Mug%20Printing.%20Can%20you%20help%3F' },
  { image: pillowImg, name: 'Pillow Printing', tag: 'Gift Ready', waText: 'Pillow%20Printing.%20Can%20you%20help%3F' },
  { image: giftImg, name: 'Custom Gift Sets', tag: 'New', waText: 'Custom%20Gift%20Sets.%20Can%20you%20help%3F' },
  { image: nameboardImg, name: 'Name Boards', tag: '', waText: 'Name%20Boards.%20Can%20you%20help%3F' },
  { image: visitingCardImg, name: 'Visiting Cards', tag: 'Fast', waText: 'Visiting%20Cards.%20Can%20you%20help%3F' },
];

/* ── T-shirt color options ────────────────────── */
const colors = ['#0B132B', '#fff', '#111111', '#C0392B', '#F5C518', '#2ECC71', '#3498DB', '#E91E63'];

export default function HomePage() {
  const [activeColor, setActiveColor] = useState(0);
  const refs = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    window.scrollTo(0, 0);
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }),
      { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
    );
    refs.current.forEach(r => r && observer.observe(r));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* ═══════════════════════════════════════════
          1. HERO — Full-bleed lifestyle banner
      ═══════════════════════════════════════════ */}
      <section className="hero-banner" aria-label="Hero section">
        <img src={heroLifestyle} alt="People wearing custom printed t-shirts" className="hero-banner-img" loading="eager" />
        <div className="hero-banner-overlay" aria-hidden="true" />
        <div className="container" style={{ width: '100%' }}>
          <div className="hero-banner-content">
            <div className="hero-badge" style={{ marginBottom: 24 }}>
              <span className="dot" aria-hidden="true" />
              India's Premium Custom Print Studio
            </div>

            <h1 className="hero-title" style={{ fontSize: 'clamp(40px, 6vw, 76px)', marginBottom: 20 }}>
              Your Design,<br />
              <span className="text-gradient">Printed Perfect.</span>
            </h1>

            <p style={{ fontSize: 18, color: 'rgba(255,255,255,0.72)', marginBottom: 36, maxWidth: 460, lineHeight: 1.7 }}>
              T-shirts, mugs, name boards, visiting cards & more — custom printed and delivered fast across India.
            </p>

            <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap', marginBottom: 44 }}>
              <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="btn btn-gold" id="hero-wa-cta" aria-label="Get instant quote on WhatsApp" style={{ fontSize: 16, padding: '16px 32px' }}>
                <WAIcon size={20} />
                Get Instant Quote
              </a>
              <Link to="/services" className="btn btn-ghost" id="hero-services-btn" style={{ fontSize: 16, padding: '16px 28px' }}>
                Browse Products →
              </Link>
            </div>

            {/* Mini trust bar */}
            <div style={{ display: 'flex', gap: 24, flexWrap: 'wrap' }}>
              {['500+ Clients', 'Same Day Delivery', '100% Satisfaction'].map(t => (
                <div key={t} style={{ display: 'flex', alignItems: 'center', gap: 6, fontFamily: 'var(--font-accent)', fontSize: 12, fontWeight: 600, color: 'rgba(255,255,255,0.65)', letterSpacing: '0.5px' }}>
                  <span style={{ color: 'var(--gold)' }}>✦</span> {t}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          2. MARQUEE — Scrolling benefits strip
      ═══════════════════════════════════════════ */}
      <div className="marquee-strip" aria-label="Benefits" role="marquee">
        <div className="marquee-track">
          {[...marqueeItems, ...marqueeItems].map((item, i) => (
            <div key={i} className="marquee-item">
              {item}
              <span className="sep" aria-hidden="true" />
            </div>
          ))}
        </div>
      </div>

      {/* ═══════════════════════════════════════════
          3. STATS COUNTER
      ═══════════════════════════════════════════ */}
      <div style={{ background: 'var(--bg)', paddingTop: 56 }}>
        <StatsCounter />
      </div>

      {/* ═══════════════════════════════════════════
          4. HOW IT WORKS — Horizontal 4-step strip
      ═══════════════════════════════════════════ */}
      <section className="section" id="how-it-works" style={{ paddingTop: 80 }}>
        <div className="container">
          <div className="reveal" ref={el => { refs.current[0] = el as HTMLElement; }} style={{ textAlign: 'center', marginBottom: 48 }}>
            <span className="section-label">Simple Process</span>
            <h2>Order in <span className="text-gradient">4 Easy Steps</span></h2>
            <p style={{ color: 'var(--text-secondary)', marginTop: 12, fontSize: 17 }}>No design skills needed. We handle everything.</p>
          </div>

          <div className="hiw-strip reveal" ref={el => { refs.current[1] = el as HTMLElement; }}>
            {hiwSteps.map(step => (
              <div key={step.num} className="hiw-step">
                <div className="hiw-step-num">{step.num}</div>
                <span className="hiw-step-emoji" aria-hidden="true" style={{ display: 'flex', justifyContent: 'center', color: 'var(--primary)' }}>{step.emoji}</span>
                <h4>{step.title}</h4>
                <p>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          5. CATEGORY PILLS + FEATURED PRODUCTS
      ═══════════════════════════════════════════ */}
      <section className="section" id="home-products" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="reveal" ref={el => { refs.current[2] = el as HTMLElement; }} style={{ marginBottom: 36 }}>
            <span className="section-label">Our Products</span>
            <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', flexWrap: 'wrap', gap: 16 }}>
              <h2>Everything You <span className="text-gradient">Need to Print</span></h2>
              <Link to="/services" className="btn btn-outline-gold" id="home-all-services-btn">All Services →</Link>
            </div>
          </div>

          {/* Category Pills */}
          <div className="category-pills reveal" ref={el => { refs.current[3] = el as HTMLElement; }}>
            {categories.map(cat => (
              <Link key={cat.label} to={cat.to} className="category-pill" id={`cat-pill-${cat.label.toLowerCase().replace(/\s/g,'-')}`}>
                <span style={{ display: 'flex', alignItems: 'center' }}>{cat.emoji}</span>
                {cat.label}
              </Link>
            ))}
          </div>

          {/* 6-card product grid */}
          <div className="services-grid">
            {featured.map((item, i) => (
              <div
                key={item.name}
                className="service-card reveal"
                ref={el => { refs.current[4 + i] = el as HTMLElement; }}
                style={{ transitionDelay: `${(i % 3) * 80}ms`, padding: 0, overflow: 'hidden', position: 'relative' }}
              >
                {item.tag && (
                  <div style={{ position: 'absolute', top: 10, left: 10, zIndex: 5, background: 'var(--gradient-gold)', color: 'var(--primary)', padding: '4px 12px', borderRadius: 100, fontFamily: 'var(--font-accent)', fontSize: 11, fontWeight: 700 }}>
                    {item.tag}
                  </div>
                )}
                <div style={{ width: '100%', height: 200, overflow: 'hidden', borderRadius: '22px 22px 0 0', background: 'linear-gradient(135deg,#0B132B,#1a2a5e)' }}>
                  <img src={item.image} alt={item.name} loading="lazy" className="service-card-img" style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s cubic-bezier(0.4,0,0.2,1)' }} />
                </div>
                <div style={{ padding: '20px 24px 24px' }}>
                  <h3 style={{ fontSize: 18 }}>{item.name}</h3>
                  <a href={`${WA_BASE}${item.waText}`} target="_blank" rel="noopener noreferrer" className="btn btn-gold" style={{ marginTop: 16, padding: '11px 20px', fontSize: 13 }} aria-label={`Order ${item.name} on WhatsApp`}>
                    <WAIcon size={14} /> Get Quote
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          6. PRODUCT SHOWCASE — T-shirt color picker
             (Bewakoof-style split layout)
      ═══════════════════════════════════════════ */}
      <section className="section section-dark" id="product-spotlight" style={{ overflow: 'hidden' }}>
        <div className="container">
          <div className="reveal" ref={el => { refs.current[11] = el as HTMLElement; }} style={{ marginBottom: 48 }}>
            <span className="section-label">Spotlight</span>
            <h2 style={{ color: 'var(--white)' }}>Custom T-Shirts, <span className="text-gradient">Your Way</span></h2>
          </div>

          <div className="product-showcase reveal" ref={el => { refs.current[12] = el as HTMLElement; }}>
            {/* Left: product image */}
            <div className="product-showcase-img">
              <img src={tshirtVariants} alt="Custom printed t-shirts in multiple colors" loading="lazy" />
              <div style={{ position: 'absolute', top: 20, left: 20, background: 'var(--gradient-gold)', color: 'var(--primary)', padding: '6px 16px', borderRadius: 100, fontFamily: 'var(--font-accent)', fontWeight: 700, fontSize: 12 }}>
                ⭐ Most Popular
              </div>
            </div>

            {/* Right: info panel */}
            <div className="product-showcase-info">
              <span className="section-label" style={{ marginBottom: 20 }}>T-Shirt Printing</span>
              <h2 style={{ color: 'var(--white)', fontSize: 'clamp(28px, 4vw, 44px)', marginBottom: 16 }}>
                Premium Prints on <span className="text-gradient">Any Color</span>
              </h2>
              <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: 16, lineHeight: 1.75, marginBottom: 28 }}>
                Upload your design or logo — we print it on premium-grade cotton t-shirts using DTF and screen printing. Available in all sizes and 15+ colors.
              </p>

              {/* Color Swatches */}
              <p style={{ fontFamily: 'var(--font-accent)', fontSize: 12, fontWeight: 600, color: 'rgba(255,255,255,0.5)', letterSpacing: '1px', textTransform: 'uppercase', marginBottom: 10 }}>
                Available Colors
              </p>
              <div className="color-swatches" style={{ marginBottom: 32 }}>
                {colors.map((c, i) => (
                  <button
                    key={i}
                    className={`color-swatch${activeColor === i ? ' active' : ''}`}
                    style={{ background: c, outline: 'none' }}
                    onClick={() => setActiveColor(i)}
                    aria-label={`Color option ${i + 1}`}
                    aria-pressed={activeColor === i}
                  />
                ))}
                <span style={{ fontFamily: 'var(--font-accent)', fontSize: 13, color: 'rgba(255,255,255,0.4)', alignSelf: 'center', marginLeft: 4 }}>+7 more</span>
              </div>

              {/* Feature checklist */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 36 }}>
                {['DTF & Screen Printing', 'Sizes XS–5XL available', 'Bulk discounts from 10 pieces', 'Same-day delivery possible'].map(f => (
                  <div key={f} style={{ display: 'flex', alignItems: 'center', gap: 10, color: 'rgba(255,255,255,0.8)', fontSize: 15 }}>
                    <span style={{ color: 'var(--gold)', fontWeight: 700, fontSize: 16 }}>✓</span> {f}
                  </div>
                ))}
              </div>

              <a href={`${WA_BASE}T-Shirt%20Printing.%20Can%20you%20help%3F`} target="_blank" rel="noopener noreferrer" className="btn btn-gold" id="tshirt-spotlight-cta" style={{ width: 'fit-content', fontSize: 16, padding: '16px 32px' }}>
                <WAIcon size={18} /> Order Custom T-Shirts
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          7. DESIGN PREVIEW SECTION
             (Bewakoof-style "your design here" feel)
      ═══════════════════════════════════════════ */}
      <section className="section" id="design-process" style={{ background: 'var(--bg)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 72, alignItems: 'center' }}>
            <div className="reveal" ref={el => { refs.current[13] = el as HTMLElement; }}>
              <span className="section-label">Design Studio</span>
              <h2 style={{ marginBottom: 20 }}>
                Your Design,<br />
                <span className="text-gradient">We Handle the Rest</span>
              </h2>
              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: 24, fontSize: 17 }}>
                Don't have a print-ready file? No problem. Share your idea — a sketch, a photo, a logo — on WhatsApp. Our design team will create a professional print-ready file for you, <strong>free of charge</strong>.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 14, marginBottom: 36 }}>
                {[
                  [<Paperclip size={24} />, 'Share any format', 'JPG, PNG, PDF, AI, PSD — we accept all'],
                  [<Palette size={24} />, 'Free design service', 'Our team creates a pro proof for you'],
                  [<CheckCircle size={24} />, 'You approve first', 'We print only after your confirmation'],
                ].map(([icon, title, sub], index) => (
                  <div key={index} style={{ display: 'flex', gap: 14, alignItems: 'flex-start' }}>
                    <div style={{ width: 42, height: 42, borderRadius: 12, background: 'rgba(245,197,24,0.1)', border: '1px solid rgba(245,197,24,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--gold)', flexShrink: 0 }}>
                      {icon}
                    </div>
                    <div>
                      <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 15, color: 'var(--text-primary)' }}>{title}</div>
                      <div style={{ fontSize: 14, color: 'var(--text-secondary)' }}>{sub}</div>
                    </div>
                  </div>
                ))}
              </div>
              <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="btn btn-gold" id="design-process-cta">
                <WAIcon size={18} /> Discuss Your Design
              </a>
            </div>

            <div className="reveal" ref={el => { refs.current[14] = el as HTMLElement; }} style={{ transitionDelay: '0.15s', borderRadius: 24, overflow: 'hidden', boxShadow: 'var(--shadow-hover)' }}>
              <img src={designPreview} alt="Custom design preview on screen and printed product" style={{ width: '100%', display: 'block' }} loading="lazy" />
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          8. GUARANTEE STRIP
      ═══════════════════════════════════════════ */}
      <div style={{ background: 'var(--bg)', paddingBottom: 60 }}>
        <div className="container">
          <div className="guarantee-strip reveal" ref={el => { refs.current[15] = el as HTMLElement; }}>
            {guarantees.map(g => (
              <div key={g.title} className="guarantee-item">
                <div className="guarantee-icon" aria-hidden="true" style={{ display: 'flex', color: 'var(--primary)' }}>{g.icon}</div>
                <div className="guarantee-text">
                  <strong>{g.title}</strong>
                  <span>{g.sub}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ═══════════════════════════════════════════
          9. WHY US
      ═══════════════════════════════════════════ */}
      <WhyUs />

      {/* ═══════════════════════════════════════════
          10. FINAL CTA
      ═══════════════════════════════════════════ */}
      <section style={{ background: 'var(--bg)', padding: '80px 0' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <div className="reveal" ref={el => { refs.current[16] = el as HTMLElement; }}>
            <span className="section-label" style={{ justifyContent: 'center' }}>Ready to Print?</span>
            <h2 style={{ marginBottom: 16 }}>
              Start Your Custom Order <span className="text-gradient">Today</span>
            </h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: 17, maxWidth: 440, margin: '0 auto 36px' }}>
              Message us on WhatsApp — get an instant quote in under 2 minutes.
            </p>
            <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="btn btn-gold" id="home-final-cta" style={{ fontSize: 17, padding: '18px 44px' }}>
              <WAIcon size={22} /> Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
