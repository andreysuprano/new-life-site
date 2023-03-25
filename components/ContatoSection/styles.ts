import styled from 'styled-components';

export const Container = styled.div`
	width: 100%;
	height: 500px;
	background: linear-gradient(180deg, rgba(0, 0, 0, 0.42) 21.35%, rgba(102, 146, 244, 0.42) 100%), url(./Clinica.png);
	display: flex;
	justify-content: center;
	padding: 40px;
	@media (max-width: 767px) {
		padding: 15px;
		height: auto;
	}
`;

export const Content = styled.div`
	max-width: 1100px;
	display: flex;
	flex-direction: column;
	align-items: center;

	@media (min-width: 768px) and (max-width: 1023px) {
		justify-content: center;
		margin-bottom: 10px;
	}
	@media (max-width: 767px) {
		max-width: 100%;
		justify-content: center;
		padding-bottom: 25px;
	}
`;

export const Span = styled.span`
	color: #fff;
	font-size: 22px;
	font-weight: 300;
	display: flex;
	align-items: center;
	justify-content: center;
	margin-bottom: 25px;

	@media (min-width: 768px) and (max-width: 1023px) {
		justify-content: center;
		align-items: center;
	}

	@media (max-width: 767px) {
		display: none;
	}
`;

export const TitleBox = styled.div`
	display: flex;
	flex-direction: column;
	margin-top: 20px;
	justify-content: center;
	@media (min-width: 768px) and (max-width: 1023px) {
		text-align: center;
	}
	@media (max-width: 767px) {
		text-align: center;
	}
`;

export const Title = styled.h1`
	color: #fff;
	font-weight: 900;
`;

export const InputForm = styled.input`
	color: #fff;
	width: 500px;
	height: 50px;
	border-radius: 15px;
	border: 3px solid #ffffff;
	background-color: rgba(0, 0, 0, 0.4);
	margin-top: 10px;
	font-size: 18px;
	padding: 20px;
	&::placeholder {
		color: #fff;
	}
	@media (max-width: 767px) {
		width: 350px;
	}
`;

export const InputBox = styled.div`
	display: flex;
	flex-direction: column;
	margin-top: 30px;
`;

export const Button = styled.button`
	padding: 15px;
	border-radius: 15px;
	border: none;
	background-color: #fff;
	color: ${(props) => props.theme.primary};
	font-weight: 900;
	box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.11);
	&:hover {
		color: #fff;
		background-color: ${(props) => props.theme.primary};
		transition: 0.5s;
	}
	margin-top: 25px;
`;

export const ButtonWhatsWrapper = styled.a`
	border: solid rgba(255, 255, 255, 0.2) 0.5px;
	padding: 25px;
	border-radius: 20px;
	cursor: pointer;
	margin-top: 50px;

	background: rgba(255, 255, 255, 0.1);
	box-shadow: 0 8px 32px 0 rgba(229, 229, 229, 0.1);
	backdrop-filter: blur(5px);
	-webkit-backdrop-filter: blur(5px);

	&:hover {
		transform: scale(1.1);
		transition: 0.5s;
	}
	text-decoration: none;
`;

export const ButtonWhats = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
`;

export const Icon = styled.div``;
export const TextButton = styled.div`
    display:flex
    align-items:center;
    justify-content: center;
`;
export const Text = styled.h1`color: #fff;`;
