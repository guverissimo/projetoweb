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
                <h4 className="card-name">{item.nome}</h4>
                <div className="card_img">
                  <img src={item.img} alt="" />
                </div>   
                  <h5>{item.desc}</h5>
                  <h3>R$ {item.valor}</h3>
              </div>
            </>
          ))}
        </div>
      </div>
    </>
  );
}
export default Conteudo;
