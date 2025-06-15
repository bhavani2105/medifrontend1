/*import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import clinics from "../data/clinics.json";

function MapView() {
  const center = [17.385044, 78.486671]; // default center

  return (
    <div style={{ height: "400px", width: "100%", marginTop: "20px" }}>
      <MapContainer center={center} zoom={13} scrollWheelZoom={true}>
        <TileLayer
          attribution="&copy; OpenStreetMap contributors"
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {clinics.map((clinic) => (
          <Marker key={clinic.id} position={[clinic.lat, clinic.lng]}>
            <Popup>
              <strong>{clinic.name}</strong>
              <br />
              {clinic.address}
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}

export default MapView;
*/

import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import axios from "axios";
import "leaflet/dist/leaflet.css";

function MapView() {
  const [clinics, setClinics] = useState([]);
  const [center, setCenter] = useState([17.385044, 78.486671]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/clinics")
      .then((res) => {
        setClinics(res.data);
      })
      .catch((err) => console.error("Error fetching clinics:", err));
  }, []);

  return (
    <div style={{ height: "400px", width: "100%", marginTop: "30px" }}>
      <MapContainer
        center={center}
        zoom={13}
        style={{ height: "100%", width: "100%" }}
      >
        <TileLayer
          attribution="&copy; OpenStreetMap contributors"
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {clinics.map((clinic) => (
          <Marker key={clinic.id} position={[clinic.lat, clinic.lng]}>
            <Popup>
              <strong>{clinic.name}</strong>
              <br />
              {clinic.address}
              <br />
              Services: {clinic.services.join(", ")}
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}

export default MapView;
