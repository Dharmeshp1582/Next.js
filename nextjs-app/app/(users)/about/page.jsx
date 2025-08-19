import Link from 'next/link'
import React from 'react'

export const metadata = {
    title: "About Page",
    description: "Learn more about our team and mission",
}

const AboutPage = async () => {
  return (
    <>
      <h1 className='common_heading'>Hello from About page</h1>
      <button><Link href="/">Go to Home</Link></button>
    </>
  )
}

export default AboutPage