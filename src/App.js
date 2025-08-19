// App.js
import React, { useState } from "react";
import { Layout } from "antd";
import Sidebar from "./components/Sidebar";
import Profile from "./components/Profile";
import Articles from "./components/Articles";
import "./styles/App.css"; // Correct path to styles folder

const { Sider, Content } = Layout;

function App() {
  const [activePage, setActivePage] = useState("profile");
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  const toggleSidebar = () => {
    setSidebarCollapsed(!sidebarCollapsed);
  };

  const renderContent = () => {
    switch (activePage) {
      case "profile":
        return <Profile />;
      case "articles":
        return <Articles />;
      default:
        return <Profile />;
    }
  };

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider
        collapsible
        collapsed={sidebarCollapsed}
        onCollapse={toggleSidebar}
        trigger={null}
        width={250}
        style={{
          background: "linear-gradient(180deg, #1a1f35 0%, #0f1323 100%)",
          boxShadow: "2px 0 8px rgba(0,0,0,0.15)",
        }}
      >
        <Sidebar 
          setActivePage={setActivePage} 
          activePage={activePage} 
          collapsed={sidebarCollapsed}
          toggleSidebar={toggleSidebar}
        />
      </Sider>
      
      <Layout>
        <Content style={{ padding: "24px", background: "#f5f7fa" }}>
          {renderContent()}
        </Content>
      </Layout>
    </Layout>
  );
}

export default App;