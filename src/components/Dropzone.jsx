
import React, { useState } from "react";
import { useDrop } from "react-dnd";


const Dropzone = () => {
  const [elements, setElements] = useState([]);
  const [draggedItem, setDraggedItem] = useState(null);


  const [, dropRef] = useDrop(() => ({
    accept: "field",
    drop: (item) => {
      setElements((prev) => [...prev, item]);
      setDraggedItem(null); // Reset dragged item after drop
    },
    hover: (item) => {
      setDraggedItem(item); // Set dragged item for preview
    },
  }));

  const handleClear = () => {
    setElements([]);
  };



  // Custom drag layer to track dragged item and show preview
  const renderPreview = (item) => {
    switch (item.type) {
      case "Header":
        return <h1 className="text-2xl font-bold">{item.content}</h1>;
      case "TextInput":
        return (
          <input
            className="border p-2 mt-2 w-1/2"
            placeholder={item.placeholder}
          />
        );
      case "Checkbox":
        return (
          <label className="flex items-center mt-2">
            <input type="checkbox" className="mr-2" />
            {item.label}
          </label>
        );
      case "Select":
        return (
          <select className="border p-2 mt-2 w-1/2">
            {item.options.map((option, i) => (
              <option key={i}>{option}</option>
            ))}
          </select>
        );
      default:
        return null;
    }
  };

  return (
    <div className="flex justify-center gap-8">
      <div
        ref={dropRef}
        className="m-6 border-dashed border-2 border-gray-400 flex flex-col items-center justify-start"
        style={{ height: "calc(100vh - 3rem)", width: 500 }}
      >
        {elements.length === 0 && (
          <div className="text-center my-auto">
            Drop a field from the left to this area
          </div>
        )}
        {elements.map((element, index) => {
          switch (element.type) {
            case "Header":
              return (
                <h1
                  key={index}
                  className="text-2xl font-bold"
                  onClick={() => {
                    setDraggedItem(element);
                    setIsModalOpen(true);
                  }}
                >
                  {element.content}
                </h1>
              );
            case "TextInput":
              return (
                <input
                  key={index}
                  className="border p-2 mt-2 w-1/2"
                  placeholder={element.placeholder}
                  onClick={() => {
                    setDraggedItem(element);
                    setIsModalOpen(true);
                  }}
                />
              );
            case "Checkbox":
              return (
                <label
                  key={index}
                  className="flex items-center mt-2"
                  onClick={() => {
                    setDraggedItem(element);
                    setIsModalOpen(true);
                  }}
                >
                  <input type="checkbox" className="mr-2" />
                  {element.label}
                </label>
              );
            case "Select":
              return (
                <select
                  key={index}
                  className="border p-2 mt-2 w-1/2"
                  onClick={() => {
                    setDraggedItem(element);
                    setIsModalOpen(true);
                  }}
                >
                  {element.options.map((option, i) => (
                    <option key={i}>{option}</option>
                  ))}
                </select>
              );
            default:
              return null;
          }
        })}

        <button
          onClick={handleClear}
          className="absolute bottom-2 right-2 bg-red-500 text-white py-1 px-4 rounded hover:bg-red-600"
        >
          Clear
        </button>
      </div>

      <div
        className="m-6 border-2 border-gray-400 flex flex-col items-center justify-start"
        style={{ height: "calc(100vh - 3rem)", width: 500 }}
      >
        <h1 className="text-3xl font-bold bg-slate-600 w-full text-center text-white p-2">Preview</h1>
        <div className="mt-4">
          {draggedItem && (
            <div className="border p-4">
              {renderPreview(draggedItem)}
            </div>
          )}
          {elements.length === 0 && (
            <p className="text-center">No fields added to the preview.</p>
          )}
          {elements.length > 0 && (
            <div>
              {elements.map((element, index) => renderPreview(element))}
            </div>
          )}
        </div>
      </div>

      {/* Show modal for customization */}
   
    </div>
  );
};

export default Dropzone;




