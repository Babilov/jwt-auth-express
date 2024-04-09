import LoginOrRegister from "./components/pages/auth/LoginOrRegister";
import Profile from "./components/pages/profile/Profile";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/profile/:id" Component={Profile} />
        <Route path="/login" Component={LoginOrRegister} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
