import React from "react";
import './styles.css'
import { Link } from "react-router-dom";
import Logo from '../../assets/the-batman-riddle-5k-js.jpg'

function Header(){
    

    return (
        <header>
            <Link to='/'>
            <img id='logo' src={Logo} />
            </Link>
            
            <nav>
                <header>
                    <Link style={{textDecoration: 'none'}} to='/'>
                    <li>Home</li>
                    </Link>
                    <Link to='/Contato' style={{textDecoration: 'none'}}>
                    <li>Contato</li>
                    </Link>
                    <Link to='Fotos' style={{textDecoration: 'none'}}>
                    <li>Fotos</li>
                    </Link>
                    <Link to ='Comentario' style={{textDecoration: 'none'}}>
                    <li>Comentários</li>
                    </Link>
                </header>
            </nav>
        </header>
    )
}
                    
                    

export default Header;