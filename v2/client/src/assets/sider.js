import React, { useState } from "react";
import './style.css';
import { Layout, Typography, Checkbox, Button, Space, Carousel } from "antd";

  const handleFilterChange = (type, value) => {
    setFilters((prev) => {
      const updated = [...prev[type]];
      const index = updated.indexOf(value);
      if (index > -1) updated.splice(index, 1);
      else updated.push(value);
      return { ...prev, [type]: updated };
    });
  };

function fslider() {
    

    <Sider width={250} style={{ background: "#ffffff", padding: "1rem", color: "black", overflow: "auto", height: "100vh", position: "sticky", top: 0, Bottom: 0 }}>
                <div style={{ paddingRight: "1rem" }}>
                    <Title level={4} style={{ color: "black" }}>Filters</Title>

                    <div style={{ marginBottom: 24, borderBottom: "1px solid #ddd", paddingBottom: 16 }}>
                    <strong>Formality</strong>

                    <div>
                        <Checkbox onChange={() => handleFilterChange("formality", "true")}>True</Checkbox>
                    </div>
                    <div>
                        <Checkbox onChange={() => handleFilterChange("formality", "false")}>False</Checkbox>
                    </div>
                    </div>

                    <div style={{ marginBottom: 24, borderBottom: "1px solid #ddd", paddingBottom: 16 }}>
                    <strong>Temperature</strong>
                    <div>
                    <Space direction="vertical">
                        {["warm", "cool"].map((v) => (
                        <Checkbox key={v} onChange={() => handleFilterChange("temperature", v)}>
                            {v}
                        </Checkbox>
                        ))}
                    </Space>
                    </div>
                    </div>

                    <div style={{ marginBottom: 24, borderBottom: "1px solid #ddd", paddingBottom: 16 }}>
                    <strong>Color</strong>
                    <div>
                    <Space direction="vertical">
                        {["blue", "ivory", "black", "white", "purple", "brown", "grey"].map((v) => (
                        <Checkbox key={v} onChange={() => handleFilterChange("color", v)}>
                            {v}
                        </Checkbox>
                        ))}
                    </Space>
                    </div>
                    </div>

                    <Button type="primary" onClick={pickRandomOutfit} style={{ marginTop: 20 }}>
                    Pick Random Outfit
                    </Button>
                </div>
            </Sider>
}

export default fslider;