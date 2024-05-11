import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

function Palletes() {
  const Colors = [
    {
      First: "black",
      Second: "neutral-800",
      Third: "neutral-400",
      Last: "white",
    },
    {
      First: "red-700",
      Second: "red-500",
      Third: "red-300",
      Last: "white",
    },
    {
      First: "blue-950",
      Second: "blue-700",
      Third: "blue-500",
      Last: "blue-200",
    },
    {
      First: "teal-950",
      Second: "teal-700",
      Third: "teal-500",
      Last: "teal-200",
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
        className={`h-full w-[8vw] bg-${color1} rounded-l-3xl`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      ></motion.div>
      <motion.div
        className={`h-full w-[8vw] bg-${color2}`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      ></motion.div>
      <motion.div
        className={`h-full w-[8vw] bg-${color3}`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      ></motion.div>
      <motion.div
        className={`h-full w-[8vw] bg-${color4} rounded-r-3xl`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      ></motion.div>
    </div>
  );
}

export default Palletes;