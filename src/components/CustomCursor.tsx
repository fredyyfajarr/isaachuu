'use client';

import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

const interactiveSelector = 'a, button, [data-cursor="active"]';
const nativeCursorSelector = '[data-native-cursor]';

const CustomCursor = () => {
  const [enabled, setEnabled] = useState(false);
  const [active, setActive] = useState(false);
  const [hidden, setHidden] = useState(false);
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
      const useNativeCursor = Boolean(target?.closest(nativeCursorSelector));

      cursorX.set(event.clientX);
      cursorY.set(event.clientY);
      setHidden(useNativeCursor);
      setActive(!useNativeCursor && Boolean(target?.closest(interactiveSelector)));
    };

    const handleLeave = () => {
      cursorX.set(-100);
      cursorY.set(-100);
      setActive(false);
      setHidden(false);
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
      className={`cursor-ring${active ? ' is-active' : ''}${
        hidden ? ' is-hidden' : ''
      }`}
      style={{ x: cursorSpringX, y: cursorSpringY }}
    >
      <span className="cursor-core" />
    </motion.div>
  );
};

export default CustomCursor;
