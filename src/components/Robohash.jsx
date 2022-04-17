import React, { useEffect, useState } from "react";

function Robohash() {
  const [input, setInput] = useState("");
  const [images, setImages] = useState([]);

  const handleChange = (e) => {
    setInput(e.target.value);
  };
  useEffect(() => {
    const abortController = new AbortController();

    if (input) {
      fetch(`https://robohash.org/${input}`, {
        signal: abortController.signal,
      }).then((data) => setImages(data.url));
    }

    return () => abortController.abort();
  }, [input]);

  return (
    <>
      <input onChange={(e) => handleChange(e)} />
      <br></br>
      <img src={images} />
    </>
  );
}

export default Robohash;
