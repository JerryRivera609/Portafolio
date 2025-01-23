import './contact.css'

const redesSociales = [
    {tittle: 'Linkedin', description:'in/jerryrivera609', url:'https://www.linkedin.com/in/jerryrivera609/', imgurl:'../../../public/linkedin-color.png'},
    {tittle: 'WhatsApp', description:'51 980837493', url:'https://wa.me/980837493/?text=Hola, vengo de parte de tu pagina web 😁', imgurl:'../../../public/whatsapp.png'},
    {tittle: 'Instagram', description:'@jerry_609rivera', url:'https://www.instagram.com/jerry_609rivera/', imgurl:'../../../public/instagram-color.png'},
    {tittle: 'Tiktok', description:'@jerry609rivera', url:'https://www.tiktok.com/@jerry609rivera', imgurl:'../../../public/tiktok.png'},
    {tittle: 'Github', description:'@JerryRivera609', url:'https://github.com/JerryRivera609', imgurl:'../../../public/github.png'},
    {tittle: 'YouTube', description:'@riveracode', url:'https://www.youtube.com/channel/UCydAbiXAy6-WvKl5LAry3vw', imgurl:'../../../public/youtube.png'},
];

function contact(){

    const misRedes = redesSociales.map( redes => (
        <a href={redes.url} target='_blank' className='social'>
            <img src={redes.imgurl} alt="" />
                <div className="social-text">
                    <h4>{redes.tittle}</h4>
                    <p>{redes.description}</p>
            </div>
        </a>
    ));

    return(
        <section id='cotact-me'>
            <div className="contact-main">
                <div className="contact-header">
                    <h2>Contact Me</h2>
                    <p>Got a question? Send me a message, and I'll get back to you soon</p>
                </div>
                <div className="contact-email-redes">
                    <div className="contact-email">
                        <h3>Get in Touch</h3>
                        <p>Have something to discuss? Send me a message and let's talk.</p>
                        <form action="https://formspree.io/f/mbldjqdr" method="POST">
                            <div>
                                <input className='input-name' type="text" name="name" id="" placeholder="Your Name" required />
                            </div>
                            <div>
                                <input className='input-email' type="email" name="email" id="" placeholder="Your Email" required />
                            </div>
                            <div>
                                
                                <textarea name="message" id="textarea" placeholder='Your Message' required ></textarea>
                            </div>
                            <button type="submit">Send Message</button>
                        </form>
                    </div>
                    <div className="contact-redes">
                        <h3>Connect With Me</h3>
                        <p>In my social networks, follow me please :3</p>
                        <div className="contact-redes-display">
                            {misRedes}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default contact;