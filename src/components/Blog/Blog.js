import React, { useEffect, useState } from "react";
const Blog = ({ text, image }) => {
  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    fetch(image)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Failed to fetch image: ${response.statusText}`);
        }
        return response.blob();
      })
      .then((blob) => {
        const imageUrl = URL.createObjectURL(blob);
        setImageUrl(imageUrl);
      })
      .catch((error) => {
        console.error("Error fetching image:", error);
      });
  }, []);
  return (
    <div className="blog">
      <img src={imageUrl} alt="poster" />

      <h3 className="blog-heading">Heading</h3>
      <p className="blog-content">{text}</p>
    </div>
  );
};

export default Blog;
