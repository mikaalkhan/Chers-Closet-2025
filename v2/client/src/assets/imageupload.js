
import React, { useState } from 'react';

function ImageUpload() {
  const [file, setFile] = useState(null);

  const handleChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    if (!file) {
      alert('Please select an image.');
      return;
    }

    const formData = new FormData();
    formData.append('image', file);

    try {
      const res = await fetch('http://localhost:3000/upload', {
        method: 'POST',
        body: formData
      });
      const text = await res.text();
      alert(text);
    } catch (err) {
      console.error('Error uploading image:', err);
    }
  };

  return (
    <div>
      <input type="file" accept="image/*" onChange={handleChange} />
      <button onClick={handleUpload}>Upload Image</button>
    </div>
  );
}

export default ImageUpload;
