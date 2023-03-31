"use client";
import fetchSuggestionFromChatGPT from '@/lib/fetchSuggestionFromChatGPT';
import React from 'react';
import { FormEvent, useState } from "react";
import useSWR from "swr";
function Promptinput() {
    const [input, setInput] = useState("");

    const {data:suggestion, error, isLoading, mutate, isValidating}=useSWR(
      "/api/suggestions", 
      fetchSuggestionFromChatGPT, 
    {
    revalidateOnFocus: false,
    }
  );

  return (
    <div className="m-10"> 
    <form  className =" flex flex-col lg:flex-row shadow-md
    shadow-slate-400/10 border rounded-md lg:divide-x">
        <textarea
        value={input}
        onChange={(e)=>setInput(e.target.value)}
          placeholder="Enter a prompt..."
          className="flex-1 p-4 outline-none rounded-md"
        />
        <button 
        type ="submit"
        className={`p-4  font-bold ${
        input
        ? ' bg-gray-600 text-white transition-colours  duration-200' 
        : "text-gray-300  cursor-not-allowed"
        }`}
        disabled={!input}
        > Generate</button>
        
        <button 
        className= {"p-4 bg-gray-500 text-white transition-colors duration-200 font-bold disabled:text-gray-300 disabled:cursor-not-allowed disabled:bg-gray-400"}
         type="button"
        >
         Use Suggestion
        </button>


        <button 
         className="p-4 bg-gray-400 text-white border-none transition-colors duration-200 rounded-b-md md:rounded-r-md md:rounded-bl-none font-bold"
        >
        New Suggestion
        </button>   
    </form>
    </div>
  );
}
export default Promptinput
