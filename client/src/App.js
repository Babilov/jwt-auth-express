import LoginOrRegister from "./components/auth/LoginOrRegister";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Profile from "./components/profile/Profile";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/profile" Component={Profile} />
        <Route path="/login" Component={LoginOrRegister} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
