import React, { useState } from "react";

export default function SelectBar({ handleSelect, title }) {
  const [value, setValue] = useState("");
  function handleSelectChange(e) {
    e.preventDefault();

    setValue(e.target.value);
    handleSelect(e.target.value);
  }
  return (
    <div className="selectbar">
      <select value={value} onChange={handleSelectChange} className="select">
        <option value="">{title}</option>
        <option value="Africa">Africa</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="Americas">Americas</option>
        <option value="Oceania">Oceania</option>
      </select>
    </div>
  );
}
