import { BrowserRouter, Routes, Route } from "react-router-dom";

import Landingpage from "./pages/Landingpage";
import Home from "./pages/Home";
import List from "./pages/List";

import Login from "./pages/Login";
import Admin from "./pages/Admin";
import Insert from "./pages/Insert"; // ✅ ADD THIS
import Desc from "./pages/Desc";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* PUBLIC ROUTES */}
        <Route path="/" element={<Landingpage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/list" element={<List />} />
        <Route path="/desc/:id" element={<Desc />} />

        {/* ADMIN AUTH */}
        <Route path="/login" element={<Login />} />
        <Route path="/admin" element={<Admin />} />

        {/* INSERT PAGE */}
        <Route path="/insert" element={<Insert />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;