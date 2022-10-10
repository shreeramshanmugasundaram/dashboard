import React from "react";
import { useState } from "react";

import "./AdminMain.css";

const data = [
  {
    id: 890,
    name: "Shreeram Shanmugasundaram",
    avg: 90,
    absent: ["2022-10-07", "2022-10-02", "2022-10-11"],
  },
  {
    id: 684,
    name: "Nikhil Patil",
    avg: 93,
    absent: ["2022-10-07", "2022-10-06", "2022-10-10"],
  },
  {
    id: 673,
    name: "Vedika Patil",
    avg: 94,
    absent: ["2022-10-08", "2022-10-06", "2022-10-10"],
  },
  {
    id: 667,
    name: "Gouri Narawade",
    avg: 95,
    absent: ["2022-10-08", "2022-10-06", "2022-10-10"],
  },
  {
    id: 658,
    name: "Mahesh Choudhary",
    avg: 96,
    absent: ["2022-10-08", "2022-10-06", "2022-10-10"],
  },
  {
    id: 696,
    name: "Athrava Kale",
    avg: 96,
    absent: ["2022-10-08", "2022-10-06", "2022-10-10"],
  },
  {
    id: 686,
    name: "Shankar Choudhary",
    avg: 96,
    absent: ["2022-10-08", "2022-10-06", "2022-10-10"],
  },
];

const AdminMain = () => {
  const [searchText, setSearchText] = useState("");
  return (
    <div className="adminMain">
      <div className="adminTitleText">Dashboard</div>

      <div className="adminCards">
        <div className="adminCard">
          <p className="adminTitile">Today</p>
          <p className="adminPercentage">98%</p>
        </div>

        <div className="adminCard">
          <p className="adminTitile">Total Employee</p>
          <p className="adminPercentage">448</p>
        </div>

        <div className="adminCard">
          <p className="adminTitile">Present Employee</p>
          <p className="adminPercentage">402</p>
        </div>

        <div className="adminCard">
          <p className="adminTitile">Absent Employee</p>
          <p className="adminPercentage">46</p>
        </div>
      </div>

      {/* search Bar */}

      <div className="searchBar">
        <input
          onChange={(e) => setSearchText(e.target.value)}
          type="text"
          placeholder="Search : Name, Id"
          value={searchText}
        />

        {/* <button className="searchBtn">Submit</button> */}
        <button
          className="searchBtn"
          onClick={(e) => {
            setSearchText("");
          }}
        >
          Clear
        </button>
      </div>

      {/* Ribbion */}
      <div className="currentLabel">Today - 10/09/2022</div>

      {/* List of Employees */}
      <div className="listItem" style={{ background: "#333", color: "white" }}>
        <div className="eId">ID</div>
        <div className="eName">Name</div>
        <div className="eAvg">Average</div>
      </div>
      <div className="ListofEmployee">
        {/* loop for list */}
        {data
          .filter((val) => {
            if (searchText === "") {
              return val;
            } else if (
              val.name.toLowerCase().includes(searchText.toLowerCase()) ||
              val.id.toString().includes(searchText)
            ) {
              return val;
            }
          })
          .map((e) => {
            return (
              <div className="listItem" key={e.id}>
                <div className="eId">{e.id}</div>
                <div className="eName">{e.name}</div>
                <div className="eAvg">{e.avg}%</div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default AdminMain;
