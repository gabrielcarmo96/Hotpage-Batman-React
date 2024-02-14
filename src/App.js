import './App.css';
import Home from './pages/Home';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Contato from './pages/Contato/contato';
import Fotos from './pages/Fotos/fotos';
import Comentario from './pages/Comentarios/comentario';



function App() {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Contato' element={<Contato />}/>
        <Route path='/Fotos' element={<Fotos />}/>
        <Route path='/Comentario' element={<Comentario />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
    
  
  
  
  


  

