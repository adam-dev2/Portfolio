import { useEffect } from "react";
import { useLocation } from "react-router-dom"; // If using React Router

const PreventBackstack = () => {
  const location = useLocation(); // Get current URL path

  useEffect(() => {
    if (location.pathname !== "/") {
      window.history.pushState(null, "", location.pathname); // Push new state
    }

    const handleBack = () => {
      window.location.href = "#home"; // Redirect to home section
    };

    window.history.pushState(null, "", window.location.href); // Modify history
    window.addEventListener("popstate", handleBack); // Listen for back

    return () => {
      window.removeEventListener("popstate", handleBack); // Cleanup
    };
  }, [location]);

  return null;
};

export default PreventBackstack;
