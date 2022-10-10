import React from "react";

import "./AdminSection.css";
const AdminSection = () => {
  return (
    <div className="adminSection">
      <div className="adminFilterText">Filter</div>

      <div className="sortByDates">
        <div className="dateInput">
          <label htmlFor="from">From</label>
          <input
            type="date"
            id="from"
            name="from"
            onChange={(e) => {
              console.log(e.target.value);
            }}
          />
        </div>

        <div className="dateInput">
          <label htmlFor="from">To</label>
          <input type="date" id="from" name="from" />
        </div>
        <button className="searchBtn" style={{ margin: "1rem" }}>
          Submit
        </button>
      </div>
    </div>
  );
};

export default AdminSection;
