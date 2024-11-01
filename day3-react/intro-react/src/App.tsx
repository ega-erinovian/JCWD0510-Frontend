import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import Portofolio from "./pages/Portofolio";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Home />} path="/" />
          <Route element={<Profile />} path="/profile" />
          <Route element={<Contact />} path="/contact" />
          <Route element={<Portofolio />} path="/portofolio" />

          {/* NotFound akan terbuka ketika path tidak ketemu */}
          <Route element={<NotFound />} path="*" />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
