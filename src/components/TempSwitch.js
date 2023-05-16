import React, { useContext, useEffect, useState } from "react";
import CurrentTemperatureUnitContext from "../contexts/CurrentTemperatureUnitContext";
import "../blocks/Switch.css";

const ToggleSwitch = () => {
  const { currentTemperatureUnit, handleToggleSwitchChange } = useContext(
    CurrentTemperatureUnitContext
  );

  const isChecked = currentTemperatureUnit === "C";

  useEffect(() => {}, [currentTemperatureUnit]);

  const handleSwitchChange = () => {
    handleToggleSwitchChange();
  };

  return (
    <div className="switch">
      <input
        className="switch__input"
        type="checkbox"
        name="switch-checkbox"
        checked={isChecked}
        onChange={handleSwitchChange}
        id="switch"
      />
      <label className="switch__label" htmlFor="switch">
        <div className="switch__container">
          <span className="switch__button"></span>
          <span
            className={
              currentTemperatureUnit === "F"
                ? "switch__slider switch__slider-F"
                : "switch__slider switch__slider-C"
            }
          />
          <p
            className={`switch__temp switch__temp-F ${
              currentTemperatureUnit === "F" ? "switch__active" : ""
            }`}
          >
            F
          </p>
          <span
            className={
              currentTemperatureUnit === "C"
                ? "switch__slider switch__slider-F"
                : "switch__slider switch__slider-C"
            }
          />
          <p
            className={`switch__temp switch__temp-C ${
              currentTemperatureUnit === "C" ? "switch__active" : ""
            }`}
          >
            C
          </p>
        </div>
      </label>
    </div>
  );
};

export default ToggleSwitch;
