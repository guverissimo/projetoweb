import { useState } from "react";
import { ListaPedidos } from "../components/ListaPedidos";
import { useNavigate } from "react-router-dom";
import japan from "../assets/japan.png";
import "../css/Pedido.css";
import { ListaProdutos } from "../components/ListaProdutos";

const Pedido = () => {
  const navigate = useNavigate();

  let novoId = ListaPedidos[ListaPedidos.length - 1].id + 1;

  const [pedido, setPedido] = useState({
    id: novoId,
    nome: "",
    endereco: "",
    cel: "",
    pedido: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    ListaPedidos.push(pedido);
    navigate("/");
  };

  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setPedido({ ...pedido, [name]: value });
  };
  return (
    <>
      <section className="pedido-container">
        <img src={japan} alt="" />
        <form onSubmit={handleSubmit}>
          <h1 className="title-pedido">FAÇA SEU PEDIDO ONLINE</h1>
          <p className='box'>
            <label htmlFor="idNome"> Seu nome:</label>
            <input
              type="text"
              name="nome"
              id="idNome"
              value={pedido.nome}
              onChange={handleChange}
              placeholder="Nome Completo"
            />
          </p>
          <p className='box'>
            <label htmlFor="idEndereco">Endereco para entrega: </label>
            <input
              type="text"
              name="endereco"
              id="idEndereco"
              value={pedido.desc}
              onChange={handleChange}
              placeholder="Endereo completo"
            />
          </p>
          <p className='box'>
            <label htmlFor="idCel"> Telefone para contato: </label>
            <input
              type="text"
              name="cel"
              id="idCel"
              value={pedido.valor}
              onChange={handleChange}
              placeholder="(11) 9xxxx-xxxx"
            />
          </p>
          <p className='box'>
            <label htmlFor="idPedido"> Seu Pedido </label>
            <input
              type="text"
              name="pedido"
              id="idPedido"
              value={pedido.img}
              onChange={handleChange}
            />
          </p>
            {ListaProdutos.map((item) => {
              <section>
                <option value="">Selecione</option>
                <option value=''>{item.nome}</option>
                <option value={item.valor}>{item.valor}</option>
              </section>
                
            })}
        <button className="btn" type="submit">FAZER PEDIDO</button>
        </form>
      </section>
    </>
  );
};

export default Pedido;
