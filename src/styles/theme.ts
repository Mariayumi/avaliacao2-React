import styled from 'styled-components';

export const Dark = {
    name: "dark",
    background: "#4F4F4F",
    main: "#1C1C1C",
    title: "#ddd",
    text: "#ccc",
    imgbackground: "#F0F8FF"
};

export const Light = {
    name: "light",
    background: "#B0C4DE",
    main: "#F0F8FF",
    title: "#333",
    text: "#444",
    imgbackground: "#F0F8FF"
}

export const Header = styled.div`
    text-align: center;
`

export const Logo = styled.img`
    padding-top: 20px;
    padding-bottom: 20px;
    width: 150px;
`

export const MainContainer = styled.div`
    background-color: ${(props => props.theme.background)};
    color: ${(props => props.theme.text)};
    padding: 40px;
    min-height: 88vh;
    min-width: 100%;
`

export const SubContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding: 20px;
    background-color: ${(props => props.theme.main)};
    color: ${(props => props.theme.text)};
    border-radius: 5px;

    @media (max-width: 800px) {
        grid-template-columns: 1fr;
    }
`

export const TeamContainer = styled.div`
    margin-top: 5px;
    margin-bottom: 15px;
`

export const Titulo = styled.h1`
    margin-top: 10px;
    color: ${(props => props.theme.text)};
    font-size: 30px;
`

export const TituloLeft = styled.h1`
    margin-top: 10px;
    color: ${(props => props.theme.text)};
    font-size: 30px;
    text-align: center;
`

export const Checkbox = styled.input`
    margin-right: 10px;
    width: 20px;
    height: 20px;
    color: #0000;
`

export const Conteudo = styled.p`
    font-size: 18px;
    text-align: justify;
    color: ${(props => props.theme.text)};
    border-bottom: 1px solid #ccc;
    padding: 5px;
`

export const ConteudoMatch = styled.p`
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    width: 100%;
    font-size: 18px;
    color: ${(props => props.theme.text)};
    margin-top: 5px;
`

export const ContainerMatch = styled.div`
    margin: 10px;
`

export const MatchContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 5px;
    margin-bottom: 5px;
`

export const MatchCont = styled.div`
    display: grid;
    grid-template-columns: 150px 10px 150px;
`

export const X = styled.span`
    text-align: center;
    font-weight: bold;
    margin-top: 5px;
`;