import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Vcci from "./components/Vcci.jsx/Vcci";
import Step from "./components/Step/Step";
import SuccessfulVcci from "./components/SuccessfulVcci/SuccessfulVcci";
import ErrorVcci from "./components/ErrorVcci/ErrorVcci";
function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Vcci />}></Route>
        <Route path='/step' element={<Step />}></Route>
        <Route path='/successfull' element={<SuccessfulVcci />}></Route>
        <Route path='/error' element={<ErrorVcci />}></Route>
      </Routes>
    </>
  );
}

export default App;
