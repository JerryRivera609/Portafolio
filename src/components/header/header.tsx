import './header.css'

function header(){
    return(
        <>
            <header>
                <div className="main-Header">
                    <div className="nombre-Header">
                        <h2>Jerry Rivera</h2>
                    </div>
                    <div className="links-Header">
                        <ul>
                            <li><a href="#home">Home</a></li>
                            <li><a href="#about-me">About</a></li>
                            <li><a href="#projects">Portfolio</a></li>
                            <li><a href="#cotact-me">Contact</a></li>
                        </ul>
                    </div>
                </div>
            </header>
        </>
    )
}

export default header;