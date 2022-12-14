import styled from "styled-components";

export const Container = styled.div`
    width:100%;
    height: 400px;
    background-color: ${props => props.theme.primary};
    display:flex;
    justify-content:center;
    padding: 40px;
    @media (min-width: 768px) and (max-width:1023px){
        height: auto;
        align-items: center;
    }
    @media (max-width:767px){
        height: auto;
        align-items: center;
    }

`;
export const Content = styled.div`
    max-width:1500px;
    display: flex;
    justify-content: space-between;
    @media (min-width: 768px) and (max-width:1023px){
        flex-direction: column;
    }
    @media (max-width:767px){
        flex-direction: column;
    }
`;

export const Title = styled.h1`
    color:#fff;
    font-weight: 900;
`;

export const BrandArea = styled.div`
    background-color: #fff;
    margin-top: -50px;
    width: 400px;
    height: 400px;
    padding: 30px;
    border-radius:15px;
    margin-right: 25px;
    @media (min-width: 768px) and (max-width:1023px){
        flex-direction: column;
        width: 100%;
        height: auto;
        margin-top:0px;
        display: flex;
        align-items: center;
    }
     @media (max-width:767px){
        flex-direction: column;
        width: 100%;
        height: auto;
        margin-top:0px;
        display: flex;
        align-items: center;
     }
`;

export const Paragraph = styled.p`
    color: ${props => props.theme.primary};
    padding-left: 15px;
    padding-right: 15px;
    margin-top: 20px;
`;

export const Endereco = styled.p`
    color: #fff;
    font-weight: 200;
    font-size: 18px;
`;

export const WhatsButton = styled.a`
    text-decoration: none;
    background-color: #34af23;
    color: #fff;
    padding: 10px;
    margin-left: 15px;
    font-weight: 700;
    cursor: pointer;
    font-size: 18px;
    border-radius: 10px;
    &:hover{
        color: #fff;
    }
`;

export const LiksUteis = styled.div`
    width: 400px;
    height: 400px;
    padding: 30px;
    display: flex;
    flex-direction: column;
    @media (min-width: 768px) and (max-width:1023px){
        height: 200px;
    }
    @media (max-width:767px){
        height: auto;   
    }
`;

export const Localizacao = styled.div`
    width: 400px;
    height: 400px;
    padding: 30px;
    display: flex;
    flex-direction: column;
    margin-left: -50px;
    @media (min-width: 768px) and (max-width:1023px){
        height: 200px;
        margin-left: 0px;
    }
    @media (max-width:767px){
        height: auto;  
        margin-left: 10px;
    }
`;

export const Links = styled.a`
    text-decoration: none;
    color:#fff;
    font-size: 20px;
    margin-top: 10px;
    font-weight: 700;
    &:hover{
        color: ${props => props.theme.secondary};;
    }
`;

export const EmailLink = styled.a`
    text-decoration:none;
    color: #fff;
    font-weight: 300;
    font-size:18px;
    margin-top: 10px;
    &:hover {
        color: #fff;
    }
`;

export const LinksWrapper = styled.div`
    display: flex;
    @media (min-width: 768px) and (max-width:1023px){
        align-items: center;
        justify-content: center;
    }
    @media (max-width:767px){
        align-items: center;
        justify-content: center;
        flex-direction: column;    
    }
`;