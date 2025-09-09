import Landing from "../../Components/LandingPage";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import Title from "../../Components/Title";

import HomePhoto from './assets/home_photo.jpg'
import Photo1 from './assets/brazil_flag.JPG'
import Photo2 from './assets/girls_photo.png'

import { ImagesContainer, StyledImage, ContentContainer } from "./styles";

export default function Home() {
    return (
    <>
        < Header />
        < Landing backgroundImage={HomePhoto} text={"Quando meninas se erguem, todos se erguem"}/>
        
        <ContentContainer>
          < Title 
            title={"Bem-vindo ao Equalizaminas"} 
            subtitle={
              <div>
                <p>O <span style={{color: '#E91E63'}}>Girl Up Equalizaminas</span> é um projeto social fundado em São Paulo com o objetivo de combater desigualdades de gênero e treinar meninas de 12 a 22 anos para se tornarem líderes em suas comunidades. Alinhado ao Objetivo de Desenvolvimento Sustentável nº 5 da ONU (Igualdade de Gênero), o clube trabalha com foco em educação, saúde e empoderamento, utilizando a abordagem ABCD (Asset-Based Community Development) — uma estratégia que promove transformações sociais a partir dos talentos e necessidades da própria comunidade.</p>
                <p>Inspirado no movimento global Girl Up, criado pela Fundação das Nações Unidas em 2010, o <span style={{color: '#E91E63'}}>Equalizaminas</span> compartilha da missão de apoiar meninas adolescentes com acesso à saúde, educação, ciência, esporte e uma vida livre da violência. As ações do clube incluem campanhas de arrecadação de absorventes, workshops educativos gratuitos, produção de conteúdo informativo, ativismo digital e formação de lideranças femininas.</p>
                <p>O clube é dividido em 3 times principais, para que cada integrante possa atuar em tarefas específicas com dedicação e entusiasmo, promovendo impacto real e contínuo. Ao fazer parte do <span style={{color: '#E91E63'}}>Equalizaminas</span>, cada menina se torna também uma voz ativa dentro de um movimento internacional que já conta com meio milhão de garotas ao redor do mundo, todas engajadas na construção de um futuro mais justo e igualitário.</p>
              </div>
              } 
          />
          
          <ImagesContainer>
              <StyledImage src={Photo1} alt="Garota segurando bandeira do Brasil" />
              <StyledImage src={Photo2} alt="Meninas em evento" />
          </ImagesContainer>
        </ContentContainer>

        < Footer />
    </>
    )
}