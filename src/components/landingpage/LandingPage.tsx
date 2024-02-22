"use client";
import React, { useState } from "react";


import Hero from "./Hero";
import NavbarLanding from "../navbar/NavbarLanding";

const styles = {
  appWrapper: `w-full h-fit`,
};

const LandingPage = () => {

  // Scroll to section
  const scrollToSection = (sectionId: string) => {
    if (typeof document !== "undefined") {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <div className={styles.appWrapper}>
      <NavbarLanding scrollToSection={scrollToSection} />
      <Hero />
    </div>
  );
};

export default LandingPage;
