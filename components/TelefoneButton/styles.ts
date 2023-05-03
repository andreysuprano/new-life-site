import styled, { keyframes } from 'styled-components';
import { TelefoneButtonProps } from './TelefoneButton';

export const Container = styled.div`
	margin-right: 20px;
	display: flex;
`;

export const Text =
	styled.a <
	TelefoneButtonProps >
	`
    text-decoration:none;
    color: ${(props) => (props.variant == 'white' ? '#fff' : props.theme.primary)};
    font-weight: 300;
    font-size:1rem;
    &:hover {
        ${(props) => (props.variant == 'white' ? '#fff' : props.theme.secondary)};
    }
`;
