

function contact(){
    return(
        <section>
            <div className="contact-main">
                <div className="contact-header">
                    <h2>Contact Me</h2>
                    <p>Got a question? Send me a message, and I'll get back to you soon</p>
                </div>
                <div className="contact-email-redes">
                    <div className="contact-email">
                        <h3>Get in Touch</h3>
                        <p>Have something to discuss? Send me a message and let's talk.</p>
                        <form action="" method="get">
                            <div>
                                <input type="text" name="" id="" placeholder="Your Name" />
                            </div>
                            <div>
                                <input type="email" name="" id="" placeholder="Your Email" />
                            </div>
                            <div>
                                <input type="textarea" />
                            </div>
                            <button type="submit">Send Message</button>
                        </form>
                    </div>
                    <div className="contact-redes">
                        <h3>Look For Me</h3>
                        <p>In my social networks, follow me please :3</p>
                        <div className="contact-redes-display">

                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default contact;