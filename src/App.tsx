import { Navigate, Route, Routes } from "react-router-dom";
import "./App.scss";
import { Login } from "./pages/Login/Login";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
}

export default App;
