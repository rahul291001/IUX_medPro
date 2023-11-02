import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  FaChartLine,
  FaExclamationCircle,
  FaBell,
  FaFileAlt,
} from "react-icons/fa";
import { Profile } from "./profile.jsx";
import "../styles/sidebar.css";
import myImage from "../image/jassan.png";

const Sidebar = () => {
  const location = useLocation();

  return (
    <>
      <aside>
        <Profile />
        <div className="sidebar-links">
          <Link
            to="/dashboard"
            className={location.pathname === "/dashboard" ? "active" : ""}
          >
            <i className="fa fa-user-o" aria-hidden="true" />
            <FaChartLine /> Dashboard
          </Link>
          <Link
            to="/service-risk-report"
            className={
              location.pathname === "/service-risk-report" ? "active" : ""
            }
          >
            <i className="fa fa-laptop" aria-hidden="true" />
            <FaExclamationCircle /> Service Risk Report
          </Link>
          <Link
            to="/notifications"
            className={location.pathname === "/notifications" ? "active" : ""}
          >
            <i className="fa fa-clone" aria-hidden="true" />
            <FaBell /> Notifications
          </Link>
          <Link
            to="/report"
            className={location.pathname === "/report" ? "active" : ""}
          >
            <i className="fa fa-star-o" aria-hidden="true" />
            <FaFileAlt /> Report
          </Link>
        </div>
      </aside>
      <img src={myImage} className="lastimg" />
    </>
  );
};

export default Sidebar;
