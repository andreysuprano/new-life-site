import * as S from './styles';
import Image from 'next/image';
import Icon from '../../assets/svg/denteVazado.svg';

export const ContatoSection = () => {
	return (
		<S.Container>
			<S.Content>
				<S.TitleBox>
					<S.Span>
						<Image src={Icon} alt="" style={{ marginRight: 10 }} />
						Deixe seu contato, nosso time entrará em contato com você!
					</S.Span>
					<S.Title>O que está esperando para agendar sua avaliação?</S.Title>
				</S.TitleBox>
				<S.InputBox>
					<S.InputForm placeholder="Seu nome completo" />
					<S.InputForm placeholder="Seu email" />
					<S.InputForm placeholder="Seu Telefone (Com WhatsApp)" />
					<S.Button>Enviar</S.Button>
				</S.InputBox>
			</S.Content>
		</S.Container>
	);
};
