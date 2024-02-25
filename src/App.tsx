import { Route, Routes } from "react-router-dom";
import HomeContainer from "./pages/Home/Container/HomeContainer";
import ProfileContainer from "./pages/Profile/Container/ProfileContainer";
import AccountContainer from "./pages/Account/Container/AccountContainer";
import LoginContainer from "./pages/Login/Container/LoginContainer";
import HeaderContainer from "./components/Header/Container/HeaderContainer";
import SidebarContainer from "./components/Sidebar/Container/SidebarContainer";
import VideoRoutes from "./components/routes/VideoRoutes";
import AuthEditContainer from "./pages/AuthEdit/Container/AuthEditContainer";
import "./config/core.css";

function App() {
  return (
    <>
      <HeaderContainer />
      <SidebarContainer />
      <Routes>
        <Route path="/" element={<HomeContainer />} />
        <Route path="/login" element={<LoginContainer />} />
        <Route path="/account" element={<AccountContainer />} />
        <Route path="/:id/profile" element={<ProfileContainer />} />
        <Route path="/:id/profile/edit" element={<AuthEditContainer />} />


        {/* video routers */}
        <Route path='/video/*' element={<VideoRoutes />} />
      </Routes>
    </>

  );
}

export default App;
