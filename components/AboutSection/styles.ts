import styled from "styled-components";
import Image from "next/image";

export const Center = styled.section`
    width:100%;
    display:flex;
    align-items:center;
    justify-content:center;
    padding-top: 50px;
    padding-bottom: 100px;
    @media (min-width: 768px) and (max-width:1023px){
        flex-direction: column;
    }
    
`;

export const Container = styled.div`
    max-width:1200px;
`;

export const Content = styled.div`
    display:flex;
    align-items:center;
    justify-content:space-between;
    @media (min-width: 768px) and (max-width:1023px){
        flex-direction: column;
    }
    @media (max-width:767px){
        flex-direction: column;
    }
`;

export const ImageClinica = styled(Image)`
    @media (max-width:767px){
        width: 100%;
        height: 100%;
    }
`;

export const ImageContainer = styled.div`
    margin-right: 40px;
    @media (max-width:767px){
        display: flex;
        justify-content: center;
        align-items: center;
    }
`;

export const TextContainer = styled.div`
    @media (min-width: 768px) and (max-width:1023px){
        padding: 50px;
    }
    @media (max-width:767px){
        padding: 30px;
    }
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
    @media (max-width:767px){
        font-size:40px;
    }
`;

export const Paragraph = styled.p`
    font-size: 18px;
    font-weight: 300;
`;

export const SubTitle = styled.h2`
    font-size: 36px;
    color: ${props => props.theme.primary};
    font-weight: 900;
    @media (max-width:767px){
        font-size:32px;
    }
`;