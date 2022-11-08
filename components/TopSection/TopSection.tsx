import * as S from './styles';
import Image from 'next/image';
import Tony from '../../assets/img/TonyEsper.png';
import { sendToLink } from '../../util/sendToLink';

export const TopSection = () => {
	return (
		<S.Container>
			<S.Content>
				<S.TextContainer>
					<S.Label>Qualidade e Profissionalismo</S.Label>
					<S.Title>Faça tudo em um único lugar.</S.Title>
					<S.Paragraph>
						Cobrimos todos os procedimentos, para lhe dar conforto e velocidade no seu tratamento!
					</S.Paragraph>
					<S.Button
						id="btn-whats"
						onClick={() =>
							sendToLink(
								'https://api.whatsapp.com/send?phone=5541998935960&text=Ol%C3%A1%2C%20vim%20do%20site%20e%20gostaria%20de%20agendar%20uma%20avalia%C3%A7%C3%A3o%20e%20conhecer%20mais%20sobre%20a%20clinica!'
							)}
					>
						Quero conhecer mais!
					</S.Button>
				</S.TextContainer>
				<S.ImageContainer>
					<S.ImageTop src={Tony} alt="Dr. Tony Esper Jr" />
				</S.ImageContainer>
			</S.Content>
		</S.Container>
	);
};
