import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";

const SpringPointer = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      setMousePosition({
        x: event.clientX,
        y: event.clientY,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <motion.div
      style={{
        width: "10px",
        height: "10px",
        borderRadius: "50%",
        backgroundColor: "#fa9ebc",
        position: "fixed",
        zIndex: 9999,
        x: mousePosition.x - 25, // 중앙 정렬을 위해 크기의 절반만큼 오프셋
        y: mousePosition.y - 25, // 마찬가지로 중앙 정렬
      }}
      transition={{
        type: "spring",
        stiffness: 50, // 더 높은 값은 더 빠르고 탄력적인 움직임을 만듭니다.
        damping: 3, // 더 높은 값은 더 빠르게 멈추게 합니다.
      }}
    />
  );
};

export default SpringPointer;
