import Landing from "../../Components/LandingPage";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import Title from "../../Components/Title";
import MembersProfile from "../../Components/MembersProfile";
import landingPhoto from './assets/girls_photo.JPG';
import membersData from './membersinfo.json'; 

import { ContentContainer, ProfilesWrapper } from "./styles";

import beatrizImg from './assets/beatriz.jpeg';
import gabiImg from './assets/gabi.jpeg';
import pietraImg from './assets/pietra.jpeg';
import juliaImg from './assets/julia.jpeg';
import anaImg from './assets/ana.jpeg'
import lizandraImg from './assets/lizandra.jpeg'
import juliaRigerImg from './assets/julia_riger.jpeg'
import aliceImg from './assets/alice.jpeg'
import lauraImg from './assets/laura.jpeg'
import isabelyImg from './assets/isabely.jpeg'
import isabellaImg from './assets/isabella.jpeg'

const memberImages = {
  "beatriz.jpeg": beatrizImg,
  "gabi.jpeg": gabiImg,
  "pietra.jpeg": pietraImg,
  "ana.jpeg": anaImg,
  "julia_riger.jpeg": juliaRigerImg,
  "julia.jpeg": juliaImg,
  "lizandra.jpeg": lizandraImg,
  "alice.jpeg": aliceImg,
  "isabely.jpeg": isabelyImg,
  "laura.jpeg": lauraImg,
  "isabella.jpeg": isabellaImg
};

export default function Members() {
    return (
    <>
        < Header />
        < Landing backgroundImage={landingPhoto} text={"Movimento que treina, conecta e inspira meninas para serem lideres de suas próprias vidas"}/>
        
        <ContentContainer>
          < Title 
            title={"Integrantes"} 
            subtitle={"Acreditamos que a mudança começa com a união de pessoas que compartilham uma visão. Nossa equipe de integrantes é o coração do nosso movimento, composta por jovens líderes de diversas áreas, unidas por um propósito comum: lutar pela equidade de gênero e pelos direitos das mulheres."}
            button={"Quero fazer parte!"}
            buttonHref={"https://docs.google.com/forms/d/e/1FAIpQLScCHLibK3BCRmwTHrWLeb3IAtVQ7ncn2tfvm7Dlmm8Be1k6Ew/viewform"}
          />
            <ProfilesWrapper>
            {Object.values(membersData).map((member, index) => {
              const fileName = member.img.split('/').pop();
              return(
                <MembersProfile 
                  key={index}
                  name={member.name}
                  position={member.title}
                  description={member.description}
                  photo={memberImages[fileName]}
                />
              )
            })}
          </ProfilesWrapper>
          
        </ContentContainer>

        < Footer />
    </>
    )
}