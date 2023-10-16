import {} from "react";
import { ListaProdutos } from "../components/ListaProdutos";
import "../css/Sushi.css";

function Conteudo() {
  return (
    <>
      <div className="container-sushi">
        <div>
          {ListaProdutos.map((item) => (
          <>
            <div className="card-sushi">
              <div className="card-image">
                <img src={item.img} />
              </div>
              <div className="card-text">
                <p className="card-meal-type">{item.id}</p>
                <h2 className="card-title">{item.nome}</h2>
                <p className="card-body">{item.desc}</p>
              </div>
              <div className="card-price">R${item.valor}</div>
            </div>
          </>
        ))}
        </div>
      </div>
    </>
  );
}
export default Conteudo;
