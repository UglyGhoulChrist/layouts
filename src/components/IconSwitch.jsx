import React from "react";
import { FaThList, FaTh } from "react-icons/fa";
function IconSwitch({ icon, onSwitch }) {
  return (
    <div>
      {icon === "view_list" && (
        <FaThList onClick={onSwitch} className="icon-switch" />
      )}
      {icon === "view_module" && (
        <FaTh onClick={onSwitch} className="icon-switch" />
      )}
    </div>
  );
}
export default IconSwitch;
