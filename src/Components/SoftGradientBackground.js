import React from 'react';
import { useSpring, animated } from '@react-spring/web';

function SoftGradientBackground() {
  const props = useSpring({
    from: { backgroundPosition: '0% 0%' },
    to: { backgroundPosition: '100% 100%' },
    config: { duration: 20000 },
    reset: true,
    loop: true
  });

  return (
    <animated.div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: 'linear-gradient(120deg, rgba(200, 200, 200, 0.1) 0%, rgba(0, 0, 0, 0.1) 100%)',
        backgroundSize: '400% 400%',
        ...props,
        zIndex: -1,
        pointerEvents: 'none'
      }}
    />
  );
}

export default SoftGradientBackground;
