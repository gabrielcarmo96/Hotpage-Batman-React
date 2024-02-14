import React from "react";
import Header from "../../components/header/header";
import Star from '../../assets/star.png'
import './comentario.css'
import User from '../../assets/user.png'
import Footer from "../../components/footer";

function Comentario(){
    return(
        <>
            <Header />
            <div id='banner-comentario' />
            <div class="title-box">
                <h1 class="title">Comentários</h1>
            </div>
            <div className="box1">
                <div className="box2">
                    <div className="comment-box">
                        <div className="comment">
                            <div className="comment-head">
                                <div className="comment-user">
                                    <img src={User} /> user9798
                                </div>
                                <div className="comment-rate">
                                    <img src={Star}/>
                                    <img src={Star}/>
                                    <img src={Star}/>
                                    <img src={Star}/>
                                    <img src={Star}/>
                                </div>
                            </div>
                            <div className="comment-text">
                            É engraçado, sempre que uma nova reinicialização do Batman é anunciada, penso comigo mesmo: “precisamos mesmo de outra maldita versão do Batman?” E então estou lá, na noite de estreia, me divertindo muito. WB sabe como fazer o certo com esse personagem. O último filme de Matt Reeves ganha destaque imediatamente. Gotham City é bastante envolvente. Isso é o mais próximo dos jogos Arkham que provavelmente veremos nos cinemas.
                            </div>
                        </div>
                        <div className="comment">
                            <div className="comment-head">
                                <div className="comment-user">
                                    <img src={User} /> user5214
                                </div>
                                <div className="comment-rate">
                                    <img src={Star}/>
                                    <img src={Star}/>
                                    <img src={Star}/>
                                    <img src={Star}/>
                                </div>
                            </div>
                            <div className="comment-text">
                            Foi há menos de três anos que “Coringa”, de orçamento médio, mas de grande sucesso, de Todd Phillips apontava ameaçadoramente para um futuro em que filmes de super-heróis de todos os tamanhos se tornariam tão endêmicos no cinema moderno que não precisariam mais ser filmes de super-heróis. todos. Com “The Batman” de Matt Reeves – um extenso procedimento de látex de 176 minutos que muitas vezes parece ter mais em comum com sagas de serial killers como “Se7en” e “Zodiac” do que qualquer coisa no Snyderverse ou no MCU – esse futuro chegou com força estremecedora, para melhor ou para pior. Principalmente melhor.
                            </div>
                        </div>
                        <div className="comment">
                            <div className="comment-head">
                                <div className="comment-user">
                                    <img src={User} /> user8574
                                </div>
                                <div className="comment-rate">
                                    <img src={Star}/>
                                    <img src={Star}/>
                                    <img src={Star}/>
                                    <img src={Star}/>
                                </div>
                            </div>
                            <div className="comment-text">
                            Um dos melhores filmes de super-herói que eu já assisti, na minha opinião tudo estava incrível nele.
                            A fotografia e trilha sonora foram impecáveis, conseguiram trazer uma música antiga do "Nirvana" e encaixou perfeitamente, perdi o número de vezes que do nada comecei a cantar "something in the way hmmmmm".
                            O roteiro não tem nada de muito novo, mas todo esse mistério acaba te entretendo até o fim. Além disso souberam interpretar perfeitamente Gotham com todo esse tema da escuridão, que achei simplesmente perfeito.
                            </div>
                        </div>
                        <div className="comment">
                            <div className="comment-head">
                                <div className="comment-user">
                                    <img src={User} /> user3785
                                </div>
                                <div className="comment-rate">
                                    <img src={Star}/>
                                    <img src={Star}/>
                                    <img src={Star}/>
                                    <img src={Star}/>
                                </div>
                            </div>
                            <div className="comment-text">
                            Sim, esse filme é ótimo! Robert Pattinson pode ser meu Batman favorito até agora, e sua história realmente tem um monte de coisas boas a dizer sobre a própria natureza do personagem. Há uma frase dita no final que me arrepiou até os ossos, especificamente por causa de quem a disse, e uma cena logo depois da qual, embora provavelmente não pretendesse ser um arrancador de lágrimas, na verdade me deixou um pouco choroso. É exatamente o tipo de desconstrução e evolução que esse personagem precisava.
                            </div>
                        </div>
                        <div className="comment">
                            <div className="comment-head">
                                <div className="comment-user">
                                    <img src={User} /> user4158
                                </div>
                                <div className="comment-rate">
                                    <img src={Star}/>
                                    <img src={Star}/>
                                    <img src={Star}/>
                                    <img src={Star}/>
                                </div>
                            </div>
                            <div className="comment-text">
                            Filme incrível! Esta, com certeza, é a melhor adaptação do Batman aos cinemas: neste filme, é usado a ferramenta do "medo" e da "imponência" que o Batman passa à seus inimigos; é usado o fato de ele ser o "maior detetive de mundo" com muita maestria. 

                            O filme se passa a mais ou menos dois anos depois que o Batman iniciou suas missões como o "vigilante de Gotham", por isso vemos um Batman iniciante, não tão prudente, mas ainda sim muito inteligente e determinado.  O Robert Pattinson é um excelente ator e mandou muito bem nas atuações! Todo o elenco e personagens do filme, inclusive os figurantes e coadjuvantes são bem utilizados na História. 

                            São, definitamente, as 3h mais bem gastas do cinema. Recomendo assistir ao filme legendado para ver melhor as atuações e a voz do Batman, que o Robert Pattinson fez.
                            </div>
                        </div>
                        <div className="comment">
                            <div className="comment-head">
                                <div className="comment-user">
                                    <img src={User} /> user5798
                                </div>
                                <div className="comment-rate">
                                    <img src={Star}/>
                                </div>
                            </div>
                            <div className="comment-text">
                            Foi o pior filme do Batman que já assisti. Um super herói depressivo, que não coloca medo nos inimigos... não desvia dos tiros (podia ter levado um tiro na cara a qualquer hora). Uma armadura que foi pouco explorada, que em uma cena ele está caracterizado de Batman, daí vai escondido investigar alguém e tira a roupa de Batman, pra logo em seguida vestir ela novamente. Parecia ter medo de pular dos prédios e quando finalmente pensa em descer de um, usa uma corda que tem a altura do prédio, que estava escondida... não tem como esconder uma corda daquele tamanho num cinto!. Um batmóvel sem muitos detalhes (sem nenhuma arma pra parar o carro do Pinguim). É um filme policial genérico; se tirassem o Batman e colocassem o Bruce Willis, poderiam chamar de: "Duro de Matar 6". Filme com enredo devagar, onde só na hora de adivinhar as charadas ficava rápido. Um filme onde o vilão é o Charada e tudo se resolve instantaneamente (só travaram na charada da "El Rata", onde ficaram chutando qualquer resposta). E o Charada que durante todo filme estava intocável, no final se deixa ser preso só pra poder conversar pessoalmente com o Batman e revelar que seu plano ainda não tinha acabado... qual o sentido disso?
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
            
        </>

    )
}

export default Comentario;