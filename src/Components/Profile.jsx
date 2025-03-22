import React, { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Notes.css";
import { ContextApi } from "./Context/Context";

const Profile = () => {
  const { globaldata, setGlobaldata } = useContext(ContextApi);
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const [user, setUser] = useState({
    name: "Guest User",
    email: "guest@example.com",
  });

  useEffect(() => {
    if (globaldata?.email) {
      const extractedName = globaldata.email.split("@")[0].replace(/[0-9]/g, "");
      const formattedName = extractedName.charAt(0).toUpperCase() + extractedName.slice(1);

      setUser({
        name: formattedName || "U",
        email: globaldata.email,
      });
    } else {
      setUser({
        name: "Guest User",
        email: "guest@example.com",
      });
    }
  }, [globaldata]);

  const handleSwitchUser = () => {
    setGlobaldata(""); 
    navigate("/login"); 
  };
  

  return (
    <div className="profile-container">
      <div className="profile-avatar" onClick={() => setMenuOpen(!menuOpen)}>
        {user.name.charAt(0).toUpperCase()}
      </div>

      {menuOpen && (
        <div className="profile-dropdown">
          <p className="profile-name"><strong>{user?.name}</strong></p>
          <p className="profile-email">{user.email}</p>
          <button className="switch-user-btn" onClick={handleSwitchUser}>
            Switch User
          </button>
        </div>
      )}
    </div>
  );
};

export default Profile;
