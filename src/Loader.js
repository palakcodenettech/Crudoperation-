import React from "react";
import "./App.css";
export default function Loader() {
  return (
    <div className="m-auto w-full loader">
      <div className="spinner-container">
        <div className="loading-spinner m-auto"></div>
      </div>
    </div>
  );
}
