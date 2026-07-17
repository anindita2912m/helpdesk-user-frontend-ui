import { NavLink, useNavigate } from "react-router-dom";
import "./Sidebar.css";

function Sidebar() {
    const navigate = useNavigate();
  return (
    <aside className="user-sidebar">
      <h2 className="logo">HelpDesk</h2>

      <nav>
        <NavLink to="/user-dashboard">Dashboard</NavLink>

        <NavLink to="/raise-tickets">Raise Ticket</NavLink>

        <NavLink to="/my-tickets">My Tickets</NavLink>

        <NavLink to="/notifications">Notifications</NavLink>

        <NavLink to="/user-profile">Profile</NavLink>

        <button className="logout-btn" onClick={() => navigate("/login")}> Logout </button>
      </nav>
    </aside>
  );
}

export default Sidebar;