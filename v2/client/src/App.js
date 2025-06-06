import './style.css';
import { Layout, Typography, Carousel, Button, Checkbox, Space } from "antd";
import React, { useState } from "react";
import MyHeader from './assets/header';
import axios from "axios";
import {
  hatvalues,
  shirtvalues,
  jacketvalues,
  pantvalues,
  shoesvalues,
} from "./data";
import ImageRenderer from './assets/renderimage';
import FSlider from './assets/sider';
import ImageUpload from './assets/imageupload';
import LocalImageHandler from './assets/imageupload';
import ImageUploader from './assets/imageupload';

const { Header, Content, Sider, Footer } = Layout;
const { Title } = Typography;

function App() {
  const [filters, setFilters] = useState({ formality: [], temperature: [], color: [] });
  const [outfit, setOutfit] = useState(null);
  //const [filteredOptions, setFilteredOptions] = useState(null);
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
  
    // Freeze the current filtered state
    setFrozenFilteredItems({ hat, jacket, shirt, pants, shoes });
  };

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <MyHeader/>
      <Layout>
  


        <Content style={{ padding: "2rem", background: "#f5f5f5" }}>

        <ImageRenderer outfit={outfit} frozenFilteredItems={frozenFilteredItems}/>

        </Content>
        <FSlider
  pickRandomOutfit={pickRandomOutfit}
  onMatchResults={(matches) => {
    setOutfit(matches);
    setFrozenFilteredItems(null); // optional: reset random filter view
  }}
/>


      </Layout>
      <Footer style={{ background: "#ffffff", padding: "0 20px" }}>
        <h1>Upload an Image</h1>
        <ImageUploader />
        
      </Footer>
    </Layout>
  );
}

export default App;

