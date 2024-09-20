import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const Example2 = () => {
  const parallaxRef = useRef(null);

  useEffect(() => {
    // Select the elements to animate
    const layers = gsap.utils.toArray(".parallax-layer");

    layers.forEach((layer: any, i) => {
      gsap.to(layer, {
        yPercent: i * 50, // Adjust the movement speed
        ease: "none",
        scrollTrigger: {
          trigger: parallaxRef.current,
          scrub: true, // Ensures the animation follows scroll
        },
      });
    });

    return () => {
      // Kill ScrollTriggers on unmount to avoid memory leaks
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div className="parallax-container" ref={parallaxRef}>
      <div className="parallax-layer layer1">Layer 1 Content</div>
      <div className="parallax-layer layer2">Layer 2 Content</div>
      <div className="parallax-layer layer3">Layer 3 Content</div>
      {/* Add more layers as needed */}
    </div>
  );
};

export default Example2;
