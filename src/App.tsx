import { Route, Routes } from "react-router-dom";
import HomeContainer from "./pages/Home/Container/HomeContainer";
import ProfileContainer from "./pages/Profile/Container/ProfileContainer";
import AccountContainer from "./pages/Account/Container/AccountContainer";
import LoginContainer from "./pages/Login/Container/LoginContainer";
import "./config/core.css";
import HeaderContainer from "./components/Header/Container/HeaderContainer";
import SidebarContainer from "./components/Sidebar/Container/SidebarContainer";
import VideoUpload from "./pages/VideoUpload/VideoUpload";
import VideoUploadContainer from "./pages/VideoUpload/Container/VideoUploadContainer";
import VideoRoutes from "./components/routes/VideoRoutes";
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

        {/* video routers */}
        <Route path='/video/*' element={<VideoRoutes/>}/>
      </Routes>
    </>

  );
}

export default App;
