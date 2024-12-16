import React from "react";
import { Chip } from "@nextui-org/react";

const features = [
  "Adaptive flavor profile that evolves with each sip",
  "Zero-calorie natural sweetness",
  "Enhances mental clarity and focus",
  "Sustainably sourced ingredients",
];

const FeatureList = () => (
  <div className="space-y-4">
    <h2 className="font-semibold text-gray-900">What makes it special:</h2>
    <div className="flex flex-wrap gap-2">
      {features.map((feature) => (
        <Chip
          key={feature}
          variant="flat"
          className="text-sm text-primary-gray bg-blue-100/50"
        >
          {feature}
        </Chip>
      ))}
    </div>
  </div>
);

export default FeatureList;
