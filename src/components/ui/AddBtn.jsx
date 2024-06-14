"use client"
import React, { forwardRef, useImperativeHandle, useRef } from "react";

const Circle = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
    >
      <circle
        cx="9"
        cy="9"
        r="9"
        fill="#B92728"
      ></circle>
      <text
        x="9"
        y="10"
        fill="white"
        fontSize="18"
        fontFamily="Arial"
        textAnchor="middle"
        alignmentBaseline="middle"
      >
        +
      </text>
    </svg>
  );
};

const AddBtn = forwardRef((props, ref) => {
  const buttonRef = useRef();

  useImperativeHandle(ref, () => ({
    focus: () => {
      buttonRef.current.focus();
    },
    // Add more methods as needed
  }));

  return (
    <button
      ref={buttonRef}
      className="w-4.5 h-4.5 rounded-full text-white bg-sd-red"
    >
      <Circle />
    </button>
  );
});

AddBtn.displayName = "AddBtn";

export default AddBtn;
