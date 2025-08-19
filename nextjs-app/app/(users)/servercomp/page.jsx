
import Link from 'next/link'
const URL = "https://jsonplaceholder.typicode.com/posts";

const serverComp = async() => {
   const res = await fetch(URL);
      const data = await res.json();
      console.log(data);

return (
    <>
      <h1 className='bg-blue-400'>server Component</h1>
      <ul className="grid grid-cols-3 gap-5">
        {data.map((post,index) => (
        <li key={index}>{post.body}</li>
        ))}
      </ul>
    </>
  );
  
}

export default serverComp