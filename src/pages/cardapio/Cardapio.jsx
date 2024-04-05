import React from 'react'
import "./style.css"
const Cardapio = () => {
  return (
    <div className='cardapioSection genericFlexColunmCenter'>
        <h1 className='mainMenuText'>Explore o cardápio da nossa cafeteria: uma variedade deliciosa de cafés</h1>

        <p className='presentationMenuText'>Desfrute do melhor do café em nossa cafeteria.
             Desde os tradicionais espressos italianos até as criações mais ousadas,
              temos uma variedade de opções para todos os amantes de café. Explore
               nossa seleção de grãos especiais</p>

        <section className='clardapioFlex genericFlexColunmCenter'>
            <div className='product genericFlexRowCenter'>
                <div className='nameProduct'>
                    <h1>Cafes</h1>
                    <p>Apresentamos uma seleção premium de grãos de origem, cuidadosamente escolhidos para proporcionar uma experiência de sabor incomparável.</p>
                </div>


                <ul className='type'>
                    <li>Espresso Tradicional</li>
                    <li>Cappuccino Cremoso</li>
                    <li>Latte Delicado</li>
                    <li>Mocha Tentador</li>
                </ul>

                <ul className='elements'>
                    <li>grãos de café arábica</li>
                    <li>Mistura de café arábica e robusta</li>
                    <li>Grãos arábica e leite vaporizado </li>
                    <li>Leite vaporizado e chocolate em pó</li>
                </ul>
            </div>
        </section>

        <section className='clardapioFlex genericFlexColunmCenter'>
            <div className='product genericFlexRowCenter'>
                <div className='nameProduct'>
                    <h1>Frappés</h1>
                    <p>O frappé é uma bebida gelada e refrescante feita à base de café espresso ou café concentrado, combinado com leite, gelo e xaropes ou sabores adicionais, como chocolate, caramelo ou baunilha</p>
                </div>

                <ul className='type'>
                    <li>Frappé de Café Clássico</li>
                    <li>Frappé de Mocha Cremoso</li>
                    <li>Frappé de Caramelo Suave</li>
                    <li>Frappé de Baunilha Refinado</li>
                </ul>

                <ul className='elements'>
                    <li>Café espresso gelado, leite, açúcar e gelo</li>
                    <li>Café espresso gelado, leite, chocolate, açúcar e gelo</li>
                    <li>Café espresso gelado, leite, xarope de caramelo, açúcar e gelo</li>
                    <li>Café espresso gelado, leite, xarope de baunilha, açúcar e gelo</li>
                </ul>
            </div>
        </section>

        <section className='clardapioFlex genericFlexColunmCenter'>
            <div className='product genericFlexRowCenter'>
                <div className='nameProduct'><h1>Sucos cremosos</h1></div>
                <ul className='type'>
                    <li>Achocolatado</li>
                    <li>Suco de laranja</li>
                    <li>Suco de limao com mel</li>
                </ul>

                <ul className='elements'>
                    <li>leite e chocolate batido</li>
                    <li>laranja e leite</li>
                    <li>Limao leite e uma pitada de mel</li>

                </ul>
            </div>
        </section>
    </div>
  )
}

export default Cardapio