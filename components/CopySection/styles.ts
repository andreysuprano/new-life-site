import styled from "styled-components";

export const Container = styled.div`
    width:100%;
    height: 120px;
    background-color: ${props => props.theme.primary};
    display:flex;
    justify-content:center;
    padding: 40px;
`;
export const Content = styled.div`
    max-width:1300px;
`;

export const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
`;

export const CopyLinks = styled.a`
    text-decoration: none;
    color:#fff;
    font-weight: 200;
`;
