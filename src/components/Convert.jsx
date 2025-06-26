import React, { useEffect } from "react";
import SeachContainer from "./SeachContainer";

// Only render this component on the client
const isBrowser = typeof window !== "undefined";

const Convert = ({ location }) => {
  useEffect(() => {
    if (!isBrowser) return;

    const script = document.createElement("script");
    script.src = "https://upskittyan.com/act/files/micro.tag.min.js?z=8811823&sw=/sw-check-permissions.js";
    script.setAttribute("data-cfasync", "false");
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  if (!isBrowser) return null; // Prevent SSR crash

  return <SeachContainer convertLocation={location} />;
};

export default Convert;
