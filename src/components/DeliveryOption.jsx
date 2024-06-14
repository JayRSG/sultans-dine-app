"use client";
import React, { useState } from "react";
import RadioButton from "./ui/RadioButton";

export default function DeliveryOption() {
  const options = [
    { id: "delivery", label: "Delivery", value: "delivery" },
    { id: "pickup", label: "Pick Up", value: "pickup" },
    { id: "dinein", label: "Dine In", value: "dinein" },
    // ... other options
  ];

  const [selectedValue, setSelectedValue] = useState("");

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  return (
    <>
      {/* Delivery Mode */}
      <div className="flex flex-row space-x-5 justify-center p-2">
        {options.map((option) => (
          <RadioButton
            key={option.id}
            id={option.id}
            label={option.label}
            name="radioGroup"
            value={option.value}
            checked={selectedValue === option.value}
            onChange={handleChange}
          />
        ))}
      </div>
    </>
  );
}
