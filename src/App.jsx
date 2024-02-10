import { PLP } from "./pages/PLP";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<PLP />} />
      </Routes>
    </>
  );
}

export default App;
