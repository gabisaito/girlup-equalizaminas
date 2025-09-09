import Landing from "../../Components/LandingPage";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import Title from "../../Components/Title";
import MembersProfile from "../../Components/MembersProfile";
import landingPhoto from './assets/girls_photo.jpeg';

import { ContentContainer, ProfilesWrapper } from "./styles";

export default function Contact() {
    return (
        <>
            < Header />
            < Landing backgroundImage={landingPhoto} text={"O Equalizaminas representou liberdade, coragem e empatia"} />

            <ContentContainer>
                < Title
                    title={"Entre em contato"}
                    subtitle={<div><p>Canais de contato:</p><p>Email: girlupequalizaminas@gmail.com<br />Instagram: @Equalizaminas<br />Tiktok: @Equalizaminas<br />LinkedIn: Equalizaminas - Girl Up</p><p>Localização:</p></div>}
                />
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14695.876191814272!2d-43.164502!3d-22.951367!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x99803f9a6f313f%3A0x6519cd96aa3a490f!2sAv.%20Pasteur%2C%20520%20-%20Urca%2C%20Rio%20de%20Janeiro%20-%20RJ%2C%2022290-255%2C%20Brazil!5e0!3m2!1sen!2sus!4v1757413447125!5m2!1sen!2sus" 
                    width="100%"
                    height="450vh"
                    style={{
                        border: 0,
                        allowfullscreen: "",
                        loading: "lazy",
                        referrerPolicy: "no-referrer-when-downgrade"
                    }}></iframe>
            </ContentContainer>

            < Footer />
        </>
    )
}