import Image from "next/image";
import React from "react";

import eczodexLogo from "../../asset//icons/eczodex-logo-sec.svg";
import scrollLogo from "../../asset/icons/scroll-icon.svg";

import RectangleGrey from "../../asset/images/RectangleGrey.svg";


const styles = {
  hero: `relative w-full h-fit min-h-[55rem]  px-[1.25rem] bg-[url('../asset/images/HeroBg.png')] bg-cover bg-center flex flex-col items-center justify-center overflow-hidden`,
  assetCtn: `w-fit pl-[0.25rem] pr-[0.75rem] py-[0.25rem] gap-[0.62rem] flex items-center bg-[#fff] bg-opacity-15 rounded-[3.125rem] border border-white border-opacity-40 mb-[2.5rem]`,
  logoCtn: `w-fit flex items-center`,
  logoTxt: `text-base lg:text-[1.25rem] text-center text-[#fff] font-bold tracking-[0.125rem] uppercase`,
  heroHeading: `text-[1.5rem] lg:text-[3.75rem] font-extrabold lg:leading-[4.18rem] text-center hero-heading-gradient mb-[1.75rem]`,
  heroBio: `text-[0.87rem] lg:text-[1.56rem] font-normal text-center hero-heading-gradient mb-[7.38rem]`,
  scrollCtn: `flex flex-col gap-[1.06rem] items-center`,
  scrollIconCtn: `flex`,
  scrollTxt: `text-[0.75rem] font-medium text-[#fff]`,
  rectangleBorder: `w-full absolute bottom-0`,
  borderImg: `w-full h-full`,
};


const Hero = () => {
  return (
    <div className={styles.hero}>
      <div className={styles.assetCtn}>
        <div className={styles.logoCtn}>
          <Image src={eczodexLogo} alt="main-logo" width={32} height={32} />
        </div>
        <div className={styles.logoTxt}>USDE</div>
      </div>
      <div className={styles.heroHeading}>
      Custom Admin Portal
      </div>
      <div className={styles.rectangleBorder}>
      <Image src={RectangleGrey} alt="RectangleGrey" className={styles.borderImg}/>
      </div>
    </div>
  );
};

export default Hero;
