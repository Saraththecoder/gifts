import { useEffect, useRef, useState } from 'react';

interface StatItem {
  target: number;
  suffix: string;
  label: string;
}

const stats: StatItem[] = [
  { target: 500, suffix: '+', label: 'Happy Clients' },
  { target: 5000, suffix: '+', label: 'Orders Fulfilled' },
  { target: 100, suffix: '%', label: 'Satisfaction Rate' },
  { target: 48, suffix: 'hr', label: 'Max Turnaround' },
];

function useCountUp(target: number, duration: number, triggered: boolean) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!triggered) return;
    let start = 0;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [target, duration, triggered]);

  return count;
}

function StatCounter({ stat, triggered }: { stat: StatItem; triggered: boolean }) {
  const count = useCountUp(stat.target, 1800, triggered);
  return (
    <div className="stat-item">
      <div className="stat-number">
        {count.toLocaleString()}{stat.suffix}
      </div>
      <div className="stat-label">{stat.label}</div>
    </div>
  );
}

export default function StatsCounter() {
  const [triggered, setTriggered] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setTriggered(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="container" ref={ref}>
      <div className="stats-bar" aria-label="Our achievements">
        {stats.map((stat) => (
          <StatCounter key={stat.label} stat={stat} triggered={triggered} />
        ))}
      </div>
    </div>
  );
}
