import { useRef } from "react";
import Produtos from "./Produtos";
import "../css/Login.css";


function Login() {
  const user = useRef();
  const password = useRef();
  const getUser = sessionStorage.getItem("userData");
  const getSenha = sessionStorage.getItem("senhaData");

  const handleSubmit = () => {
    if (user.current.value === "admin" && password.current.value === "12345") {
      let token =
        Math.random().toString(16).substring(2) +
        Math.random().toString(16).substring(2);
      sessionStorage.setItem("userData", "admin");
      sessionStorage.setItem("senhaData", token);
    } else {
      alert("usuário e senha inválidos !!!");
    }
  };

  return (
    <section>
      {getUser && getSenha ? (
        <>
          <Produtos />
        </>
      ) : (
        <form className="loginForm" onSubmit={handleSubmit}>
          <div className="box-login">
            <h1 className="title-login">Login</h1>
            <input ref={user} type="text" name="usuario" placeholder="Usuario" onFocus="field_focus(this, 'email');" className="email" />
            <input ref={password} type="password" name="email" placeholder="Senha" onFocus="field_focus(this, 'email');"  className="email" />
            <button className="validateLoginBtn" type="submit" >Login</button>
          </div>
        </form>
      )}
    </section>
  );
}

export default Login;
