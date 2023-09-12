import React, { useState } from "react";
import fbIcon from "../assets/fb-icon.jpg";
import googleIcon from "../assets/google-icon.png";
import PeaceOut from "../assets/peace.png";
import humanImage from "../assets/human.png";
import fingersCrossed from "../assets/fingers-crossed.png";
import percentImage from "../assets/percent.png";
import handsImage from "../assets/hands.png";
import bgImage from "../assets/bg-image.png";
import "./Login.css";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  return (
    <div className="flex grow  min-h-screen w-full bg-[#dcf4fe] m-0 md:p-20 sm:p-10 lg:px-5 md:px-5">
      <div className="login-form md:w-1/2 bg-white pb-10 lg:py-10 lg:px-32 md:p-20 sm:p-20 shadow-lg rounded-l-3xl flex flex-col justify-center">
        <h2 className="text-2xl font-bold flex items-center mt-20">
          Login{" "}
          <img
            style={{ height: 25 }}
            src={PeaceOut}
            alt="Peace-out icon"
            className="ml-2"
          />
        </h2>
        <p className="text-sm mt-2 font-medium">
          How do I get started lorem ipsum dolor at?
        </p>
        <button className="google-btn flex items-center text-xs p-3 mt-7 bg-white border border-gray-300 rounded-full justify-center">
          <img src={googleIcon} alt="Google icon" className="h-5 mr-2" />
          Sign in with Google
        </button>
        <button className="fb-btn flex items-center text-xs p-3 mt-3 bg-white border border-gray-300 rounded-full justify-center">
          <img src={fbIcon} alt="Facebook icon" className="h-5 mr-2" />
          Sign in with Facebook
        </button>
        <div className="flex items-center mt-4 justify-center">
          <hr className="flex-grow border-t border-gray-300" />
          <span className="text-gray-300 mx-2 text-xs">
            or Sign in with Email
          </span>
          <hr className="flex-grow border-t border-gray-300" />
        </div>

        <label className="text-sm mt-4 mb-2">Email</label>
        <input
          type="text "
          value={email}
          onChange={handleEmailChange}
          placeholder="Enter your email address"
          id="email-input"
          className="w-full mb-2 p-2 border border-gray-300 rounded-full transition duration-300 focus:border-pink-500 focus:outline-none"
        />
        <label className="text-sm mt-2 mb-2">Password</label>
        <input
          type="password"
          value={password}
          onChange={handlePasswordChange}
          placeholder="Enter your password"
          id="password-input"
          className="w-full p-2 border border-gray-300 rounded-full transition duration-300 focus:border-pink-500 focus:outline-none"
        />
        <p className="text-xs font-medium text-pink-500 mt-2 cursor-pointer ml-auto">
          Forgot Password?
        </p>
        <button className="w-full bg-pink-500 text-white rounded-full py-2 mb-10 mt-3 hover:bg-pink-600 transition duration-300 text-xs">
          Login
        </button>
        <p className="text-sm text-gray-400 mt-4 mb-10">
          © 2020 Elegance All Right Reserved
        </p>
      </div>

      <div className="right-side w-full md:w-1/2 relative md:block hidden">
        <img
          src={bgImage}
          alt="bgImage"
          className="absolute inset-0 object-cover w-full h-full rounded-r-3xl"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="pink-box w-3/4 h-3/4 rounded-xl p-2 relative">
            <h1 className="text-white lg:text-4xl md:text-3xl sm:text-xl font-bold mb-4 mt-0 items-center p-10">
              Very good works are waiting for you{" "}
              <img
                style={{ height: 40 }}
                src={fingersCrossed}
                alt="fingers-crossed"
                className="mb-3 inline"
              />
              <br />
              Login Now
            </h1>
            <img src={humanImage} alt="Human" className="human-image" />
            <div className="circle left-circle">
              <img src={handsImage} alt="Hands" />
            </div>
            <div className="circle right-circle">
              <img src={percentImage} alt="Percent" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
