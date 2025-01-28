import './home.css'

function home() {
    const Coding = '/Computer.svg'
    const correo = '/correo.png'
    const proyecto = '/portfolio.png'
    const github = '/github.png'
    const linkedin = '/linkedin.png'
    const instagram = '/instagram.png'
    return(
        <>
            <section id='home'>
                <div className="flex max-lg:flex-col max-lg:justify-center max-lg:text-center max-lg:w-full max-lg:p-5 relative justify-around text-white  z-[1000]">
                    <div className="info-home">
                        <div className="max-lg:flex max-lg:flex-col max-lg:justify-center max-lg:items-center text-home">
                            <h1 className='text-[5rem] text-start max-lg:text-center max-sm:text-[4rem] leading-none mb-[30px]' >Frontend <br /><span>Developer</span></h1>
                            <h2 className='font-thin mb-[30px] text-[1.4rem] max-lg:text-[1.6rem]'>Software Engineering Student</h2>
                            <p className=' flextext-[1rem] mb-[30px] w-140 max-lg:w-160 max-sm:w-100 max-lg:text-[1.2rem]'>A functional, intuitive, and interactive website, carefully designed to provide an exceptional user experience and propose innovative and effective technological solutions.</p>
                        </div>
                        <div className="flex flex-wrap max-lg:justify-center gap-[10px] mb-[30px]">
                            <a className='bg-[rgba(128,17,187,0.223)] text-white py-1 px-4 max-lg:scale-105 rounded-[20px] border-[0.5px] border-[rgba(255,255,255,0.5)] cursor-pointer transition-all duration-500 hover:bg-[rgba(255,255,255,0.3)]'>React</a>
                            <a className='bg-[rgba(128,17,187,0.223)] text-white py-1 px-4 rounded-[20px] border-[0.5px] border-[rgba(255,255,255,0.5)] cursor-pointer transition-all duration-500 hover:bg-[rgba(255,255,255,0.3)]'>JavaScript</a>
                            <a className='bg-[rgba(128,17,187,0.223)] text-white py-1 px-4 rounded-[20px] border-[0.5px] border-[rgba(255,255,255,0.5)] cursor-pointer transition-all duration-500 hover:bg-[rgba(255,255,255,0.3)]'>PHP</a>
                            <a className='bg-[rgba(128,17,187,0.223)] text-white py-1 px-4 rounded-[20px] border-[0.5px] border-[rgba(255,255,255,0.5)] cursor-pointer transition-all duration-500 hover:bg-[rgba(255,255,255,0.3)]'>Taildwind</a>
                            <a className='bg-[rgba(128,17,187,0.223)] text-white py-1 px-4 rounded-[20px] border-[0.5px] border-[rgba(255,255,255,0.5)] cursor-pointer transition-all duration-500 hover:bg-[rgba(255,255,255,0.3)]'>Node.js</a>
                        </div>
                        <div className="adicionales-home flex max-lg:justify-center gap-[10px] mb-[40px]">
                            <a href='#projects'>Projects <img src={proyecto} alt="" width="15px" height="15px" /></a>
                            <a href='#contact-me'>Contact <img src={correo} alt="" width="15px" height="17px" /></a>
                        </div>
                        <div className="redes-home flex max-lg:justify-center gap-[30px] mt-[50px]">
                            <a href='https://github.com/JerryRivera609' target='_blank'>
                                <img className='w-[35px] h-[35px]' src={github} alt="GitHub" />
                            </a>
                            <a href='https://www.linkedin.com/in/jerryrivera609/' target='_blank'>
                                <img className='w-[35px] h-[35px]' src={linkedin} alt="Linkedin" />
                            </a>
                            <a href='https://www.instagram.com/jerry_609rivera/' target='_blank'>
                                <img className='w-[35px] h-[35px]' src={instagram} alt="Instagram"/>
                            </a>
                        </div>
                    </div>
                    <div className="max-lg:hidden home-animation">
                        <img src={Coding} width="500px" height="500px"/>
                    </div>
            </div>
        </section>
        </>
    )
}

export default home;