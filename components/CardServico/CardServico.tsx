import Image, { StaticImageData } from 'next/image';
import * as S from './styles';

export type CardServicoProps = {
	icon: StaticImageData;
	title: string;
};

export const CardServico = ({ icon, title }: CardServicoProps) => {
	return (
		<S.Container>
			<S.Content>
				<Image src={icon} alt={title} />
				<S.Title>{title}</S.Title>
			</S.Content>
		</S.Container>
	);
};
