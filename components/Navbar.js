'use client'
 import { useContext } from 'react';
 import { SearchContext } from '@/app/searchcontext';
import { useRouter } from 'next/navigation'
import React from 'react'
import { useState,useEffect } from 'react';

const Navbar = () => {
const {searchQuery,setsearchQuery,post,setpost}=useContext(SearchContext);
const [originalposts, setoriginalposts] = useState([])




useEffect(() => {
  if( originalposts.length===0 && post.length>0){
    setoriginalposts(post)
  }

}, [post,originalposts.length])

//originalpost.lenth===0 check if original post is empty ,meaning you have not yet stored the full list of posts

/*
Why check this?
You only want to set originalposts once, the first time posts are fetched. Once it's set, you don't want to keep overwriting it, especially after filtering, so this condition ensures originalposts is only set once.
*/

  const router = useRouter();
  const handlesearch= (e)=>{
    const query =e.target.value.toLowerCase();
    setsearchQuery(query);
console.log(e.target.value.toLowerCase())

   if(query===""){
    setpost(originalposts)
   }
   else{
    const filtered=originalposts.filter((post)=>{
      return post.title.toLowerCase().includes(query);
      console.log(post.title.toLowerCase().includes(query))
   })
   setpost(filtered)
    
   }

   
  }

/*
The issue you're facing happens because you're filtering posts based on the current originalposts, but when a second search is made, the originalposts still contain only the posts from the previous search. This causes the filter to not work as expected when you search for something new.

Problem:
The main problem is that setoriginalposts(post) is only being set once and you're using originalposts for filtering. Once the first search happens, you're working with the filtered posts and not the full list of posts from the API.
*/



  return (
    <header className="text-gray-600 body-font">
    <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center" bis_skin_checked="1">
      <nav className="flex lg:w-2/5 flex-wrap items-center text-base md:ml-auto">
        <a className="mr-5 hover:text-white cursor-pointer">First Link</a>
        <a className="mr-5 hover:text-white  cursor-pointer">Second Link</a>
        <a className="mr-5 hover:text-white cursor-pointer ">Third Link</a>
    <input className='rounded-lg  p-1' onChange={handlesearch} type="search" placeholder='search posts' name='posts-title' value={searchQuery} />
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
