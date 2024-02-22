"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import axios, { AxiosError } from "axios";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { startRegistration } from '@simplewebauthn/browser';

import { DfnsAuthenticator } from '@dfns/sdk'
import { WebAuthn } from '@dfns/sdk-webauthn'

import EczodexLoader from "@/components/EczodexLoader";
import { RE_EMAIL, azureApiUrl } from "@/lib/constants";

const styles = {
  login: `w-full lg:w-1/2 h-auto bg-[#ffff] flex flex-col items-center justify-center px-[1rem] overflow-auto`,
  title: `text-center text-[1.5rem] lg:text-[2.5rem] font-semibold mb-[2rem] lg:mb-[2.5rem]`,
  loginContainer: `w-full max-w-[28rem] flex flex-col justify-center gap-y-[1rem]`,
  inputWrapper: `w-full px-[1rem] lg:px-[1.56rem] py-[1.12rem] lg:py-[1.81rem] border-[#E4E3EB] border-[1px] border-solid rounded-[0.5rem] flex justify-between items-center gap-[0.62rem]`,
  inputWrapperSec: `w-full px-[1rem] lg:px-[1.56rem] py-[1.12rem] lg:py-[1.69rem] border-[#E4E3EB] border-[1px] border-solid rounded-[0.5rem] flex justify-between items-center gap-[0.62rem]`,
  inputBox: `w-full outline-none font-medium text-[0.87rem] lg:text-base text-clip bg-transparent placeholder:font-normal placeholder:text-base placeholder:text-[#6E7187] bg-transparent`,
  inputBoxSec: `w-full outline-none font-semibold text-base lg:text-[1.5rem] text-clip bg-transparent placeholder:font-normal placeholder:text-base placeholder:text-[#6E7187] bg-transparent`,
  subMenu: `w-full max-w-[28rem] flex justify-end`,
  subText: `text-[#5EBC8B] font-bold text-[0.87rem] lg:text-base`,
  primaryBtn: `w-full max-w-[28rem] py-[1rem] lg:py-[1.21rem] mx-auto my-[1rem] text-[0.87rem] lg:text-base font-semibold text-[#ffff] gap-[0.62rem] rounded-[0.37rem] bg-[url('../../public/Images/Rectangle1.png')] bg-cover  flex justify-center items-center cursor-pointer outline-none`,
  subMenuSec: `w-full max-w-[28rem] flex gap-[0.62rem] justify-center`,
  subTextSec: `font-normal text-[0.87rem] lg:text-base text-[#6E7187]`,
  overlay: `w-full h-full absolute left-0 top-0 flex items-center justify-center bg-[#2B8AC8] bg-opacity-10 z-20`,
};

type UserLoginType = {
  email: string;
};

const LoginForm = () => {
  const [user, setUser] = useState<UserLoginType>();
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  //handle submit
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!user) {
      toast.error("Enter username and password.");
      return;
    }

    const isValidEmail = RE_EMAIL.test(user.email);

    if (user.email === "" || !isValidEmail) {
      toast.error("Please enter a valid email address.");
      return;
    }

    setIsLoading(true);
    try {

      // const response = await axios({
      //   method: "post",
      //   url: `${azureApiUrl}/DFNS/Login`,
      //   data: {
      //     email: user.email,
      //   },
      // });
      // console.log(response.data, '✅');

      console.log("start");

      const appId = "ap-2niq8-jle8h-8e685lcsae9no8c3"
      const rpId = "vercel.app";

      const dfnsAuth = new DfnsAuthenticator({
        appId,
        baseUrl: "https://admin-portal-pied.vercel.app",
        signer: new WebAuthn({ rpId }),
      })
      const orgId = "or-1qlte-d5mok-8s8bf57cu5aukpmj"
      let username = user.email
      const { token } = await dfnsAuth.login({ orgId, username});

      console.log(token, 'token✅')
      // const response2 = await startRegistration(response.data);

      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      console.log(error);
    }
  };

  //handle change
  const handleChange = async (
    e: React.ChangeEvent<HTMLInputElement>,
    field: string
  ) => {
    const updateItem = Object.assign({}, user);

    if (field === "email") {
      updateItem[field] = e.target.value;
    }
    setUser(updateItem);
  };

  return (
    <>
      {isLoading && (
        <div className={styles.overlay}>
          <EczodexLoader />
        </div>
      )}
      <form className={styles.login} onSubmit={(e) => handleSubmit(e)}>
        <div className={styles.title}>Login</div>
        <div className={styles.loginContainer}>
          <div className={styles.inputWrapperSec}>
            <input
              type="email"
              className={styles.inputBox}
              placeholder="Email"
              value={user ? user.email : ""}
              onChange={(e) => handleChange(e, "email")}
            />
          </div>
          <input type="submit" className={styles.primaryBtn} value="Login" />
        </div>
      </form>
    </>
  );
};

export default LoginForm;
