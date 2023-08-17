import * as S from './styles';
import Image from 'next/image';
import Icon from '../../assets/svg/denteVazado.svg';
import { RiWhatsappLine } from 'react-icons/ri';

export const ContatoSection = () => {
	return (
		<S.Container id="contato">
			<S.Content>
				<S.TitleBox>
					<S.Span>
						<Image src={Icon} alt="" style={{ marginRight: 10 }} />
						O que está esperando para agendar sua avaliação?
					</S.Span>
					<S.Title>Entre em contato agora!</S.Title>
				</S.TitleBox>
				{/* <S.InputBox>
					<S.InputForm placeholder="Seu nome completo" />
					<S.InputForm placeholder="Seu email" />
					<S.InputForm placeholder="Seu Telefone (Com WhatsApp)" />
					<S.Button>Enviar</S.Button>
				</S.InputBox> */}
				<S.ButtonWhatsWrapper href="/whatsapp">
					<S.ButtonWhats>
						<S.Icon>
							<RiWhatsappLine size={80} color="#fff" />
						</S.Icon>
						<S.TextButton>
							<S.Text>WhatsApp</S.Text>
						</S.TextButton>
					</S.ButtonWhats>
				</S.ButtonWhatsWrapper>
			</S.Content>
		</S.Container>
	);
};
