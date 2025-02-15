import React from "react";
import { Layout, Menu, Button, Row, Col } from "antd";
import { useNavigate } from "react-router-dom";

const { Header, Content, Footer } = Layout;

const SwitchPublisher = () => {
  const navigate = useNavigate();

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Header style={{ backgroundColor: "#1b3b60", padding: "0 20px" }}>
        <div className="logo" style={{ color: "white", fontSize: "24px" }}>
          Switch Publisher
        </div>
      </Header>
      <Content style={{ padding: "0 50px", marginTop: "20px" }}>
        <Row gutter={16}>
          <Col span={8}>
            <Button
              type="primary"
              block
              onClick={() => navigate("/createnewsummary")}
              style={{
                marginBottom: "16px",
                height: "50px",
                fontWeight: "500",
              }}
            >
              Create Summary
            </Button>
          </Col>
          <Col span={8}>
            <Button
              type="primary"
              block
              onClick={() => navigate("/updatesummary")}
              style={{
                marginBottom: "16px",
                height: "50px",
                fontWeight: "500",
              }}
            >
              View Summary
            </Button>
          </Col>
          <Col span={8}>
            <Button
              type="primary"
              block
              onClick={() => navigate("/viewcompaings")}
              style={{
                marginBottom: "16px",
                height: "50px",
                fontWeight: "500",
              }}
            >
              View Campaigns
            </Button>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col span={8}>
            <Button
              type="primary"
              block
              onClick={() => navigate("/viewanalytics")}
              style={{
                marginBottom: "16px",
                height: "50px",
                fontWeight: "500",
              }}
            >
              View Analytics
            </Button>
          </Col>
          <Col span={8}>
            <Button
              type="primary"
              block
              onClick={() => navigate("/viewdailyactivity")}
              style={{
                marginBottom: "16px",
                height: "50px",
                fontWeight: "500",
              }}
            >
              Daily Activity
            </Button>
          </Col>
          <Col span={8}>
            <Button
              type="primary"
              block
              onClick={() => navigate("/viewdailyactivity")}
              style={{
                marginBottom: "16px",
                height: "50px",
                fontWeight: "500",
              }}
            >
              Monthly Invoices
            </Button>
          </Col>
          <Col span={8}>
            <Button
              type="primary"
              block
              onClick={() => navigate("/createanalytics")}
              style={{
                marginBottom: "16px",
                height: "50px",
                fontWeight: "500",
              }}
            >
              Create Analytics
            </Button>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col span={8}>
            <Button
              type="primary"
              block
              onClick={() => navigate("/createdailyactivity")}
              style={{
                marginBottom: "16px",
                height: "50px",
                fontWeight: "500",
              }}
            >
              Create Daily Activity
            </Button>
          </Col>
          <Col span={8}>
            <Button
              type="primary"
              block
              onClick={() => navigate("/uploadanalytics")}
              style={{
                marginBottom: "16px",
                height: "50px",
                fontWeight: "500",
              }}
            >
              Upload Analytics CSV
            </Button>
          </Col>
          <Col span={8}>
            <Button
              type="primary"
              block
              onClick={() => navigate("/uploadsummery")}
              style={{
                marginBottom: "16px",
                height: "50px",
                fontWeight: "500",
              }}
            >
              Upload Summery CSV
            </Button>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col span={8}>
            <Button
              type="primary"
              block
              onClick={() => navigate("/uploaddailyactivity")}
              style={{
                marginBottom: "16px",
                height: "50px",
                fontWeight: "500",
              }}
            >
              Upload Daily Activity CSV
            </Button>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col span={8}>
            <Button
              type="primary"
              block
              onClick={() => navigate("/uploadmontlyinvocies")}
              style={{
                marginBottom: "16px",
                height: "50px",
                fontWeight: "500",
              }}
            >
              Upload Monthly Invoices CSV
            </Button>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col span={8}>
            <Button
              type="primary"
              block
              onClick={() => navigate("/uploadtransactions")}
              style={{
                marginBottom: "16px",
                height: "50px",
                fontWeight: "500",
              }}
            >
              Upload Transactions CSV
            </Button>
          </Col>
        </Row>
      </Content>
      <Footer style={{ textAlign: "center" }}>© 2024 Bidvertiser</Footer>
    </Layout>
  );
};

export default SwitchPublisher;
