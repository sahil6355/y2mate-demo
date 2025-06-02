import React from "react";
import Footer from "./Footer";
import Header from "./Header";

export const Layout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <div className="border-line mt-48"></div>
      <Footer />
    </>
  );
};
