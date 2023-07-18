import Image from 'next/image';

import * as S from './styles';
import { CardServico } from '../CardServico/CardServico';

import ImplanteIcon from '../../assets/img/ImplanteIcon.png';
import ClareamentoDental from '../../assets/img/ClareamentoDental.png';
import AlinhadoresIcon from '../../assets/img/AlinhadoresIcon.png';
import LaserIcon from '../../assets/img/LaserIcon.png';
import { SimpleGrid, Box, Flex } from '@chakra-ui/react';

export const SpanServicos = () => {
	// return (
	// 	<S.Center>
	// 		<S.Wraper>
	// 			<S.CardBox>
	// 				<CardServico icon={ImplanteIcon} title="Implantes & Próteses" />
	// 				<CardServico icon={ClareamentoDental} title="Facetas & Lentes" />
	// 				<CardServico icon={AlinhadoresIcon} title="Alinhadores Invisíveis" />
	// 				<CardServico icon={LaserIcon} title="Harmonização Facial" />
	// 			</S.CardBox>
	// 		</S.Wraper>
	// 	</S.Center>
	// );

	return (
		<Flex p={4} alignContent={'center'} justifyContent={'center'} gap={10}>
			<SimpleGrid columns={{ base: 1, md: 4 }} marginTop={'-30px'}>
				<CardServico icon={ImplanteIcon} title="Implantes & Próteses" href="implantes-proteses" />
				<CardServico icon={ClareamentoDental} title="Facetas & Lentes" href="facetas-lentes" />
				<CardServico icon={AlinhadoresIcon} title="Alinhadores Invisíveis" href="alinhadores-invisiveis" />
				<CardServico icon={LaserIcon} title="Harmonização Facial" href="harmonizacao-facial" />
			</SimpleGrid>
		</Flex>
	);
};
