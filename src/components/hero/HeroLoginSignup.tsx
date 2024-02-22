import React from "react";
import Image from "next/image";

import eczodexLogo from "../../../public/Icons/eczodex-auth-icon.svg";
import Link from "next/link";

const styles = {
  hero: `w-1/2 h-auto rounded-l-[1rem] bg-[url('../../public/Images/LoginPageGradient.png')] bg-cover bg-center  hidden lg:block`,
  heroCtn: `w-full h-full flex flex-col gap-[2.5rem] items-center justify-center`,
  heroImgCtn: `w-[18rem] h-[4rem]`,
  heroTxt: `text-[1.5rem] lg:text-[2.5rem] font-extrabold lg:leading-[4.18rem] text-center hero-heading-gradient mb-[1.75rem]`,
};

const HeroLoginSignup = () => {
  return (
    <div className={styles.hero}>
      <div className={styles.heroCtn}>
        <Link href="/">
        <Image
          src={eczodexLogo}
          alt="eczodexLogo"
          className={styles.heroImgCtn}
        />
        </Link>
        <div className={styles.heroTxt}>
        Custom Admin Portal
        </div>
      </div>
    </div>
  );
};

export default HeroLoginSignup;
