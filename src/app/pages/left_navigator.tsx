"use client";


import React, { useState } from "react";
import "../css/Dashboard.css";
import { TbBrandWindowsFilled, TbMessageChatbot } from "react-icons/tb";
import { RiFirstAidKitFill } from "react-icons/ri";
import { CgProfile } from "react-icons/cg";
import { MdBrush } from "react-icons/md";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaUserDoctor } from "react-icons/fa6";


import SquaredPressable from "@/app/components/squaredPressable";
import Dashboard from "./dashboard";
import Clients from "./clients";
import Orders from "./orders";
import Packages from "./packages";
import Revenue from "./revenue";
import Profile from "./profile";




export default function LeftNavigator() {
  const [selectedScreen, setSelectedScreen] = useState("Overview"); // Default screen
  const [pressed,setPressed]=useState([true,false,false,false,false,false,false])
  // Function to render the selected screen

  const logout = async () => {
   
  };
  const handleSelection = (index: number, screen: string) => {
    setPressed(prev => prev.map((_, i) => i === index)); // Update pressed states
    setSelectedScreen(screen); // Update selected screen
  };
  const renderScreen = () => {
    switch (selectedScreen) {
      case "dashboard":
        return <Dashboard />;
      case "clients":
        return <Clients />;
      case "orders":
        return <Orders />;
     
      case "Map":
        return <Packages />;
      case "revenue":
        return <Revenue />;
      case "Profile":
        return <Profile />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="mainboard">
      <div className="navi">
        <p>MedAssist</p>
        <div className="navigators">
        <SquaredPressable
            info="Overview"
            icon={<TbBrandWindowsFilled />}
            onClick={() => handleSelection(0, "Overview")}
            background={pressed[0] ? "white" : undefined}
            border={pressed[0] ? "2px dashed blue" : undefined} icon_color={""} pressed={false}          />
          <SquaredPressable
            info="Chatbot"
            icon={<TbMessageChatbot />}
            onClick={() => handleSelection(1, "Chatbot")}
            background={pressed[1] ? "white" : undefined}
            border={pressed[1] ? "2px dashed blue" : undefined} icon_color={""} pressed={false}          />
          <SquaredPressable
            info="Symptoms Checker"
            icon={<RiFirstAidKitFill />}
            onClick={() => handleSelection(2, "Symptoms Checker")}
            background={pressed[2] ? "white" : undefined}
            border={pressed[2] ? "2px dashed blue" : undefined} icon_color={""} pressed={false}          />
          <SquaredPressable
            info="Medication Info"
            icon={<MdBrush />}
            onClick={() => handleSelection(3, "Medication Info")}
            background={pressed[3] ? "white" : undefined}
            border={pressed[3] ? "2px dashed blue" : undefined} icon_color={""} pressed={false}          />
          <SquaredPressable
            info="Contact Specialist"
            icon={<FaUserDoctor />}
            onClick={() => handleSelection(4, "Appointment")}
            background={pressed[4] ? "white" : undefined}
            border={pressed[4] ? "2px dashed blue" : undefined} icon_color={""} pressed={false}          />
          <SquaredPressable
            info="Nearby Clinics"
            icon={<FaMapMarkerAlt />}
            onClick={() => handleSelection(5, "Map")}
            background={pressed[5] ? "white" : undefined}
            border={pressed[5] ? "2px dashed blue" : undefined} icon_color={""} pressed={false}          />
          <SquaredPressable
            info="Profile"
            icon={<CgProfile />}
            onClick={() => handleSelection(6, "Profile")}
            background={pressed[6] ? "white" : undefined}
            border={pressed[6] ? "2px dashed blue" : undefined} icon_color={""} pressed={false}          />
        </div>
      </div>
      <div className="info">
        <div className="topInfo">
          <div>
            <p style={{fontSize:"28px",fontWeight:"500"}}>{selectedScreen}</p>
          </div>
          <div style={{display:"flex" ,flexDirection:"row",alignItems:"center",gap:"20px"}}>
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
