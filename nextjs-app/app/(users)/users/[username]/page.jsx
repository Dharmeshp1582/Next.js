// import React from 'react'
//dynamic routing
//server component

// const SingleProfile = async(props) => {

  
//   const user = await props.params; // This will contain the dynamic segments of the URL
//   console.log(user);

//   return (
//     <div>
//       <h1>User = {user.username}</h1>
//     </div>
//   )
// }

// export default SingleProfile




'use client'
import React, { use } from 'react'
//dynamic routing 
//client component

const SingleProfile = (props) => {


  const user = use(props.params); // this is way to access dynamic segments in client components without using an async and await or promises 
  console.log(user);

  return (
    <div>
      <h1>User = {user.username}</h1>
    </div>
  )
}

export default SingleProfile