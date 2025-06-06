// src/assets/renderimage.js
import React from "react";
import { Card, Typography, Carousel } from "antd";

const { Title, Text } = Typography;

const ImageRenderer = ({ outfit }) => {
  if (!outfit) return null;

  return (
    <div>
      <Title level={2}>Matched Outfit</Title>
      {Object.keys(outfit).map((category) => (
        <div key={category} style={{ marginBottom: "2rem" }}>
          <Title level={4}>{category.toUpperCase()}</Title>

          {/* 👇 Center the carousel */}
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Carousel
              dots
              arrows
              slidesToShow={1}
              draggable
              style={{ maxWidth: 300, width: "100%" }}
            >
              {outfit[category].map((item) => (
                <div key={item.id}>
                  <Card
                    hoverable
                    cover={
                      <img
                        src={item.image_url}
                        alt={category}
                        style={{
                          width: "100%",
                          height: 300,
                          objectFit: "cover",
                          borderRadius: "8px",
                        }}
                      />
                    }
                  >
                  </Card>
                </div>
              ))}
            </Carousel>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ImageRenderer;
