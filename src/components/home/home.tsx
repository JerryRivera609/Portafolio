import './home.css'

function home() {
    const Coding = '../../../public/Computer.svg'
    const correo = '../../../public/correo.png'
    const proyecto = '../../../public/portfolio.png'
    const github = '../../../public/github.png'
    const linkedin = '../../../public/linkedin.png'
    const instagram = '../../../public/instagram.png'
    return(
        <>
            <section id='home'>
                <div className="flex relative justify-around text-white h-[80vh] z-[1000]">
                    <div className="info-home">
                        <div className="text-home">
                            <h1 className='text-[5rem] text-start leading-none mb-[30px]' >Frontend <br /><span>Developer</span></h1>
                            <h2 className='font-thin mb-[30px] text-[1.4rem]'>Software Engineering Student</h2>
                            <p className='text-[1rem] mb-[30px]'>A functional, intuitive, and interactive website, carefully designed <br />to provide an exceptional user experience and propose innovative <br /> and effective technological solutions.</p>
                        </div>
                        <div className="lenguajes-home flex gap-[10px] mb-[30px]">
                            <button className='bg-[rgba(128,17,187,0.223)] text-white py-1 px-4 rounded-[20px] border-[0.5px] border-[rgba(255,255,255,0.5)] cursor-pointer transition-all duration-500 hover:bg-[rgba(255,255,255,0.3)]'>React</button>
                            <button className='bg-[rgba(128,17,187,0.223)] text-white py-1 px-4 rounded-[20px] border-[0.5px] border-[rgba(255,255,255,0.5)] cursor-pointer transition-all duration-500 hover:bg-[rgba(255,255,255,0.3)]'>JavaScript</button>
                            <button className='bg-[rgba(128,17,187,0.223)] text-white py-1 px-4 rounded-[20px] border-[0.5px] border-[rgba(255,255,255,0.5)] cursor-pointer transition-all duration-500 hover:bg-[rgba(255,255,255,0.3)]'>PHP</button>
                            <button className='bg-[rgba(128,17,187,0.223)] text-white py-1 px-4 rounded-[20px] border-[0.5px] border-[rgba(255,255,255,0.5)] cursor-pointer transition-all duration-500 hover:bg-[rgba(255,255,255,0.3)]'>Taildwind</button>
                            <button className='bg-[rgba(128,17,187,0.223)] text-white py-1 px-4 rounded-[20px] border-[0.5px] border-[rgba(255,255,255,0.5)] cursor-pointer transition-all duration-500 hover:bg-[rgba(255,255,255,0.3)]'>Node.js</button>
                        </div>
                        <div className="adicionales-home flex gap-[10px] mb-[40px]">
                            <a href='#projects'>Projects <img src={proyecto} alt="" width="15px" height="15px" /></a>
                            <a href='#contact-me'>Contact <img src={correo} alt="" width="15px" height="17px" /></a>
                        </div>
                        <div className="redes-home flex gap-[30px] mt-[50px]">
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
                    <div className="home-animation">
                        <img src={Coding} width="500px" height="500px"/>
                    </div>
            </div>
        </section>
        </>
    )
}

export default home;