import React from "react";
import { useAuth } from "../contexts/AuthContext";
import { Card, Typography , Flex, Avatar} from "antd";
import { UserOutlined } from "@ant-design/icons";
const Dashboard = () => {
  const { userData, logout } = useAuth();

  const handleLogout  = async () =>{
    await logout();
  }
  return (
    <Card className="profile-card">
      <Flex vertical gap='small' align="center">
        <Avatar size={150} icon={<UserOutlined />} className="avatar" />
        <Typography.Title level={2} strong className="username">
          {userData.name}
        </Typography.Title>
        <Typography.Text type="secondary" className="email">
          Email: {userData.email}
        </Typography.Text>

        <Typography.Text type="secondary">
          Role: {userData.role}
        </Typography.Text>
        <button size="large" type="primary" className="profile-btn" onClick={handleLogout}>Logout</button>
      </Flex>
    </Card>
  );
};

export default Dashboard;
