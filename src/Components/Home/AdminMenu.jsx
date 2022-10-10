import React from "react";

import "./AdminMenu.css";

const AdminMenu = () => {
  return (
    <div className="adminMenu">
      {/* company Logo */}
      <div className="CompanyLogo">
        <img
          src="https://www.magna.com/ResourcePackages/HighroadFramework/dist/images/logo_Magna.svg"
          alt="companylogo"
        />
      </div>

      {/* Options */}

      <div className="adminOpt">
        <a href="/">Dashboard</a>
        <a href="/overall">Overall</a>
        <a href="/employees">Employees</a>
        <a href="/today">Today</a>
      </div>
    </div>
  );
};

export default AdminMenu;
