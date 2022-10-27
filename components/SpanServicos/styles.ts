import styled from "styled-components";

export const Center = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top:-50px;
    margin-bottom:50px;
    @media (min-width: 768px) and (max-width:1023px){
        margin-top:-45px;
    }
`;

export const Wraper = styled.div`
    width:1300px;
    @media (min-width: 768px) and (max-width:1023px){
        width:100vw;
    }
`;

export const Container = styled.div`
    display: flex;
`;

export const CardBox = styled.div`
    max-width:70vw;
    display:flex;
    justify-content: space-around;
    @media (min-width: 768px) and (max-width:1023px){
        max-width:100vw;
        padding-left:20px;
        padding-right:20px;
    }
`;