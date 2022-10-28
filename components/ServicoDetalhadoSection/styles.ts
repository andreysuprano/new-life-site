import styled from "styled-components";

export const Divider = styled.div`
    display: flex;
    margin-top: 40px;
    @media (min-width: 768px) and (max-width:1023px){
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    @media (max-width:767px){
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
`;

export const Container = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 80px;
    padding-bottom:150px;
    @media (max-width:767px){
        width: 100%;
        padding-bottom:50px;
    }
`;

export const Wrapper = styled.div`
    max-width: 1200px;
    display: flex;
    flex-direction: column;
    padding: 50px;
    justify-content: center;
    align-items: center;
    @media (max-width:767px){
        width: 100%;
        padding: 20px;
    }
`;

export const Title = styled.h1`
    color: ${props => props.theme.primary};
    text-align: center;
    font-weight:900;
    font-size:48px;
    margin-bottom: 30px;
    @media (max-width:767px){
        font-size:42px;
    }
`;

export const Description = styled.p`
    font-size: 22px;
    text-align: center;
    margin-bottom: 30px;
    @media (max-width:767px){
        font-size:18px;
    }
`;