'use client'
 
import { useRouter } from 'next/navigation'
import React from 'react'
import { useState,useEffect } from 'react';

const Navbar = () => {
  const router = useRouter();
  const [searchquery, setsearchquery] = useState('');
  const [filteredposts, setfilteredposts] = useState([]);
  const [posts, setposts] = useState()

  useEffect(() => {
    async function fetchdata() {

      try {
        const data = await fetch("https://jsonplaceholder.typicode.com/posts");
        const post = await data.json();
        console.log(post);
        setposts(post)
       
      } catch (error) {
        console.error("Error fetching data:", error);
       
      }
    }
    fetchdata();

  }, []);


  const handlesearch= (e)=>{
    const query =e.target.value.toLowerCase();
    setsearchquery(query);
console.log(e.target.value.toLowerCase())
    const filtered=posts.filter((post)=>{
post.title.toLowerCase().includes(query);
console.log(post.title.toLowerCase().includes(query))
    })
    setfilteredposts(filtered)
  }

  return (
    <header className="text-gray-600 body-font">
    <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center" bis_skin_checked="1">
      <nav className="flex lg:w-2/5 flex-wrap items-center text-base md:ml-auto">
        <a className="mr-5 hover:text-white cursor-pointer">First Link</a>
        <a className="mr-5 hover:text-white  cursor-pointer">Second Link</a>
        <a className="mr-5 hover:text-white cursor-pointer ">Third Link</a>
    <input className='rounded-lg' onChange={handlesearch} type="search" placeholder='search posts' name='posts-title' value={searchquery} />
      </nav>
      <a className="flex order-first lg:order-none lg:w-1/5 title-font font-medium items-center text-gray-900 lg:items-center lg:justify-center mb-4 md:mb-0">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
        </svg>
        <span className="ml-3 text-xl">Tailblocks</span>
      </a>
      <div className="lg:w-2/5 inline-flex lg:justify-end ml-5 lg:ml-0" bis_skin_checked="1">
        <button onClick={()=>{router.push("/")}} className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">Home
          <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </button>
      </div>
    </div>


    
  </header>



  )
}

export default Navbar
