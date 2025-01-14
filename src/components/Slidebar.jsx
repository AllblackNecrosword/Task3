


import React from "react";
import { useDrag } from "react-dnd";

const Slidebar = () => {
  const fields = [
    { id: 1, type: "Header", content: "Header Text" },
    { id: 2, type: "TextInput", placeholder: "Enter text" },
    { id: 3, type: "Checkbox", label: "Choose this" },
    { id: 4, type: "Select", options: ["Option 1", "Option 2", "Option 3"] },
  ];

  return (
    <div className="mt-8">
      <h1 className="text-center text-2xl font-semibold">Fields</h1>
      <div className="flex flex-col gap-y-4 mt-6 justify-center items-center">
        {fields.map((field) => {
          const [, dragRef] = useDrag(() => ({
            type: "field",
            item: field,
          }));

          return (
            <div key={field.id} ref={dragRef}>
              <button className="btn btn-active w-5/6">{field.type}</button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Slidebar;
