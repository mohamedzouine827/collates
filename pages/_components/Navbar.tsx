import React from 'react';
import { motion } from 'framer-motion'; // Import motion from Framer Motion
import Image from 'next/image';
import Logo from "@/public/assets/Logo.png";
import { Button } from '@/components/ui/button';
import { Poppins } from 'next/font/google';
import Link from 'next/link';
import { useUser } from '@clerk/nextjs';
import { UserButton } from '@clerk/nextjs';

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
      <motion.div className={roboto.className} initial={{ x: 50 }} animate={{ x: 0 }} transition={{ duration: 0.8, delay:0.2 }}>
        {!isSignedIn ? <Link href="/sign-in"><Button className='font-medium invisible sm:visible'>Get Started</Button></Link> : (<UserButton/>)}
      </motion.div>
    </motion.section>
  );
}

export default Navbar;
