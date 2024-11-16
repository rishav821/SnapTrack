import React, { useState } from 'react';
import Navbar from "./Navbar"; 

const Scan = () => {
  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setImage(file);
      setImagePreview(URL.createObjectURL(file));
    }
  };

  const handleUpload = () => {
    console.log('Image uploaded:', image);
    alert('Image uploaded successfully!');
  };

  return (
    <div className="min-h-screen bg-black flex flex-col">
      <Navbar />
      <div className="flex flex-grow items-center justify-center">
        <div className="bg-neutral-800 p-8 rounded-lg shadow-lg text-center max-w-md w-full">
          <h2 className="text-2xl font-semibold text-white mb-6">Upload an Image to Scan</h2>

          <label className="w-full flex flex-col items-center p-4 bg-neutral-700 border border-neutral-600 rounded-lg cursor-pointer hover:bg-neutral-600 transition">
            <input
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              className="hidden"
            />
            <span className="text-neutral-300 font-medium">Click to upload an image</span>
          </label>

          {imagePreview && (
            <div className="mt-4">
              <img
                src={imagePreview}
                alt="Uploaded Preview"
                className="rounded-lg mt-2 max-h-64 object-cover"
              />
              <button
                onClick={handleUpload}
                className="mt-4 px-4 py-2 bg-gradient-to-r from-orange-500 to-orange-800 text-white rounded-md hover:opacity-90 transition"
              >
                Upload Image
              </button>
            </div>
          )}

          {image && (
            <div className="mt-4 text-neutral-400">
              <p className="font-light text-sm">Uploaded file:</p>
              <p className="text-neutral-200 font-semibold">{image.name}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Scan;
