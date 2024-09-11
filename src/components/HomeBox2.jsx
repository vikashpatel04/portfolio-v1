import Marquee from "react-fast-marquee"

export default function HomeBox2() {
  return (
    <div className="flex flex-col gap-2 font-primary w-full p-4 bg-[#242424] rounded-lg">
        <h1 className="text-4xl tracking-wide">Skills.</h1>
        <p className="text-2xl ">languages i know</p>
        <div className="w-full h-10 mt-2">
          <Marquee autoFill="true" gradient="true" gradientWidth="20px" gradientColor="#242424">
          <div className="h-10 p-2 px-4 mx-1 bg-black rounded-md hover:bg-blue-600 cursor-pointer">HTML</div>
          <div className="h-10 p-2 px-4 mx-1 bg-black rounded-md hover:bg-blue-600 cursor-pointer">CSS</div>
          <div className="h-10 p-2 px-4 mx-1 bg-black rounded-md hover:bg-blue-600 cursor-pointer">JavaScript</div>
          <div className="h-10 p-2 px-4 mx-1 bg-black rounded-md hover:bg-blue-600 cursor-pointer">TailwindCSS</div>
          <div className="h-10 p-2 px-4 mx-1 bg-black rounded-md hover:bg-blue-600 cursor-pointer">ReactJS</div>
          <div className="h-10 p-2 px-4 mx-1 bg-black rounded-md hover:bg-blue-600 cursor-pointer">Bootstrap</div>
          <div className="h-10 p-2 px-4 mx-1 bg-black rounded-md hover:bg-blue-600 cursor-pointer">NodeJS</div>
          <div className="h-10 p-2 px-4 mx-1 bg-black rounded-md hover:bg-blue-600 cursor-pointer">MongoDB</div>
          </Marquee>
        </div>
        <p className="text-2xl tracking-wide mt-2">tools i know</p>
        <div className="w-full h-10 mt-2">
          <Marquee autoFill="true" gradient="true" gradientWidth="20px" gradientColor="#242424" direction="right">
          <div className="h-10 p-2 px-4 mx-1 bg-black rounded-md hover:bg-blue-600 cursor-pointer">Visual Studio</div>
          <div className="h-10 p-2 px-4 mx-1 bg-black rounded-md hover:bg-blue-600 cursor-pointer">npm</div>
          <div className="h-10 p-2 px-4 mx-1 bg-black rounded-md hover:bg-blue-600 cursor-pointer">Vite</div>
          <div className="h-10 p-2 px-4 mx-1 bg-black rounded-md hover:bg-blue-600 cursor-pointer">GitHub</div>
          <div className="h-10 p-2 px-4 mx-1 bg-black rounded-md hover:bg-blue-600 cursor-pointer">Microsoft 360</div>
          <div className="h-10 p-2 px-4 mx-1 bg-black rounded-md hover:bg-blue-600 cursor-pointer">Obsidian</div>
          </Marquee>
        </div>
        <p className="text-lg mt-1"><span className="text-red-600">*</span>one who knows how to use right thing in right place in insane</p>
    </div>
  )
}
