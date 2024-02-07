import React from 'react'
import OtpInput from 'react-otp-input';
import { Link } from 'react-router-dom';

export default function LoginComponent(props) {
    const { topHeading, topdescription, googleIcon, appleIcon, otp, setOtp } = props
    return (
        <div className='col-md-10 mx-auto row my-auto'>
            <div className='col-12 col-md-6'>
                <h1 className='text-primry w-50'>{topHeading}</h1>
                <p className='fs-16 text-light inter-400 w-75'>{topdescription}</p>
            </div>
            <div className='col-12 col-md-6'>
                <div className='login-card py-5'>
                    <div className='my-auto'>
                        <h1 className='text-center'>Sign In</h1>
                        <p className='fs-16 text-center inter-400'>Welcome back! Please enter your details</p>
                        <form className="p-5">
                            <div className="form-group mb-3">
                                <label for="exampleInputEmail1">Email Address</label>
                                <input type="email" className="form-control" autoComplete='off' id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                                <small id="emailHelp" className="form-text fs-10 text-muted">We'll never share your email with anyone else.</small>
                            </div>
                            <div className="row">
                                <div className="col-md-6 p-3">
                                    <button className='btn btn-primry w-100'>Get OTP</button>
                                </div>
                                <div className="col-md-6 px-3 my-auto otp-inputs">
                                    <OtpInput
                                        value={otp}
                                        onChange={setOtp}
                                        numInputs={4}
                                        renderSeparator={<span>-</span>}
                                        renderInput={(props) => <input
                                            {...props} />}
                                    />
                                </div>
                            </div>
                            <div className="my-2">
                                <Link to="/GetStarted"> <button className='btn btn-primry w-100'  >Submit</button>
                                </Link></div>
                            <p className='fs-16 inter-400 text-primry text-center my-2'>-----------<span className='text-dark mx-3'>OR</span>-----------</p>
                            <div className="col-8 mx-auto row">
                                <div className="col-md-6 px-3">
                                    <button className='btn btn-outline-secondary w-100 d-inline-flex w-100 mx-auto'><img src={googleIcon} className='me-3 my-auto' /><span className='my-auto'>Google</span> </button>
                                </div>
                                <div className="col-md-6 px-3">
                                    <button className='btn btn-outline-secondary w-100 d-inline-flex w-100 mx-auto'><img src={appleIcon} className='me-3 my-auto' /><span className='my-auto'>Apple</span></button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
