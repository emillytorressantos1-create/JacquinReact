import { Link } from 'react-router-dom'
import './Card.css'

import iconeUsuario from '../../assets/icones/user.svg'
import  iconeEstrela from '../../assets/icones/star.svg'


type CardProps = {
    chocolate: string
    nome: string;
    descricao: string;
    valor: number;
    quantidadedeAvaliacoes: number;
    nota: number;
}

function Card ({chocolate, nome, descricao, valor, quantidadedeAvaliacoes, nota}: CardProps) { 
return(
    <article className="prod_card">
    <figure>
      <img
        src={chocolate}
        alt="foto do produto"
      />
    </figure>
    <h2>
      <Link to="/detalheProduto">{nome}</Link>
    </h2>
    <p className="card_desc">
     {descricao}
    </p>
    <p className="card_rodape">
      <data value={valor}>R$ {valor} / kg</data>
      <span className="card_av">
        <img src={iconeUsuario} alt="icone de usuarios" />
        <data value={quantidadedeAvaliacoes}>{quantidadedeAvaliacoes}</data>
        <img src={iconeEstrela} alt="icone de estrela" />
        <data value={nota}>{nota}</data>
      </span>
    </p>
  </article>
)
}

export default Card