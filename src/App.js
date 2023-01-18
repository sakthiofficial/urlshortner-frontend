import logo from './logo.svg';
import './App.css';
import { Urlshortner } from './Urlshortner';
import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";
import { Website } from './Website';
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
{/* */ }
function Sample() {
  const { url } = useParams();
  const [longurl, setlongurl] = useState("");
  const getUrl = async () => {
    const dt = await fetch(`http://localhost:4000/${url}`);
    const val = await dt.json()
    setlongurl(val.longurl)
  };
  useEffect(() => getUrl, []);
  window.location.href = longurl;
  console.log(longurl);
  console.log(url);
  return (
    <h1>Iam Sample</h1>
  )
}
export default App;
