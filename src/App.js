import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/Home";
import Header from "./Components/Header/Header";
import "./index.css";

function App() {
  return (
    <div className="maincontainer">
      <Header />
      <Routes>
        <Route exact path="/" element={<HomePage />} />
      </Routes>
    </div>
  );
}

export default App;
