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
				<S.Paragraph>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
					et dolore magna aliqua. Sit amet consectetur adipiscing elit. Ac tortor vitae purus faucibus.
					Euismod in pellentesque massa placerat duis. Consequat id porta nibh venenatis cras.
				</S.Paragraph>
				<S.Link href={href}>Ver mais</S.Link>
			</S.Content>
		</S.Container>
	);
};
