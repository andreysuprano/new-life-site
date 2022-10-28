import Image, { StaticImageData } from 'next/image';
import * as S from './styles';

export type CardServicoProps = {
	icon: StaticImageData;
	title: string;
	text: string;
	href: string;
};

export const CardServicoDetalhado = ({ icon, title, text, href }: CardServicoProps) => {
	return (
		<S.Container>
			<S.Content>
				<S.CardHeader>
					<Image src={icon} alt={title} />
					<S.Title>{title}</S.Title>
				</S.CardHeader>
				<S.Paragraph>{text}</S.Paragraph>
				<S.Link href={'encurtador.com.br/bjknP'}>Ver mais</S.Link>
			</S.Content>
		</S.Container>
	);
};
