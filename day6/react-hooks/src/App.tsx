import { BrowserRouter, Route, Routes } from "react-router-dom";
import UseStatePage from "./pages/UseStatePage";
import UseEffectpage from "./pages/UseEffectpage";
import UseRefPage from "./pages/UseRefPage";
import UseMemoPage from "./pages/UseMemoPage";
import UseContextPage from "./pages/UseContextPage";
import UseReducerPage from "./pages/UseReducerPage";
import UseCallbackPage from "./pages/UseCallbackPage";
import UseCustomHookkPage from "./pages/UseCustomHookPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/useState" element={<UseStatePage />}/>
          <Route path="/useEffect" element={<UseEffectpage />}/>
          <Route path="/useRef" element={<UseRefPage />}/>
          <Route path="/useMemo" element={<UseMemoPage />}/>
          <Route path="/useContext" element={<UseContextPage />}/>
          <Route path="/useReducer" element={<UseReducerPage />}/>
          <Route path="/useCallback" element={<UseCallbackPage />}/>
          <Route path="/useCustomHook" element={<UseCustomHookkPage />}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
