import logo from './logo.svg';
import './App.css';
import { Urlshortner } from './Urlshortner';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Website } from './Website';
function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Urlshortner />} />
          <Route path="/:url" element={<Website />}>


          </Route>
        </Routes>
      </BrowserRouter>


    </div>
  );
}
{/* */ }
export default App;
