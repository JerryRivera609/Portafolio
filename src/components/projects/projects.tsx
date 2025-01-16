import './projects.css'

const headerContent = [
    {image: '../../../../public/llave-blanco.png', tittle:'Projects', url:'#'},
    {image: '../../../../public/insignia.png', tittle:'Certificates', url:'#'},
    {image: '../../../../public/skills.png', tittle: 'Tech Stack', url:'#'}
];




function projects(){
    const header = headerContent.map ( headers =>
        <a href={headers.url}><img src={headers.image} alt="" /><p>{headers.tittle}</p></a>
    );
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
                            <div className='project-target'>
                                <img src="../../../public/project1.png" width="380px" alt="" />
                                <h3>Digimedia</h3>
                                <p>Desarrollo de sitio web en mis pracitcas, realizando una migración de PHP nativo a usar React, NodeJS, y MySQL.</p>
                                <a href="">Details <img src="../../../public/flecha.png" width="20px" alt="" /></a>
                            </div>
                        </div>
                        <div className="projects-certificate">

                        </div>
                        <div className="projects-techStack">

                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default projects;