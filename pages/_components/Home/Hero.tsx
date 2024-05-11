import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Poppins } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import me from "@/public/assets/me.png";
import Palletes from "./Palletes";
import { useUser } from "@clerk/nextjs";
import { useToast } from "@/components/ui/use-toast";
import { db } from "@/utils/dbConfig";
import { Likes } from "@/utils/schema";

const roboto = Poppins({
  weight: ["400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
});

function Hero() {
  const { user, isSignedIn } = useUser();
  const [colors, setColors] = useState<string[]>([]);

  function generateHexColor(): string {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);

    const redHex = red.toString(16).padStart(2, "0");
    const greenHex = green.toString(16).padStart(2, "0");
    const blueHex = blue.toString(16).padStart(2, "0");

    const hexColor = `#${redHex}${greenHex}${blueHex}`;

    return hexColor;
  }
  const { toast } = useToast()

  function handleHexColorGeneration() {
    const newColors: string[] = [];
    for (let i = 0; i < 4; i++) {
      newColors.push(generateHexColor());
    }
    setColors(newColors);
    
  }

  useEffect(() => {
    handleHexColorGeneration();
    toast({description:'new Colors Has Been Generated'});
  }, [user]);

  useEffect(() => {
    console.log(colors);
  }, [colors]);
  
  async function addNewColors() {
    const userEmail = user?.primaryEmailAddress?.emailAddress ?? "Unknown";
    const colorsString = colors.join(','); // Join colors array into a comma-separated string
    const result = await db.insert(Likes)
      .values({
        user: userEmail,
        colors: colorsString // Insert the string representation of colors
      })
  }
  

  return (
    <motion.section
      className="flex flex-col items-center justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <Palletes color={colors} />
      <motion.div
        className={roboto.className}
        initial={{ x: 120, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <motion.div className="mt-16 flex flex-row gap-4 justify-center items-center">
          <Button onClick={handleHexColorGeneration} className="bg-black text-white">
            Generate The Palettes
          </Button>
          <Button onClick={()=> addNewColors()}>♡</Button>
        </motion.div>
      </motion.div>
      <motion.div
        className="mt-16 flex flex-row items-center gap-2"
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        Made By:{" "}
        <Link href="https://twitter.com/mzn010a" className="underline font-bold">
          Mohamed Zouine
        </Link>{" "}
        <Image src={me} alt="me" className="h-10 w-10 rounded-full" />
      </motion.div>
    </motion.section>
  );
}

export default Hero;
