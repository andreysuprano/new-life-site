import styled from "styled-components";

export const Center = styled.section`
    width:100vw;
    display:flex;
    align-items:center;
    justify-content:center;
    padding-top: 50px;
    padding-bottom: 100px;
`;
export const Container = styled.div`
    max-width:1200px;

`;
export const Content = styled.div`
    display:flex;
    align-items:center;
    justify-content:space-between;
`;

export const ImageContainer = styled.div`
margin-right: 40px;
`;

export const TextContainer = styled.div`
    
`;

export const Span = styled.span`
    font-size: 24px;
    color: ${props => props.theme.secondary};
    font-weight: 300;
`;

export const Title = styled.h1`
    font-size: 48px;
    color: ${props => props.theme.primary};
    font-weight: 900;
`;

export const Paragraph = styled.p`
    font-size: 18px;
    font-weight: 300;
`;

export const SubTitle = styled.h2`
    font-size: 36px;
    color: ${props => props.theme.primary};
    font-weight: 900;
`;