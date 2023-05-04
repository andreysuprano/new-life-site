import styled, { keyframes } from 'styled-components';
import { TelefoneButtonProps } from './TelefoneButton';

export const Container = styled.div`
	display: flex;
	width: 200px;
	align-items: center;
	justify-content: center;
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
