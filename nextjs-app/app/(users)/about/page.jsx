import Link from 'next/link'
import React from 'react'

const AboutPage = () => {
  return (
    <>
      <h1 className='common_heading'>Hello from About page</h1>
      <button><Link href="/">Go to Home</Link></button>
    </>
  )
}

export default AboutPage