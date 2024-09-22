'use client'
import React from 'react'
import { useRouter } from 'next/navigation';

const page = () => {
    const router = useRouter();
//ispe pr click krne se homepage pr jayenge
    const goToHome = () => {
      router.push('/');
    };
  return (
    <div>
      <div>  i am about</div>
  <button onClick={goToHome}>Go to Home</button>;


    </div>
  )
}

export default page
