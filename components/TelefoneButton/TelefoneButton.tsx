import * as S from './styles';
import { FiPhone } from 'react-icons/fi';

export const TelefoneButton = () => {
	return (
		<S.Container>
			<S.Text href="">
				<FiPhone style={{ marginRight: 10 }} size={20} />41 99333-3333
			</S.Text>
		</S.Container>
	);
};
