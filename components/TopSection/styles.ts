import styled from "styled-components";

export const Container = styled.section`
    width:100vw;
    height: 500px;
    background-color: ${props => props.theme.backgroundGrey};
    display:flex;
    align-items:center;
    justify-content:center;
`;

export const Content = styled.div`
    max-width:1100px;
    display:flex;
    align-items:center;
    justify-content:space-around;
`;

export const TextContainer = styled.div`
    width:30vw;
`;

export const ImageContainer = styled.div`

`;

export const Label = styled.span`
    color:${props => props.theme.secondary};
    font-size:22px;
`;

export const Title = styled.h1`
    color:${props => props.theme.primary};
    font-size:64px;
    font-weight:900;
`;

export const Paragraph = styled.p`
    color:${props => props.theme.primary};
    font-size:20px;
    font-weight:400;
`;

export const Button = styled.button`
    padding:15px;
    border-radius:15px;
    border:none;
    background-color:${props => props.theme.primary};
    color:#FFF;
    font-weight:600;
    box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.11);
    margin-top: 20px;
`;