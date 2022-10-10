import React from "react";

import "./Admin.css";

import AdminMenu from "./AdminMenu";
import AdminMain from "./AdminMain";
import AdminSection from "./AdminSection";

const Admin = () => {
  return (
    <div className="admin">
      <AdminMenu />
      <AdminMain />
      <AdminSection />
    </div>
  );
};

export default Admin;
