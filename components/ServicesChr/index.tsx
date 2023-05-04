import { Box, Button, Container, Flex, Heading, Stack, Text, useColorModeValue } from '@chakra-ui/react';
import { ReactElement } from 'react';

import { useRouter } from 'next/router';

interface CardProps {
	heading: string;
	description: string;
	icon: ReactElement;
	href: string;
}

const Card = ({ heading, description, icon, href }: CardProps) => {
	const router = useRouter();
	return (
		<Box
			maxW={{ base: 'full', md: '275px' }}
			w={'full'}
			borderWidth="1px"
			borderRadius="lg"
			overflow="hidden"
			p={5}
		>
			<Stack align={'start'} spacing={2}>
				<Flex
					w={16}
					h={16}
					align={'center'}
					justify={'center'}
					color={'white'}
					rounded={'full'}
					bg={useColorModeValue('gray.100', 'gray.700')}
				>
					{icon}
				</Flex>
				<Box mt={2}>
					<Heading size="md">{heading}</Heading>
					<Text mt={1} fontSize={'sm'}>
						{description}
					</Text>
				</Box>
				<Button
					variant={'link'}
					colorScheme={'blue'}
					size={'sm'}
					onClick={() => {
						router.push(href);
					}}
				>
					Ver mais
				</Button>
			</Stack>
		</Box>
	);
};

export default function ServicesChr() {
	return (
		<Box p={4} marginBottom="100px">
			<Stack spacing={4} as={Container} maxW={'3xl'} textAlign={'center'}>
				<Heading fontSize={{ base: '2xl', sm: '4xl' }} fontWeight={'bold'}>
					Somos especialistas!
				</Heading>
				<Text color={'gray.600'} fontSize={{ base: 'sm', sm: 'lg' }}>
					Temos um amplo time de especialistas, cada um focado na sua área para entregar sempre o melhor,
					buscando a satistafação de nossos clientes!
				</Text>
			</Stack>

			<Container maxW={'fit-content'} mt={12}>
				<Flex flexWrap="wrap" gridGap={8} justify="center">
					<Card
						heading={'Implantes & Próteses'}
						icon={
							<img src="https://firebasestorage.googleapis.com/v0/b/projetcs-storage.appspot.com/o/newlife%2FImplanteIcon.png?alt=media&token=8e12194c-1449-4a58-bace-6d669f1b531e" />
						}
						description={
							'O implante dentário é utilizado com frequência nos consultórios, possibilitando a reposição do dente perdido. Mesmo necessitando de uma cirurgia prévia, eles apresentam a possibilidade de devolver uma ótima mastigação ao paciente.'
						}
						href={'implantes-proteses'}
					/>
					<Card
						heading={'Facetas & Lentes'}
						icon={
							<img src="https://firebasestorage.googleapis.com/v0/b/projetcs-storage.appspot.com/o/newlife%2FClareamentoDental.png?alt=media&token=525f520a-abb8-411d-ae90-880347d2d689" />
						}
						description={
							'Elas corrigem problemas e imperfeições dos dentes como o fechamento de espaços entre dentes, pequenas correções na forma e cor de dentes anteriores ou até mesmo transformações estéticas mais marcantes do sorriso.'
						}
						href={'facetas-lentes'}
					/>
					<Card
						heading={'Alinhadores Invisíveis'}
						icon={
							<img src="https://firebasestorage.googleapis.com/v0/b/projetcs-storage.appspot.com/o/newlife%2FAlinhadoresIcon.png?alt=media&token=f1b3a9a9-8212-424e-87b5-1e29c9161b44" />
						}
						description={
							'Os alinhadores invisíveis, são extremamente estéticos e quase imperceptíveis. Na hora de comer, é só retirar o seu alinhador, guardar e pronto além de ser muito fácil para higienizar.'
						}
						href={'alinhadores-invisiveis'}
					/>
					<Card
						heading={'Harmonização Facial'}
						icon={
							<img src="https://firebasestorage.googleapis.com/v0/b/projetcs-storage.appspot.com/o/newlife%2FLaserIcon.png?alt=media&token=ae8254a2-7b35-4b5b-84bf-d557110fc89f" />
						}
						description={
							'Temos uma variedade de procedimentos estéticos que promovem aos pacientes aumento da auto estima e confiança no dia dia, na New Life temos profissionais especializados em cada área de atuação ofertando os melhores resultados.'
						}
						href={'harmonizacao-facial'}
					/>
				</Flex>
			</Container>
		</Box>
	);
}
