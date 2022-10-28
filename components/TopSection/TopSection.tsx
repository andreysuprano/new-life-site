import * as S from './styles';
import Image from 'next/image';
import Tony from '../../assets/img/TonyEsper.png';

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
					<S.Button>Quero conhecer mais!</S.Button>
				</S.TextContainer>
				<S.ImageContainer>
					<S.ImageTop src={Tony} alt="Dr. Tony Esper Jr" />
				</S.ImageContainer>
			</S.Content>
		</S.Container>
	);
};
