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
          <Route path="/sample" element={<Sample />}>


          </Route>
        </Routes>
      </BrowserRouter>


    </div>
  );
}
{/* */ }
function Sample() {
  return (
    <h1>Iam Sample</h1>
  )
}
export default App;
