import React, { useState } from "react";
import { AiOutlineMenuFold } from "react-icons/ai";
import Navigation from "./Navigation";

function Menu() {
  return (
    <div>
      <input type="checkbox" id="dropdown_checkbox" />
      <div className="headings">
        <label class="dropdown_trigger menu" for="dropdown_checkbox"></label>
      </div>
        <Navigation />
    </div>
  );
}

export default Menu;
