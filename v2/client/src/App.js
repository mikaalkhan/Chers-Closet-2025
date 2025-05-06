import './style.css';
import { Layout, Typography, Checkbox, Button, Space } from "antd";
import React, { useState } from "react";
import {
  hatvalues,
  shirtvalues,
  jacketvalues,
  pantvalues,
  shoesvalues,
} from "./data";

const { Header, Content, Sider } = Layout;
const { Title } = Typography;

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
      (filters.formality.length === 0 || filters.formality.includes(String(item.formal))) &&
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
    <Layout style={{ minHeight: "100vh" }}>
      <Header style={{ background: "#001529", padding: "0 20px" }}>
        <Title level={3} style={{ color: "white", lineHeight: "64px", margin: 0 }}>
          Chers Closet
        </Title>
      </Header>

      <Layout>
        <Sider width={250} style={{ background: "#001529", padding: "1rem" }}>
          <Title level={4} style={{ color: "white" }}>Filters</Title>

          <div style={{ color: "white", marginBottom: 10 }}>
            <strong>Formality</strong>
            <Checkbox onChange={() => handleFilterChange("formality", "true")}>True</Checkbox>
            <Checkbox onChange={() => handleFilterChange("formality", "false")}>False</Checkbox>
          </div>

          <div style={{ color: "white", marginBottom: 10 }}>
            <strong>Temperature</strong>
            <Space direction="vertical">
              {["warm", "cool"].map((v) => (
                <Checkbox key={v} onChange={() => handleFilterChange("temperature", v)}>
                  {v}
                </Checkbox>
              ))}
            </Space>
          </div>

          <div style={{ color: "white", marginBottom: 10 }}>
            <strong>Color</strong>
            <Space direction="vertical">
              {["blue", "ivory", "black", "white", "purple", "brown", "grey"].map((v) => (
                <Checkbox key={v} onChange={() => handleFilterChange("color", v)}>
                  {v}
                </Checkbox>
              ))}
            </Space>
          </div>

          <Button type="primary" onClick={pickRandomOutfit} style={{ marginTop: 20 }}>
            Pick Random Outfit
          </Button>
        </Sider>

        <Content style={{ padding: "2rem", background: "#f5f5f5" }}>
          {outfit && (
            <div style={{ display: "flex", gap: 40, flexWrap: "wrap" }}>
              {renderImage("Hat", outfit.hat)}
              {renderImage("Jacket", outfit.jacket)}
              {renderImage("Shirt", outfit.shirt)}
              {renderImage("Pants", outfit.pants)}
              {renderImage("Shoes", outfit.shoes)}
            </div>
          )}
        </Content>
      </Layout>
    </Layout>
  );
}

export default App;
