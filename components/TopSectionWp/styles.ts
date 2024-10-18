import styled from 'styled-components';
import Image from 'next/image';

export const Container = styled.section`
	width: 100%;
	background-color: ${(props) => props.theme.backgroundGrey};
	display: flex;
	align-items: center;
	justify-content: center;

	@media (min-width: 768px) and (max-width: 1023px) {
		max-width: 100%;
	}
	@media (max-width: 767px) {
		height: auto;
	}
`;

export const ImageTop = styled(Image)`
    @media (min-width: 768px) and (max-width:1023px){
        width: 400px;
        height: auto;
    }
    @media (max-width:767px){
        width: 350px;
        height: auto;
        flex-direction: column;
    }
`;

export const Content = styled.div`
	max-width: 1100px;
	display: flex;
	align-items: center;
	justify-content: space-around;

	@media (min-width: 768px) and (max-width: 1023px) {
		max-width: 100%;
	}
	@media (max-width: 767px) {
		flex-direction: column;
	}
`;

export const TextContainer = styled.div`
	width: 30vw;
	@media (min-width: 768px) and (max-width: 1023px) {
		width: 40vw;
	}
	@media (max-width: 767px) {
		width: 100vw;
		padding: 30px;
	}
`;

export const ImageContainer = styled.div``;

export const Label = styled.span`
	color: ${(props) => props.theme.secondary};
	font-size: 22px;

	@media (min-width: 768px) and (max-width: 1023px) {
		font-size: 18px;
	}

	@media (max-width: 767px) {
		font-size: 16px;
	}
`;

export const Title = styled.h1`
	color: ${(props) => props.theme.primary};
	font-size: 64px;
	font-weight: 900;
	@media (min-width: 768px) and (max-width: 1023px) {
		font-size: 52px;
	}
	@media (max-width: 767px) {
		font-size: 48px;
	}
`;

export const Paragraph = styled.p`
	color: ${(props) => props.theme.primary};
	font-size: 20px;
	font-weight: 400;
`;

export const Button = styled.button`
	padding: 15px;
	border-radius: 15px;
	border: none;
	background-color: ${(props) => props.theme.primary};
	color: #fff;
	font-weight: 600;
	box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.11);
	margin-top: 20px;
`;
