// src/Components/ParticlesBackground.js

import React from 'react';
import Particles from 'react-tsparticles';

function ParticlesBackground() {
  return (
    <Particles
      id="tsparticles"
      options={{
        background: {
          color: {
            value: "#001f3f", // Dark blue background
          },
        },
        particles: {
          color: {
            value: "#7f00ff", // Purple particles
          },
          links: {
            color: "#7f00ff", // Purple links
            distance: 150,
            enable: true,
            opacity: 0.3, // Decreased opacity for links
            width: 1,
          },
          move: {
            enable: true,
            speed: 1,
          },
          number: {
            value: 50,
          },
          opacity: {
            value: 0.3, // Decreased opacity for particles
          },
          size: {
            value: 3,
          },
        },
        interactivity: {
          events: {
            onClick: {
              enable: true,
              mode: "repulse",
            },
            onHover: {
              enable: true,
              mode: "bubble",
            },
            resize: true,
          },
          modes: {
            bubble: {
              distance: 400,
              duration: 2,
              opacity: 0.3, // Decreased opacity for bubble effect
              size: 40,
            },
            repulse: {
              distance: 200,
              duration: 0.4,
            },
          },
        },
      }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: -1, // Ensures the background is behind other elements
        backgroundColor: 'rgba(0, 31, 63, 0.5)', // Dark blue background with opacity
      }}
    />
  );
}

export default ParticlesBackground;
