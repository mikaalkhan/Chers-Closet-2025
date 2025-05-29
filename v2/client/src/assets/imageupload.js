import React, { useState } from 'react';
import axios from 'axios';

function ImageUploader() {
  const [images, setImages] = useState([]);
  const [results, setResults] = useState([]);

  const handleChange = (e) => {
    const files = Array.from(e.target.files).filter(file => file.type.startsWith('image/'));
    setImages(files);
  };

  const handleUpload = async () => {
    if (!images.length) return;

    const allResults = [];

    for (const image of images) {
      const formData = new FormData();
      formData.append('image', image);

      try {
        const res = await axios.post('http://localhost:5001/analyze', formData);
        const { result } = res.data;
        allResults.push({
          ...result,
          imageUrl: `http://localhost:5001/uploads/${result.file_name}`,
        });
      } catch (err) {
        console.error('Failed to upload', image.name, err);
      }
    }

    setResults(allResults);
  };

  return (
    <div>
      <input type="file" onChange={handleChange} webkitdirectory="true" multiple />
      <button onClick={handleUpload}>Upload Folder</button>
    </div>
  );
}

export default ImageUploader;
