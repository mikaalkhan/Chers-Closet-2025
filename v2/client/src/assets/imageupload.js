import React, { useState } from 'react';

function LocalImageHandler() {
  const [imageURL, setImageURL] = useState(null);
  const [showImage, setShowImage] = useState(false);

  const handleImageSelect = (e) => {
    const file = e.target.files[0];
    if (file) {
      const localUrl = URL.createObjectURL(file);
      setImageURL(localUrl);
      setShowImage(false); // reset on new selection
    }
  };

  const handleShowImage = () => {
    if (imageURL) {
      setShowImage(true);
    }
  };

  return (
    <div>
      <h2>Select and View a Local Image</h2>

      {/* Button to choose a file */}
      <input type="file" accept="image/*" onChange={handleImageSelect} />

      {/* Button to show the selected image */}
      <button onClick={handleShowImage} disabled={!imageURL}>
        Show Image
      </button>

      {/* Render the image only when "Show" button is clicked */}
      {showImage && (
        <div>
          <p>Here is your selected image:</p>
          <img src={imageURL} alt="Selected" style={{ maxWidth: '300px' }} />
        </div>
      )}
    </div>
  );
}

export default LocalImageHandler;