import styled from "styled-components";

export const Container = styled.div`
    width:99.9vw;
    background-image:url('./Pattern.png'); 
    display:flex;
    align-items:center;
    justify-content:center;
    padding: 40px;
`;

export const Content = styled.div`
    max-width:1100px;
    display:flex;
    align-items:center;
    justify-content:space-around;
`;

export const VideoContainer = styled.div`
    margin-right: 25px;
    box-shadow: -5px 0px 25px rgba(0, 0, 0, 0.6);
    border-radius: 20px;
`;

export const TextContainer = styled.div`
    margin-left: 25px;
`;

export const Title = styled.h1`
    color: #fff;
    font-size: 38px;
    font-weight: 900;
    margin-bottom: 15px;
`;

export const Paragraph = styled.p`
    color: #fff;
    font-size: 18px;
    font-weight: 300;
`;

export const Span = styled.span`
    color: #fff;
    font-size: 22px;
    font-weight: 300;
    display: flex;
    align-items: center;
`;

export const Button = styled.button`
    padding:15px;
    border-radius:15px;
    border:none;
    background-color:#FFF;
    color:${props => props.theme.primary};
    font-weight:900;
    box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.11);
    &:hover {
        color:#fff;
        background-color:${props => props.theme.primary};
        transition:0.5s;
    }
    margin-top: 25px;
`;