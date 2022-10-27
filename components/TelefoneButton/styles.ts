import styled, { keyframes } from "styled-components";

const zoom = keyframes`
    from{
        padding:3px;
    }
    to{
        padding:25px;
    }
`;

export const Container = styled.div`
    margin-right:20px;
`;

export const Text = styled.a`
    text-decoration:none;
    color: ${props => props.theme.primary};
    font-weight: 500;
    &:hover {
        color:${props => props.theme.primary};
    }
`;