import styled, { keyframes } from "styled-components";
import { TelefoneButtonProps } from "./TelefoneButton";

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

export const Text = styled.a<TelefoneButtonProps>`
    text-decoration:none;
    color: ${props => props.variant == 'white' ? '#fff' : props.theme.primary};
    font-weight: 300;
    font-size:18px;
    &:hover {
        ${props => props.variant == 'white' ? '#fff' : props.theme.secondary};
    }
`;