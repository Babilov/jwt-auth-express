import LoginOrRegister from "./components/auth/LoginOrRegister";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" Component={LoginOrRegister} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
