import React, { useEffect } from "react";
import {
  Sidebar,
  Menu,
  MenuItem,
  useProSidebar,
  SubMenu,
} from "react-pro-sidebar";

import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import FaceIcon from "@mui/icons-material/Face";
import { useNavigate } from "react-router";

function Navbar() {
  const { collapseSidebar, toggleSidebar, collapsed, toggled, broken, rtl } =
    useProSidebar();
  // Изначально закрытая боковая панель
  useEffect(() => {
    collapseSidebar();
  }, []); // Вызывается только при монтировании компонента

  const toggle = () => {
    toggleSidebar();
    if (toggled) {
      console.log(true);
      collapseSidebar();
    } else {
      console.log(false);
      collapseSidebar();
    }
  };

  const navigate = useNavigate();
  return (
    <div
      id="app"
      style={
        ({ height: "100vh" }, { display: "inline-flex", flexDirection: "row" })
      }
    >
      <Sidebar
        className="sidebar"
        rtl={false}
        style={{
          position: "fixed",
          left: 0,
          top: 0,
          height: "100vh",
          width: collapsed ? "32px" : "120px", // Изменение ширины в зависимости от состояния collapsed
          minWidth: collapsed ? "45px" : "180px", // Изменение ширины в зависимости от состояния collapsed
          transition: "width 0.3s ease-in-out",
          backgroundColor: "#f0f0f0",
          overflowY: "auto",
          zIndex: 100,
        }}
        collapsed={collapsed}
      >
        <Menu>
          <MenuItem
            icon={<MenuOutlinedIcon />}
            onClick={() => {
              collapseSidebar();
            }}
            style={{ textAlign: "center", paddingLeft: "5px" }}
          >
            {" "}
            <h2>Admin</h2>
          </MenuItem>

          <MenuItem
            onClick={() => navigate("/home")}
            icon={<HomeOutlinedIcon />}
            style={{ paddingLeft: "5px" }}
          >
            Home
          </MenuItem>
          <MenuItem
            icon={<PeopleOutlinedIcon />}
            style={{ paddingLeft: "5px" }}
          >
            Team
          </MenuItem>
          <MenuItem
            icon={<ContactsOutlinedIcon />}
            style={{ paddingLeft: "5px" }}
          >
            Contacts
          </MenuItem>
          <MenuItem
            onClick={() => {
              navigate("product-list");
            }}
            style={{ paddingLeft: "5px" }}
            icon={<ReceiptOutlinedIcon />}
          >
            Profile
          </MenuItem>
          <MenuItem
            icon={<HelpOutlineOutlinedIcon />}
            style={{ paddingLeft: "5px" }}
          >
            FAQ
          </MenuItem>
          <MenuItem
            onClick={() => navigate("/register")}
            icon={<FaceIcon />}
            style={{ paddingLeft: "5px" }}
          >
            Register
          </MenuItem>
          <MenuItem
            onClick={() => navigate("/login")}
            icon={<FaceIcon />}
            style={{ paddingLeft: "5px" }}
          >
            LogIn
          </MenuItem>
        </Menu>
      </Sidebar>
    </div>
  );
}

export default Navbar;
