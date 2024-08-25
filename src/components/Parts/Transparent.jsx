import React, { useState, useEffect, useRef } from 'react';

const Transparet = () => {
  const [hideImage, setHideImage] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const currentContainer = containerRef.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        console.log('IntersectionObserver entry:', entry); // Debug log
        setHideImage(!entry.isIntersecting);
      },
      {
        root: null, // Observe changes relative to the viewport
        threshold: 0, // Trigger when even one pixel is visible
      }
    );

    if (currentContainer) {
      observer.observe(currentContainer);
    }

    return () => {
      if (currentContainer) {
        observer.unobserve(currentContainer);
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={`transparent-container ${hideImage ? 'hide-image' : ''}`}
    >
      <div className="transchild bg-transparent col-12 h-100">
        <h5 className="text-uppercase">Roman Or Numeral?</h5>
        <p className="text-capitalize golden">
          The Watches We Sell Are Original And Vendor Certified For A Peerless
          Performance!
        </p>
        
        <p className="text-capitalize">
          uis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis
          magna. Sed consequat, leo eget bibendum sodales, uis leo. Sed fringilla
          mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo
          eget. Donec sodales sagittis magna. Sed consequat, leo eget bibendum
          sodales, augue velit cursus nunc.uis leo. Sed fringilla mauris sit amet
          nibh. Donec sodales sagittis magna. Sed consequat, leo eget
        </p>
        <button className="slider-button btn col-3">EXPLORE</button>
      </div>
    </div>
  );
}

export default Transparet;
