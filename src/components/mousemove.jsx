import React, { useEffect, useState } from "react";

const MouseMove = () => {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  useEffect(() => {
    document.addEventListener("mousemove", handleMove);

    return () => {
      document.removeEventListener("mousemove", handleMove);
    };
  });

  const handleMove = (e) => {
    const halfScreenWidth = window.innerWidth / 2;

    if (mouse.x > halfScreenWidth) {
      document.body.style.backgroundColor = "blue";
    } else {
      document.body.style.backgroundColor = "tomato";
    }

    setMouse({ x: e.clientX, y: e.clientY });
  };

  return (
    <>
        <h1>Move the mouse around!</h1>
        <p>The current mouse position is: X: {mouse.x}, Y: {mouse.y}</p>
     
    </>
  );
};

export default MouseMove;
