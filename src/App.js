import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import TopBar from './components/topbar/TopBar';
import Login from "./components/login/Login";
import Home from "./components/home/Home";
import Register from "./components/register/Register";
import Folder from "./components/folder/Folder";
import Interest from "./components/interest/Interest";
import { InterestData } from "./components/interestData/InterestData";

const App = () => {
  return (
    <div className="App">
      <div>
        <TopBar />
        <Routes>
          <Route path="/" element={<Home />} /> 
          <Route path="/Login" element={<Login />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/Interest" element={<Interest slides={InterestData} />} />
        </Routes>
        <Folder/>
      </div>
    </div>
  );
}
export default App;
