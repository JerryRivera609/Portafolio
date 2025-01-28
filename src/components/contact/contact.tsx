import './contact.css';


const redesSociales = [
    {tittle: 'Linkedin', description:'in/jerryrivera609', url:'https://www.linkedin.com/in/jerryrivera609/', imgurl:'../../../public/linkedin-color.png', fondo:"hover:bg-[#0a66c22a] hover:border-[#0a66c2]"},
    {tittle: 'WhatsApp', description:'+51 980837493', url:'https://wa.me/980837493/?text=Hola, vengo de parte de tu pagina web 😁', imgurl:'../../../public/whatsapp.png', fondo:"hover:bg-[#25d3663b] hover:border-[#25d366]"},
    {tittle: 'Instagram', description:'@jerry_609rivera', url:'https://www.instagram.com/jerry_609rivera/', imgurl:'../../../public/instagram-color.png', fondo:"hover:bg-[linear-gradient(10deg,#f585293b_20%,#feda773b_30%,#dd2a7b3b_60%,#8134af3b_80%,#515bd43b_100%)] hover:border-[#515bd4]"},
    {tittle: 'Tiktok', description:'@jerry609rivera', url:'https://www.tiktok.com/@jerry609rivera', imgurl:'../../../public/tiktok.png', fondo:"hover:bg-[#0000003b] hover:border-[#0000003b]"},
    {tittle: 'Github', description:'@JerryRivera609', url:'https://github.com/JerryRivera609', imgurl:'../../../public/github.png', fondo:"hover:bg-[#0000003b] hover:border-[#000000]"},
    {tittle: 'YouTube', description:'@riveracode', url:'https://www.youtube.com/channel/UCydAbiXAy6-WvKl5LAry3vw', imgurl:'../../../public/youtube.png', fondo:"hover:bg-[#ff00002a] hover:border-[#ff0000]"},
];

function contact(){

    const misRedes = redesSociales.map( redes => (
        <a href={redes.url} target='_blank'  className={`roaunded-[10px] border border-[#ffffff2a] rounded-xl gap-2 p-2 flex items-center text-start text-white transition-all duration-1000 ${redes.fondo} group`}>
            <img src={redes.imgurl} className='w-8 h-8 p-2 rounded-[10px]' alt="" />
                <div className="social-text">
                    <h4 className='text-[1.3rem] text-[#aaaaaa] transition-all duration-1000 group-hover:text-white'>{redes.tittle}</h4>
                    <p className='text-[0.7rem] text-[#aaaaaa] transition-all duration-1000 group-hover:text-white'>{redes.description}</p>
            </div>
        </a>
    ));


    return(
        <section id='contact-me'>
            <div className="items-center justify-center text-white text-center relative z-[1000] px-30 max-sm:px-5 my-5 contact-main ">
                <div className="mb-12 contact-header">
                    <h2 className='text-[3rem]'>Contact Me</h2>
                    <p className='text-[1.3rem] max-sm:text-[1rem]'>Got a question? Send me a message, and I'll get back to you soon</p>
                </div>
                <div className="flex max-sm:flex-col justify-center p-5 gap-5 bg-[#7873bb41] rounded-[15px]  contact-email-redes">
                    <div className="w-full bg-[#c7c7c70f] rounded-[10px] p-2 contact-email">
                        <h3 className='text-[2rem]'>Get in Touch</h3>
                        <p className='text-[1rem]'>Have something to discuss? Send me a message and let's talk.</p>
                        <form action="https://formspree.io/f/mbldjqdr" className='mt-5 py-2 px-5' method="POST">
                            <div>
                                <input className='w-[90%] h-10 mb-5 p-2 rounded-[10px] border-1 border-[#ffffff2e] text-white text-[1rem] bg-[#ffffff08] input-name' type="text" name="name" id="" placeholder="Your Name" required />
                            </div>
                            <div>
                                <input className='w-[90%] h-10 mb-5 p-2 rounded-[10px] border border-[#ffffff2e] text-white text-[1rem] bg-[#ffffff08] input-email' type="email" name="email" id="" placeholder="Your Email" required />
                            </div>
                            <div>
                                
                                <textarea name="message" id="textarea" className='w-[90%] h-30 mb-5 p-2 rounded-[10px] border border-[#ffffff2e] text-white text-[1rem] bg-[#ffffff08] resize-none' placeholder='Your Message' required ></textarea>
                            </div>
                            <button type="submit" className='w-[90%] py-5 px-3 rounded-[10px] bg-[linear-gradient(43deg,_#870afc_20%,_#bb83ff_100%)] transition-all duration-1000 hover:shadow-[0px_9px_12px_-5px_#870afc]'>Send Message</button>
                        </form>
                    </div>
                    <div className="w-full bg-[#c7c7c70f] rounded-[10px] p-2 contact-redes">
                        <h3 className='text-[2rem]'>Connect With Me</h3>
                        <p className='text-[1rem]'>In my social networks, follow me please :3</p>
                        <div className="grid grid-cols-[repeat(auto-fit,_minmax(220px,_1fr))] p-3 gap-5 contact-redes-display">
                            {misRedes}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default contact;