"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence, animate } from "framer-motion";

import dropdownArrow from "../../asset/icons/down-arrow.svg";
import eczodexLogo from "../../asset/icons/eczodex-main-logo.svg";
import hamburgerIcon from "../../../public/Icons/hamburger.svg";


const styles = {
  navbar: `w-full h-fit px-[1.25rem] py-[1.63rem] flex absolute top-0 justify-between items-center z-50`,
  logoCtn: `flex`,
  menu: `w-fit h-fit xl:ml-32 p-[0.25rem] hidden xl:flex rounded-[62.5rem] bg-[#110E2E] bg-opacity-10 backdrop-blur-md `,
  menuItemWrapper: `relative flex`,
  menuItem: `w-fit h-fit px-[1.75rem] text-base font-medium text-[#fff] text-center self-center cursor-pointer`,
  menuItemActive: `w-fit h-fit px-[1.75rem] text-base font-medium text-[#110E2E] bg-[#fff] rounded-[62.5rem] text-center self-center cursor-pointer`,
  dropDownMenu: `absolute top-8 left-0 w-[9.37rem] rounded-[1rem] flex flex-col gap-[1rem] px-[1.75rem] py-[0.88rem] bg-[#fff]`,
  dropDownItem: `w-full font-normal text-base text-[#82849E] hover:text-[#110E2E] cursor-pointer`,
  ctaContainer: `flex flex-col items-center gap-[1.88rem]`,
  signInBtn: `text-base lg:text-[1.25rem] font-semibold text-[#fff] cursor-pointer`,
  primaryBtn: `bg-[#110E2E] rounded-[0.75rem] px-[2.5rem] py-[0.88rem] text-base lg:text-[1.25rem] font-semibold text-[#fff] cursor-pointer`,
  hamburgerIcon: `w-[3rem] h-[3rem] rounded-md flex xl:hidden justify-center items-center`,
  hamburgerIconToggled: `w-[3rem] h-[3rem] rounded-md bg-white flex xl:hidden justify-center items-center bg-opacity-20`,
  drawerWrapper: `w-[22.43rem] max-lg:w-full h-screen bg-[#110E2E] bg-opacity-10 backdrop-blur-md xl:hidden fixed absolute right-0 z-20`,
  drawer: `w-full h-full`,
  drawerMenu: `w-full px-[1.25rem] py-[1.63rem] flex flex-col items-center gap-[1.88rem] mt-20`,
  drawerMenuCtn: `relative w-full lg:w-[12rem] h-fit flex flex-col gap-[0.5rem] items-center`,
  drawerMenuItem: `w-fit h-fit px-[1.75rem] text-base lg:text-[1.25rem] font-medium text-[#fff] text-center self-center cursor-pointer`,
  dropdownIcon: `absolute top-2 right-2 cursor-pointer `,
  dropdownIconToggled: `absolute top-2 right-2 rotate-180 cursor-pointer`,
  drawerSubMenuCtn: `flex flex-col gap-[0.75rem] w-fit h-fit `,
  drawerSubMenuItem: `w-fit h-fit px-[1.75rem] text-[0.87rem] lg:text-base font-medium text-[#fff] hover:text-[#110E2E] hover:bg-[#fff] rounded-[1rem] text-center self-center cursor-pointer`,
};

export const menusLanding = [
  {
    key: `menu1`,
    title: "Product",
    subMenus: [
      {
        key: `submenu1`,
        name: "USDE",
        link: `/products`,
      },
      {
        key: `submenu2`,
        name: "Analytics",
        link: `/analytics`,
      },
      {
        key: `submenu3`,
        name: "Docs",
        link: `/`,
      },
      {
        key: `submenu4`,
        name: "FAQs",
        link: `/#faq`,
      },
    ],
  },
  {
    key: `menu2`,
    title: "Developers",
    subMenus: [
      {
        key: `submenu5`,
        name: "API",
        link: `https://eczodex.gitbook.io/home/`,
      },
    ],
  },
  {
    key: `menu3`,
    title: "Company",
    subMenus: [
      {
        key: `submenu6`,
        name: "About",
        link: `/about`,
      },
      {
        key: `submenu7`,
        name: "Contact Us",
        link: `/contact-us`,
      },
      {
        key: `submenu8`,
        name: "Transparency",
        link: `/transparency`,
      },
    ],
  },
];


const NavbarDrawer = () => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>();

  const handleSelect = (i: number) => {
    if (i === selectedIndex) {
      setSelectedIndex(null);
      return;
    }
    setSelectedIndex(i);
  };


  const fadeInVariants = {
    hidden: { opacity: 0, height: 0, zIndex: -1 },
    visible: {
      opacity: 1,
      height: "fit-content",
      zIndex: 0,
      transition: { duration: 0.3 },
    },
  };

  return (
    <div className={styles.drawer}>
      <div className={styles.drawerMenu}>
        {menusLanding.map((el, i) => (
          <div className={styles.drawerMenuCtn} key={el.key}               onClick={() => handleSelect(i)}>
            <div className={styles.drawerMenuItem}>{el.title}</div>
            <motion.div
              className={styles.drawerSubMenuCtn}
              initial="hidden"
              animate={selectedIndex === i ? "visible" : "hidden"}
              variants={fadeInVariants}
            >
              {el.subMenus.map((el, i) => (
                <Link
                  href={el.link}
                  className={styles.drawerSubMenuItem}
                  key={el.key}
                  target={el.name === "API" ? "_blank" : ''}
                  rel={el.name === "API" ? "noopener noreferrer" : ''}
                >
                  {el.name}
                </Link>
              ))}
            </motion.div>
            <Image
              src={dropdownArrow}
              alt="dropdownArrow"
              className={
                selectedIndex === i
                  ? styles.dropdownIconToggled
                  : styles.dropdownIcon
              }
            />
          </div>
        ))}
        <div className={styles.ctaContainer}>
          <Link href="/login" className={styles.signInBtn}>
            Sign In
          </Link>
          <Link href="/register" className={styles.primaryBtn}>
            Get Started
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NavbarDrawer;
