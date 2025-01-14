import React from "react";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div
    className="hero min-h-screen"
    style={{
      backgroundImage: "url(https://devasw7xy5fu5.cloudfront.net/jupiterxdemo/wp-content/uploads/sites/507/2022/01/form-builder.png?x15422)",
    }}>
    <div className="hero-overlay bg-opacity-60"></div>
    <div className="hero-content text-neutral-content text-center">
      <div className="max-w-md text-white">
        <h1 className="mb-5 text-5xl font-bold">Effortless Form Building, Unlimited Possibilities</h1>
        <p className="mb-5">
        Create and customize forms with ease using our intuitive drag-and-drop builder. Save time and streamline your workflow—no coding required!
        </p>
       <Link to={"/FormBuilder"}> <button className="btn btn-primary">Get Started</button></Link>
      </div>
    </div>
  </div>
  );
};

export default Home;
