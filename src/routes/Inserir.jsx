import { useState } from "react";
import { ListaProdutos } from "../components/ListaProdutos";
import { useNavigate } from "react-router-dom";
import NavLogin from "../components/NavLogin";
import "../css/Inserir.css";

function Inserir() {
  const navigate = useNavigate();

  let novoId = ListaProdutos[ListaProdutos.length - 1].id + 1;

  const [produto, setProduto] = useState({
    id: novoId,
    nome: "",
    desc: "",
    valor: "",
    img: "",
  });

  /*funções */

  const handleSubmit = (e) => {
    e.preventDefault();
    ListaProdutos.push(produto);
    navigate("/produtos");
  };

  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setProduto({ ...produto, [name]: value });
  };

  return (
    <>
      <NavLogin />
      <section className="section-inserir">
        <h1>Cadastro de Produtos</h1>
        <form onSubmit={handleSubmit}>
          <p>
            <label htmlFor="idNome"> Nome do Produto:</label>
            <input
              type="text"
              name="nome"
              id="idNome"
              value={produto.nome}
              onChange={handleChange}
              required
            />
          </p>
          <p>
            <label htmlFor="idDesc">Descrição Produto:</label>
            <input
              type="text"
              name="desc"
              id="idDesc"
              value={produto.desc}
              onChange={handleChange}
              className="input_field"
              required
            />
          </p>
          <p>
            <label htmlFor="idValor"> Valor do Produto:</label>
            <input
              type="text"
              name="valor"
              id="idValor"
              value={produto.valor}
              onChange={handleChange}
              className="input_field"
              required
            />
          </p>
          <p>
            <label htmlFor="idImg"> Imagem do Produto:</label>
            <input
              type="text"
              name="img"
              id="idImg"
              value={produto.img}
              onChange={handleChange}
              className="input_field"
              placeholder="URL"
              required
            />
          </p>
          <p>
            <button type="submit">CADASTRAR</button>
          </p>
        </form>
      </section>
    </>
  );
}
export default Inserir;
