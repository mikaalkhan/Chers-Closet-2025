import React, { useState } from "react";
// import { } from "./App.js";
import { Carousel } from "antd";



const renderImageList = (label, items) => (
    <div>
      <h4>{label}</h4>
      <Carousel arrows style={{ height: 160.}}>
        {items.map((item, index) => (
          <div key={index}>
            <img
              src={item.image}
              alt={`${label} ${index}`}
              style={{ width: '100%', maxHeight: '160px', objectFit: 'contain' }}
            />
          </div>
        ))}
      </Carousel>
    </div>
  );

function ImageRenderer({ outfit, frozenFilteredItems }) {
  return (

          outfit && frozenFilteredItems && (
            <div style={{ display: "flex", flexDirection: "column", gap: 40 }}>
              {renderImageList("Hat", frozenFilteredItems.hat)}
              {renderImageList("Jacket", frozenFilteredItems.jacket)}
              {renderImageList("Shirt", frozenFilteredItems.shirt)}
              {renderImageList("Pants", frozenFilteredItems.pants)}
              {renderImageList("Shoes", frozenFilteredItems.shoes)}
            </div>
          )
  );
}

export default ImageRenderer;
