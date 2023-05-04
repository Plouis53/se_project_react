import CurrentTempUnitContext from "../contexts/CurrentTempUnitContext";
import Switch from "../blocks/Switch.css";
import { useContext, useEffect, useState } from "react";

const Switch = () => {
  const { currentTempUnit, handleToggleSwitch } = useContext(
    CurrentTempUnitContext
  );

  const [isChecked, setIsChecked] = useState(currentTempUnit === "C");
  useEffect(
    () => setIsChecked(currentTempUnit === "C"),
    [CurrentTempUnitContext]
  );
};
