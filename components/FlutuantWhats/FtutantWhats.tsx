import styled from 'styled-components';
import { RiWhatsappLine } from 'react-icons/ri';
import { sendToLink } from '../../util/sendToLink';

const Container = styled.div`
	position: fixed;
	top: 85vh;
	left: 90vw;
	padding: 40px;
	:hover {
		cursor: pointer;
		opacity: 1;
		transition: all 200ms linear;
		transform: translateY(-5px) scale(1.1);
	}

	@media (min-width: 768px) and (max-width: 1023px) {
		top: 85vh;
		left: 85vw;
	}

	@media (max-width: 767px) {
		top: 80vh;
		left: 65vw;
	}
`;
const Wrapper = styled.div`
	background-color: #34af23;
	padding: 10px;
	border-radius: 100%;
`;

export const FlutuantWhats = () => {
	return (
		<Container id="btn-whats" onClick={() => sendToLink('/whatsapp')}>
			<Wrapper>
				<RiWhatsappLine size={50} color="#fff" />
			</Wrapper>
		</Container>
	);
};
