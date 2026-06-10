'use client';

import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

const interactiveSelector = 'a, button, [data-cursor="active"]';

const CustomCursor = () => {
  const [enabled, setEnabled] = useState(false);
  const [active, setActive] = useState(false);
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const cursorSpringX = useSpring(cursorX, {
    stiffness: 820,
    damping: 42,
    mass: 0.35,
  });
  const cursorSpringY = useSpring(cursorY, {
    stiffness: 820,
    damping: 42,
    mass: 0.35,
  });

  useEffect(() => {
    const finePointer = window.matchMedia('(pointer: fine)').matches;

    if (!finePointer) {
      return;
    }

    setEnabled(true);

    const handleMove = (event: PointerEvent) => {
      const target = event.target as Element | null;

      cursorX.set(event.clientX);
      cursorY.set(event.clientY);
      setActive(Boolean(target?.closest(interactiveSelector)));
    };

    const handleLeave = () => {
      setActive(false);
    };

    window.addEventListener('pointermove', handleMove);
    document.documentElement.addEventListener('pointerleave', handleLeave);

    return () => {
      window.removeEventListener('pointermove', handleMove);
      document.documentElement.removeEventListener('pointerleave', handleLeave);
    };
  }, [cursorX, cursorY]);

  if (!enabled) {
    return null;
  }

  return (
    <motion.div
      className={`cursor-ring${active ? ' is-active' : ''}`}
      style={{ x: cursorSpringX, y: cursorSpringY }}
    >
      <span className="cursor-core" />
    </motion.div>
  );
};

export default CustomCursor;
