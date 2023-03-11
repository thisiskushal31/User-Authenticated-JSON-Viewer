import Home from "./Pages/Home/Home"; // Json Viewer
import Login from "./Pages/Form/Login"; // Login Form
import Signup from "./Pages/Form/Signup"; // Signup Form

import "./Styles/main.scss";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
