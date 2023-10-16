import { Link, useNavigate } from "react-router-dom";
import "../css/NavLogin.css";
const NavLogin = () => {
  const navigate = useNavigate();
  const handleLogout = async () => {
    sessionStorage.removeItem("userData");
    sessionStorage.removeItem("senhaData");
    alert("SAINDO DA SESSÃO");
    navigate("/");
  };

  return (
    <>
      <div className="nav-login-div">
        <p>
          <Link className="nav-login" to="/Login">
            Produtos
          </Link>
        </p>
        <p>
          <Link className="nav-login" to="/cadastrar/produto">
            Cadastrar
          </Link>
        </p>
        <p>
          <Link className="nav-login" to="/Pedidos">
            Pedidos
          </Link>
        </p>
        <button className="LogoutBtn" onClick={handleLogout}>Logout</button>
      </div>
    </>
  );
};

export default NavLogin;
