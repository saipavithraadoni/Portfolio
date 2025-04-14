import React from "react";
import { Col } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiTensorflow,
  SiWindows,
  SiMacos,
  SiLinux,
  SiAndroidstudio,
} from "react-icons/si";

function Toolstack() {
  return (
    <div style={{ display: "flex", overflowX: "auto", paddingBottom: "30px", gap: "20px", justifyContent: "center" }}>
      {[
        { icon: <SiVisualstudiocode />, name: "VS Code" },
        { icon: <SiAndroidstudio />, name: "Android Studio" },
        { icon: <SiTensorflow />, name: "TensorFlow" },
        { icon: <SiWindows />, name: "Windows" },
        { icon: <SiMacos />, name: "macOS" },
        { icon: <SiLinux />, name: "Linux" },
      ].map((tool, index) => (
        <Col key={index} xs="auto" className="tool-icons text-center">
          <div>{tool.icon}</div>
          <p style={{ color: "rgb(155 126 172)", marginTop: "8px", fontSize: "14px" }}>
            {tool.name}
          </p>
        </Col>
      ))}
    </div>
  );
}

export default Toolstack;
