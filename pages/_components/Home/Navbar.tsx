import React from 'react';
import { motion } from 'framer-motion'; // Import motion from Framer Motion
import Image from 'next/image';
import Logo from "@/public/assets/Logo.png";
import { Button } from '@/components/ui/button';
import { Poppins } from 'next/font/google';
import Link from 'next/link';
import { useUser } from '@clerk/nextjs';
import { UserButton } from '@clerk/nextjs';
import { db } from '@/utils/dbConfig';
import { Likes } from '@/utils/schema';


const roboto = Poppins({
  weight: ["400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
});

function Navbar() {
  const {user, isSignedIn} = useUser();

  
  return (
    <motion.section className='flex flex-row justify-between items-center' initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8 , delay: 0.2 }}>
      <motion.div initial={{ x: -50 }} animate={{ x: 0 }} transition={{ duration: 0.8, delay:0.2 }}>
        <Image src={Logo} alt="logo" width={4000} height={4000} className='w-[127px] h-[45px]' />
      </motion.div>
      <motion.div className={roboto.className}>
        <div className='flex flex-row mr-20 gap-20  justify-between items-center '>
          <Link href="/home">
        <div className='text-lg bg-black border-2 border-black text-white px-[16px] flex items-center justify-center py-[2px] cursor-pointer transition-all hover:bg-white hover:text-black duration-500 ease-in-out rounded-xl'>
            Home
        </div>
        </Link>
        <Link href="/Discover">
        <div className='text-lg bg-black border-2 border-black text-white px-[16px] flex items-center justify-center py-[2px] cursor-pointer transition-all hover:bg-white hover:text-black duration-500 ease-in-out rounded-xl'>
            Discover
        </div>
        </Link>
        </div>
      </motion.div>
      <motion.div className={roboto.className} initial={{ x: 50 }} animate={{ x: 0 }} transition={{ duration: 0.8, delay:0.2 }}>
        {!isSignedIn ? <Link href="/sign-in"><Button className='font-medium'>Get Started</Button></Link> : (<UserButton/>)}
      </motion.div>
    </motion.section>
  );
}

export default Navbar;
