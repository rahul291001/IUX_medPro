import React from "react";
import { Link, useLocation } from "react-router-dom";
import {
  FaChartLine,
  FaExclamationCircle,
  FaBell,
  FaFileAlt,
  FaHome, // Added Home icon
  FaBars, // Added Menu icon
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
            <FaHome className="icon-e" />
            <span className="icon-text">Dashboard</span>
          </Link>
          <Link
            to="/service-risk-report"
            className={
              location.pathname === "/service-risk-report" ? "active" : ""
            }
          >
            <FaBars className="icon-e" />
            <span className="icon-text">Service Risk Report</span>
          </Link>
          <Link
            to="/notifications"
            className={location.pathname === "/notifications" ? "active" : ""}
          >
            <i className="fa fa-clone" aria-hidden="true" />
            <FaBell className="icon-e" />
            <span className="icon-text">Notifications</span>
          </Link>
          <Link
            to="/report"
            className={location.pathname === "/report" ? "active" : ""}
          >
            <i className="fa fa-star-o" aria-hidden="true" />
            <FaFileAlt className="icon-e" />

            <span className="icon-text">Report</span>
          </Link>
        </div>
      </aside>
      <img src={myImage} className="lastimg" />
    </>
  );
};

export default Sidebar;

// import React, { useState } from "react";
// import { Link, useLocation } from "react-router-dom";
// import { FaExclamationCircle, FaBell, FaFileAlt } from "react-icons/fa";
// import { ImHome } from "react-icons/im";
// import { Profile } from "./profile.jsx";
// import "../styles/sidebar.css";
// import myImage from "../image/jassan.png";

// const Sidebar = () => {
//   const location = useLocation();

//   return (
//     <>
//       <aside>
//         <Profile />
//         <div className="sidebar-links">
//           <Link
//             to="/dashboard"
//             className={location.pathname === "/dashboard" ? "active" : ""}
//           >
//             <i className="fa fa-user-o" aria-hidden="true" />
//             <ImHome /> <span className="icon-text">Report</span>
//           </Link>
//           <Link
//             to="/service-risk-report"
//             className={
//               location.pathname === "/service-risk-report" ? "active" : ""
//             }
//           >
//             <i className="fa fa-laptop" aria-hidden="true" />
//             <FaExclamationCircle /> Service Risk Report
//           </Link>
//           <Link
//             to="/notifications"
//             className={location.pathname === "/notifications" ? "active" : ""}
//           >
//             <i className="fa fa-clone" aria-hidden="true" />
//             <FaBell /> Notifications
//           </Link>
//           <Link
//             to="/report"
//             className={location.pathname === "/report" ? "active" : ""}
//           >
//             <i className="fa fa-star-o" aria-hidden="true" />
//             <FaFileAlt /> Report
//           </Link>
//         </div>
//       </aside>
//       <img src={myImage} className="lastimg" />
//     </>
//   );
// };

// export default Sidebar;
