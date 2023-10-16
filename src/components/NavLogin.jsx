import { Link } from 'react-router-dom';
import '../css/NavLogin.css'
const NavLogin = () => {
    return(
        <>
        <div className="nav-login-div">

            <p>
              <Link className='nav-login' to="/Login">Inicio</Link>
            </p>
            <p>
              <Link className='nav-login' to="/produtos">Produtos</Link>
            </p>
            <p>
              <Link className='nav-login' to="/cadastrar/produto">Cadastrar</Link>
            </p>
            <p>
              <Link className='nav-login' to="/Pedidos">Pedidos</Link>
            </p>
        </div>
        </>
    )
}

export default NavLogin