import { useEffect } from "react";

const PreventBackToSections = () => {
  useEffect(() => {
    const handlePopState = () => {
      if (window.location.hash !== "#home") {
        window.location.href = "#home"; // Force back to home
      }
    };

    window.addEventListener("popstate", handlePopState);

    return () => {
      window.removeEventListener("popstate", handlePopState);
    };
  }, []);

  return null;
};

export default PreventBackToSections;
