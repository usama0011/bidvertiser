import React, { useState } from "react";
import { Upload, Button, notification, Spin, Typography } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import axios from "axios";

const { Title } = Typography;

const UploadSummery = () => {
  const [loading, setLoading] = useState(false);

  const handleUpload = async ({ file }) => {
    const formData = new FormData();
    formData.append("file", file);

    setLoading(true);

    try {
      await axios.post(
        "https://bidvertiserserver.vercel.app/api/summeryupload/upload",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      notification.success({
        message: "Upload Successful",
        description: "Your file has been uploaded successfully.",
      });
    } catch (error) {
      notification.error({
        message: "Upload Failed",
        description:
          "There was an error uploading your file. Please try again.",
      });
    } finally {
      setLoading(false);
    }
  };

  const uploadProps = {
    customRequest: handleUpload,
    showUploadList: false,
    accept: ".csv",
    multiple: false,
  };

  return (
    <div style={{ padding: "20px", maxWidth: "600px", margin: "0 auto" }}>
      <Title style={{ textAlign: "center", marginBottom: "20px" }} level={2}>
        Upload Summary
      </Title>
      <Upload.Dragger
        {...uploadProps}
        style={{
          border: "2px dashed #d9d9d9",
          padding: "20px",
          borderRadius: "4px",
        }}
      >
        <p className="ant-upload-drag-icon">
          <UploadOutlined style={{ fontSize: "24px" }} />
        </p>
        <p className="ant-upload-text">
          Click or drag a CSV file to this area to upload
        </p>
        <p className="ant-upload-hint">
          Support for a single CSV file upload. File size should not exceed 5MB.
        </p>
      </Upload.Dragger>
      {loading && <Spin tip="Uploading..." style={{ marginTop: "20px" }} />}
    </div>
  );
};

export default UploadSummery;
