import { useEffect, useRef } from 'react';

const testimonials = [
  {
    id: 't1',
    name: 'Priya Sharma',
    role: 'HR Manager, TechCorp India',
    initials: 'PS',
    rating: 5,
    text: 'Ordered 200 custom t-shirts for our company event. The quality was outstanding and delivery was on time. AR Prints is now our go-to for all corporate printing needs!',
  },
  {
    id: 't2',
    name: 'Rahul Mehta',
    role: 'Small Business Owner',
    initials: 'RM',
    rating: 5,
    text: 'Got visiting cards and a name board made for my new clinic. The design team understood my brief perfectly. Professional quality at very reasonable prices. Highly recommend!',
  },
  {
    id: 't3',
    name: 'Ananya Krishnan',
    role: 'Freelance Designer',
    initials: 'AK',
    rating: 5,
    text: 'I\'ve ordered custom mugs and pillows as gifts multiple times. Every single order has been perfect — colors are vibrant, packaging is beautiful, and delivery is super fast.',
  },
  {
    id: 't4',
    name: 'Vikram Nair',
    role: 'Event Organizer',
    initials: 'VN',
    rating: 5,
    text: 'Placed a bulk order for radium boards and fire exit signs. AR Prints handled the entire project professionally. Quick turnaround, great quality, and fantastic customer service.',
  },
  {
    id: 't5',
    name: 'Deepa Patel',
    role: 'School Principal',
    initials: 'DP',
    rating: 5,
    text: 'We got customized gifts made for our annual day celebration. Parents loved them! The personalization quality was exceptional. Will definitely order again next year.',
  },
  {
    id: 't6',
    name: 'Arjun Reddy',
    role: 'Startup Founder',
    initials: 'AR',
    rating: 5,
    text: 'Brand new office needed everything — name boards, visiting cards, and promotional t-shirts. AR Prints delivered flawlessly within 2 days. Exceeded all expectations!',
  },
];

const WA_LINK = "https://wa.me/919949256844?text=Hi%20AR%20Prints!%20I'm%20ready%20to%20place%20a%20custom%20order.%20Can%20you%20help%3F";

export default function Testimonials() {
  const refs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) entry.target.classList.add('visible');
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );
    refs.current.forEach(ref => ref && observer.observe(ref));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="section section-dark" id="testimonials" aria-label="Customer testimonials">
      <div className="container">
        <div
          className="reveal"
          ref={el => { refs.current[0] = el; }}
          style={{ textAlign: 'center' }}
        >
          <span className="section-label">Testimonials</span>
          <h2 style={{ color: 'var(--white)' }}>What Our <span className="text-gradient">Clients Say</span></h2>
          <p style={{ color: 'rgba(255,255,255,0.6)', marginTop: 16, maxWidth: 480, margin: '16px auto 0', fontSize: 17 }}>
            Don't take our word for it — here's what 500+ happy customers have to say.
          </p>
        </div>

        <div className="testimonials-grid" style={{ marginTop: 60 }}>
          {testimonials.map((t, i) => (
            <div
              key={t.id}
              className="testimonial-card reveal"
              ref={el => { refs.current[i + 1] = el; }}
              style={{ transitionDelay: `${(i % 3) * 100}ms` }}
              id={`testimonial-${t.id}`}
            >
              <div className="stars" aria-label={`${t.rating} stars`}>
                {Array.from({ length: t.rating }).map((_, idx) => (
                  <span key={idx} className="star" aria-hidden="true">★</span>
                ))}
              </div>
              <p className="testimonial-text">"{t.text}"</p>
              <div className="testimonial-author">
                <div className="author-avatar" aria-hidden="true">{t.initials}</div>
                <div>
                  <div className="author-name">{t.name}</div>
                  <div className="author-role">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Below */}
        <div
          className="reveal"
          ref={el => { refs.current[testimonials.length + 1] = el; }}
          style={{ textAlign: 'center', marginTop: 60 }}
        >
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-gold"
            id="testimonials-cta"
            aria-label="Start your custom order on WhatsApp"
            style={{ fontSize: 16, padding: '18px 40px' }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
            </svg>
            Start Your Order Today →
          </a>
        </div>
      </div>
    </section>
  );
}
