"use client";

import { useEffect, useState } from "react";
import { Counter } from "./Counter";


// we cannot create async function await in client components
// by default all components are server components
//if we need to convert it into client than use 'use client' top of the page

const URL = "https://jsonplaceholder.typicode.com/posts";

export default function ClientComp() {
  const [postData, setPostData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(URL);
      const data = await res.json();
      console.log(data);
      setPostData(data);
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Client Component</h1>
      <button
        className="bg-amber-400 text-black p-5 cursor-pointer"
        onClick={() => alert("Hello from ClientComp!")}
      >
        Click Me
      </button>

      <Counter />
   
      <ul className="grid grid-cols-3 gap-5">
        {postData.map((post,index) => (
        <li key={index}>{post.body}</li>
        ))}
      </ul>
    </div>
  );
}
