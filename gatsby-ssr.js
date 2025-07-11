import React, { useEffect } from "react";


useEffect(() => {
  if (typeof document !== "undefined") {
    document.documentElement.lang = language || "en";
  }
}, [language]);

