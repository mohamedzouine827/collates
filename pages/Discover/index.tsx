import React, { useState, useEffect } from 'react';
import Navbar from '../_components/Home/Navbar';
import { db } from '@/utils/dbConfig';
import { Likes } from '@/utils/schema';
import Palletes from '../_components/Discover/Palletes';

interface Like {
  id: number;
  user: string;
  colors: string;
}

function Page() {
  const [data, setData] = useState<Like[] | undefined>(undefined);

  useEffect(() => {
    getLikedColor();
  }, []); // Call getLikedColor on component mount

  async function getLikedColor() {
    const result: Like[] = await db.select().from(Likes);
    setData(result);
  }
  function splitWords(text : string) : string[]{
    const splited = text.split("@")
    return splited
  }
  
  return (
    <div className='py-10 px-14 flex flex-col justify-center'>
      <Navbar />
      <div className='mt-10 grid grid-cols-1 sm:grid-cols-4 gap-4'>
        {data && data.map((like, index) => (
          <div key={index}  className='flex flex-col gap-2 mb-4 items-center'><Palletes colors={like.colors.split(',')} />
          <div className='text-lg font-bold'>
                {splitWords(like.user)[0]}
          </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Page;