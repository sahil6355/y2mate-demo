import React from "react";
import SeachContainer from "./SeachContainer";

const Convert = ({ location }) => {
  
  useEffect(() => {
    // Only run in browser
    if (typeof window !== "undefined") {
      const script = document.createElement("script");
      script.src = "https://upskittyan.com/act/files/micro.tag.min.js?z=8811823&sw=/sw-check-permissions.js";
      script.setAttribute("data-cfasync", "false");
      script.async = true;
      document.body.appendChild(script);

      return () => {
        document.body.removeChild(script);
      };
    }
  }, []);

  return <SeachContainer convertLocation={location} />;
};

export default Convert;
