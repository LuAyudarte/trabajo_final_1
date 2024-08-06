import './App.css';
import Header from './Componentes/header'
import Carousel from './Componentes/carousel'
import H1 from './Componentes/h1'
import Tarjetas from './Componentes/tarjetas'
import Formulario from './Componentes/formulario'
import Footer from './Componentes/footer'
import './Componentes/header.css'
import './Componentes/carousel.css'
import './Componentes/h1.css'
import './Componentes/tarjetas.css'
import './Componentes/formulario.css'
import './Componentes/footer.css'

function App() {
  return (
    <div className='app'>
        <Header/>
        <Carousel onClick={Carousel}/>
        <H1/>
        <Tarjetas/>
        <Formulario/>
        <Footer/>
    </div>
  );
}

export default App;