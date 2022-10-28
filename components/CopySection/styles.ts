import styled from "styled-components";

export const Container = styled.div`
    width:100%;
    height: 120px;
    background-color: ${props => props.theme.primary};
    display:flex;
    justify-content:center;
    padding: 40px;
    @media (max-width:767px){
        height: auto;
    }    
`;
export const Content = styled.div`
    max-width:1300px;
    @media (max-width:767px){
        max-width:100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
`;

export const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    @media (max-width:767px){
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
`;

export const CopyLinks = styled.a`
    text-decoration: none;
    color:#fff;
    font-weight: 200;
    margin-right: 150px;
    margin-left: 150px;
    @media (max-width:767px){
        display: flex;
        justify-content: center;
        align-items: center;
        margin-right: 0px;
        margin-left: 0px;
    }
`;
