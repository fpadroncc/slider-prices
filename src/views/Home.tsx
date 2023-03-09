import React from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate()

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(5,1fr)",
        width: "100vw",
        textAlign: "center",
      }}
    >
      <h1 style={{ gridColumn: "3/ auto" }}>HOME</h1>
      <button
        style={{ gridArea: "2 / 2 / auto / auto" }}
        onClick={() => navigate("exercise1")}
      >
        Excercise 1
      </button>
      <button
        style={{ gridArea: "2 / 4 / auto / auto" }}
        onClick={() => navigate("exercise2")}
      >
        Excercise 2
      </button>
    </div>
  );
}
