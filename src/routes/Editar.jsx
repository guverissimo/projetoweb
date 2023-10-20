import { useNavigate, useParams } from 'react-router-dom';
import { ListaProdutos } from '../components/ListaProdutos';
import { useState } from 'react';
import NavLogin from '../components/NavLogin';
import "../css/Inserir.css";
function Editar() {

  const { id } = useParams();
  
  const navigate = useNavigate();

   const recProdutoListaById = ListaProdutos.filter((item) => item.id == id);

  
  const [produto, setProduto] = useState({
    id: recProdutoListaById[0].id,
    nome: recProdutoListaById[0].nome,
    desc: recProdutoListaById[0].desc,
    valor: recProdutoListaById[0].valor,
  });

 

  const handleSubmit = (event) => {
    event.preventDefault();
    let indice;
    ListaProdutos.forEach((item, index) => {
      if (item.id == produto.id) {
        indice = index;
      }
    });
    ListaProdutos.splice(indice, 1, produto);
    navigate('/produtos');
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setProduto({ ...produto, [name]: value });
  };

  return (
    <>
    <NavLogin />
    <section className="section-inserir">
        <h1>Editar</h1>
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
            <button type="subtmit" >EDITAR</button>
          </p>
        </form>
      </section>
    </>
  );
}
export default Editar;
