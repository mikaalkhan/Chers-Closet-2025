import React, { useState } from "react";
import { Checkbox, Button, Space, Typography, Input } from "antd";
import Sider from "antd/es/layout/Sider";

const { Title } = Typography;

function FSlider({ pickRandomOutfit, handleFilterChange, imageTest }) {
  const [prompt, setPrompt] = useState("");

  const handleSubmitPrompt = () => {
    console.log("Submitted prompt:", prompt);
    // You can send this to your backend or do something else with it
  };

  return (
    <Sider
      width={250}
      style={{
        background: "#ffffff",
        padding: "1rem",
        color: "black",
        overflow: "auto",
        height: "100vh",
        position: "sticky",
        top: 0,
        bottom: 0,
      }}
    >
      <div style={{ paddingRight: "1rem" }}>
        <Title level={4} style={{ color: "black" }}>
          Filters
        </Title>

        {/* Prompt input box */}
        <div style={{ marginBottom: 16 }}>
          <Input.TextArea
            rows={3}
            placeholder="Type your prompt here..."
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
          />
          <Button
            type="default"
            onClick={handleSubmitPrompt}
            style={{ marginTop: 8 }}
          >
            Submit
          </Button>
        </div>

        {/* Other Buttons */}
        <Button type="primary" onClick={pickRandomOutfit} style={{ marginTop: 20 }}>
          Pick Random Outfit
        </Button>
      </div>
    </Sider>
  );
}

export default FSlider;