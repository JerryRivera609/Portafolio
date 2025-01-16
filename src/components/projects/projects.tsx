import './projects.css'

function projects(){
    return (
        <section id="projects">
            <div className="projects-main">
                <div className="projects-header">
                    <h2>Personal Portfolio</h2>
                    <p>Explore my journey through projects, certifications, and technical experience. Each section represents a milestone in my continuous learning path.</p>
                </div>
                <div className="projects-gallery">
                    <div className="projects-galley-header">
                        <a href=""><img src="../../../../public/llave-blanco.png" alt="" /><p>Porjects</p></a>
                        <a href=""><img src="../../../../public/insignia.png" alt="" /><p>Certificates</p></a>
                        <a href=""><img src="../../../../public/skills.png" alt="" /><p>Tech Stack</p></a>
                    </div>
                    <div className="projects-show">

                    </div>
                </div>
            </div>
        </section>
    );
}

export default projects;