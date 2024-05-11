import { Button } from "@/components/ui/button";
import { Poppins } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";
import { motion } from "framer-motion"; // Import motion from Framer Motion
import me from "@/public/assets/me.png";
import Palletes from "./Palletes";
import { useUser } from "@clerk/nextjs";

const roboto = Poppins({
  weight: ["400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
});

function Hero() {
  const { user, isSignedIn } = useUser();

  useEffect(() => {}, [user]);
  return (
    <motion.section
      className="flex flex-col items-center justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <Palletes />
      <motion.div
        className={roboto.className}
        initial={{ x: 120, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        {isSignedIn ? (
          <Link href="/home"><Button className="mt-16 bg-black text-white">
            Generate Your Color Palletes
          </Button>
          </Link>
        ) : (
          <Link href="/sign-in">
            {" "}
            <Button className="mt-16 bg-black text-white">Get Started</Button>
          </Link>
        )}
      </motion.div>
      <motion.div
        className="mt-16 flex flex-row items-center gap-2"
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        Made By:{" "}
        <Link
          href="https://twitter.com/mzn010a"
          className="underline font-bold"
        >
          {" "}
          Mohamed Zouine
        </Link>{" "}
        <Image src={me} alt="me" className="h-10 w-10 rounded-full" />
      </motion.div>
    </motion.section>
  );
}

export default Hero;
