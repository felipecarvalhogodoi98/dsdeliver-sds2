import './styles.css'
import {ReactComponent as MainImg} from './Imagem.svg'
import Footer from '../Footer'
import { Link } from 'react-router-dom';

function Navbar(){
    return (
        <>
            <div className="home-container">
                <div className="home-content">
                    <div className="home-actions">
                        <h1 className="home-title">Faça seu pedido <br/> que entregamos <br/> para voce!</h1>
                        <h3 className="home-subtitle">Escolha seu pedido e em poucos minutos <br/> levaremos em sua porta!</h3>
                        <Link to="/orders" className="home-btn-order">FAZER PEDIDO</Link>
                    </div>
                    <div className="home-image">
                        <MainImg/>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )
}

export default Navbar;