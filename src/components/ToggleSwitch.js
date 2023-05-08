import CurrentTempUnitContext from "../contexts/CurrentTempUnitContext";
import Switch from "../blocks/Switch.css";
import { useContext, useEffect, useState } from "react";

const Switch = () => {
  const { currentTempUnit, handleToggleSwitch } = useContext(
    CurrentTempUnitContext
  );

  const [isChecked, setIsChecked] = useState(currentTempUnit === "C");
  useEffect(() => setIsChecked(currentTempUnit === "C"), [currentTempUnit]);

  return (
    <div className="switch">
      <div className="switch__container">
        <label className="switch__label">
          <input
            className="switch__input"
            type="checkbox"
            name="switch-checkbox"
            value={currentTempUnit}
            id="switch"
            onChange={handleToggleSwitch}
            checked={isChecked}
          />
          <span className="switch__button" />
        </label>
      </div>
    </div>
  );
};

export default Switch;
