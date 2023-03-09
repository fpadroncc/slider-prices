import React from "react";
import { useNavigate } from "react-router-dom";

export default function Exercise2() {
  const navigate = useNavigate();

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
        gap: "4rem",
        width: "100vw",
      }}
    >
      <h1 style={{ textAlign: "center" }}>Exrcesize 2</h1>
      <button style={{ backgroundColor: "red" }} onClick={() => navigate(-1)}>
        ComeBack
      </button>
    </div>
  );
}
