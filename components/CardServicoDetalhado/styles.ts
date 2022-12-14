import styled from "styled-components";

export const Container = styled.div`
    width:590px;
    height:auto;
    background: #FFFFFF;
    border: 1px solid #898989;
    box-shadow: 0px 4px 35px rgba(0, 0, 0, 0.06);
    border-radius: 20px;
    padding: 40px;
    margin-right: 20px;
    margin-left: 20px;
    @media (min-width: 768px) and (max-width:1023px){
        margin-bottom: 50px;
    }
    @media (max-width:767px){
        width:350px;
        height:auto;
        margin-bottom: 50px;
        padding: 30px;
    }
`;

export const CardHeader = styled.div`

`;

export const Content = styled.div`

`;

export const Paragraph = styled.p`
    margin-top: 35px;
`;

export const Link = styled.a`
    color: black;
    font-weight:900;
    text-decoration: none;
`;

export const Title = styled.span`
    font-weight:900;
    font-size:32px;
    margin-left: 10px;
    
    @media (max-width:767px){
        font-size:30px;
        margin-left: 10px;
    }
`;