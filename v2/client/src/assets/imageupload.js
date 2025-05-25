import React, { useState } from 'react';
import axios from 'axios';

function ImageUploader() {
  const [image, setImage] = useState(null);
  const [imageUrl, setImageUrl] = useState('');
  const [result, setResult] = useState(null);

  const handleChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleUpload = async () => {
    if (!image) return;

    const formData = new FormData();
    formData.append('image', image);

    try {
      const res = await axios.post('http://localhost:5001/analyze', formData);
      const { result } = res.data;
      setResult(result);
      setImageUrl(`http://localhost:5001/uploads/${result.file_name}`);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <input type="file" onChange={handleChange} />
      <button onClick={handleUpload}>Upload</button>
    </div>
  );
}

export default ImageUploader;
