import React, { useEffect, useState } from "react";
import axios from "axios";

function HospitalList() {
  const [selectedArea, setSelectedArea] = useState("");
  const [hospitals, setHospitals] = useState([]);
  const [allHospitals, setAllHospitals] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/clinics")
      .then((res) => setAllHospitals(res.data))
      .catch((err) => console.error("Error:", err));
  }, []);

  useEffect(() => {
    if (selectedArea) {
      const filtered = allHospitals.filter((h) =>
        h.address.toLowerCase().includes(selectedArea.toLowerCase())
      );
      setHospitals(filtered);
    } else {
      setHospitals([]);
    }
  }, [selectedArea, allHospitals]);

  return (
    <div style={{ maxWidth: "800px", margin: "auto", padding: "20px" }}>
      <h2>Select Area</h2>
      <select
        value={selectedArea}
        onChange={(e) => setSelectedArea(e.target.value)}
        style={{ padding: "10px", width: "100%", marginBottom: "20px" }}
      >
        <option value="">-- Choose an Area --</option>
        <option value="Hyderabad">Hyderabad</option>
        <option value="Vizag">Vizag</option>
        <option value="Vijayawada">Vijayawada</option>
        <option value="Guntur">Guntur</option>
      </select>

      {hospitals.length > 0 ? (
        <ul style={{ listStyleType: "none", padding: 0 }}>
          {hospitals.map((h, i) => (
            <li
              key={i}
              style={{
                marginBottom: "15px",
                padding: "15px",
                border: "1px solid #ccc",
                borderRadius: "8px",
              }}
            >
              <strong>{h.name}</strong>
              <br />
              📍 {h.address}
              <br />
              🏥 Services: {h.services?.join(", ")}
            </li>
          ))}
        </ul>
      ) : (
        selectedArea && <p>No hospitals found in this area.</p>
      )}
    </div>
  );
}

export default HospitalList;
