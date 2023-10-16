import { useRef } from 'react';
import Produtos from './Produtos';

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
      <h1>Login</h1>
      {getUser && getSenha ? (
        <Produtos />
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
