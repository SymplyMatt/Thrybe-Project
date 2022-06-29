import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./components/dashboard/Dashboard";
import Games from "./components/games/Games";
import Login from "./components/login/Login";
import Plans from "./components/plans/Plans";
import Rooms from "./components/rooms/Rooms";
import Seeks from "./components/seeks/Seeks";
import Settings from "./components/settings/Settings";
import Store from "./components/store/Store";
import Support from "./components/support/Support";
import Talks from "./components/talks/Talks";
import Users from "./components/users/Users";
import Wallet from "./components/wallet/Wallet";
import Roles from "./components/roles/Roles";
import ResetPassword from "./components/reset-password/ResetPassword";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [page, setPage] = useState("login");
  const [showNav, setShowNav] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);
  const [userDetails, setUserDetails] = useState("");

  return (
    <Router>
      <Routes>
        <Route
          path='/'
          element={
            <Dashboard
              page={page}
              setPage={setPage}
              showNav={showNav}
              setShowNav={setShowNav}
              userDetails={userDetails}
              setUserDetails={setUserDetails}
            />
          }
        />
        <Route
          path='/login'
          element={
            <Login
              page={page}
              setPage={setPage}
              email={email}
              setEmail={setEmail}
              password={password}
              setPassword={setPassword}
              remember={remember}
              setRemember={setRemember}
              setUserDetails={setUserDetails}
            />
          }
        />
        <Route
          path='/dashboard'
          element={
            <Dashboard
              page={page}
              setPage={setPage}
              showNav={showNav}
              setShowNav={setShowNav}
              userDetails={userDetails}
              setUserDetails={setUserDetails}
            />
          }
        />
        <Route
          path='/users'
          element={
            <Users
              page={page}
              setPage={setPage}
              showNav={showNav}
              setShowNav={setShowNav}
            />
          }
        />
        <Route
          path='/talks'
          element={
            <Talks
              page={page}
              setPage={setPage}
              showNav={showNav}
              setShowNav={setShowNav}
            />
          }
        />
        <Route
          path='/seeks'
          element={
            <Seeks
              page={page}
              setPage={setPage}
              showNav={showNav}
              setShowNav={setShowNav}
            />
          }
        />
        <Route
          path='/Rooms'
          element={
            <Rooms
              page={page}
              setPage={setPage}
              showNav={showNav}
              setShowNav={setShowNav}
            />
          }
        />
        <Route
          path='/Store'
          element={
            <Store
              page={page}
              setPage={setPage}
              showNav={showNav}
              setShowNav={setShowNav}
            />
          }
        />
        <Route
          path='/games'
          element={
            <Games
              page={page}
              setPage={setPage}
              showNav={showNav}
              setShowNav={setShowNav}
            />
          }
        />
        <Route
          path='/wallet'
          element={
            <Wallet
              page={page}
              setPage={setPage}
              showNav={showNav}
              setShowNav={setShowNav}
            />
          }
        />
        <Route
          path='/settings'
          element={
            <Settings
              page={page}
              setPage={setPage}
              showNav={showNav}
              setShowNav={setShowNav}
            />
          }
        />
        <Route
          path='/support'
          element={
            <Support
              page={page}
              setPage={setPage}
              showNav={showNav}
              setShowNav={setShowNav}
            />
          }
        />
        <Route
          path='/roles'
          element={
            <Roles
              page={page}
              setPage={setPage}
              showNav={showNav}
              setShowNav={setShowNav}
            />
          }
        />
        <Route
          path='/plans'
          element={
            <Plans
              page={page}
              setPage={setPage}
              showNav={showNav}
              setShowNav={setShowNav}
            />
          }
        />
        <Route
          path='/reset-password'
          element={<ResetPassword page={page} setPage={setPage} />}
        />
        <Route
          path='*'
          element={<ResetPassword page={page} setPage={setPage} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
