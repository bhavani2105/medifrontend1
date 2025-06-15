import React from "react";
import style from "./style.css";
import about1 from "./imgs/about1.jpg";

function About() {
  return (
    <div className="body">
      <h2>About MediMap</h2>
      <div class="about-container">
        <div class="about1">
          <img src={about1} alt="about image" />
        </div>

        <div class="about-content">
          <p>
            <strong>MediMap</strong> is an innovative web application designed
            to assist people during medical emergencies by helping them quickly
            locate the nearest healthcare facilities. Whether you're in a
            critical situation or simply need access to urgent care, MediMap
            ensures you find the right place — fast.
          </p>

          <div style={{ marginTop: "15px" }}>
            <p>
              By combining real-time location mapping and an easy-to-use
              interface, MediMap provides:
            </p>
            <ul style={{ paddingLeft: "20px", marginTop: "10px" }}>
              <li>
                📍 Instant access to nearby hospitals, clinics, and pharmacies
              </li>
              <li>🗺️ Accurate maps with live location pins and directions</li>
              <li>🧾 Detailed clinic profiles with address and service info</li>
              <li>📆 Appointment booking to save time and reduce wait</li>
            </ul>
          </div>

          <p style={{ marginTop: "15px" }}>
            During emergencies, every second matters. MediMap is built to bridge
            the gap between people and medical support when it’s needed the
            most. With a user-first design, it’s accessible, fast, and reliable
            — a digital companion for saving lives.
          </p>
        </div>
      </div>
    </div>
  );
}
export default About;
