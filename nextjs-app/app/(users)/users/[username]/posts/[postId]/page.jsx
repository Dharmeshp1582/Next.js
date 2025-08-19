import React from 'react'

const SingleProfilePost = async(props) => {

  
  const user = await props.params; // This will contain the dynamic segments of the URL
  console.log(user);

  return (
    <div>
      <h1>Username = {user.username}</h1>
      <h1>PostId = {user.postId}</h1>
    </div>
  )
}

export default SingleProfilePost