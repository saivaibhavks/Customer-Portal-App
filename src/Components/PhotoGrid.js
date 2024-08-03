import React, { useEffect, useState } from "react";
import "./PhotoGrid.css";

const API_URL = "https://picsum.photos/v2/list";

const fetchPhotos = async (page) => {
  try {
    const response = await fetch(`${API_URL}?page=${page}&limit=9`);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    return data.map((photo) => `${photo.download_url}?random=${Math.random()}`);
  } catch (error) {
    console.error("Error fetching photos:", error);
    return [];
  }
};

const PhotoGrid = () => {
  const [photos, setPhotos] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const updatePhotos = async () => {
      const newPhotos = await fetchPhotos(page);
      setPhotos(newPhotos);
      setPage((prevPage) => (prevPage >= 10 ? 1 : prevPage + 1));
    };

    updatePhotos();
    const interval = setInterval(updatePhotos, 10000);

    return () => clearInterval(interval);
  }, [page]);

  return (
    <div className="photo-grid">
      {photos.map((photo, index) => (
        <img key={index} src={photo} alt="Not Found" className="img" />
      ))}
    </div>
  );
};

export default PhotoGrid;
