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
					<S.Title>Faça tudo num só lugar!</S.Title>
					<S.Paragraph>
						Realizamos todos os procedimentos, para lhe dar conforto e agilidade ao seu tratamento!
					</S.Paragraph>
					<S.Button id="btn-whats" onClick={() => sendToLink('/whatsapp-links')}>
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
