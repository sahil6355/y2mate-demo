import React, { useEffect } from "react";


useEffect(() => {
    document.documentElement.lang = language || "en";
}, [language]);