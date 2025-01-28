import './about.css'
import '@animxyz/react';


const data = [
    { tittle: "TOTAL PROJECTS", description: 'My Experience Development Projects', image: '/llave-blanco.png', number: '3' },
    { tittle: "CERTIFICATES", description: 'Professional Skills Valided', image: '/insignia.png', number: '5' },
    { tittle: "YEARS OF EXPERIENCE", description: 'Continuous Learning 2025', image: '/world.png', number: '1' },
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

    const cv = '/cv.png'
    const llave = '/llave.png'
    const photo = '/profile2.jpeg'
    const stars = '/star-white.png'
    const curriculum = '/cv/Jerry-Marino-Dominguez-Rivera-CV-Carta.pdf'
    const curriculumName = 'Jerry-Marino-Dominguez-Rivera-CV'

    return(
        <section id="about-me">
            <div className="main-about p-5 text-white my-24 w-full relative z-[1000]">
                <div className="tittle-about flex flex-col justify-center items-center loading-none mb-10">
                    <h2 className='text-[3rem] leading-[4rem]'>About Me</h2>
                    <p className='flex items-center max-sm:text-center gap-1'><img src={stars} className='w-5 h-4' alt="" /> Transforming ideas into digital experiences <img src={stars} className='w-5 h-4' alt="" /></p>
                </div>
                <div className="flex max-lg:flex-col-reverse justify-around items-center">
                    <div className="w-140 info-about">
                        <h2 className='text-[2.5rem] max-lg:text-center max-lg:mt-10 mb-2'> <span>Hello, I'm </span> <br />Jerry Marino Dominguez Rivera</h2>
                        <p className='mb-5 max-lg:text-center'>Software Engineering student with a strong interest in Front-End development. I am passionate about crafting engaging digital experiences and consistently strive to deliver the best solutions for every project. My goal is to combine creativity and technical expertise to meet user needs and exceed expectations in the web development field.</p>
                        <div className="flex max-lg:justify-center max-sm:flex-col gap-5">
                            <a href={curriculum} className="no-underline rounded-[10px] flex justify-center items-center gap-1.5 p-2 text-white bg-[#870afc] border-0 transition-all duration-1000 hover:bg-[#bb83ff]" download={curriculumName}>
                                <img src={cv} className='w-5 h-5' alt="" />
                                Download CV
                            </a>
                            <a href="#projects" className="flex items-center border-1 justify-center rounded-[10px] p-2 gap-1.5 text-[#870afc] transition-all duration-1000 hover:text-[#bb83ff]">
                                <img src={llave} alt="" />
                                View Porjects
                            </a>
                        </div>
                    </div>
                    <div className="profile-about">
                        <div className="inline-block relative overflow-hidden shadow-[0px_0px_30px_0px_#ffffffa4] rounded-full  img-profile">
                            <a href="#about-me" className=''><span><img src={photo} className='block w-90 h-90 max-sm:w-80 max-sm:h-80 transition-all duration-1000' alt="" /></span></a>
                        </div>
                    </div>
                </div>
                <div className="w-full my-9 mx-0">
                    <div className="data-main flex max-lg:flex-col gap-5 text-center px-12 max-lg:px-5 py-0">
                        {ListData}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default about;

