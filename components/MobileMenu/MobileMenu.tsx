import * as S from './styles';
import { IoCloseSharp } from 'react-icons/io5';
import { NavLinks } from '../NavBar/NavLinks';

export interface MobileMenuProps {
	active: boolean;
	onClose(): void;
}

export const MobileMenu = ({ active, onClose }: MobileMenuProps) => {
	const CloseModal = () => {
		onClose();
	};
	return (
		<S.Container active={active}>
			<S.Wrapper>
				<IoCloseSharp size={44} color="#FFF" style={{ cursor: 'pointer' }} onClick={() => CloseModal()} />
				<S.LinksBox>
					{NavLinks.map((link, index) => {
						return (
							<S.Links href={link.href} onClick={() => CloseModal()} key={index}>
								{link.label}
							</S.Links>
						);
					})}
				</S.LinksBox>
			</S.Wrapper>
		</S.Container>
	);
};
