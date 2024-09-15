import GitHub from "../assets/images/GitHub.png"
import Insta from "../assets/images/Instagram-Circle.png"
import LinkedIn from "../assets/images/LinkedIn-Circled.png"
import Twitter from "../assets/images/TwitterX.png"

export default function HomeBox3() {
  return (
    <div className="font-primary w-full h-full p-3 bg-[#242424] rounded-lg">
        <h1 className="text-4xl tracking-wide">Socials.</h1>
        <div className="p-2 inline-flex flex-col gap-2 mt-2">
            <a href="https://github.com/vikashpatel04" target="_black" className="cursor-mac_pointer">
            <div className="flex items-center gap-3"><img src={GitHub} className="h-10" alt="logo" /><p className="text-2xl">GitHub</p></div>
            </a>
            <a href="www.linkedin.com/in/vkas04" target="_black" className="cursor-mac_pointer">
            <div className="flex items-center gap-3"><img src={LinkedIn} className="h-10" alt="logo" /><p className="text-2xl">LinkedIn</p></div>
            </a>
            <a href="https://x.com/vikashwastaken" target="_black" className="cursor-mac_pointer">
            <div className="flex items-center gap-3"><img src={Twitter} className="h-10" alt="logo" /><p className="text-2xl">X-Twitter</p></div>
            </a>
            <a href="https://www.instagram.com/vikashwastaken/" target="_black" className="cursor-mac_pointer">
            <div className="flex items-center gap-3"><img src={Insta} className="h-10" alt="logo" /><p className="text-2xl">Instagram</p></div>
            </a>
        </div>
    </div>
  )
}
