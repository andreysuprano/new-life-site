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
					{NavLinks.map((item, index) => {
						return (
							<S.NavLink href={item.href} key={index}>
								{item.label}
							</S.NavLink>
						);
					})}
				</S.MenuContainer>
				<S.BtnMenuContainer>
					<TelefoneButton />
					<S.NavButton id="btn-whats" onClick={() => sendToLink('/whatsapp-links')}>
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
