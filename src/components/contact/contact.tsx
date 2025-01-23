import './contact.css'

function contact(){
    return(
        <section>
            <div className="contact-main">
                <div className="contact-header">
                    <h2>CONTACTA CON YRAZU</h2>
                    <p>Got a question? Send me a message, and I'll get back to you soon</p>
                </div>
                <div className="contact-email-redes">
                    <div className="contact-email">
                        <h3>Get in Touch</h3>
                        <p>Have something to discuss? Send me a message and let's talk.</p>
                        <form action="" method="get">
                            <div>
                                <input className='input-name' type="text" name="" id="" placeholder="Your Name" required />
                            </div>
                            <div>
                                <input className='input-email' type="email" name="" id="" placeholder="Your Email" required />
                            </div>
                            <div>
                                
                                <textarea name="" id="" placeholder='Your Message' required ></textarea>
                            </div>
                            <button type="submit">Send Message</button>
                        </form>
                    </div>
                    <div className="contact-redes">
                        <h3>Connect With Me</h3>
                        <p>In my social networks, follow me please :3</p>
                        <div className="contact-redes-display">
                        <div className="social">
                                <img src="../../../public/whatsapp.png" alt="" />
                                <div className="social-text">
                                    <h4>Whatsapp</h4>
                                    <p>+51 980837493</p>
                                </div>
                            </div>
                            <div className="social">
                                <img src="../../../public/whatsapp.png" alt="" />
                                <div className="social-text">
                                    <h4>Whatsapp</h4>
                                    <p>+51 980837493</p>
                                </div>
                            </div>
                            <div className="social">
                                <img src="../../../public/whatsapp.png" alt="" />
                                <div className="social-text">
                                    <h4>WhatsApp</h4>
                                    <p>+51 980837493</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default contact;