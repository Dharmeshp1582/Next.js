import React from 'react'

//used only in server components 
const Date = async (props) => {

  const user = await props.params; // This will contain the dynamic segments of the URL

  return (
    <div>
      <h1>Username = {user.username}</h1>
      <h1>PostId = {user.postId}</h1>
      <h1>Date = {user.date}</h1>
    </div>
  )
}

export default Date;