import './style.css';
import React, { useState } from "react";
import {
  hatvalues,
  shirtvalues,
  jacketvalues,
  pantvalues,
  shoesvalues,
} from "./data";

function App() {
  const [filters, setFilters] = useState({ formality: [], temperature: [], color: [] });
  const [outfit, setOutfit] = useState(null);

  const handleFilterChange = (type, value) => {
    setFilters((prev) => {
      const updated = [...prev[type]];
      const index = updated.indexOf(value);
      if (index > -1) updated.splice(index, 1);
      else updated.push(value);
      return { ...prev, [type]: updated };
    });
  };

  const getFilteredItems = (items) => {
    return items.filter((item) =>
      (filters.formality.length === 0 || filters.formality.includes(item.formal)) &&
      (filters.temperature.length === 0 || filters.temperature.includes(item.temperature)) &&
      (filters.color.length === 0 || filters.color.includes(item.color.toLowerCase()))
    );
  };

  const pickRandomOutfit = () => {
    const hat = getFilteredItems(hatvalues);
    const jacket = getFilteredItems(jacketvalues);
    const shirt = getFilteredItems(shirtvalues);
    const pants = getFilteredItems(pantvalues);
    const shoes = getFilteredItems(shoesvalues);

    if ([hat, jacket, shirt, pants, shoes].some(arr => arr.length === 0)) {
      alert("No items match the current filters.");
      return;
    }

    const getRandom = (arr) => arr[Math.floor(Math.random() * arr.length)];
    setOutfit({
      hat: getRandom(hat),
      jacket: getRandom(jacket),
      shirt: getRandom(shirt),
      pants: getRandom(pants),
      shoes: getRandom(shoes),
    });
  };

  const renderImage = (label, item) => (
    <div>
      <h4>{label}</h4>
      {item && <img src={item.image} alt={label} style={{ height: 100 }} />}
    </div>
  );

  return (
    <div>
      <h1>Chers Closet</h1>

      <div>
        <h3>Filters</h3>

        <div>
          <h4>Formality</h4>
          {["true", "false"].map((v) => (
            <label key={v}>
              <input
                type="checkbox"
                onChange={() => handleFilterChange("formality", v)}
              />
              {v}
            </label>
          ))}
        </div>

        <div>
          <h4>Temperature</h4>
          {["warm", "cool"].map((v) => (
            <label key={v}>
              <input
                type="checkbox"
                onChange={() => handleFilterChange("temperature", v)}
              />
              {v}
            </label>
          ))}
        </div>

        <div>
          <h4>Color</h4>
          {["blue", "ivory", "black", "white", "purple", "brown", "grey"].map((v) => (
            <label key={v}>
              <input
                type="checkbox"
                onChange={() => handleFilterChange("color", v)}
              />
              {v}
            </label>
          ))}
        </div>
      </div>

      <button onClick={pickRandomOutfit}>Pick Random Outfit</button>

      {outfit && (
        <div style={{ display: "flex", gap: 20, marginTop: 20 }}>
          {renderImage("Hat", outfit.hat)}
          {renderImage("Jacket", outfit.jacket)}
          {renderImage("Shirt", outfit.shirt)}
          {renderImage("Pants", outfit.pants)}
          {renderImage("Shoes", outfit.shoes)}
        </div>
      )}
    </div>
  );
}

export default App;
