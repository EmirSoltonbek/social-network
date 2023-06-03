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
import { useProfile } from "../../contexts/ProfileContextProvider";
import "./Navbar.css";
import { useAuth } from "../../contexts/AuthContextProvider";

function Navbar() {
  const { collapseSidebar, toggleSidebar, collapsed, toggled, broken, rtl } =
    useProSidebar();
  const { profileMe, getProfileInfo } = useProfile();
  const { checkAuth, handleLogout } = useAuth();
  // Изначально закрытая боковая панель
  useEffect(() => {
    collapseSidebar();
    getProfileInfo();
    if (localStorage.getItem("tokens")) {
      checkAuth();
    }
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
            <div
              className="avatarImgDiv"
              onClick={() => {
                navigate("/inst-profile");
              }}
            >
              <img className="avatarImg" src={profileMe?.avatar} alt="avatar" />
              <small>{profileMe?.name?.toUpperCase()}</small>
            </div>
          </MenuItem>

          <MenuItem
            icon={
              <img className="avatarImg" src={profileMe?.avatar} alt="avatar" />
            }
            style={{ paddingLeft: "5px" }}
            onClick={() => navigate("/inst-profile")}
          >
            Home
          </MenuItem>

          <MenuItem
            icon={<i style={{ fontSize: "1.5rem" }} class="bi bi-people"></i>}
            style={{ paddingLeft: "5px" }}
            onClick={() => navigate("/profile-list")}
          >
            Profiles
          </MenuItem>

          <MenuItem
            onClick={() => navigate("/post-list")}
            icon={
              <i style={{ fontSize: "1.5rem" }} class="bi bi-file-post"></i>
            }
            style={{ paddingLeft: "5px" }}
          >
            Posts
          </MenuItem>

          {/* <MenuItem
            icon={<ContactsOutlinedIcon />}
            style={{ paddingLeft: "5px" }}
          >
            Contacts
          </MenuItem> */}
          <MenuItem
            onClick={() => {
              navigate("product-list");
            }}
            style={{ paddingLeft: "5px" }}
            icon={
              <i style={{ fontSize: "1.5rem" }} class="bi bi-view-list"></i>
            }
          >
            Products
          </MenuItem>
          <MenuItem
            icon={<i style={{ fontSize: "1.5rem" }} class="bi bi-bag"></i>}
            style={{ paddingLeft: "5px" }}
            onClick={() => {
              navigate("/cart");
            }}
          >
            Cart
          </MenuItem>
          <MenuItem
            icon={<i style={{ fontSize: "1.5rem" }} class="bi bi-star"></i>}
            style={{ paddingLeft: "5px" }}
            onClick={() => {
              navigate("/favorite");
            }}
          >
            Favorite
          </MenuItem>
          <MenuItem
            onClick={() => navigate("/register")}
            icon={<i style={{ fontSize: "1.5rem" }} class="bi bi-r-square"></i>}
            style={{ paddingLeft: "5px" }}
          >
            Register
          </MenuItem>
          <MenuItem
            onClick={() => navigate("/login")}
            icon={
              <i style={{ fontSize: "1.5rem" }} class="bi bi-door-open"></i>
            }
            style={{ paddingLeft: "5px" }}
          >
            LogIn
          </MenuItem>
          <MenuItem
            onClick={() => {
              handleLogout();
            }}
            icon={
              <i
                style={{ fontSize: "1.5rem" }}
                class="bi bi-box-arrow-right"
              ></i>
            }
            style={{ paddingLeft: "5px" }}
          >
            LogOut
          </MenuItem>
        </Menu>
      </Sidebar>
    </div>
  );
}

export default Navbar;
