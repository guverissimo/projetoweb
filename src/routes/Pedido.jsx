import { useState} from "react";
import { ListaPedidos } from "../components/ListaPedidos";
import { useNavigate } from 'react-router-dom';

const Pedido = () => {

    const navigate = useNavigate();


    let novoId = ListaPedidos[ListaPedidos.length - 1].id + 1;
  
  
    const [produto, setProduto] = useState({
      id: novoId,
      nome: '',
      endereco: '',
      cel: '',
      pedido: '',
    });
  
    /*funções */
  
    const handleSubmit = (e) => {
      e.preventDefault();
      ListaPedidos.push(produto);
      navigate('/produtos');
    };
  
    const handleChange = (e) => {
      e.preventDefault();
      const { name, value } = e.target;
      setProduto({ ...produto, [name]: value });
    };
    return(
        <>
             <section>
      <h1>Cadastro de Produtos</h1>
      <form onSubmit={handleSubmit}>
        <fieldset>
          <legend>PRODUTO</legend>
          <p>
            <label htmlFor="idNome"> Seu nome:</label>
            <input
              type="text"
              name="nome"
              id="idNome"
           
              value={produto.nome}
              onChange={handleChange}
            />
          </p>
          <p>
            <label htmlFor="idEndereco">Endereco para entrega: </label>
            <input
              type="text"
              name="endereco"
              id="idEndereco"
              
              value={produto.desc}
              onChange={handleChange}
            />
          </p>
          <p>
            <label htmlFor="idCel"> Telefone para contato: </label>
            <input
              type="number"
              name="cel"
              id="idCel"
              
              value={produto.valor}
              onChange={handleChange}
            />
          </p>
          <p>
            <label htmlFor="idPedido"> Seu Pedido </label>
            <input
              type="text"
              name="pedido"
              id="idPedido"
              
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
        </>
    )
}

export default Pedido