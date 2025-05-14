import React, { useState } from "react";
// import { } from "./App.js";
import { Carousel } from "antd";

const contentStyle = {
  margin: 0,
  height: '160px',
  color: 'blue',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};

const renderImage = (label, item) => (
    <div>
      <h4>{label}</h4>
      <Carousel arrows={true} style={{height: 100, color: 'blue'}}>
        <div>
          {item && <img src={item.image} alt={label} style={contentStyle} />}          
        </div>
        <div>
          {item && <img src={item.image} alt={label} style={contentStyle} />}          
        </div>
      </Carousel>
    </div>
  );

function ImageRenderer({ outfit }) {
  return (
    outfit && (
      <div style={{ display: "flex", flexDirection: "column", gap: 40 }}>
        {renderImage("Jacket", outfit.jacket)}
        {renderImage("Shirt", outfit.shirt)}
        {renderImage("Pants", outfit.pants)}
        {renderImage("Shoes", outfit.shoes)}
      </div>
    )
  );
}

export default ImageRenderer;
