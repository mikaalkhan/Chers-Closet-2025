import './style.css';
import { Button, Checkbox } from 'antd';
import React, { useState, Image, Layout} from "react";// do image stuff
import {
  hatvalues,
  shirtvalues,
  jacketvalues,
  pantvalues,
  shoesvalues,
} from "./data";

const { Header, Content, Footer, Sider } = Layout;

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
    <Layout>
    <Header style={{ display: 'flex', alignItems: 'center' }}>
    <div className="demo-logo" />
    <h1>Chers Closet</h1>
  </Header>
  <Sider
            >
          </Sider>

      <div>
        <h3>Filters</h3>

        <div>
          <h4>Formality</h4>
          {["true", "false"].map((v) => (
            <label key={v}>
              <Checkbox
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
              <Checkbox
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
              <Checkbox
                onChange={() => handleFilterChange("color", v)}
              />
              {v}
            </label>
          ))}
        </div>
      </div>

      <Button onClick={pickRandomOutfit}>Pick Random Outfit</Button>

      {outfit && (
        <div style={{ display: "flex", gap: 20, marginTop: 20 }}>
          {renderImage("Hat", outfit.hat)}
          {renderImage("Jacket", outfit.jacket)}
          {renderImage("Shirt", outfit.shirt)}
          {renderImage("Pants", outfit.pants)}
          {renderImage("Shoes", outfit.shoes)}
        </div>
      )}
    </Layout>
  );
}

export default App;
