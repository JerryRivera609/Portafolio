import { useState } from 'react';
import './projects.css';

const headerContent = [
    { image: '/llave-blanco.png', tittle: 'Projects', url: '#', id: 'projectSection' },
    { image: '/insignia.png', tittle: 'Certificates', url: '#', id: 'certificateSection' },
    { image: '/skills.png', tittle: 'Tech Stack', url: '#', id: 'techStackSection' }
];

const targetData = [
    
    {
        tittle: 'Llama Tours',
        description: 'Desarrollo de sitio web en personal, pagina de viajes en el Perú, usando HTML, CSS y JavaScript.',
        projectUrl: '/project2.png',
        button: 'Live Demo',
        buttonImg: '/flecha.png',
        url: 'https://jerryrivera609.github.io/LlamaTours/html/index.html'
    },
    {
        tittle: 'Digimedia',
        description: 'Desarrollo de sitio web en mis pracitcas, realizando una migración de PHP nativo a usar React, NodeJS, y MySQL.',
        projectUrl: '/project1.png',
        button: 'Live Demo',
        buttonImg: '/flecha.png',
        url: 'https://digimediamkt.com/',
    },
    {
        tittle: 'Avicii Tribute',
        description: 'Avicii es uno de mis artistas favoritsas, por lo que decidí hacer un tributo a su música y legado, usando React con TypeScript y TailwindCSS.',
        projectUrl: '/project6.png',
        button: 'Live Demo',
        buttonImg: '/flecha.png',
        url: 'https://avicii-project.vercel.app/'
    },
    {
        tittle: 'Travelaja',
        description: 'Desarrollo un pequeño projecto usando Angular y TailwindCSS.',
        projectUrl: '/project5.png',
        button: 'Live Demo',
        buttonImg: '/flecha.png',
        url: 'https://travelaja-h6gsprw6d-jerryrivera.vercel.app/'
    },
    {
        tittle: '(VAN) Calculator',
        description: 'Desarrollo una pequeña calculadora de Valor Actual Neto con Angular y TailwindCSS.',
        projectUrl: '/project4.png',
        button: 'Live Demo',
        buttonImg: '/flecha.png',
        url: 'https://valor-actual-neto.vercel.app/'
    },
    {
        tittle: 'Portafolio Personal',
        description: 'Proyecto que contiene información personal, mis habilidades en la pogramación con información puntual de cada tema.',
        projectUrl: '/project3.png',
        button: 'Live Demo',
        buttonImg: '/flecha.png',
        url: '#projects'
    },
];

const skillTech = [
    {name: 'HTML', img:'/skills/HTML.svg'},
    {name: 'CSS', img:'/skills/CSS.svg'},
    {name: 'VS Code', img:'/skills/VSCode.svg'},
    {name: 'Git', img:'/skills/Git.svg'},
    {name: 'Github', img:'/skills/Github.svg'},
    {name: 'React', img:'/skills/React.svg'},
    {name: 'Vite', img:'/skills/Vite.svg'},
    {name: 'PHP', img:'/skills/PHP.svg'},
    {name: 'Angular', img:'/skills/Angular-Light.svg'},
    {name: 'SpringBoot', img:'/skills/Spring-Light.svg'},
    {name: 'TypeScript', img:'/skills/TypeScript.svg'},
    {name: 'JavaScript', img:'/skills/JavaScript.svg'},
    {name: 'TailWind CSS', img:'/skills/Tailwind.svg'},
    {name: 'SASS', img:'/skills/Sass.svg'},
    {name: 'MySQL', img:'/skills/MySQL.svg'},
    {name: 'SQL Server', img:'/skills/sql-server.png'},
    {name: 'Networking', img:'/skills/network.png'},
    {name: 'CyberSec', img:'/skills/cybersecurity.png'},
];

const certificatesTech = [
    {img: '/document/uni-python.jpg'},
    {img: '/document/poo.jpg'},
    {img: '/document/certificate-github.png'},
    {img: '/document/javapoo.png'},
    {img: '/document/LogicaJavaScript.png'},
    {img: '/document/DesarrolloPersonal.png'},
    {img: '/document/network.jpg'},
    {img: '/document/ciberseguridad.png'},
];

