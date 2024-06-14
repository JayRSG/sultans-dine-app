"use client";

const RadioButton = ({ id, label, name, value, checked, onChange }) => {
  return (
    <div className="flex items-center">
      {/* colored overlay over selection */}
      <span
        onClick={() => {
          document.getElementById(id).click();
        }}
        className={`w-4.5 h-[18px] mr-1 rounded-full shadow-option-outline border border-sd-bt-text-gray ${
          checked ? "bg-sd-yellow" : "bg-sd-white"
        }`}
      />

      {/* radio button */}
      <input
        type="radio"
        id={id}
        name={name}
        value={value}
        checked={checked}
        onChange={onChange}
        className="focus:ring-1 focus:ring-offset-1 focus:ring-indigo-500 hidden"
      />
      <label
        htmlFor={id}
        className="text-gray-700 mr-2"
      >
        {label}
      </label>
    </div>
  );
};

export default RadioButton;
