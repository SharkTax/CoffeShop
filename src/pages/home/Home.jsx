import React from 'react'
import "./style.css"
import { image10, bodyImage, svgLitteCoffe, simpleLittleCoffe, simpleCoffeBeens,
  simpleCroisant, cutureSectCoffe, cutureSectCoffeHero, cutureSectCupOfCoffe,
  cutureSectShopDesing } from '../../assets'

const Home = () => {
  return (
    <div className='homeHero'>
      <section className='heroSec'>
        <div className='imgShadow'>
          <img src={bodyImage} alt="" />
        </div>
        <div className='spanDescription'>
          <h1>COFFE SHOP</h1>
          <div className='svgAndLine'><img src={svgLitteCoffe} alt="" /></div>
          <h2>Sabor que encanta, aroma que seduz!</h2>
          <h3>Desperte seus sentidos na Cafeteria Aromática! Sabores
            extraordinários,<br/> aromas irresistíveis e momentos inesquecíveis. 
            Venha nos visitar e mergulhe na experiência do café perfeito.
            Seja bem-vindo!"</h3>
          
          <div className='buttonsContact'>
            <button>Contato</button>
            <button>Localizacao</button>
          </div>
        </div>
      </section>

      <section className='presentation'>
        <div className='lineIntroduction'>
          <h1>Aperitivos deliciosos, perfeitos para acompanhar seu café favorito!</h1>
          <div className='svgAndLine'><img src={svgLitteCoffe} alt="" /></div>
          <h3>Pequenos salgados, diferentes cafes, diferentes graos</h3>
        </div>

      <div className='diferentProducts'>

        <div className='ImageAndDescription'>
          <img src={simpleLittleCoffe} alt="" />
          <div className='descriptionDF'>
            <h3>Tipos diferentes de cafes</h3>
            <p>diferentes cafes para diferentes horas do dia</p>
          </div>
        </div>

        <div className='ImageAndDescription'>
          <img src={simpleCoffeBeens} alt="" />
          <div className='descriptionDF'>
            <h3>Diferentes graos</h3>
            <p>Nao apenas o cafe em si, mas nossos graos sao selecionados</p>
          </div>
        </div>

        <div className='ImageAndDescription'>
          <img src={simpleCroisant} alt="" />
          <div className='descriptionDF'>
            <h3>Aperitivos para comecar o dia</h3>
            <p>Nao basta apenas um cafe quente pela manha mas um croisant quentinho tambem cai bem</p>
          </div>
        </div>
    
      </div>

    <div className='cultureSection'>
        <div className='lineIntroduction'>
          <h1>Ambiente aconchegante e profissional</h1>
          <div className='svgAndLine'><img src={svgLitteCoffe} alt="" /></div>
          <h3>Variedade de blends para todos os gostos, baristas habilidosos</h3>
        </div>


      <div className='gridCulture'>
        <div className='cutureInfo genericFlexColunmCenter'>
          <img src={cutureSectCoffe} alt="" />
          <div className='cultureInfoDescription'>
            <h1>Tecnicas de preparo</h1>
            <p>Desde o tradicional espresso italiano até o sabor suave do café
              filtrado, oferecemos uma variedade de opções para satisfazer todos
              os paladares. Explore nossa arte em cada xícara e mergulhe
              na experiência única do café feito sob medida para você. Visite-nos e descubra o prazer de cada método de preparo na sua cafeteria favorita.</p>

            <span>Saiba mais</span>
          </div>
        </div>

        <div className='cutureInfo genericFlexColunmCenter'>
          <img src={cutureSectCoffeHero} alt="" />
          <div className='cultureInfoDescription'>
            <h1>Atendimento atencioso</h1>
            <p>Na nossa cafeteria, o atendimento é mais do que
               um serviço, é uma experiência acolhedora e
                personalizada. Nossa equipe está aqui para recebê-lo
                 com um sorriso caloroso, garantindo que cada visita seja especial.</p>

            <span>Saiba mais</span>
          </div>
        </div>

        <div className='cutureInfo genericFlexColunmCenter'>
          <img src={cutureSectCupOfCoffe} alt="" />
          <div className='cultureInfoDescription'>
            <h1>Maquinas de linha</h1>
            <p>Desde as máquinas de espresso de última geração
               até os métodos de preparo mais inovadores,
                cada xícara é cuidadosamente preparada para atender aos
                 mais altos padrões</p>

            <span>Saiba mais</span>
          </div>
        </div>

        <div className='cutureInfo genericFlexColunmCenter'>
          <img src={cutureSectShopDesing} alt="" />
          <div className='cultureInfoDescription'>
            <h1>Ambiente aconchegante</h1>
            <p>Com uma atmosfera calorosa e charmosa,
               cada visita é uma pausa bem-vinda na agitação da cidade.
                Deixe-se envolver pelo ambiente acolhedor, onde o aroma do
                 café fresco se mistura com risadas e conversas animadas</p>

            <span>Saiba mais</span>
          </div>
        </div>
      </div>
    </div>


      </section>

      <section className='TradicaoBanner genericFlexColunmCenter'>
        <img src={image10} alt="" />

        <h1>Tradicao</h1>
        <div className='svgAndLine' style={{position: "absolute", top: "70%", zIndex: "2"}}><img src={svgLitteCoffe} alt="" /></div>
      </section>

      <section className='presentation'>
        <div className='diferentProducts' style={{marginTop: 0}}>
          <div className='tradicaoInfo genericFlexColunmCenter'>
            <h1>15</h1>
            <h4>anos que existe</h4>
          </div>

          <div className='tradicaoInfo genericFlexColunmCenter'>
            <h1>30</h1>
            <h4>Variedades de cafe</h4>
          </div>

          <div className='tradicaoInfo genericFlexColunmCenter'>
            <h1>5</h1>
            <h4>fornecedores diferentes</h4>
          </div>
        </div>
      </section>


      <section className='venhaNosConhecer genericFlexRowCenter'>
          <div className='localizacao genericFlexColunmCenter'>
            <h1>Onde estamos</h1>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3658.8249983373926!2d-47.46430445722302!3d-23.502812067395205!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c58b7c3822bd37%3A0x1c96a7d1d9d65e5c!2sJF%20CAFETERIA!5e0!3m2!1spt-BR!2sbr!4v1712236518384!5m2!1spt-BR!2sbr"
           width="450" height="300" allowFullScreen=""
          loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>

          </div>

          <div className='svgAndLine'><img src={svgLitteCoffe} alt="" /></div>

          <div className='Horarios genericFlexColunmCenter'>
            <h1>Horarios de funcionamento</h1>
            <ul>
              <li><h3>segunda</h3> <span>7:00 - 17:00</span></li>
              <li><h3>terca</h3> <span>7:00 - 17:00</span></li>
              <li><h3>quarta</h3> <span>7:00 - 17:00</span></li>
              <li><h3>quinta</h3> <span>7:00 - 17:00</span></li>
              <li><h3>sexta</h3> <span>7:00 - 17:00</span></li>
              <li><h3>sabado</h3> <span>7:00 - 17:00</span></li>
            </ul>
          </div>
      </section>
    </div>
  )
}


export default Home