import './style.css';
import { Layout, Typography, Checkbox, Button, Space, Carousel } from "antd";
import React, { useState } from "react";
import MyHeader from './assets/header';
import {
  hatvalues,
  shirtvalues,
  jacketvalues,
  pantvalues,
  shoesvalues,
} from "./data";
import ImageRenderer from './assets/renderimage';

const { Header, Content, Sider, Footer } = Layout;
const { Title } = Typography;

function App() {
  const [filters, setFilters] = useState({ formality: [], temperature: [], color: [] });
  const [outfit, setOutfit] = useState(null);
  const [filteredOptions, setFilteredOptions] = useState(null);
  const [frozenFilteredItems, setFrozenFilteredItems] = useState(null);


  /**
   * TODO: WRITE COMMENTS FOR THINGS
   * @param {*} type 
   * @param {*} value 
   */

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
  
    setOutfit({
      hat: hat[Math.floor(Math.random() * hat.length)],
      jacket: jacket[Math.floor(Math.random() * jacket.length)],
      shirt: shirt[Math.floor(Math.random() * shirt.length)],
      pants: pants[Math.floor(Math.random() * pants.length)],
      shoes: shoes[Math.floor(Math.random() * shoes.length)],
    });
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



  return (
    <Layout style={{ minHeight: "100vh" }}>
      <MyHeader/>
      <Layout>
  


        <Content style={{ padding: "2rem", background: "#f5f5f5" }}>
          <ImageRenderer/>
        </Content>
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

      </Layout>
      <Footer style={{ background: "#ffffff", padding: "0 20px" }}>
        <Title level={3} style={{ color: "black", lineHeight: "64px", margin: 0 }}>
          Contact us at mikaalkhan@seattleacademy.org 
        </Title>
      </Footer>
    </Layout>
  );
}

export default App;
