import './about.css'
import '@animxyz/react';


const data = [
    { tittle: "TOTAL PROJECTS", description: 'My Experience Development Projects', image: '../../../public/llave-blanco.png', number: '3' },
    { tittle: "CERTIFICATES", description: 'Professional Skills Valided', image: '../../../public/insignia.png', number: '5' },
    { tittle: "YEARS OF EXPERIENCE", description: 'Continuous Learning 2025', image: '../../../public/world.png', number: '1' },
];



function about(){
    const ListData = data.map (data =>
        <div className="flex flex-col items-center justify-center w-full bg-[#3c2b4c47] p-3 rounded-[10px] transition-all duration-700 cursor-pointer hover:scale-105 hover:bg-[#83838347] group">
            <img src={data.image} className='w-15 h-15 p-1 bg-[#83838380] rounded-full '  alt="" />
            <h3 className='text-[1.5rem]'>{data.tittle}</h3>
            <p className='text-[1rem]]'>{data.description}</p>
            <p className='text-xl'>{data.number}</p>
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
            <div className="main-about text-white my-24 w-full relative z-[1000]">
                <div className="tittle-about flex flex-col justify-center items-center loading-none mb-10">
                    <h2 className='text-[3rem] leading-[4rem]'>About Me</h2>
                    <p className='flex items-center gap-1'><img src={stars} className='w-5 h-4' alt="" /> Transforming ideas into digital experiences <img src={stars} className='w-5 h-4' alt="" /></p>
                </div>
                <div className="flex justify-around items-center">
                    <div className="max-w-120 info-about">
                        <h2 className='text-[2.5rem] mb-2'> <span>Hello, I'm </span> <br />Jerry Marino Dominguez Rivera</h2>
                        <p className='mb-5'>Esutidnate de la Carrera de Ingeniería de Software interesado en el desarrollo Front-End. Me centro en crear experiencias digitales atractivas y siempre me esfuerzo por brindar las mejores soluciones en cada proyecto.</p>
                        <div className="flex gap-5">
                            <a href={curriculum} className="no-underline rounded-[10px] flex items-center gap-1.5 p-2 text-white bg-[#870afc] border-0 transition-all duration-1000 hover:bg-[#bb83ff]" download={curriculumName}>
                                <img src={cv} className='w-5 h-5' alt="" />
                                Download CV
                            </a>
                            <a href="#projects" className="flex items-center border-1 rounded-[10px] p-2 gap-1.5 text-[#870afc] transition-all duration-1000 hover:text-[#bb83ff]">
                                <img src={llave} alt="" />
                                View Porjects
                            </a>
                        </div>
                    </div>
                    <div className="profile-about">
                        <div className="inline-block relative overflow-hidden shadow-[0px_0px_30px_0px_#ffffffa4] rounded-full  img-profile">
                            <a href="." className=''><span><img src={photo} className='block w-90 h-90 transition-all duration-1000' alt="" /></span></a>
                        </div>
                    </div>
                </div>
                <div className="w-full my-9 mx-0">
                    <div className="data-main flex gap-5 text-center px-12 py-0">
                        {ListData}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default about;

