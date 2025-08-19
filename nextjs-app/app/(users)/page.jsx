export const metadata = {
    title: "Home Page",
    description: "Welcome to our homepage",
}

// in nextjs if you want to add an onclick etc events then you need to create your component an client component 

export default function Home() {
  return (
    <>

    <h1 className="font-roboto">
      Hello world! 
    </h1>
    <button className="bg-amber-400 text-black p-5" >click me</button>
    </>
  )
}