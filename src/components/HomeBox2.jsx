import Marquee from "react-fast-marquee"

export default function HomeBox2() {
  return (
    <div className="flex flex-col gap-2 font-primary lg:h-full lg:mt-3 w-full p-4 bg-[#242424] rounded-lg">
        <h1 className="text-4xl tracking-wide text-center lg:text-left">Skills.</h1>
        <p className="text-2xl text-center lg:text-left">languages i know</p>
        <div className="w-full h-10 mt-2">
          <Marquee autoFill="true" pauseOnHover="true" gradient="true" gradientWidth="20px" gradientColor="#242424">
          <div className="h-10 p-2 px-4 mx-1 bg-black rounded-md hover:bg-blue-600 cursor-mac_pointer">HTML</div>
          <div className="h-10 p-2 px-4 mx-1 bg-black rounded-md hover:bg-blue-600 cursor-mac_pointer">CSS</div>
          <div className="h-10 p-2 px-4 mx-1 bg-black rounded-md hover:bg-blue-600 cursor-mac_pointer">JavaScript</div>
          <div className="h-10 p-2 px-4 mx-1 bg-black rounded-md hover:bg-blue-600 cursor-mac_pointer">TailwindCSS</div>
          <div className="h-10 p-2 px-4 mx-1 bg-black rounded-md hover:bg-blue-600 cursor-mac_pointer">ReactJS</div>
          <div className="h-10 p-2 px-4 mx-1 bg-black rounded-md hover:bg-blue-600 cursor-mac_pointer">Bootstrap</div>
          <div className="h-10 p-2 px-4 mx-1 bg-black rounded-md hover:bg-blue-600 cursor-mac_pointer">NodeJS</div>
          <div className="h-10 p-2 px-4 mx-1 bg-black rounded-md hover:bg-blue-600 cursor-mac_pointer">MongoDB</div>
          </Marquee>
        </div>
        <p className="text-2xl tracking-wide mt-2 text-center lg:text-left">tools i know</p>
        <div className="w-full h-10 mt-2">
          <Marquee autoFill="true" pauseOnHover="true" gradient="true" gradientWidth="20px" gradientColor="#242424" direction="right">
          <div className="h-10 p-2 px-4 mx-1 bg-black rounded-md hover:bg-blue-600 cursor-mac_pointer">Visual Studio</div>
          <div className="h-10 p-2 px-4 mx-1 bg-black rounded-md hover:bg-blue-600 cursor-mac_pointer">npm</div>
          <div className="h-10 p-2 px-4 mx-1 bg-black rounded-md hover:bg-blue-600 cursor-mac_pointer">Vite</div>
          <div className="h-10 p-2 px-4 mx-1 bg-black rounded-md hover:bg-blue-600 cursor-mac_pointer">GitHub</div>
          <div className="h-10 p-2 px-4 mx-1 bg-black rounded-md hover:bg-blue-600 cursor-mac_pointer">Microsoft 360</div>
          <div className="h-10 p-2 px-4 mx-1 bg-black rounded-md hover:bg-blue-600 cursor-mac_pointer">Obsidian</div>
          </Marquee>
        </div>
        <p className="text-lg mt-1"><span className="text-red-600 hover:cursor-mac_text">*</span>one who knows how to use right thing in right place in insane</p>
    </div>
  )
}
