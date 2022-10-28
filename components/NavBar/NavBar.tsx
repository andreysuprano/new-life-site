import Image from 'next/image';

import * as S from './styles';
import LogoNewLife from '../../assets/img/LogoNewLife.png';
import { TelefoneButton } from '../TelefoneButton/TelefoneButton';

import { NavLinks } from './NavLinks';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MobileMenu } from '../MobileMenu/MobileMenu';
import { useState } from 'react';
import { sendToLink } from '../../util/sendToLink';

export const NavBar = () => {
	const [ isActive, setIsActive ] = useState(false);

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
					<S.NavButton
						onClick={() =>
							sendToLink(
								'https://api.whatsapp.com/send?phone=5541998935960&text=Ol%C3%A1%2C%20vim%20do%20site%20e%20gostaria%20de%20agendar%20uma%20avalia%C3%A7%C3%A3o%20e%20conhecer%20mais%20sobre%20a%20clinica!'
							)}
					>
						Agendamento
					</S.NavButton>
				</S.BtnMenuContainer>
				<S.MenuHarmburger>
					<GiHamburgerMenu size={30} onClick={() => setIsActive(true)} />
				</S.MenuHarmburger>
			</S.Container>
			<MobileMenu
				active={isActive}
				onClose={() => {
					setIsActive(false);
				}}
			/>
		</S.Nav>
	);
};
