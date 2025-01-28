import './header.css'

function header(){
    return(
        <>
            <header className="w-full">
                <div className="p-5 max-sm:px-2 flex justify-around items-center text-white relative z-[1000]">
                    <div className="nombre-Header">
                        <h2 className='text-[1.5rem]'>Jerry Rivera</h2>
                    </div>
                    <div className="links-Header">
                    <ul className="flex gap-5 max-sm:gap-3 list-none">
                        <li>
                            <a href="#home" className="relative text-white no-underline group relative transition-all duration-1000 hover:text-[#870afc] hover:font-bold">
                                Home
                                <span className="absolute bottom-0 left-0 w-0 h-[2px]  bg-[#870afc] transition-all duration-300 ease-in-out group-hover:w-full"></span>
                            </a>
                        </li>
                        <li>
                            <a href="#about-me" className="relative text-white no-underline group relative transition-all duration-1000 hover:text-[#870afc] hover:font-bold">
                                About
                                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#870afc] transition-all duration-300 ease-in-out group-hover:w-full"></span>
                            </a>
                        </li>
                        <li>
                            <a href="#projects" className="relative text-white no-underline group relative transition-all duration-1000 hover:text-[#870afc] hover:font-bold">
                                Portfolio
                                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#870afc] transition-all duration-300 ease-in-out group-hover:w-full"></span>
                            </a>
                        </li>
                        <li>
                            <a href="#contact-me" className="relative text-white no-underline group relative transition-all duration-1000 hover:text-[#870afc] hover:font-bold">
                                Contact
                                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#870afc] transition-all duration-300 ease-in-out group-hover:w-full"></span>
                            </a>
                        </li>
                    </ul>

                    </div>
                </div>
            </header>
        </>
    )
}

export default header;