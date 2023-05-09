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
        <input
          className="switch__input"
          type="checkbox"
          name="switch-checkbox"
          value={currentTempUnit}
          id="switch"
          onChange={handleToggleSwitch}
          checked={isChecked}
        ></input>
        <span
          className={
            currentTempUnit === "F" ? "switch__slider-F" : "switch__slider-C"
          }
        ></span>
        <p
          className={`switch__temp-F ${
            currentTempUnit === "F" ? "switch__active" : ""
          }`}
        >
          F
        </p>
        <p
          className={`switch__temp-C ${
            currentTempUnit === "C" ? "switch__active" : ""
          }`}
        >
          C
        </p>
      </div>
    </div>
  );
};

export default Switch;

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
