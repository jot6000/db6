import './App.css';

import Home from './Home';
import Part1 from './Part1';
import Part2 from './Part2';

import 
  BrowserRouter,
  Routes,
  Route
 from "react-router-dom";

function App() {
  return (
    <div className="App">
       <BrowserRouter>
       <h1>DB6</h1>
        <Routes>
          <Route pth="/" element={<Home />}>
          <Route pth="/part1" element={<Part1 />}>
          <Route pth="/part2" element={<Part2 />}>
          <Route pth="/congrats" element={<h1>Congrats, you made it!!!<h1>}>
        </Routes>
      </BrowserRouter>
    </div>
  )
}
