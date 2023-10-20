import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ListaProdutos } from "../components/ListaProdutos";
import "../css/Excluir.css";
import NavLogin from "../components/NavLogin";

function Excluir() {
  const { id } = useParams();
  const navigate = useNavigate();

  const recProdutoListaById = ListaProdutos.filter((item) => item.id == id);

  const [produto] = useState({
    id: recProdutoListaById[0].id,
    nome: recProdutoListaById[0].nome,
    desc: recProdutoListaById[0].desc,
    valor: recProdutoListaById[0].valor,
    img: recProdutoListaById[0].img,
  });

  const handleExclude = (event) => {
    event.preventDefault();
    let indice;
    ListaProdutos.forEach((item, index) => {
      if (item.id == produto.id) {
        indice = index;
      }
    });
    ListaProdutos.splice(indice, 1);
    navigate("/produtos");
  };

  return (
    <>
    <NavLogin />
    <section className="section-excluir">
      <h1>Excluir Produto</h1>
      <div className="produto-imagem">
        <img src={produto.img} />
      </div>
      <div>
        <p>
          <span>Nome : </span>
          {produto.nome}
        </p>
        <p>
          <span>Desc : </span>
          {produto.desc}
        </p>
        <p>
          <span>valor :</span> {produto.valor}
        </p>
      </div>
      <div>
        <button className="excluir-btn" onClick={handleExclude}>EXCLUIR</button>
        <button className="voltar-btn" onClick={() => navigate("/produtos")}>VOLTAR</button>
      </div>
    </section>
    </>
    
  );
}
export default Excluir;
