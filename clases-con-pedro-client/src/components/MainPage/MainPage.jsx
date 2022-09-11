import React from "react";
import Footer from "../Footer.js/Footer";
import MainPageContent from "../MainPageContent/MainPageContent";
import Navbar from "../Navbar/Navbar";

export default function MainPage() {
  return (
    <div className="mainpage-container">
      <MainPageContent />
      <Footer />
    </div>
  );
}
