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
						href="https://encurtador.com.br/bjknP"
						text="O implante dentário é utilizado com frequência nos consultórios, possibilitando a reposição do dente perdido. Mesmo necessitando de uma cirurgia prévia, eles apresentam a possibilidade de devolver uma ótima mastigação ao paciente."
					/>
					<CardServicoDetalhado
						icon={ClareamentoDental}
						title="Facetas & Lentes"
						href="https://encurtador.com.br/bjknP"
						text="Elas corrigem problemas e imperfeições dos dentes como o fechamento de espaços entre dentes, pequenas correções na forma e cor de dentes anteriores ou até mesmo transformações estéticas mais marcantes do sorriso."
					/>
				</S.Divider>
				<S.Divider>
					<CardServicoDetalhado
						icon={AlinhadoresIcon}
						title="Alinhadores Invisíveis"
						href="https://encurtador.com.br/bjknP"
						text="Os alinhadores invisíveis, são extremamente estéticos e quase imperceptíveis. Na hora de comer, é só retirar o seu alinhador, guardar e pronto além de ser muito fácil para higienizar."
					/>
					<CardServicoDetalhado
						icon={LaserIcon}
						title="Harmonização Facial"
						href="https://encurtador.com.br/bjknP"
						text="Temos uma variedade de procedimentos estéticos que promovem aos pacientes aumento da auto estima e confiança no dia dia, na New Life temos profissionais especializados em cada área de atuação ofertando os melhores resultados."
					/>
				</S.Divider>
			</S.Wrapper>
		</S.Container>
	);
};