function Projects() {
    const [selected, setSelected] = useState('Projects');

    const header = headerContent.map(headers => (
        <a
            key={headers.tittle}
            id={headers.id}
            href='#'
            onClick={(e) => {
                e.preventDefault();
                setSelected(headers.tittle);
            }}
            className={`${selected === headers.tittle ? 'bg-[linear-gradient(43deg,_#870afc71_0%,_#bb83ff71_46%,_#6151f471_100%)]  w-full flex flex-col justify-center items-center rounded-[10px] selected' : 'flex flex-col items-center w-full p-2 rounded-xl transition-all duration-1000 hover:bg-[#ffffff1c]'}`}
        >
            <img src={headers.image} className='w-7 h-7' alt="" />
            <p>{headers.tittle}</p>
        </a>
    ));

    const targets = targetData.map(target => (
        <div className="w-100 max-sm:w-70 h-85 max-sm:h-75 bg-[#867dff31] border-2 border-[#898989E9] rounded-[10px] p-2 mb-5 flex flex-col transition-all duration-500 cursor-pointer hover:border-[#8471ffc3] hover:bg-[#867dff6e] project-target group"
        key={target.tittle}>
            <img src={target.projectUrl}
                width="380px"
                className='border-0 rounded-lg transform transtion duration-500 scale-100 group-hover:scale-101'
                alt="" />
            <h3 className='text-lg p-1' >{target.tittle}</h3>
            <p className='text-[0.8rem]'>{target.description}</p>
            <div className="w-full flex justify-end project-target-button">
                <a href={target.url} target='_blank' aria-label='Live Demo' className='flex gap-2 bg-[#0000001e] p-2 w-auto h-auto items-center justify-center rounded-[10px] no-underline text-white text-[0.9rem] mt-2 border border-[#ffffff2b] transition-all duration-1000 hover:bg-[#e7e7e749]'>
                    {target.button}
                    <img src={target.buttonImg} className='w-4 h-auto' alt="Flecha-Izquierda" />
                </a>
            </div>
        </div>
    ));

    const skills = skillTech.map(skill => (
        <div className="w-auto flex flex-col justify-around items-center text-center bg-[#7873bb1e] p-2 rounded-[10px] transition-all duration-500 skill-target hover:scale-110 hover:bg-[linear-gradient(124deg,_#8000f88c_0%,_#bb83ffa0_46%,_#6151f49a_100%)] cursor-pointer" key={skill.name}>
            <img src={skill.img} className='w-20 h-20' alt="" />
            <p>{skill.name}</p>
        </div>
    ));

    const certificate = certificatesTech.map((certificate, index) => (
        <div className="bg-[#7873bb41] p-5 rounded-[10px] my-7 flex flex-col relative max-sm:w-80 max-sm:h-60 top-0 transition-all duration-500 hover:top-[-10px] certificate" key={index}>
            <img src={certificate.img} className='w-100 h-auto' alt="Certificado" />
        </div>
    ));

    return (
        <section id="projects">
            <div className="flex flex-col text-white w-full relative z-[1000] justify-center items-center projects-main">
                <div className="flex flex-col justify-center text-center projects-header">
                    <h2 className='text-[3rem]'>Personal Portfolio</h2>
                    <p className='w-150 max-sm:w-full'>
                        Explore my journey through projects, certifications, and technical experience. 
                        Each section represents a milestone in my continuous learning path.
                    </p>
                </div>
                <div className="w-[90%] flex flex-col my-10 projects-gallery">
                    <div className="w-full flex bg-[#302f323b] border border-[#ffffff39] py-2 px-1 rounded-xl gap-2 projects-galley-header">
                        {header}
                    </div>
                    <div className="w-full justify-center items-center projects-show">
                        <div
                        
                            id="projects"
                            className="w-full my-10 mx-auto grid-cols-[repeat(auto-fit,_minmax(400px,_1fr))] justify-center place-items-center projects-projects"
                            style={{ display: selected === 'Projects' ? 'grid' : 'none' }}
                        >
                            {targets}
                        </div>
                        <div
                            id="certificate"
                            className="w-full my-10 mx-auto grid-cols-[repeat(auto-fit,_minmax(450px,_1fr))] justify-center place-items-center projects-certificate"
                            style={{ display: selected === 'Certificates' ? 'grid' : 'none' }}
                        >
                            {certificate}
                        </div>
                        <div
                            id="techStack"
                            className="my-7 mx-37 max-sm:mx-3 gap-[30px] justify-center items-center grid-cols-[repeat(auto-fit,_minmax(100px,_1fr))] projects-techStack"
                            style={{ display: selected === 'Tech Stack' ? 'grid' : 'none' }}
                        >
                            {skills}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Projects;
