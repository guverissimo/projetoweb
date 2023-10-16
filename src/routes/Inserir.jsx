import { useState } from 'react';
import { ListaProdutos } from '../components/ListaProdutos';
/* É através dele que se conseguirá fazer a navegação entre as diferentes rotas de uma aplicação. Declaramos ele atribuindo o hook a uma variável e depois invocando-a, passando a rota do destino como parâmetro obrigatório, conforme exemplo: */
import { useNavigate } from 'react-router-dom';


function Inserir() {
  /*Hooks - navigate */
  const navigate = useNavigate();

  //Gerando um novo ID
  let novoId = ListaProdutos[ListaProdutos.length - 1].id + 1;

  /*Hooks - useState */
  const [produto, setProduto] = useState({
    id: novoId,
    nome: '',
    desc: '',
    valor: '',
    img: '',
  });

  /*funções */

  const handleSubmit = (e) => {
    /*serve para prevenir o comportamento padrão de um evento */
    e.preventDefault();
    /*puxa tudo que estiver na lista de produtos */
    ListaProdutos.push(produto);
    navigate('/produtos');
  };

  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setProduto({ ...produto, [name]: value });
  };

  return (
    <section>
      <h1>Cadastro de Produtos</h1>
      <form onSubmit={handleSubmit}>
        <fieldset>
          <legend>PRODUTO</legend>
          <p>
            <label htmlFor="idNome"> Nome do Produto:</label>
            <input
              type="text"
              name="nome"
              id="idNome"
           
              value={produto.nome}
              onChange={handleChange}
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
            />
          </p>
          <p>
            <button type="submit">
              CADASTRAR
            </button>
          </p>
        </fieldset>
      </form>
    </section>
  );
}
export default Inserir;
