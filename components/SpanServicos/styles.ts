import styled from 'styled-components';

export const Center = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	margin-top: -50px;
	margin-bottom: 50px;

	@media (min-width: 768px) and (max-width: 1023px) {
		margin-top: -45px;
	}
	@media (min-width: 768px) and (max-width: 1333px) {
		margin-top: -10px;
	}
	@media (max-width: 767px) {
		margin-top: -60px;
		flex-direction: column;
		display: none;
	}
`;

export const Wraper = styled.div`
	display: flex;
	justify-content: center;
	@media (min-width: 768px) and (max-width: 1023px) {
		width: 100vw;
	}
	@media (max-width: 767px) {
		width: 100vw;
		flex-direction: column;
	}
`;

export const Container = styled.div`
	display: flex;
	justify-content: space-between;
	@media (max-width: 767px) {
		flex-direction: column;
	}
`;

export const CardBox = styled.div`
	max-width: 70vw;
	display: flex;
	justify-content: space-around;
	@media (min-width: 768px) and (max-width: 1023px) {
		max-width: 100vw;
		padding-left: 20px;
		padding-right: 20px;
	}
	@media (max-width: 767px) {
		max-width: 100vw;
		flex-direction: column;
		padding-left: 40px;
		padding-right: 40px;
	}
`;
