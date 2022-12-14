import * as S from './styles';
import Image from 'next/image';
import SPDigital from '../../assets/img/SupranoDigital.png';

export const CopySection = () => {
	return (
		<S.Container>
			<S.Wrapper>
				<S.Content>
					<S.CopyLinks href="">Copyright 2022 All Right Reserved.</S.CopyLinks>
					<S.CopyLinks href="">
						Desenvolvido por Suprano Digital <Image src={SPDigital} alt="" />{' '}
					</S.CopyLinks>
				</S.Content>
			</S.Wrapper>
		</S.Container>
	);
};
