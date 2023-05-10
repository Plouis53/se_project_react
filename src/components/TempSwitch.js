import CurrentTempUnitContext from "../contexts/CurrentTempUnitContext";
import { useContext, useEffect, useState } from "react";
import toggleSwitch from "../blocks/Switch.css";

const ToggleSwitch = () => {
  const { currentTempUnit, handleToggleSwitch } = useContext(
    CurrentTempUnitContext
  );

  const [isChecked, setIsChecked] = useState(currentTempUnit === "C");
  useEffect(() => setIsChecked(currentTempUnit === "C"), [currentTempUnit]);

  return (
    <div className="switch">
      <input
        className="switch__input"
        type="checkbox"
        name="switch-checkbox"
        value={currentTempUnit}
        id="switch"
        onChange={handleToggleSwitch}
        checked={isChecked}
      ></input>
      <label className="switch__label">
        <span className="switch__button">
          <div className="switch__container">
            <span
              className={
                currentTempUnit === "F"
                  ? "switch__slider-F"
                  : "switch__slider-C"
              }
            ></span>
            <p
              className={`switch__F ${
                currentTempUnit === "F" ? "switch__active-F" : ""
              }`}
            >
              F
            </p>
            <span
              className={
                currentTempUnit === "C"
                  ? "switch__slider-F"
                  : "switch__slider-C"
              }
            ></span>
            <p
              className={`switch__C ${
                currentTempUnit === "C" ? "switch__active-C" : ""
              }`}
            >
              C
            </p>
            {/* <span
              className={
                currentTempUnit === "F"
                  ? "switch__slider-F"
                  : "switch__slider-C"
              }
            ></span>
            <p
              className={`switch__temp-F ${
                currentTempUnit === "F" ? "switch__active-F" : ""
              }`}
            >
              F
            </p>
            <span
              className={
                currentTempUnit === "C"
                  ? "switch__slider-F"
                  : "switch__slider-C"
              }
            ></span>
            <p
              className={`switch__temp-C ${
                currentTempUnit === "C" ? "switch__active-C" : ""
              }`}
            >
              C
            </p> */}
          </div>
        </span>
      </label>
    </div>
  );
};

export default ToggleSwitch;

//   return (
//     <div className="switch">
//       <div className="switch__container">
//         <label className="switch__label">
//           <input
//             className="switch__input"
//             type="checkbox"
//             name="switch-checkbox"
//             value={currentTempUnit}
//             id="switch"
//             onChange={handleToggleSwitch}
//             checked={isChecked}
//           />
//           <span className="switch__button" />
//         </label>
//       </div>
//     </div>
//   );
// };
