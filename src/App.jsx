
import React from "react";
import Builder from "./Pages/Builder";
import Home from "./Pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

function App() {
  return (
    <DndProvider backend={HTML5Backend}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/FormBuilder" element={<Builder />} />
        </Routes>
      </BrowserRouter>
    </DndProvider>
  );
}

export default App;
