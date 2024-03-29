import * as S from './styles';
import Image from 'next/image';
import Icon from '../../assets/svg/denteVazado.svg';
import { sendToLink } from '../../util/sendToLink';

export const VideoSection = () => {
	return (
		<S.Container id="video">
			<S.Content>
				<S.VideoContainer>
					<S.Iframe
						src="https://www.youtube.com/embed/_7DUg5zlBUk"
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
					<S.Button id="btn-whats" onClick={() => sendToLink('/whatsapp')}>
						Quero conhecer!
					</S.Button>
				</S.TextContainer>
			</S.Content>
		</S.Container>
	);
};
