import React from 'react'
import LoginForm from './components/LoginForm';
import HeroLoginSignup from '@/components/hero/HeroLoginSignup';



const styles = {
  assetWrapper: `w-full min-h-screen flex justify-center`,
};

const Login  = () => {
  return (
    <div className={styles.assetWrapper}>
      <LoginForm/>
      <HeroLoginSignup/>
  </div>
  )
}

export default Login 