import { useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useLayoutEffect(() => {
    // Temporarily disable smooth scrolling
    const html = document.documentElement;
    const prev = html.style.scrollBehavior;

    html.style.scrollBehavior = "auto";
    window.scrollTo(0, 0);

    // Restore smooth scrolling
    html.style.scrollBehavior = prev || "smooth";
  }, [pathname]);

  return null;
};

export default ScrollToTop;
