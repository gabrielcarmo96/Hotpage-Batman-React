import React from "react";
import Header from "../../components/header/header";
import './contato.css'
import FotoEmail from "../../assets/email.png"
import FotoTelefone from "../../assets/telefone.png"
import FotoInstagram from "../../assets/instagram.png"
import Footer from "../../components/footer";

function Contato(){
    return(
        <>
        <Header />
        <div id='banner-contato'></div>
        <div className="title-box">
            <h1 className="title">Contato</h1>
        </div>
        <div className="box1 c1">
            <div className="box2 c1"> 
                <div className="contact-box c1">
                    <h1>Fale Conosco</h1>
                    <h2>Email:</h2>
                        <h3>
                            <img src={FotoEmail}/>batman@batman.com  
                        </h3>
                    <h2>Telefone:</h2>
                        <h3>
                            <img src={FotoTelefone} />0800 785 221296
                        </h3>
                    <h2>Redes sociais:</h2>
                        <h3>
                            <img src={FotoInstagram} /> Instagram
                        </h3>      
                </div>
                <form className="forms">
                    <input type="text" name="nome" id="nome" placeholder="Nome Completo" />
                    <input type="email" name="email" id="email" placeholder="Email" />
                    <input type="tel" name="tel" id="tel" placeholder="Telefone" />
                    <textarea nome="mensagem" id="mensagem" placeholder="Digite sua mensagem" />
                    <button className="button2">Enviar</button>
                </form>
            </div>
        </div>
        <Footer />
        </>


    )
}

export default Contato;