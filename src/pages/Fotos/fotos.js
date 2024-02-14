import React from "react";
import Header from "../../components/header/header";
import './fotos.css'
import Footer from "../../components/footer";

function Fotos(){
    return(
        <>
        <Header />
        <div id='banner-fotos'></div>
        <div className="title-box">
            <h1 className="title">Fotos</h1>
        </div>
        <div className="box1 c1">
            <div className="box2 c1">
                <div className="fotos-box c1">
                    <div class="fotos foto1"></div>
                    <div class="fotos foto2"></div>
                    <div class="fotos foto3"></div>
                    <div class="fotos foto4"></div>
                    <div class="fotos foto5"></div>
                    <div class="fotos foto6"></div>
                </div>
            </div>

        </div>
        <Footer />
        </>
    )

}

export default Fotos;



