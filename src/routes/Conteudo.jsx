import {} from "react";
import { ListaProdutos } from "../components/ListaProdutos";
import '../css/Sushi.css'

function Conteudo() {
  return (
    <>
      <h1>Conteudo</h1>
      <div className="container">
        <div>
          {ListaProdutos.map((item) => (
            <>
              <div className="card-sushi">
                <div className="card_img">
                  <img src={item.img} alt="" />
                </div>
                <div className="card_info">
                  <h4>{item.nome}</h4>
                  <h4>{item.desc}</h4>
                  <h4>R$ {item.valor}</h4>
                </div>
              </div>
            </>
          ))}
        </div>
      </div>
    </>
  );
}
export default Conteudo;
