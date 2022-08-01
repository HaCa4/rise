import React from "react";

type GenericProps = {
  category: string;
};

const GenericPrioritySpan: React.FC<GenericProps> = ({ category }: GenericProps) => {
  return (
    <p
      className={`priority-${
        category === "1" ? "urgent" : category === "2" ? "regular" : "trivial"
      }`}
    >
      {category === "1" ? "Urgent" : category === "2" ? "Regular" : "Trivial"}
    </p>
  );
};

export default GenericPrioritySpan;
