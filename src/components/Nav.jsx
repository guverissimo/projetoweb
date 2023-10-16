import {} from 'react';
import { Link,useNavigate } from 'react-router-dom';
import '../css/Nav.css'

function Nav() {
  const navigate = useNavigate();


  const handleLogout = async ()=>{
    sessionStorage.removeItem('userData');
    sessionStorage.removeItem('senhaData');
    alert("SAINDO DA SESSÃO");
    navigate('/');
  }

  return (
    <>
      <header className='nav-container'>
        <h2 className='logo'>JapaSushi</h2>
        <nav>
          <ul className='navigation'>
            <li>
              <Link className='navigation-link' to="/">Home</Link>
            </li>
       
            <li>
              <Link className='navigation-link' to="conteudo">Cardapio</Link>
            </li>
            <li>
              <Link className='navigation-link' to="pedido">Pedido</Link>
            </li>
            <li>
              <Link className='navigation-link loginBtn' to="/login">Login</Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
export default Nav;
