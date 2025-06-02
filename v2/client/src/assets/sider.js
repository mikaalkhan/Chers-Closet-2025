import React, { useState } from "react";
import { Button, Typography, Input, message } from "antd";
import Sider from "antd/es/layout/Sider";
import axios from "axios";

const { Title } = Typography;

function FSlider({ pickRandomOutfit, onMatchResults }) {
  const [prompt, setPrompt] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmitPrompt = async () => {
    if (!prompt.trim()) {
      message.warning("Please enter a prompt.");
      return;
    }
    console.log("tiddy")
    setLoading(true);
    try {
      const res = await axios.post("http://localhost:5001/match-outfit", {
        prompt,
      });
    } catch (err) {
      console.error("Error submitting prompt:", err);
      message.error("Failed to fetch outfit matches.");
    } finally {
      setLoading(false);
    }
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
        loading={loading}
        onClick={() => {
            handleSubmitPrompt();
        }}
        style={{ marginTop: 8 }}
        >
        Submit
        </Button>
        </div>
      </div>
    </Sider>
  );
}

export default FSlider;
