import { Container, Title, Button, Image, LeftContainer, RightContainer, SubTitle, ButtonBox } from "./styles";
import { Link } from "react-router-dom";
export default function Home() {
    return (
        <Container>
            <LeftContainer>
                <Title>O mapa local da sua cidade.</Title>
                <SubTitle>Encontre no comercio local tudo o que precisa!</SubTitle>
                <Link to="new">
                    <Button>
                        <ButtonBox>{'>'}</ButtonBox>
                        Cadastre um ponto comercial
                    </Button>
                </Link>
            </LeftContainer>
            <RightContainer>
                <Image></Image>
            </RightContainer>
        </Container>
    );
}