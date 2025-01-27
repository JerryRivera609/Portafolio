import React, { useState } from 'react';
import './projects.css';

const headerContent = [
    { image: '../../../../public/llave-blanco.png', tittle: 'Projects', url: '#', id: 'projectSection' },
    { image: '../../../../public/insignia.png', tittle: 'Certificates', url: '#', id: 'certificateSection' },
    { image: '../../../../public/skills.png', tittle: 'Tech Stack', url: '#', id: 'techStackSection' }
];

const targetData = [
    {
        tittle: 'Digimedia',
        description: 'Desarrollo de sitio web en mis pracitcas, realizando una migración de PHP nativo a usar React, NodeJS, y MySQL.',
        projectUrl: '../../../public/project1.png',
        button: 'Details',
        buttonImg: '../../../public/flecha.png',
    },
    {
        tittle: 'Llama Tours',
        description: 'Desarrollo de sitio web en personal, pagina de viajes en el Perú, usando HTML, CSS y JavaScript.',
        projectUrl: '../../../public/project2.png',
        button: 'Details',
        buttonImg: '../../../public/flecha.png',
    },
    {
        tittle: 'Curriculum Vitae',
        description: 'Primer proyecto basico de replica de mi CV personal en una pagina web, se usó HTML y CSS.',
        projectUrl: '../../../public/project3.png',
        button: 'Details',
        buttonImg: '../../../public/flecha.png',
    },
];

const skillTech = [
    {name: 'HTML', img:'../../../public/skills/HTML.svg'},
    {name: 'CSS', img:'../../../public/skills/CSS.svg'},
    {name: 'VS Code', img:'../../../public/skills/VSCode.svg'},
    {name: 'Git', img:'../../../public/skills/Git.svg'},
    {name: 'Github', img:'../../../public/skills/Github.svg'},
    {name: 'React', img:'../../../public/skills/React.svg'},
    {name: 'Vite', img:'../../../public/skills/Vite.svg'},
    {name: 'PHP', img:'../../../public/skills/PHP.svg'},
    {name: 'TypeScript', img:'../../../public/skills/TypeScript.svg'},
    {name: 'JavaScript', img:'../../../public/skills/JavaScript.svg'},
    {name: 'TailWind CSS', img:'../../../public/skills/Tailwind.svg'},
    {name: 'SASS', img:'../../../public/skills/Sass.svg'},
    {name: 'MySQL', img:'../../../public/skills/MySQL.svg'},
    {name: 'SQL Server', img:'../../../public/skills/sql-server.png'},
    {name: 'Networking', img:'../../../public/skills/network.png'},
];

const certificatesTech = [
    {img: '../../../public/document/certificate-github.png'},
    {img: '../../../public/document/network.jpg'},
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
            className={`${selected === headers.tittle ? 'bg-[linear-gradient(43deg,_#870afc71_0%,_#bb83ff71_46%,_#6151f471_100%)] w-full flex flex-col justify-center items-center rounded-[10px] selected' : 'flex flex-col items-center w-full p-2 rounded-xl transition-all duration-1000 hover:bg-[#ffffff1c]'}`}
        >
            <img src={headers.image} className='w-7 h-7' alt="" />
            <p>{headers.tittle}</p>
        </a>
    ));

    const targets = targetData.map(target => (
        <div className="w-100 h-85 bg-[#7873bb63] border-2 border-[#898989E9] rounded-[10px] p-2 mb-5 flex flex-col transition-all duration-500 hover:border-[#8471ffc3] project-target group"
        key={target.tittle}>
            <img src={target.projectUrl}
                width="380px"
                className='border-0 rounded-lg transform transtion duration-500 scale-100 group-hover:scale-101'
                alt="" />
            <h3 className='text-lg p-1' >{target.tittle}</h3>
            <p className='text-[0.8rem]'>{target.description}</p>
            <div className="w-full flex justify-end project-target-button">
                <a href="" className='flex gap-2 bg-[#0000001e] p-2 w-auto h-auto items-center justify-center rounded-[10px] no-underline text-white text-[0.9rem] mt-2 border border-[#ffffff2b] transition-all duration-1000 hover:bg-[#e7e7e749]'>
                    {target.button}
                    <img src={target.buttonImg} className='w-4 h-auto' alt="" />
                </a>
            </div>
        </div>
    ));

    const skills = skillTech.map(skill => (
        <div className="w-25 flex flex-col justify-around items-center text-center bg-[#7873bb1e] p-2 rounded-[10px] transition-all duration-500 skill-target hover:scale-110 hover:bg-[linear-gradient(124deg,_#8000f88c_0%,_#bb83ffa0_46%,_#6151f49a_100%)] cursor-pointer" key={skill.name}>
            <img src={skill.img} className='w-20 h-20' alt="" />
            <p>{skill.name}</p>
        </div>
    ));

    const certificate = certificatesTech.map((certificate, index) => (
        <div className="bg-[#7873bb41] p-5 rounded-[10px] my-7 flex relative top-0 transition-all duration-500 hover:top-[-10px] certificate" key={index}>
            <img src={certificate.img} className='w-100 h-auto' alt="Certificado" />
        </div>
    ));

    return (
        <section id="projects">
            <div className="flex flex-col text-white w-full relative z-[1000] justify-center items-center projects-main">
                <div className="flex flex-col justify-center text-center w-150 projects-header">
                    <h2 className='text-[3rem]'>Personal Portfolio</h2>
                    <p>
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
                            className="w-full grid-cols-[repeat(auto-fit,_minmax(400px,_1fr))] justify-items-center mb-7 projects-certificate"
                            style={{ display: selected === 'Certificates' ? 'grid' : 'none' }}
                        >
                            {certificate}
                        </div>
                        <div
                            id="techStack"
                            className="my-7 mx-37 gap-[30px] justify-center grid-cols-[repeat(auto-fit,_minmax(100px,_1fr))] projects-techStack"
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
