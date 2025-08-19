import React from "react";
import { Menu, Avatar, Button } from "antd";
import { 
  UserOutlined, 
  FileTextOutlined, 
  MenuFoldOutlined, 
  MenuUnfoldOutlined 
} from "@ant-design/icons";
import profileImage from "../assets/my-photo.jpg";

export default function Sidebar({ setActivePage, activePage, collapsed, toggleSidebar }) {
  return (
    <div style={{ 
      display: "flex", 
      flexDirection: "column", 
      height: "100%",
      background: "linear-gradient(180deg, #1a1f35 0%, #0f1323 100%)"
    }}>
      {/* Header with toggle button */}
      <div style={{ 
        display: "flex", 
        justifyContent: collapsed ? "center" : "flex-end", 
        padding: "16px" 
      }}>
        <Button
          type="text"
          icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
          onClick={toggleSidebar}
          style={{
            fontSize: "16px",
            width: 40,
            height: 40,
            color: "#fff",
          }}
        />
      </div>

      {/* Profile Section */}
      <div style={{ 
        textAlign: "center", 
        padding: "10px 0 20px",
        borderBottom: "1px solid rgba(255, 255, 255, 0.1)" 
      }}>
        <Avatar
          size={collapsed ? 64 : 80}
          src={profileImage}
          style={{ 
            marginBottom: 15, 
            border: "3px solid rgba(255,255,255,0.2)",
            boxShadow: "0 4px 12px rgba(0,0,0,0.2)"
          }}
        />
        
        {!collapsed && (
          <>
            <h3 style={{ color: "#fff", margin: "12px 0 2px", fontWeight: 600 }}>
              MD. FAZLE RABBI MUGDHO
            </h3>
            <div style={{ color: "#a5b4fc", fontWeight: 500, fontSize: 13 }}>
              Author
            </div>
          </>
        )}
      </div>

      {/* Navigation Menu */}
      <Menu
        theme="dark"
        mode="inline"
        selectedKeys={[activePage]}
        onClick={(e) => setActivePage(e.key)}
        style={{
          background: "transparent",
          border: "none",
          flex: 1,
          padding: "12px 6px",
          fontSize: 15,
          fontWeight: 500,
        }}
        items={[
          {
            key: "profile",
            icon: <UserOutlined />,
            label: "Profile",
          },
          {
            key: "articles",
            icon: <FileTextOutlined />,
            label: "My Articles",
          },
        ]}
      />

      {/* Footer */}
      {!collapsed && (
        <div style={{ 
          padding: "16px", 
          textAlign: "center", 
          color: "rgba(255,255,255,0.5)",
          fontSize: "12px" 
        }}>
          Author Dashboard v1.0
        </div>
      )}
    </div>
  );
}