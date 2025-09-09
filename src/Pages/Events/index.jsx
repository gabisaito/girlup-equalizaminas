import Landing from "../../Components/LandingPage";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import Title from "../../Components/Title";
import landingPhoto from './assets/girls_photo.jpg';
import NewsPreview from "../../Components/NewsPreview";
import eventsData from './eventsinfo.json';

import { ContentContainer, NewsPreviewContainer } from "./styles";

import mulheresPolitica from './assets/mulheres_politica.jpeg';
import livreMenstruar from './assets/livre_menstruar.jpeg';
import diaDasmulheres from './assets/dia_da_mulher.jpeg';

const eventImages = {
    "mulheres_politica.jpeg": mulheresPolitica,
    "livre_menstruar.jpeg": livreMenstruar,
    "dia_da_mulher.jpeg": diaDasmulheres,
};

export default function Events() {
    return (
        <>
            < Header />
            < Landing backgroundImage={landingPhoto} text={"Mudaremos a história, salvando uma vida por vez, mesmo que isso leve anos"} />

            <ContentContainer>
                < Title
                    title={"Eventos"}
                />

                <NewsPreviewContainer>
                    {Object.values(eventsData).map((event, index) => {
                        const fileName = event.img.split('/').pop();
                        return (
                            <NewsPreview
                                key={index}
                                title={event.title}
                                date={event.date}
                                description={event.preview}
                                photo={eventImages[fileName]}
                                button={"Saiba mais"}
                                buttonHref={event.hrefMVP}
                            />
                        )
                    })}
                </NewsPreviewContainer>

            </ContentContainer>

            < Footer />
        </>
    )
}