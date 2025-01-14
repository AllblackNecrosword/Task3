import React from "react";

export const TextInput = ({ id, placeholder }) => (
  <input id={id} className="border p-2 mt-2 w-full" placeholder={placeholder} />
);

export const Select = ({ id, options }) => (
  <select id={id} className="border p-2 mt-2 w-full">
    {options.map((option, index) => (
      <option key={index}>{option}</option>
    ))}
  </select>
);

export const RadioButton = ({ id, name, label }) => (
  <label className="flex items-center mt-2">
    <input type="radio" id={id} name={name} className="mr-2" />
    {label}
  </label>
);

export const Header = ({ id, content }) => (
  <h1 id={id} className="text-2xl font-bold">
    {content}
  </h1>
);
