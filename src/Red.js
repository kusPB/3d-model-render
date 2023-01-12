import React from "react";
import { NavLink, useHistory } from "react-router-dom";
export default function Blue() {
  return (
    <div>
      TEST Red
      <NavLink to="/blue"> RENDER </NavLink>
    </div>
  );
}
