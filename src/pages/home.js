import React from "react";
import About from "./about";
import Services from "./services";
import Login from "./login";
import Register from "./register";
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
      <section class="hero-container">
        <div class="hero-img">
          <img src={background} alt="home-image" width="100%" />
        </div>
        <div>
          <h1>Emergency Healthcare at Your Fingertips</h1>
        </div>
      </section>
      <div class="nav-container">
        {/* Scrollable Sections */}
        <section id="about">
          <About />
        </section>
        <section id="services">
          <Services />
        </section>
        <section id="login">
          <Login />
        </section>
        <section id="register">
          <Register />
        </section>

        <section id="notFound">
          <NotFound />
        </section>
      </div>
    </div>
  );
}

export default Home;
