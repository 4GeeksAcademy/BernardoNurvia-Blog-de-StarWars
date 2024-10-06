import React, { useState } from "react";
import "../../styles/home.css";
import People from "../component/People";
import { Vehicles } from "../component/Vehicles";
import Planets from "../component/Planets";

export const Home = () => {
  
  return (
    <div className="body">
      <div className="text-center h-2">
        <h2 className="text-h2">Characters</h2>
        <div className="scroll-container">
          <People />
        </div>
        <h2 className="mt-4">Vehicles</h2>
        <div className="scroll-container">
          <Vehicles />
        </div>
        <h2 className="mt-4">Planets</h2>
        <div className="scroll-container">
          <Planets />
        </div>
      </div>
    </div>
  );
};
