import React from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";
import SidebarData from "./SidebarData";
import SubMenu from "./SubMenu";

const Sidebar = () => {
  return (
    <div className="sidebar h-screen">

      <Link to={"/dashboard"}>
      <div className="flex items-center dashboardlogo">
        <span className=" pt-2 pr-1 text-black">
          <ion-icon name="grid-outline"></ion-icon>
        </span>
        <h1>Dashboard</h1>
      </div>
      </Link>

      {SidebarData.map((menu, index) => (
        <SubMenu item={menu} key={index}></SubMenu>
      ))}
    </div>
  );
};

export default Sidebar;
