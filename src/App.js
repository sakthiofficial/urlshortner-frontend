import logo from './logo.svg';
import './App.css';
import { Urlshortner } from './Urlshortner';
import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";
import { Sample, Website } from './Website';
import { useEffect, useState } from 'react';
function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Urlshortner />} />
          <Route path="/:url" element={<Sample />}>


          </Route>
        </Routes>
      </BrowserRouter>


    </div>
  );
}

export default App;
