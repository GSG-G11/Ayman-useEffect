import React, { useEffect, useState } from "react";

function GIPHY() {
  const [images, setImages] = useState([]);
  const [input, setInput] = useState("");

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  useEffect(() => {
    fetch(
      `https://api.giphy.com/v1/gifs/search?q=${input}&api_key=fZm2get12SUk1eNRbXur02h4aCpZmeY2`
    )
      .then((res) => res.json())
      .then((data) => {
        setImages(data.data);
      })
      .catch((err) => console.log(err));
  }, [input]);

  return (
    <div>
      <input onChange={(e) => handleChange(e)} />
      <div>
        {images.map((image) => (
          <img src={image.images.original.url} alt="" />
        ))}
      </div>
    </div>
  );
}

export default GIPHY;
