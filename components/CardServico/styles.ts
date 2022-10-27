import styled from "styled-components";

export const Container = styled.div`
    width:270px;
    height:140px;
    background: linear-gradient(180deg, rgba(255, 255, 255, 0.79) 0%, #FFFFFF 100%);
    border: 1px solid #DEDEDE;
    backdrop-filter: blur(20px);
    border-radius: 10px;
    display:flex;
    flex-direction:row;
    align-items:center;
    justify-content:center;
    padding: 20px;
`;

export const Content = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
`;

export const Title = styled.span`
    font-weight:900;
    font-size:24px;
`;