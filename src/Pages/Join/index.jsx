import Landing from "../../Components/LandingPage";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import Title from "../../Components/Title";
import landingPhoto from './assets/girls_photo.png';
import Photo1 from './assets/amazonia_em_pe.jpeg';

import { ContentContainer, StyledImage, WorkshopWrapper, TitleContentWrapper } from "./styles";

export default function Join() {
    return (
        <>
            < Header />
            < Landing backgroundImage={landingPhoto} text={`“Senti que eu podia ser quem eu sou e não tem nada de errado com quem eu sou”`} />

            <ContentContainer>
                < Title
                    title={"Como posso participar?"}
                    subtitle={
                    <div>
                        <p><span style={{fontWeight: 900}}>Inscrições para o time</span><br/>Duas vezes por ano abrimos inscrições para fazer parte do time Equalizaminas. Fique atento as informações passadas no Instagram do Equalizaminas para não perder a chance.</p>
                        <p>
                            <span style={{fontWeight: 900, color:"#E91E63"}}>Requisitos:</span><br/>
                            - Ser menina/mulher;<br/>- Ter entre 12-22 anos;<br/>- Ser apaixonada por equidade de gênero;<br/>- Inscrever-se para o processo seletivo té 17 de maio de 2025.
                        </p>
                        <p>
                            <span style={{fontWeight: 900, color:"#E91E63"}}>Benefícios:</span><br/>
                            - Ser parte da comunidade internacional e nacional da Girl Up;<br />- Conhecer meninas do mundo todo;<br />- Ter a chance de comandar eventos nacionais, participar de eventos presenciais e virtuais, e palestrar em eventos internacionais como <span style={{fontWeight: 900}}>CSW69 Town Hall</span> e <span style={{fontWeight: 900}}>Leadership Summit</span>.
                        </p>
                    </div>}
                />
                <WorkshopWrapper>
                    <TitleContentWrapper>
                        <Title
                        title={"Workshops"}
                        subtitle={`Todos os anos temos workshops sobre diversos assuntos como ciência e política. Fique atenta no portal "Eventos" e no Instagram para não perder nenhuma oportunidade.`}
                        button={"Saiba mais"}
                        buttonHref={"https://www.instagram.com/equalizaminas/"}
                        />
                    </TitleContentWrapper>
                    <StyledImage src={Photo1} alt="Projeto Amazônia em Pé" />
                </WorkshopWrapper>
            </ContentContainer>

            < Footer />
        </>
    )
}