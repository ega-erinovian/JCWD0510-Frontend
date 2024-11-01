import { Route, Routes } from "react-router-dom";
import NetworkCall from "./pages/NetworkCall";
import Formik from "./pages/Formik";

function App() {
  return (
    <>
      <Routes>
        <Route path="/network-call" element={<NetworkCall />} />
        <Route path="/formik" element={<Formik />} />
      </Routes>
    </>
  );
}

export default App;
