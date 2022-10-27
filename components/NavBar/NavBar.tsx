import Image from 'next/image';

import * as S from './styles';
import LogoNewLife from '../../assets/img/LogoNewLife.png';
import { TelefoneButton } from '../TelefoneButton/TelefoneButton';

import { NavLinks } from './NavLinks';

export const NavBar = () => {
	return (
		<S.Nav>
			<S.Container>
				<S.BrandContainer>
					<Image src={LogoNewLife} alt="LogoNewLife" />
				</S.BrandContainer>
				<S.MenuContainer>
					{NavLinks.map((item) => {
						return <S.NavLink href={item.href}>{item.label}</S.NavLink>;
					})}
				</S.MenuContainer>
				<S.BtnMenuContainer>
					<TelefoneButton />
					<S.NavButton>Agendamento</S.NavButton>
				</S.BtnMenuContainer>
			</S.Container>
		</S.Nav>
	);
};
