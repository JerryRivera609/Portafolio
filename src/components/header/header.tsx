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
                            <li><a href="#">Home</a></li>
                            <li><a href="#">About</a></li>
                            <li><a href="#">Portfolio</a></li>
                            <li><a href="#">Contact</a></li>
                        </ul>
                    </div>
                </div>
            </header>
        </>
    )
}

export default header;