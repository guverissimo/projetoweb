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
              <Link className='navigation-link' to="conteudo">Conteudo</Link>
            </li>
            <li>
              <Link className='navigation-link' to="pedido">Peça</Link>
            </li>
            <li>
              <Link className='navigation-link' to="/cadastrar/produto">Cadastrar Produto</Link>
            </li>
            <li>
              <Link className='navigation-link' to="/login">LOGIN</Link>
            </li>
            <button onClick={handleLogout}>Logout</button>
          </ul>
        </nav>
      </header>
    </>
  );
}
export default Nav;
