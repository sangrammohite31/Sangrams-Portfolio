import React from 'react';
import { ParallaxProvider, ParallaxBanner, Parallax } from 'react-scroll-parallax';

const ParallaxComponent = () => {
  return (
    <ParallaxProvider>
      <div style={{ height: '100vh' }}>
        <ParallaxBanner
          layers={[
            {
              image: 'https://via.placeholder.com/1200x800', // Replace with your image URL
              amount: 0.5,
            },
          ]}
          style={{ height: '500px' }}
        >
          <div style={{ height: '500px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <h1 style={{ color: 'white', fontSize: '3em' }}>Parallax Effect</h1>
          </div>
        </ParallaxBanner>
      </div>

      <div style={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <h2>Scroll down to see the parallax effect</h2>
      </div>

      <div style={{ height: '100vh' }}>
        <Parallax y={[-20, 20]}>
          <div style={{ height: '500px', background: 'lightblue', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <h1>Content with Parallax Scrolling</h1>
          </div>
        </Parallax>
      </div>
    </ParallaxProvider>
  );
};

export default ParallaxComponent;
