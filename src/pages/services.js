import React from "react";
import services1 from "./services1.jpeg";
import services2 from "./services2.jpeg";
import services3 from "./services3.jpeg";
import services4 from "./services4.jpeg";

import services5 from "./services5.jpeg";

import services6 from "./services6.jpeg";
import services7 from "./services7.jpeg";

import services8 from "./services8.jpeg";

function Services() {
  return (
    <div>
      <header
        style={{
          textAlign: "center",
          padding: "20px",
          fontSize: "24px",
          fontWeight: "bold",
        }}
      >
        <h2>MediMap Services</h2>
      </header>

      <section style={{ margin: "auto", padding: "20px" }}>
        <p>
          <strong>MediMap</strong> offers a range of services to make healthcare
          more accessible and efficient, especially during emergencies.
        </p>

        <ul style={{ paddingLeft: "20px", marginTop: "20px" }}>
          <li>🧭 Real-time Location Services</li>
          <li>🏥 Search for Nearby Hospitals, Clinics & Pharmacies</li>
          <li>📋 View Detailed Facility Information</li>
          <li>📆 Book Appointments Instantly</li>
          <li>👩‍⚕️ Filter Services Based on Specialization</li>
          <li>📲 Mobile-Responsive and Easy to Use</li>
        </ul>

        <p style={{ marginTop: "20px" }}>
          With these features, MediMap ensures you find the right care when and
          where you need it.
        </p>
      </section>
      <section>
        <img src={services1} alt="services-1" id="serviceimg" />
        <img src={services2} alt="services-2" id="serviceimg" />
        <img src={services3} alt="services-3" id="serviceimg" />
        <img src={services4} alt="services-4" id="serviceimg" />
        <img src={services5} alt="services-5" id="serviceimg" />
        <img src={services6} alt="services-6" id="serviceimg" />
        <img src={services7} alt="services-7" id="serviceimg" />
        <img src={services8} alt="services-8" id="serviceimg" />
      </section>
    </div>
  );
}

export default Services;
