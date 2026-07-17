import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import "./UserLayout.css";

function UserLayout({ children }) {
  return (
    <div className="user-layout">
      <Sidebar />

      <div className="user-main">
        <Navbar />

        <main className="user-content">
          {children}
        </main>
      </div>
    </div>
  );
}

export default UserLayout;