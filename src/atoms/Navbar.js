import React from "react";
import logoImg from "../assets/logo/logo.png";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="nav-h bg-primry">
      <nav className="container mx-auto d-flex justify-content-between my-auto h-100">
        <img src={logoImg} alt="logo" className="my-auto" />
        <div className="d-flex my-auto">
          <Link to="/home">
            <p
              className="text-white me-4 my-auto"
              style={{ fontSize: "16px", fontWeight: "600" }}
            >
              Home
            </p>
          </Link>
          <Link to="health">
            <p
              className="text-white me-4 my-auto"
              style={{ fontSize: "16px", fontWeight: "600" }}
            >
              Health
            </p>
          </Link>
          <p
            className="text-white me-4 my-auto"
            style={{ fontSize: "16px", fontWeight: "600" }}
          >
            FAQs
          </p>
          <p
            className="text-white me-4 my-auto"
            style={{ fontSize: "16px", fontWeight: "600" }}
          >
            About
          </p>
          <Link to="/login">
            <button
              className="bg-transparent text-white px-4 py-2 rounded me-4"
              style={{
                fontSize: "16px",
                fontWeight: "600",
                border: "1px solid white",
              }}
            >
              Login
            </button>
          </Link>
          <Link to="/GetStarted">
            <button
              className="bg-transparent text-white px-4 py-2 rounded"
              style={{
                fontSize: "16px",
                fontWeight: "600",
                border: "1px solid white",
              }}
            >
              Join us
            </button>
          </Link>
        </div>
      </nav>
    </div>
  );
}
