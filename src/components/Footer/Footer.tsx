import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin } from 'lucide-react';

const WA_LINK = "https://wa.me/919999999999?text=Hi%20AR%20Prints!%20I'm%20interested%20in%20a%20custom%20order.%20Can%20you%20help%3F";

const quickLinks = [
  { label: 'Home',       to: '/' },
  { label: 'Services',   to: '/services' },
  { label: 'Portfolio',  to: '/portfolio' },
  { label: 'About Us',   to: '/about' },
  { label: 'Contact',    to: '/contact' },
];

const services = [
  { label: 'T-Shirt Printing',  to: '/services#tshirt' },
  { label: 'Mug Printing',      to: '/services#mugs' },
  { label: 'Pillow Printing',   to: '/services#pillows' },
  { label: 'Name Boards',       to: '/services#nameboards' },
  { label: 'Visiting Cards',    to: '/services#visiting-cards' },
  { label: 'Corporate Gifts',   to: '/services#gifts' },
];

export default function Footer() {
  return (
    <footer className="footer" id="footer" aria-label="Site footer">
      <div className="container">
        <div className="footer-grid">
          {/* Logo col */}
          <div className="footer-logo-col">
            <Link to="/" className="logo" aria-label="AR Prints - Home">
              <div className="logo-icon">AR</div>
              <div className="logo-text">
                <strong>AR Prints</strong>
                <span>Customized Gifts</span>
              </div>
            </Link>
            <p className="footer-tagline">
              Transforming Ideas into Personalized Creations. Premium custom printing for individuals, events, and businesses across India.
            </p>
            <div className="footer-social" aria-label="Social media links">
              {/* WhatsApp */}
              <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="social-link" aria-label="WhatsApp" title="WhatsApp">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
              </a>
              {/* Instagram */}
              <a href="#" className="social-link" aria-label="Instagram" title="Instagram">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <circle cx="12" cy="12" r="4"/>
                  <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor"/>
                </svg>
              </a>
              {/* Facebook */}
              <a href="#" className="social-link" aria-label="Facebook" title="Facebook">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-col">
            <h4>Quick Links</h4>
            <nav className="footer-links" aria-label="Footer navigation">
              {quickLinks.map(link => (
                <Link key={link.to} to={link.to}>
                  <span aria-hidden="true">›</span> {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact + Services */}
          <div className="footer-col">
            <h4>Contact Us</h4>
            <address style={{ fontStyle: 'normal' }}>
              <div className="contact-item">
                <div className="contact-icon" aria-hidden="true" style={{ display: 'flex', color: 'var(--gold)' }}><Phone size={20} /></div>
                <div className="contact-text">
                  <a href={WA_LINK} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp us">
                    +91 99999 99999
                  </a>
                  <br />
                  <span style={{ fontSize: 12 }}>WhatsApp Available</span>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-icon" aria-hidden="true" style={{ display: 'flex', color: 'var(--gold)' }}><Mail size={20} /></div>
                <div className="contact-text">
                  <a href="mailto:hello@arprints.in" aria-label="Email us">
                    hello@arprints.in
                  </a>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-icon" aria-hidden="true" style={{ display: 'flex', color: 'var(--gold)' }}><MapPin size={20} /></div>
                <div className="contact-text">Your City, India</div>
              </div>
            </address>

            <h4 style={{ marginTop: 28 }}>Our Services</h4>
            <div className="footer-links">
              {services.map(s => (
                <Link key={s.label} to={s.to}>
                  <span aria-hidden="true">›</span> {s.label}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} <strong>AR Prints & Customized Gifts</strong>. All rights reserved.</p>
          <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.25)' }}>
            Crafted with ❤️ for quality printing
          </p>
        </div>
      </div>
    </footer>
  );
}
