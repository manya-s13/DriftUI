import { useEffect, useRef, useState } from 'react';
import { useInView } from 'framer-motion';

export function PriceCounter({ value, duration = 1 }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref);

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const increment = value / (duration * 60);
      const timer = setInterval(() => {
        start += increment;
        if (start >= value) {
          setCount(value);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16.67);

      return () => clearInterval(timer);
    }
  }, [value, duration, isInView]);

  return <span ref={ref}>{count}</span>;
}