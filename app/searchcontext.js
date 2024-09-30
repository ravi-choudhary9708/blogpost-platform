'use client';

import { createContext, useState } from "react";

// Create the context
export const SearchContext = createContext();

// Create a provider component
export const SearchProvider = ({ children }) => {
  const [post, setpost] = useState([]);
  const [searchQuery, setsearchQuery] = useState("");

  // Return the Provider with the context values
  return (
    <SearchContext.Provider value={{ post, setpost, searchQuery, setsearchQuery }}>
      {children}
    </SearchContext.Provider>
  );
};




/*
'use client'
import { createContext } from "react";


export const SearchContext = createContext();
export const searchProvide=({children})=>{
const [post, setpost] = useState([]);
const [searchQuery, setsearchQuery] = useState("");
<SearchContext.Provider value={{post,setpost,searchQuery,setsearchQuery}}>
{children}
</SearchContext.Provider>

}
*/