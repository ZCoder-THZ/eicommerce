// components/ImageUpload.js
'use client'
import { useState } from 'react';
import axios from 'axios';
export default function page() {
  const [file, setFile] = useState(null);
  const [image, setImage] = useState(null);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setImage(event.target.result);
      };
      reader.readAsDataURL(selectedFile);
    }
  };


  const handleUpload = async (e) => {
    e.preventDefault()

    const formData = new FormData();
    formData.append('file', file);

    const upload = async () => {
      try {
        const response = await axios.post('http://localhost:4000/products/imageUpload', formData);
        console.log(response.data);
      } catch (error) {
        console.error('Error:', error);
      }
    };
    upload()
    
  };

  return (
    <div className="grid place-items-center">
      <div className="w-full md:w-1/2 lg:w-1/4 p-8 bg-white rounded-lg shadow-md">
        <h2 className="text-center text-lg font-semibold mb-4">Upload Your Image</h2>
        <div className="flex items-center justify-center mb-4">
          <input type="file" onChange={handleFileChange} className="mr-2" />
          <button onClick={handleUpload} className="px-4 py-2 bg-blue-500 text-white rounded cursor-pointer">Upload</button>
        </div>
        {image && <img src={image} alt="Preview" style={{ maxWidth: '100%', maxHeight: '200px', marginTop: '10px' }} />}
        {file && <p className="text-center text-red-500">Selected file: {file.name}</p>}
      </div>
    </div>
  );
}
