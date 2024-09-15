

export default function HomeBox4() {
  return (
    <div className="font-primary text-4xl bg-[#242424] rounded-lg p-3 mb-3">
        <h1>Projects.</h1>
        <div className="inline-flex flex-col gap-3 mt-5">
            <a href="https://github.com/vikashpatel04/KGX-Website" target="_blank">
            <div className="group cursor-mac_pointer flex items-center gap-3"><span className="inline-block transform transition-transform duration-300 group-hover:rotate-[-45deg]">→</span><h3 className="text-3xl">KGX website</h3></div>
            </a>
            <a href="https://github.com/vikashpatel04/microCollegeScraping" target="_blank">
            <div className="group cursor-mac_pointer flex items-center gap-3"><span className="inline-block transform transition-transform duration-300 group-hover:rotate-[-45deg]">→</span><h3 className="text-3xl">Job Scrapper</h3></div>
            </a>
            <a href="https://github.com/vikashpatel04/simple_text_editor_js" target="_blacnk">
            <div className="group cursor-mac_pointer flex items-center gap-3"><span className="inline-block transform transition-transform duration-300 group-hover:rotate-[-45deg]">→</span><h3 className="text-3xl">Online text editor</h3></div>
            </a>
            <a href="https://github.com/vikashpatel04/flames" target="_blank">
            <div className="group cursor-mac_pointer flex items-center gap-3"><span className="inline-block transform transition-transform duration-300 group-hover:rotate-[-45deg]">→</span><h3 className="text-3xl">Flames Game</h3></div>
            </a>
        </div>
        <p className="text-lg mt-2"><span className="text-red-600">*</span>these are only selective projects, to see all click on Projects.</p>
    </div>
  )
}
