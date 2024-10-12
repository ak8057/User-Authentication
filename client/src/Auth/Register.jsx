import React from "react";
import {Alert, Spin,  Card, Col, Form, Input, Row, Typography, Button } from "antd";
import { Link } from "react-router-dom";
import registerimg from "../assets/city1.jpg";
import useSignup from "../hooks/useSignup.jsx";



const Register = () => {
  const {loading,error, registerUser} =useSignup();
  const handleRegister = (values) => {
    registerUser(values);
    // console.log(values);
  };

  return (
    <Card className="form-container">
      <Row className="register-row" gutter={[40, 0]}>
        <Col xs={24} lg={12} className="form-column">
          <Typography.Title level={1}  className="title">
            Create an Account
          </Typography.Title>
          <Typography.Text type="secondary" className="slogan">
            Join for exclusive access
          </Typography.Text>

          <Form layout="vertical" onFinish={handleRegister} autoComplete="off">
            <Form.Item
              label="Full Name"
              name="name"
              rules={[{ required: true, message: "Please input your full name" }]}
            >
              <Input size="large" placeholder="Enter your Full Name" />
            </Form.Item>

            <Form.Item
              label="Email"
              name="email"
              rules={[{ required: true, type: "email", message: "Please enter a valid email" }]}
            >
              <Input size="large" placeholder="Enter your Email" />
            </Form.Item>

            <Form.Item
              label="Password"
              name="password"
              rules={[{ required: true, message: "Please input your password" }]}
            >
              <Input.Password size="large" placeholder="Password" />
            </Form.Item>
            <Form.Item
              label="Confirm Password"
              name="passwordConfirm"
              rules={[{ required: true, message: "Please input your password" }]}
            >
              <Input.Password size="large" placeholder="Confirm Password" />
            </Form.Item>

            {error && (
                <Alert description={error} type="error" showIcon closable className="alert"/>
            )}
        

            <Form.Item>
              <Button 
              type={`${loading ? '' : 'primary'}`} 
              htmlType="submit" size="large" className="btn">
                {loading ? <Spin/> : 'Create Account'}
               
              </Button>
            </Form.Item>

            <Form.Item className="signin-link">
              <Typography.Text>
                Already have an account?&nbsp;
                <Link to="/login">
                  <Button type="link" className="btn-link">Sign In</Button>
                </Link>
              </Typography.Text>
            </Form.Item>
          </Form>
        </Col>

        <Col xs={0} lg={12} className="image-column">
          <img src={registerimg} className="auth-img" alt="Register" />
        </Col>
      </Row>
    </Card>
  );
};

export default Register;


