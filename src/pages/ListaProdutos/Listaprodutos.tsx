import './Listaprodutos.css'
import chocolate from '../../assets/img/produtos/le_grand_chocolat.png'
import usuario from '../../assets/icones/user.svg'
import estrela from '../../assets/icones/star.svg'
import { Link } from 'react-router-dom'
import Card from '../../components/card/Card'


function Listaprodutos() {

  return (
    <>
      <main>
        <section className="prod_banner" />
        <section className="container prod_container">
          <div className="box_h2">
            <h1>Nossos Bolos</h1>
            <span>Nos Gâteaux</span>
            <hr />
          </div>
          <div className="prod_cards">
            <Card
              chocolate={chocolate}
              nome={'Le Grand Chocolat'}
              descricao={'Mousse de chocolate belga 70%, praliné de avelãs e biscuit de cacau.'}
              valor={185.00}
              quantidadedeAvaliacoes={10}
              nota={9.5} />

          </div>
        </section>
      </main>
    </>
  )

}

export default Listaprodutos;