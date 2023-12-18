import React, { useEffect, useState } from "react";
const Blog = ({ text, image }) => {
  const [imageUrl, setImageUrl] = useState("");
  const textArr = text.split("\n");
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
      <h3 className="blog-heading">{textArr[0]}</h3>
      <img src={imageUrl} alt="poster" />
      <p className="blog-content">{textArr[1]}</p>
    </div>
  );
};

export default Blog;
