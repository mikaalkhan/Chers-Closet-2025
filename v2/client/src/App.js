import React, { useState } from 'react';
import './style.css';

const App = () => {
  const [visibleImage, setVisibleImage] = useState('');

  const showImage = (id) => {
    setVisibleImage(id);
  };

  const pickRandomNumber = () => {
    alert(`Random outfit number: ${Math.floor(Math.random() * 100)}`);
  };

  return (
    <div>
      <h1>Cher's Closet Project</h1>

      {/* Formality */}
      <h2>Formality</h2>
      <label>
        <input type="checkbox" className="filter" data-type="formality" value="true" /> Formal
      </label>
      <label>
        <input type="checkbox" className="filter" data-type="formality" value="false" /> Casual
      </label>

      {/* Temperature */}
      <h2>Temp</h2>
      <label>
        <input type="checkbox" className="filter" data-type="temperature" value="warm" /> Warm
      </label>
      <label>
        <input type="checkbox" className="filter" data-type="temperature" value="cool" /> Cool
      </label>

      {/* Color */}
      <h2>Color</h2>
      {['blue', 'ivory', 'black', 'white', 'brown', 'grey'].map((color) => (
        <label key={color}>
          <input type="checkbox" className="filter" data-type="color" value={color} /> {color.charAt(0).toUpperCase() + color.slice(1)}
        </label>
      ))}

      <h1> ________ </h1>
      <button onClick={pickRandomNumber}>Click For Random Outfit</button>

      <div className="image_container">
        {['Hat', 'Jacket', 'Shirt', 'Pant', 'Shoe'].map((item) => (
          <div key={item}>
            <button onClick={() => showImage(item + 'id')}>Click For {item}!</button>
            <img
              id={item + 'id'}
              src="images/Blue Hat 1.avif"
              alt={item}
              style={{ display: visibleImage === item + 'id' ? 'block' : 'none' }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
