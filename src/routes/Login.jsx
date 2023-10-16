import { useRef } from 'react';
import Produtos from './Produtos';
import Inserir from './Inserir';
import Pedidos from '../components/Pedidos';
import { Link } from 'react-router-dom';
import NavLogin from '../components/NavLogin';

function Login() {
  const user = useRef();
  const password = useRef();
  const getUser = sessionStorage.getItem('userData');
  const getSenha = sessionStorage.getItem('senhaData');

  const handleSubmit = () => {
    if (user.current.value === 'admin' && password.current.value === '12345') {
      let token =
        Math.random().toString(16).substring(2) +
        Math.random().toString(16).substring(2);
      sessionStorage.setItem('userData', 'admin');
      sessionStorage.setItem('senhaData', token);
    } else {
      alert('usuário e senha inválidos !!!');
    }
  };

  return (
    <section>
      {getUser && getSenha ? (
        <>
          <NavLogin />
          <Produtos />
          <Inserir />
          <Pedidos />
        </>
      ) : (
        <form onSubmit={handleSubmit}>
          <p>
            USUÁRIO:
            <input type="text" ref={user} />
          </p>
          <br />
          <p>
            SENHA:
            <input type="password" ref={password} />
          </p>
          <br />
          <input type="submit" value="Login" />
        </form>
      )}
    </section>
  );
}

export default Login;
