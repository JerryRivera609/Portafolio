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
                <div className="main-home">
                    <div className="info-home">
                        <div className="text-home">
                            <h1>Frontend <br /><span>Developer</span></h1>
                            <h2>Software Engineering Student</h2>
                            <p>Sitio Web Funcional, Facil de Usar e interactivo para el Usuario, <br />listo para proponer soluciones tecnologicas.</p>
                        </div>
                        <div className="lenguajes-home">
                            <button>React</button>
                            <button>JavaScript</button>
                            <button>PHP</button>
                            <button>Taildwind</button>
                            <button>Node.js</button>
                        </div>
                        <div className="adicionales-home">
                            <button>Projects <img src={proyecto} alt="" width="15px" height="15px" /></button>
                            <button>Contact <img src={correo} alt="" width="15px" height="17px" /></button>
                        </div>
                        <div className="redes-home">
                            <a href='https://github.com/JerryRivera609' target='_blank'><img src={github} alt="GitHub" /></a>
                            <a href='https://www.linkedin.com/in/jerryrivera609/' target='_blank'><img src={linkedin} alt="Linkedin" /></a>
                            <a href='https://www.instagram.com/jerry_609rivera/' target='_blank'><img src={instagram} alt="Instagram"/></a>
                        </div>
                    </div>
                    <div className="home-animation">
                        <img src={Coding} width="500px" height="500px"/>
                    </div>
            </div>
        </section>
        <div className="bolas">
            <div className="bola"></div>
            <div className="bola"></div>
            <div className="bola"></div>
            <div className="bola"></div>
            <div className="bola"></div>
        </div>
        </>
    )
}

export default home;