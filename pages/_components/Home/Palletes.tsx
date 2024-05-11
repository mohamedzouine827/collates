import React, { useEffect, useState } from "react";

function Palletes({ color }: { color: any[] }) {
  const [copiedColor, setCopiedColor] = useState("");
  const [showText, setShowText] = useState(false);

  const copyColor = (color: string) => {
    navigator.clipboard.writeText(color);
    setCopiedColor(color);
    setShowText(true);
    setTimeout(() => {
      setShowText(false);
    }, 700);
  };

  return (
    <div className="w-[80vw] sm:w-[32vw] h-[35vh] rounded-3xl flex flex-row shadow-2xl">
      {color && color.map((col, index) => (
        <div
          key={index}
          className={`h-full w-[20vw] sm:w-[8vw]  bg-[${col}] ${
            index === 0 ? "rounded-l-3xl" : index === color.length - 1 ? "rounded-r-3xl" : ""
          } cursor-pointer`}
          style={{ backgroundColor: col, height: "100%" }}
          onClick={() => copyColor(col)}
        >
          <div className="flex justify-center items-center opacity-0  h-full hover:opacity-100 duration-300 transition-all text-lg sm:text-xl font-bold">
            {showText && copiedColor === col ? "Copied!" : col}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Palletes;
