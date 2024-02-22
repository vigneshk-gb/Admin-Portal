"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

import eczodexLogo from "../../asset/icons/eczodex-main-logo.svg";
import hamburgerIcon from "../../../public/Icons/hamburger.svg";
import NavbarDrawer from "./NavbarDrawer";

const styles = {
  navbar: `w-full h-fit px-[1.25rem] py-[1.63rem] flex absolute top-0 justify-between items-center z-50`,
  logoCtn: `flex`,
  menu: `w-fit h-fit xl:ml-32 p-[0.25rem] hidden xl:flex rounded-[62.5rem] bg-[#110E2E] bg-opacity-10 backdrop-blur-md gap-[0.2rem]`,
  menuItemWrapper: `relative flex group`,
  menuItem: `w-fit h-fit px-[1.75rem] text-base font-medium text-[#fff] transition-all duration-500 ease-in-out group-hover:text-[#110E2E] group-hover:bg-[#fff] rounded-[62.5rem] text-center self-center cursor-pointer`,
  dropDownMenu: `
  group-hover:opacity-100 
  transition-all duration-500 ease-in-out 
  absolute mt-8 left-0 w-[9.37rem] h-fit rounded-[1rem] flex flex-col gap-y-[1rem] px-[1.75rem] py-[0.88rem] bg-[#fff] opacity-0`,
  dropDownItem: `w-full font-normal text-base text-[#82849E] hover:text-[#110E2E] cursor-pointer`,
  ctaContainer: `hidden xl:flex items-center gap-[1.88rem]`,
  signInBtn: `text-base font-semibold text-[#fff] cursor-pointer`,
  primaryBtn: `bg-[#110E2E] rounded-[0.75rem] px-[2.5rem] py-[0.88rem] text-base font-semibold text-[#fff] cursor-pointer`,
  hamburgerIcon: `w-[3rem] h-[3rem] rounded-md flex xl:hidden justify-center items-center cursor-pointer`,
  hamburgerIconToggled: `w-[3rem] h-[3rem] rounded-md bg-white flex xl:hidden justify-center items-center bg-opacity-20 cursor-pointer`,
  drawerWrapper: `w-[22.43rem] max-lg:w-full h-screen bg-[#110E2E] bg-opacity-10 backdrop-blur-xl xl:hidden fixed absolute right-0 z-20`,
};

interface IProps {
  scrollToSection: (urlFragment: string) => void;
}

const NavbarLanding = ({ scrollToSection }: IProps) => {
  const pathname = usePathname();
  const [currentRoute, setCurrentRoute] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (pathname === "/") {
      setCurrentRoute("landing");
    } else if (pathname === "/contact-us") {
      setCurrentRoute("contact-us");
    }
  }, [pathname]);

  useEffect(() => {
    // Add the custom styles to the body tag when the component mounts
    if (isOpen) {
      document.body.style.height = "100vh";
      document.body.style.overflowY = "hidden";
    }

    // Clean up the custom styles when the component unmounts
    return () => {
      document.body.style.height = "auto";
      document.body.style.overflowY = "auto";
    };
  }, [isOpen]);

  return (
    <>
      <div className={styles.navbar}>
        <Link href="/" className={styles.logoCtn}>
          <Image src={eczodexLogo} alt="main-logo" width={150} height={36} />
        </Link>

        
        <div className={styles.ctaContainer}>
          <Link href="/login" className={styles.primaryBtn}>
          Sign In
          </Link>
        </div>
        <div
          className={
            isOpen ? styles.hamburgerIconToggled : styles.hamburgerIcon
          }
        >
          <Image
            src={hamburgerIcon}
            alt="hamburgerIcon"
            width={20}
            onClick={toggleNavbar}
          />
        </div>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: "100%", opacity: 0 }}
            transition={{ duration: 0.3 }}
            className={styles.drawerWrapper}
          >
            <NavbarDrawer />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default NavbarLanding;
