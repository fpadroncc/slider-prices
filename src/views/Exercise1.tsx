import React from "react";
import { useNavigate } from "react-router-dom";
import SliderContainer from "../components/SliderContainer";

export default function Exercise1() {
  const navigate = useNavigate();

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "4rem",
        width: "100vw",
      }}
    >
      <div style={{ display: "inherit", justifyContent: 'space-around' }}>
        <h1 style={{ textAlign: "center" }}>Exrcesize 1</h1>
        <button style={{backgroundColor: 'red'}} onClick={() => navigate(-1)}>ComeBack</button>
      </div>

      <SliderContainer />
    </div>
  );
}
