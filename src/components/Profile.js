import React from "react";
import { Card, Avatar, Tag, Button, Row, Col } from "antd";
import { 
  MailOutlined, 
  CalendarOutlined, 
  EditOutlined,
  IdcardOutlined,
  EnvironmentOutlined
} from "@ant-design/icons";
import profileImage from "../assets/my-photo.jpg";

export default function Profile() {
  return (
    <div>
      <Card
        title={
          <span style={{ display: "flex", alignItems: "center" }}>
            <IdcardOutlined style={{ marginRight: 8 }} />
            Profile Information
          </span>
        }
        style={{ 
          maxWidth: 800, 
          margin: "0 auto", 
          borderRadius: 12,
          boxShadow: "0 4px 12px rgba(0,0,0,0.1)"
        }}
        actions={[
          <Button type="primary" icon={<EditOutlined />} key="edit">
            Edit Profile
          </Button>,
        ]}
      >
        <Row gutter={[24, 16]}>
          <Col xs={24} md={8} style={{ textAlign: "center" }}>
            <Avatar 
              size={140} 
              src={profileImage} 
              style={{ 
                marginBottom: 20,
                border: "4px solid #f0f2f5",
                boxShadow: "0 4px 12px rgba(0,0,0,0.1)"
              }} 
            />
            
            {/* Author tag positioned clearly below the profile picture */}
            <div style={{ marginTop: -10, marginBottom: 20 }}>
              <Tag 
                color="blue" 
                style={{ 
                  fontSize: 16, 
                  padding: "8px 16px", 
                  borderRadius: 20,
                  fontWeight: "bold"
                }}
              >
                Author
              </Tag>
            </div>
          </Col>
          
          <Col xs={24} md={16}>
            <h2 style={{ marginBottom: 16, color: "#1f2a40" }}>MD. FAZLE RABBI MUGDHO</h2>
            
            <div style={{ marginBottom: 16 }}>
              <p style={{ marginBottom: 8, display: "flex", alignItems: "center" }}>
                <MailOutlined style={{ marginRight: 8, color: "#1890ff" }} />
                <strong>Email:</strong> 
                <span style={{ marginLeft: 8 }}>fazle.cse.20230104002@aust.edu</span>
              </p>
              
              <p style={{ marginBottom: 8, display: "flex", alignItems: "center" }}>
                <CalendarOutlined style={{ marginRight: 8, color: "#1890ff" }} />
                <strong>Joined:</strong> 
                <span style={{ marginLeft: 8 }}>January 12, 2023</span>
              </p>
              
              <p style={{ marginBottom: 8, display: "flex", alignItems: "center" }}>
                <EnvironmentOutlined style={{ marginRight: 8, color: "#1890ff" }} />
                <strong>Location:</strong> 
                <span style={{ marginLeft: 8 }}>Dhaka, Bangladesh</span>
              </p>
            </div>
            
            <div style={{ 
              background: "#f9fafb", 
              padding: 16, 
              borderRadius: 8,
              borderLeft: "4px solid #1890ff"
            }}>
              <h4 style={{ color: "#1f2a40", marginBottom: 8 }}>Bio</h4>
              <p style={{ color: "#666", margin: 0 }}>
                Passionate about coding, writing, and exploring creative ideas. 
                Currently studying Computer Science and Engineering with a focus 
                on web development and user experience design.
              </p>
            </div>
          </Col>
        </Row>
      </Card>
    </div>
  );
}