import Image, { StaticImageData } from 'next/image';
import * as S from './styles';
import Link from 'next/link';

export type CardServicoProps = {
	icon: StaticImageData;
	title: string;
	href: string;
};

export const CardServico = ({ icon, title, href }: CardServicoProps) => {
	return (
		<S.Container>
			<Link href={href}>
				<S.Content>
					<Image src={icon} alt={title} />
					<S.Title>{title}</S.Title>
				</S.Content>
			</Link>
		</S.Container>
	);
};
