'use client'
import Link from 'next/link';
import { SearchContext } from './searchcontext';
import { useContext, useEffect, useState } from 'react';

function MyApp() {
const {post,setpost}=useContext(SearchContext);
  const [loading, setloading] = useState(true);

  useEffect(() => {
    async function fetchdata() {

      try {
        const data = await fetch("https://jsonplaceholder.typicode.com/posts");
        const res = await data.json();
        console.log(res);
        setpost(res);
        setloading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setloading(false);  // Stop loading in case of error
      }
    }
    fetchdata();

  }, []);


  if (loading) {
    return(
       <div className='h-[100vh] flex justify-center items-center'>
        <div class="loader"></div>

       </div>  // Show loading message while fetching
    )
  }
  return (
    <div>
      <section className="text-black body-font">
        <div className="container px-5 py-16 mx-auto " bis_skin_checked="1">
          <div className="flex flex-wrap -m-4" bis_skin_checked="1">
            {post.slice(0, 3).map((post) => {
              return (
                <div key={post.id} className="p-4 lg:w-1/3" bis_skin_checked="1">
                  <div className="h-full bg-gray-100 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative" bis_skin_checked="1">
                    <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">CATEGORY</h2>
                    <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">{post.title}</h1>
                    <p className="leading-relaxed mb-3">{post.body}</p>
                    <Link href={`/blog/${post.id}`} className="text-indigo-500 inline-flex items-center">Learn More 
                      <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M5 12h14"></path>
                        <path d="M12 5l7 7-7 7"></path>
                      </svg>
                    </Link>
                    <div className="text-center mt-2 leading-none flex justify-center absolute bottom-0 left-0 w-full py-4" bis_skin_checked="1">
                      <span className="text-gray-400 mr-3 inline-flex items-center leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                        <svg className="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                          <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                          <circle cx="12" cy="12" r="3"></circle>
                        </svg>1.2K
                      </span>
                      <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                        <svg className="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                          <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                        </svg>6
                      </span>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>
    </div>
  )
}

export default MyApp;
