import React, { useState } from 'react';
import './projects.css';

const headerContent = [
    { image: '../../../../public/llave-blanco.png', tittle: 'Projects', url: '#' },
    { image: '../../../../public/insignia.png', tittle: 'Certificates', url: '#' },
    { image: '../../../../public/skills.png', tittle: 'Tech Stack', url: '#' }
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
        tittle: 'CV',
        description: 'Primer proyecto basico de replica de mi CV personal, se usó HTML y CSS.',
        projectUrl: '../../../public/project3.png',
        button: 'Details',
        buttonImg: '../../../public/flecha.png',
    },
];

function Projects() {
    const [selected, setSelected] = useState('Projects');

    const header = headerContent.map(headers => (
        <a
            key={headers.tittle}
            href='#projects'
            onClick={() => setSelected(headers.tittle)} 
            className={selected === headers.tittle ? 'selected' : ''}
        >
            <img src={headers.image} alt="" />
            <p>{headers.tittle}</p>
        </a>
    ));

    const targets = targetData.map(target => (
        <div className='project-target' key={target.tittle}>
            <img src={target.projectUrl} width="380px" alt="" />
            <h3>{target.tittle}</h3>
            <p>{target.description}</p>
            <div className="project-target-button">
                <a href="">{target.button} <img src={target.buttonImg} width="20px" alt="" /></a>
            </div>
        </div>
    ));

    return (
        <section id="projects">
            <div className="projects-main">
                <div className="projects-header">
                    <h2>Personal Portfolio</h2>
                    <p>Explore my journey through projects, certifications, and technical experience. Each section represents a milestone in my continuous learning path.</p>
                </div>
                <div className="projects-gallery">
                    <div className="projects-galley-header">
                        {header}
                    </div>
                    <div className="projects-show">
                        <div className="div-responsive projects-projects">
                            {targets}
                        </div>
                        <div className="projects-certificate">
                            {/* Agregar contenido según sea necesario */}
                        </div>
                        <div className="projects-techStack">
                            {/* Agregar contenido según sea necesario */}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Projects;
