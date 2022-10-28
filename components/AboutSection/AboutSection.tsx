import * as S from './styles';
import Image from 'next/image';
import ImageQuemSomos from '../../assets/img/ImageQuemSomos.png';

export const AboutSection = () => {
	return (
		<S.Center id="quem-somos">
			<S.Container>
				<S.Content>
					<S.ImageContainer>
						<S.ImageClinica src={ImageQuemSomos} alt="A clinica por dentro" />
					</S.ImageContainer>
					<S.TextContainer>
						<S.Span>Quem somos?</S.Span>
						<S.Title>Atendimento completo e especializado!</S.Title>
						<S.Paragraph>
							Já são mais de 10 anos no mercado odontológico de Curitiba, consolidados como uma das
							clínicas que mais instalam implantes Neodent no estado do Paraná. Contamos com um time
							especializado em todas a áreas da odontologia atendendo com a máxima qualidade desde
							crianças a idosos.
						</S.Paragraph>
						<S.SubTitle>Por que nos escolher?</S.SubTitle>
						<S.Paragraph>
							Simplesmente porque damos o melhor resultado possível em todos os tratamentos realizados.
							Temos equipamentos de ponta como raio x panorâmico digital, scanners e câmeras intra-orais,
							laboratório protético próprio e parcerias com empresas de renome internacional como Neodent,
							Invisalign, Clear Correct e Allengar, podendo facilitar a vida do nosso paciente que não
							precisa sair de nossa clinica para realizar exames, conseguindo fazer tudo no mesmo lugar!
						</S.Paragraph>
					</S.TextContainer>
				</S.Content>
			</S.Container>
		</S.Center>
	);
};
