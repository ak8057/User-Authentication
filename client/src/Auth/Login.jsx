import React from "react";
import {
  Alert,
  Spin,
  Card,
  Col,
  Form,
  Input,
  Row,
  Typography,
  Button,
} from "antd";
import { Link } from "react-router-dom";
import loginimg from "../assets/background.jpg";
import useLogin from "../hooks/useLogin";
const Login = () => {

  const {error, loading ,loginUser} = useLogin();
  const handleLogin = async (values) => {
    await loginUser(values);
    // console.log(values);
  };
  return (
    <Card className="form-container">
      <Row className="register-row" gutter={[40, 0]}>
        <Col xs={0} lg={12} className="image-column">
          <img src={loginimg} className="auth-img" alt="Register" />
        </Col>
        <Col xs={24} lg={12} className="form-column">
          <Typography.Title level={3} className="title">
            Sign in
          </Typography.Title>
          <Typography.Text type="secondary" className="slogan">
            Unlock your world
          </Typography.Text>

          <Form layout="vertical" onFinish={handleLogin} autoComplete="off">
            <Form.Item
              label="Email"
              name="email"
              rules={[
                {
                  required: true,
                  type: "email",
                  message: "Please enter a valid email",
                },
              ]}
            >
              <Input size="large" placeholder="Enter your Email" />
            </Form.Item>

            <Form.Item
              label="Password"
              name="password"
              rules={[
                { required: true, message: "Please input your password" },
              ]}
            >
              <Input.Password size="large" placeholder="Password" />
            </Form.Item>

            {error && (
              <Alert description={error} type="error" showIcon closable className="alert"/>
          )}

            <Form.Item>
              <Button
                  type={`${loading ? '' : 'primary'}`}
                htmlType="submit"
                size="large"
                className="btn"
              >
                {loading ? <Spin/> : 'Sign in'}
            
              </Button>
            </Form.Item>

            <Form.Item className="signin-link">
              <Typography.Text>
                Don't have an account?&nbsp;
                <Link to="/">
                  <Button type="link" className="btn-link">
                    Create an Account
                  </Button>
                </Link>
              </Typography.Text>
            </Form.Item>
          </Form>
        </Col>
      </Row>
    </Card>
  );
};

export default Login;
