import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/Home";

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<HomePage />} />
    </Routes>
  );
}

export default App;
