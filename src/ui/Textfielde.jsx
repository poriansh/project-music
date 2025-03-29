import React from "react";

function Textfielde({label, value, onChange, name}) {
  return (
    <div className="relative w-full">
      <label
        htmlFor={name}
        className="absolute left-2 top-0 translate-y-[-50%] bg-white px-1 text-gray-500 text-sm"
      >
        {label}
      </label>
      <input
        type="text"
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        className="w-full px-2 py-2 border border-gray-300 rounded-lg focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none"
      />
    </div>
  );
}

export default Textfielde;
