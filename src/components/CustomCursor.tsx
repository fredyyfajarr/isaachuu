'use client';

import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

const interactiveSelector = 'a, button, [data-cursor="active"]';

const CustomCursor = () => {
  const [enabled, setEnabled] = useState(false);
  const [active, setActive] = useState(false);
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const ringX = useSpring(cursorX, { stiffness: 420, damping: 34, mass: 0.7 });
  const ringY = useSpring(cursorY, { stiffness: 420, damping: 34, mass: 0.7 });

  useEffect(() => {
    const finePointer = window.matchMedia('(pointer: fine)').matches;

    if (!finePointer) {
      return;
    }

    setEnabled(true);

    const handleMove = (event: PointerEvent) => {
      cursorX.set(event.clientX);
      cursorY.set(event.clientY);
      setActive(Boolean((event.target as Element | null)?.closest(interactiveSelector)));
    };

    const handleLeave = () => {
      cursorX.set(-100);
      cursorY.set(-100);
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
    <>
      <motion.div className="cursor-dot" style={{ x: cursorX, y: cursorY }} />
      <motion.div
        className={`cursor-ring${active ? ' is-active' : ''}`}
        style={{ x: ringX, y: ringY }}
      />
    </>
  );
};

export default CustomCursor;
