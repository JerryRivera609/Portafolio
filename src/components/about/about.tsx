import './about.css'

const data = [
    { tittle: "TOTAL PROJECTS", description: 'My Experience Development Projects', image: '../../../public/llave-blanco.png', number: '3' },
    { tittle: "CERTIFICATES", description: 'Professional Skills Valided', image: '../../../public/insignia.png', number: '5' },
    { tittle: "YEARS OF EXPERIENCE", description: 'Continuous Learning 2025', image: '../../../public/world.png', number: '1' },
];



function about(){
    const ListData = data.map (data =>
        <div className="data-me">
            <img src={data.image} alt="" />
            <h3>{data.tittle}</h3>
            <p>{data.description}</p>
            <p>{data.number}</p>
        </div>
    );

    const cv = '../../../public/cv.png'
    const llave = '../../../public/llave.png'
    const photo = '../../../public/profile2.jpeg'
    const stars = '../../../public/star-white.png'
    const curriculum = '../../../public/cv/Jerry-Marino-Dominguez-Rivera-CV-Carta.pdf'
    const curriculumName = 'Jerry-Marino-Dominguez-Rivera-CV'

    return(
        <section id="about-me">
            <div className="main-about">
                <div className="tittle-about">
                    <h2>About Me</h2>
                    <p><img src={stars} alt="" /> Transforming ideas into digital experiences <img src={stars} alt="" /></p>
                </div>
                <div className="info-photo-about">
                    <div className="info-about">
                        <h2><span>Hello, I'm </span> <br />Jerry Marino Dominguez Rivera</h2>
                        <p>Esutidnate de la Carrera de Ingeniería de Software interesado en el desarrollo Front-End. Me centro en crear experiencias digitales atractivas y siempre me esfuerzo por brindar las mejores soluciones en cada proyecto.</p>
                        <div className="button-about">
                            <a href={curriculum} className="button" download={curriculumName}> <img src={cv} alt="" /> Download CV </a>
                            <a href="#projects" className="button"> <img src={llave} alt="" /> View Porjects</a>
                        </div>
                    </div>
                    <div className="profile-about">
                        <div className="img-profile">
                            <a href="."><span><img src={photo} alt="" /></span></a>
                        </div>
                    </div>
                </div>
                <div className="data-about">
                    <div className="data-main">
                        {ListData}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default about;

