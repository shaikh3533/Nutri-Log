import React, { useState } from 'react'
import googleIcon from "../../../assets/Icons/googleIcon.svg"
import appleIcon from "../../../assets/Icons/appleIcon.svg"
import LoginComponent from '../../../atoms/LoginComponent'

export default function Index() {
  const [otp, setOtp] = useState('');

  return (
    <div className='container mx-auto d-flex flex-column h-75 pt-5'>
      <LoginComponent
        googleIcon={googleIcon}
        appleIcon={appleIcon}
        topHeading="Welcome Back"
        topdescription="Log in nutrition expert can work with you to achieve your specific health goals."
        otp={otp}
        setOtp={setOtp}
      />
    </div>
  )
}
