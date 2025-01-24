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
];

const certificatesTech = [
    {img: '../../../public/document/certificate-github.png'},
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
            className={selected === headers.tittle ? 'selected' : ''}
        >
            <img src={headers.image} alt="" />
            <p>{headers.tittle}</p>
        </a>
    ));

    const targets = targetData.map(target => (
        <div className="project-target" key={target.tittle}>
            <img src={target.projectUrl} width="380px" alt="" />
            <h3>{target.tittle}</h3>
            <p>{target.description}</p>
            <div className="project-target-button">
                <a href="">
                    {target.button} <img src={target.buttonImg} width="20px" alt="" />
                </a>
            </div>
        </div>
    ));

    const skills = skillTech.map(skill => (
        <div className="skill-target" key={skill.name}>
            <img src={skill.img} alt="" />
            <p>{skill.name}</p>
        </div>
    ));

    const certificate = certificatesTech.map((certificate, index) => (
        <div className="certificate" key={index}>
            <img src={certificate.img} alt="Certificado" />
        </div>
    ));

    return (
        <section id="projects">
            <div className="projects-main">
                <div className="projects-header">
                    <h2>Personal Portfolio</h2>
                    <p>
                        Explore my journey through projects, certifications, and technical experience. 
                        Each section represents a milestone in my continuous learning path.
                    </p>
                </div>
                <div className="projects-gallery">
                    <div className="projects-galley-header">{header}</div>
                    <div className="projects-show">
                        <div
                        
                            id="projects"
                            className="projects-projects"
                            style={{ display: selected === 'Projects' ? 'grid' : 'none' }}
                        >
                            {targets}
                        </div>
                        <div
                            id="certificate"
                            className="projects-certificate"
                            style={{ display: selected === 'Certificates' ? 'grid' : 'none' }}
                        >
                            {certificate}
                        </div>
                        <div
                            id="techStack"
                            className="projects-techStack"
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
