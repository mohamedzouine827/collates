import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

function Palletes() {
  const Colors = [
    {
      First: "#000000", // black
      Second: "#424242", // neutral-800
      Third: "#BDBDBD", // neutral-400
      Last: "#FFFFFF", // white
    },
    {
      First: "#D32F2F", // red-700
      Second: "#F44336", // red-500
      Third: "#FFCDD2", // red-300
      Last: "#FFFFFF", // white
    },
    {
      First: "#0D47A1", // blue-950
      Second: "#1976D2", // blue-700
      Third: "#64B5F6", // blue-500
      Last: "#BBDEFB", // blue-200
    },
    {
      First: "#004D40", // teal-950
      Second: "#00796B", // teal-700
      Third: "#4DB6AC", // teal-500
      Last: "#B2DFDB", // teal-200
    },
  ];
  const [colorIndex, setColorIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setColorIndex((prevIndex) => (prevIndex + 1) % Colors.length);
    }, 5000);

    // Cleanup function to clear the interval when the component unmounts
    return () => clearInterval(timer);
  }, []);

  const [color1, setColor1] = useState(Colors[colorIndex].First);
  const [color2, setColor2] = useState(Colors[colorIndex].Second);
  const [color3, setColor3] = useState(Colors[colorIndex].Third);
  const [color4, setColor4] = useState(Colors[colorIndex].Last);

  useEffect(() => {
    setColor1(Colors[colorIndex].First);
    setColor2(Colors[colorIndex].Second);
    setColor3(Colors[colorIndex].Third);
    setColor4(Colors[colorIndex].Last);
  }, [colorIndex]);

  return (
    <div className=" w-[32vw] h-[35vh] rounded-3xl flex flex-row shadow-2xl">
      <motion.div
        className={`h-full w-[8vw] rounded-l-3xl`}
        style={{ backgroundColor: color1 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      ></motion.div>
      <motion.div
        className={`h-full w-[8vw]`}
        style={{ backgroundColor: color2 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      ></motion.div>
      <motion.div
        className={`h-full w-[8vw]`}
        style={{ backgroundColor: color3 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      ></motion.div>
      <motion.div
        className={`h-full w-[8vw] rounded-r-3xl`}
        style={{ backgroundColor: color4 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      ></motion.div>
    </div>
  );
}

export default Palletes;
