import React from "react";
import OtpInput from "react-otp-input";
import { Link } from "react-router-dom";

export default function LoginComponent(props) {
  const {
    topHeading,
    topdescription,
    googleIcon,
    appleIcon,
    otp,
    setOtp,
    email,
    setEmail,
  } = props;
  return (
    <div className="col-md-11 mx-auto row my-auto">
      <div className="col-12 col-md-6 d-flex flex-column">
        <h1 className="text-primry w-50">{topHeading}</h1>
        <p className="fs-16 text-light inter-400 w-75">{topdescription}</p>
      </div>
      <div className="col-12 col-md-6">
        <div className="login-card py-5">
          <div className="my-auto">
            <h1 className="text-center">Sign In</h1>
            <p className="fs-16 text-center inter-400">
              Welcome back! Please enter your details
            </p>
            <form className="p-5">
              <div className="form-group mb-4">
                <label for="exampleInputEmail1">Email Address</label>
                <input
                  type="email"
                  className="form-control"
                  autoComplete="off"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Enter email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
                <small
                  id="emailHelp"
                  className="form-text fs-10 fw-bold text-muted px-3"
                >
                  We'll never share your email with anyone else.
                </small>
              </div>
              <div className="row my-4">
                <div className="col-md-6 px-3 my-auto">
                  <input
                    type="number"
                    className="form-control w-100"
                    placeholder="Enter OTP"
                    value={otp}
                    min={0}
                    minLength={4}
                    maxLength={4}
                    onChange={(e) => {
                      setOtp(e.target.value);
                    }}
                  />
                </div>
                {/* <div className="col-md-6 px-3 my-auto otp-inputs">
                  <OtpInput
                    value={otp}
                    onChange={setOtp}
                    numInputs={4}
                    renderSeparator={<span>-</span>}
                    renderInput={(props) => <input {...props} />}
                  />
                </div> */}
                <div className="col-md-6 p-3">
                  <button
                    className={`btn btn-primry w-100 ${!email && " disabled"}`}
                  >
                    Get OTP
                  </button>
                </div>
                {/* <div className="col-md-6 p-3">
                  <button className="btn btn-primry w-100">Get OTP</button>
                </div>
                <div className="col-md-6 px-3 my-auto otp-inputs">
                  <OtpInput
                    value={otp}
                    onChange={setOtp}
                    numInputs={4}
                    renderSeparator={<span>-</span>}
                    renderInput={(props) => <input {...props} />}
                  />
                </div>*/}
              </div>
              <div className="my-3">
                <Link to="/GetStarted">
                  <button
                    className={`btn btn-primry fs-2 w-100 ${
                      otp.length < 4 && " disabled"
                    }`}
                  >
                    Submit
                  </button>
                </Link>
              </div>
              <div className="col-6 mx-auto my-2">
                <p className="fs-16 inter-400 my-3 d-inline-flex">
                  <div className="horizontal-line my-auto"></div>
                  <span className="text-dark mx-3">OR</span>
                  <div className="horizontal-line my-auto"></div>
                </p>
              </div>
              {/* <div className="col-8 mx-auto row"> */}
              {/* <div className="col-md-6 px-3"> */}
              <button className="btn btn-outline-secondary fs-2 w-100 mt-3">
                <div className="mx-auto d-inline-flex">
                  <img src={googleIcon} className="mx-4 my-auto" />
                  <span className="my-auto ">Google</span>{" "}
                </div>
              </button>
              {/* </div> */}
              {/* <div className="col-md-6 px-3">
                  <button className="btn btn-outline-secondary w-100 d-inline-flex w-100">
                    <img src={appleIcon} className="mx-3 my-auto" />
                    <span className="my-auto">Apple</span>
                  </button>
                </div> */}
              {/* </div> */}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
