import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import UserDashboard from "./user-frontend/Dashboard/UserDashboard";
import MyTickets from "./user-frontend/pages/MyTickets";
import RaiseTickets from "./user-frontend/pages/RaiseTickets";
import UserProfile from "./user-frontend/pages/UserProfile";
import Notifications from "./user-frontend/pages/Notifications";
import Login from "./user-frontend/auth/Login";
import Register from "./user-frontend/auth/Register";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Redirect root to dashboard */}
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/user-dashboard" element={<UserDashboard />} />
        <Route path="/my-tickets" element={<MyTickets />} />
        <Route path="/raise-tickets" element={<RaiseTickets />} />
        <Route path="/user-profile" element={<UserProfile />} />
        <Route path="/notifications" element={<Notifications />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;