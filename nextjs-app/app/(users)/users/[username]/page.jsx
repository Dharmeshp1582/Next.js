import React from 'react'
//dynamic routing


const SingleProfile = async(props) => {

  
  const user = await props.params; // This will contain the dynamic segments of the URL
  console.log(user);

  return (
    <div>
      <h1>User = {user.username}</h1>
    </div>
  )
}

export default SingleProfile