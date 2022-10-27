import * as S from './styles';
import { FiPhone } from 'react-icons/fi';

export interface TelefoneButtonProps {
	variant?: string;
}

export const TelefoneButton = ({ variant }: TelefoneButtonProps) => {
	return (
		<S.Container>
			<S.Text href="" variant={variant ? variant : 'primary'}>
				<FiPhone style={{ marginRight: 10 }} size={20} />(41) 99333-3333
			</S.Text>
		</S.Container>
	);
};
