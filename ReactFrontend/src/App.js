import Login from "./Pages/Form/Signin"; // Login Form
import Signup from "./Pages/Form/Signup"; // Signup Form
import Workspace from "./Pages/ProductLayout/Workspace"; //Product Design
import Home from "./Pages/Home/Home"; // Json Viewer
import Editor from "./Pages/Home/Editor"; // Editor Viewer

import "./Styles/main.scss";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="container">
          <Routes>
            <Route path="/" element={<Workspace />} >
              <Route path="/" element={<Home />} />
              <Route path="/editor" element={<Editor />} />
            </Route>
            <Route path="/signin" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
