import * as S from './styles';
import Image from 'next/image';
import Logo from '../../assets/img/LogoNewLifeFooter.png';
import { NavLinks } from '../NavBar/NavLinks';
import { TelefoneButton } from '../TelefoneButton/TelefoneButton';
import { FiMail } from 'react-icons/fi';

export const Footer = () => {
	return (
		<S.Container>
			<S.Content>
				<S.BrandArea>
					<Image src={Logo} alt="" style={{ marginTop: 20 }} />
					<S.Paragraph>
						“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
						labore et dolore magna aliqua. Sit amet consectetur adipiscing elit.{' '}
					</S.Paragraph>
					<S.WhatsButton>WhatsApp</S.WhatsButton>
				</S.BrandArea>
				<S.LiksUteis>
					<S.Title>Links Úteis</S.Title>
					{NavLinks.map((link) => {
						return <S.Links href={link.href}>{link.label}</S.Links>;
					})}
				</S.LiksUteis>
				<S.Localizacao>
					<S.Title>Localização</S.Title>
					<S.Endereco>Av. Presidente Wenceslau Braz, 4015 Portão, Curitiba - PR, 81010-001</S.Endereco>
					<TelefoneButton variant="white" />
					<S.EmailLink>
						<FiMail style={{ marginRight: 10 }} size={20} />contato@newlifeodontologia.com
					</S.EmailLink>
				</S.Localizacao>
			</S.Content>
		</S.Container>
	);
};
