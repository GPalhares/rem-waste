import React from "react";

function Tag({ condition, text, trueClass, falseClass }) {
  return (
    <p
      className={`text-[10px] px-2 py-0.5 rounded-md font-medium transition-colors duration-300 ${
        condition ? trueClass : falseClass
      }`}
    >
      {text}
    </p>
  );
}

export default function Tags({ skip }) {
  return (
    <div className="flex flex-wrap gap-2">
      <Tag
        condition={skip.allowed_on_road}
        text={skip.allowed_on_road ? "Allowed on Road" : "Not Allowed on Road"}
        trueClass="bg-green-50 text-green-600"
        falseClass="bg-red-50 text-red-500"
      />
      <Tag
        condition={skip.allows_heavy_waste}
        text={skip.allows_heavy_waste ? "Allows Heavy Waste" : "No Heavy Waste"}
        trueClass="bg-green-50 text-green-600"
        falseClass="bg-red-50 text-red-500"
      />
    </div>
  );
}
