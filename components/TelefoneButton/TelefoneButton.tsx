import * as S from './styles';
import { FiPhone } from 'react-icons/fi';

export interface TelefoneButtonProps {
	variant?: string;
}

export const TelefoneButton = ({ variant }: TelefoneButtonProps) => {
	return (
		<S.Container>
			<S.Text href="tel:(41) 3248-2000" variant={variant ? variant : 'primary'}>
				<FiPhone style={{ marginRight: 10 }} size={20} />(41) 3248-2000
			</S.Text>
		</S.Container>
	);
};
