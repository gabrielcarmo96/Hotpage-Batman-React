import React from "react";
import './styles.css'
import Logo from '../../assets/the_batman__2022__logo_png__by_mintmovi3_de3mn3j-fullview.png'


function Footer(){
    
    return (
        <footer>
            <img id="logo" src={Logo} alt="Logo"></img>
            <span>Todos os direitos reservados ©</span>
            <span>Desenvolvido por: Gabriel Carmo</span>
            

        </footer>
        

        
             
    )
}

export default Footer;