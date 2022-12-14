import logo from './logo.svg';
import './App.css';
import About from "./Components/About";
import Water from "./Components/Water";
import {Route, Routes} from "react-router-dom";
import Navbar from './Components/Navbar';
function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route exact path="/" element={ <About/> } />
        <Route exact path="/about" element={ <About/> } />
        <Route exact path="/water" element={ <Water/> } />
      </Routes>
    </div>
  );
}

export default App;
