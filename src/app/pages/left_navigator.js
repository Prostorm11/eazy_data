"use client";

import React, { useState } from "react";
import "../css/left_navigator.css";
import { TbBrandWindowsFilled, TbMessageChatbot } from "react-icons/tb";
import { RiFirstAidKitFill } from "react-icons/ri";
import { CgProfile } from "react-icons/cg";
import { MdBrush } from "react-icons/md";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaUserDoctor } from "react-icons/fa6";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";

import SquaredPressable from "@/app/components/squaredPressable";
import Dashboard from "./dashboard";
import Clients from "./clients";
import Orders from "./orders";
import Packages from "./packages";
import Revenue from "./revenue";
import Profile from "./profile";

export default function LeftNavigator() {
  const [selectedScreen, setSelectedScreen] = useState("Overview");
  const [pressed, setPressed] = useState([true, false, false, false, false, false, false]);
  const [collapsed, setCollapsed] = useState(false); // menu toggle

  const logout = async () => {};

  const handleSelection = (index, screen) => {
    setPressed((prev) => prev.map((_, i) => i === index));
    setSelectedScreen(screen);
  };

  const renderScreen = () => {
    switch (selectedScreen) {
      case "Dashboard":
        return <Dashboard />;
      case "Clients":
        return <Clients />;
      case "Orders":
        return <Orders />;
      case "Packages":
        return <Packages />;
      case "Revenue":
        return <Revenue />;
      case "Profile":
        return <Profile />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="mainboard">
      <div className={`navi ${collapsed ? "collapsed" : ""}`}>
        <div className="navi-header">
          {!collapsed && <p>MedAssist</p>}
          <button className="collapse-btn" onClick={() => setCollapsed(!collapsed)}>
            {collapsed ? <IoChevronForward /> : <IoChevronBack />}
          </button>
        </div>

        <div className="navigators">
          <SquaredPressable
            info={!collapsed ? "Dashboard" : ""}
            icon={<TbBrandWindowsFilled />}
            onClick={() => handleSelection(0, "Dashboard")}
            background={pressed[0] ? "white" : undefined}
            border={pressed[0] ? "2px dashed blue" : undefined}
          />
          <SquaredPressable
            info={!collapsed ? "Clients" : ""}
            icon={<TbMessageChatbot />}
            onClick={() => handleSelection(1, "Clients")}
            background={pressed[1] ? "white" : undefined}
            border={pressed[1] ? "2px dashed blue" : undefined}
          />
          <SquaredPressable
            info={!collapsed ? "Orders" : ""}
            icon={<RiFirstAidKitFill />}
            onClick={() => handleSelection(2, "Orders")}
            background={pressed[2] ? "white" : undefined}
            border={pressed[2] ? "2px dashed blue" : undefined}
          />
          <SquaredPressable
            info={!collapsed ? "Packages" : ""}
            icon={<MdBrush />}
            onClick={() => handleSelection(3, "Packages")}
            background={pressed[3] ? "white" : undefined}
            border={pressed[3] ? "2px dashed blue" : undefined}
          />
          <SquaredPressable
            info={!collapsed ? "Revenue" : ""}
            icon={<FaUserDoctor />}
            onClick={() => handleSelection(4, "Revenue")}
            background={pressed[4] ? "white" : undefined}
            border={pressed[4] ? "2px dashed blue" : undefined}
          />
          
          <SquaredPressable
            info={!collapsed ? "Profile" : ""}
            icon={<CgProfile />}
            onClick={() => handleSelection(6, "Profile")}
            background={pressed[6] ? "white" : undefined}
            border={pressed[6] ? "2px dashed blue" : undefined}
          />
        </div>
      </div>

      <div className="info">
        <div className="topInfo">
          <div>
            <p style={{ fontSize: "28px", fontWeight: "500" }}>{selectedScreen}</p>
          </div>
          <div style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: "20px" }}>
            <button onClick={logout}>Logout</button>
            <p>Name</p>
            <div id="profileIcon">
              <p>D</p>
            </div>
          </div>
        </div>
        {renderScreen()}
      </div>
    </div>
  );
}