import React, { useContext, useEffect, useState } from "react";
import CurrentTempUnitContext from "../contexts/CurrentTempUnitContext";
import "../blocks/Switch.css";

const ToggleSwitch = () => {
  const { currentTempUnit, handleToggleSwitch } = useContext(
    CurrentTempUnitContext
  );

  const [isChecked, setIsChecked] = useState(currentTempUnit === "C");

  useEffect(() => {
    setIsChecked(currentTempUnit === "C");
  }, [currentTempUnit]);

  const handleSwitchChange = () => {
    setIsChecked(!isChecked);
    handleToggleSwitch();
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
        <span className="switch__button">
          <div className="switch__container">
            <span
              className={
                currentTempUnit === "F"
                  ? "switch__slider switch__slider-F"
                  : "switch__slider switch__slider-C"
              }
            />
            <p
              className={`switch__temp switch__temp-F ${
                currentTempUnit === "F" ? "switch__active" : ""
              }`}
            >
              F
            </p>
            <span
              className={
                currentTempUnit === "C"
                  ? "switch__slider switch__slider-F"
                  : "switch__slider switch__slider-C"
              }
            />
            <p
              className={`switch__temp switch__temp-C ${
                currentTempUnit === "C" ? "switch__active" : ""
              }`}
            >
              C
            </p>
          </div>
        </span>
      </label>
    </div>
  );
};

export default ToggleSwitch;
