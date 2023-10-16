import {} from 'react';
import { Link } from 'react-router-dom';
import { ListaPedidos } from '../components/ListaPedidos';
import { GrFormEdit as Editar } from 'react-icons/gr';
import { RiDeleteBin2Fill as Excluir } from 'react-icons/ri';

const Pedidos = () => {
    
    return(
        <section>
      <h1>LISTA DE PRODUTOS</h1>
      <div>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>NOME</th>
              <th>ENDERECO</th>
              <th>CEL</th>
              <th>PEDIDO</th>
              <th>EDITAR / EXCLUIR</th>
            </tr>
          </thead>
          <tbody>
            {ListaPedidos.map((item, indice) => (
              <tr key={indice}>
                <td>{item.id}</td>
                <td>{item.nome}</td>
                <td>{item.endereco}</td>
                <td>{item.cel}</td>
                <td>{item.pedido}</td>
                <td>
                  {' '}
                  <Link to={`/editar/produtos/${item.id}`}>
                    <Editar />
                  </Link>{' '}
                  <Link to={`/excluir/produtos/${item.id}`}>
                    <Excluir />
                  </Link>{' '}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
    )
}

export default Pedidos