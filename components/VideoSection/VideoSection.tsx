import * as S from './styles';
import Image from 'next/image';
import Icon from '../../assets/svg/denteVazado.svg';

export const VideoSection = () => {
	return (
		<S.Container>
			<S.Content>
				<S.VideoContainer>
					<iframe
						width="600"
						height="355"
						src="https://www.youtube.com/embed/WiULw9lzm0k"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
					/>
				</S.VideoContainer>
				<S.TextContainer>
					<S.Span>
						<Image src={Icon} alt="" style={{ marginRight: 10 }} />
						Sem correria!
					</S.Span>
					<S.Title>Entregamos tudo!</S.Title>
					<S.Paragraph>
						Já pensou em fazer todo o seu tratamento odontológico em um único lugar? E ainda ter seu
						tratamento realizado por especialistas? Fazemos todos os procedimentos odontológicos com o
						máximo de qualidade e agilidade, realizado pelos melhores profissionais com os melhores
						materiais e produtos odontológicos!
					</S.Paragraph>
					<S.Button>Quero conhecer!</S.Button>
				</S.TextContainer>
			</S.Content>
		</S.Container>
	);
};
