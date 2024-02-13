import { Route, Routes } from "react-router-dom";
import HomeContainer from "./pages/Home/Container/HomeContainer";
import ProfileContainer from "./pages/Profile/Container/ProfileContainer";
import AccountContainer from "./pages/Account/Container/AccountContainer";
import LoginContainer from "./pages/Login/Container/LoginContainer";
import "./config/core.css";
import HeaderContainer from "./components/Header/Container/HeaderContainer";
function App() {
  return (
    <div>
      <HeaderContainer />
      <Routes>
        <Route path="/" element={<HomeContainer />} />
        <Route path="/login" element={<LoginContainer />} />
        <Route path="/account" element={<AccountContainer />} />
        <Route path="/:id/profile" element={<ProfileContainer />} />
      </Routes>
    </div>

  );
}

export default App;
