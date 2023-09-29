import Navbar from "./components/Navbar"

export default function Home() {
  return (
    <>
    <Navbar/>
    {/* <div className="bg-gray-100 min-h-screen flex items-center justify-center"> */}
      <div className="text-center mx-auto p-6 bg-white">
        <h1 className="text-4xl font-bold mb-4">Benjamin McFadden</h1>
        <p className="text-lg text-gray-700 mb-8">
          PhD researcher and aspiring ML engineer
        </p>
        <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-6 py-2 rounded-md">
          Learn More
        </button>
      </div>
    {/* </div> */}
    
    </>
    
  )
}
