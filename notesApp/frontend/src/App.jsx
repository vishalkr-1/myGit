import Login from "./components/Login";
import Notes from "./components/Notest";
import Registration from "./components/Registration";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="*" element={<h1>404 - Page Not Found</h1>} />
        <Route path="/register" element={<Registration />} />
        <Route path="/login" element={<Login />} />
        <Route path="/notes" element={<Notes />} />
      </Routes>
    </>
  );
}

export default App;
