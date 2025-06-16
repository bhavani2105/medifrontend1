import React from "react";
import About from "./about";
import Services from "./services";
import Register from "./register";
import Login from "./login";

import Contact from "./contact";
import NotFound from "./notFound";

import "./style.css";
//import logoImg from "./logoImg.jpg";
import background from "./background.jpeg";

function Home() {
  return (
    <div className="body">
      {/* Header Section */}
      {/*<header>
        <img id="logoimg" src={logoImg} alt="logo" />
        <h1 id="title">MediMap: Emergency Healthcare at Your Fingertips</h1>
      </header>*/}
      <section className="hero-container">
        <div className="hero-img">
          <img src={background} alt="home-image" width="100%" />
        </div>
        <div>
          <h1>Emergency Healthcare at Your Fingertips</h1>
        </div>
      </section>
      <div className="nav-container">
        {/* Scrollable Sections */}
        <section id="about">
          <About />
        </section>
        <section id="services">
          <Services />
        </section>

        <section id="register">
          <Register />
        </section>
        <section id="login">
          <Login />
        </section>
        <section id="contact">
          <Contact />
        </section>

        <section id="notFound">
          <NotFound />
        </section>
      </div>
    </div>
  );
}

export default Home;
