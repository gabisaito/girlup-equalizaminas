import {
    NotFoundContainer,
    ErrorCode,
    PageTitle,
    Description,
    HomeLink
} from './styled'

export default function NotFound() {

    return (
        <NotFoundContainer>
            <ErrorCode>404</ErrorCode>
            <PageTitle>Página não encontrada</PageTitle>
            <Description>
                A página que você está procurando não existe ou foi movida. Por favor, verifique o URL ou volte para a página inicial.
            </Description>
            <HomeLink href="/">
                Voltar para a página inicial
            </HomeLink>
        </NotFoundContainer>
    )
}