import Image from 'next/image';

import * as S from './styles';
import { CardServico } from '../CardServico/CardServico';

import ImplanteIcon from '../../assets/img/ImplanteIcon.png';
import ClareamentoDental from '../../assets/img/ClareamentoDental.png';
import AlinhadoresIcon from '../../assets/img/AlinhadoresIcon.png';
import LaserIcon from '../../assets/img/LaserIcon.png';

export const SpanServicos = () => {
	return (
		<S.Center>
			<S.Wraper>
				<S.CardBox>
					<CardServico icon={ImplanteIcon} title="Implantes & Próteses" />
					<CardServico icon={ClareamentoDental} title="Facetas & Lentes" />
					<CardServico icon={AlinhadoresIcon} title="Alinhadores Invisíveis" />
					<CardServico icon={LaserIcon} title="Harmonização Facial" />
				</S.CardBox>
			</S.Wraper>
		</S.Center>
	);
};
