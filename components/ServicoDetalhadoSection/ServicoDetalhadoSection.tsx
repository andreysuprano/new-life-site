import { CardServicoDetalhado } from '../CardServicoDetalhado/CardServicoDetalhado';

import ImplanteIcon from '../../assets/img/ImplanteIcon.png';
import ClareamentoDental from '../../assets/img/ClareamentoDental.png';
import AlinhadoresIcon from '../../assets/img/AlinhadoresIcon.png';
import LaserIcon from '../../assets/img/LaserIcon.png';

import * as S from './styles';

export const ServicoDetalhadoSection = () => {
	return (
		<S.Container id="servicos">
			<S.Wrapper>
				<S.Title>Somos especialistas!</S.Title>
				<S.Description>
					Temos um amplo time de especialistas cada um focado na sua área para entregar sempre o melhor,
					buscando a satistafação de nossos clientes!
				</S.Description>
				<S.Divider>
					<CardServicoDetalhado
						icon={ImplanteIcon}
						title="Implantes & Próteses"
						href="encurtador.com.br/bjknP"
						text=""
					/>
					<CardServicoDetalhado
						icon={ClareamentoDental}
						title="Facetas & Lentes"
						href="encurtador.com.br/bjknP"
						text=""
					/>
				</S.Divider>
				<S.Divider>
					<CardServicoDetalhado
						icon={AlinhadoresIcon}
						title="Alinhadores Invisíveis"
						href="encurtador.com.br/bjknP"
						text=""
					/>
					<CardServicoDetalhado
						icon={LaserIcon}
						title="Harmonização Facial"
						href=""
						text="encurtador.com.br/bjknP"
					/>
				</S.Divider>
			</S.Wrapper>
		</S.Container>
	);
};
