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
    
    let startTime: number | null = null;
    let animationFrame: number;

    const easeOutExpo = (t: number): number => {
      return t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
    };

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      
      const easedProgress = easeOutExpo(progress);
      setCount(Math.floor(easedProgress * target));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(step);
      } else {
        setCount(target);
      }
    };

    animationFrame = requestAnimationFrame(step);

    return () => cancelAnimationFrame(animationFrame);
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
      { threshold: 0.1 }
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
