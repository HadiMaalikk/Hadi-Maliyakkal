import { useEffect, useState } from "react";
import Hero from "./Hero";
import { EncryptedText } from "../components/encrypted-text";

const HeroWithLoading = () => {
  const [loading, setLoading] = useState(true);
  const [showOverlay, setShowOverlay] = useState(false);

  useEffect(() => {
    // show loading first; match this to your EncryptedText duration
    const textTimer = setTimeout(() => {
      setLoading(false);
      // show overlay to fade out -> will be removed on animation end
      setShowOverlay(true);
    }, 2000); // adjust to your reveal duration
    return () => clearTimeout(textTimer);
  }, []);

  // handler called when CSS animation finishes
  const handleOverlayAnimationEnd = () => {
    // remove overlay completely from DOM so it cannot block anything
    setShowOverlay(false);
  };

  return (
    <>
      {loading && (
        <section className="fixed inset-0 flex items-center justify-center bg-black z-[9999]">
          <p className="text-white text-center">
            <EncryptedText
              text="Designed by Hadi Maliyakkal."
              encryptedClassName="text-neutral-500"
              revealedClassName="text-white"
              revealDelayMs={50}
            />
          </p>
        </section>
      )}

      {/* Overlay only during fade. Removed on animation end */}
      {showOverlay && (
        <div
          className="fixed inset-0 z-[9998] pointer-events-none fade-overlay"
          onAnimationEnd={handleOverlayAnimationEnd}
          aria-hidden="true"
        />
      )}

      {/* Hero always in DOM (overlay was above until removed) */}
      <Hero />
    </>
  );
};

export default HeroWithLoading;
