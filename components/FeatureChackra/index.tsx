import {
	Container,
	SimpleGrid,
	Image,
	Flex,
	Heading,
	Text,
	Stack,
	StackDivider,
	Icon,
	useColorModeValue
} from '@chakra-ui/react';
import { IoAnalyticsSharp, IoLogoBitcoin, IoSearchSharp } from 'react-icons/io5';
import { ReactElement } from 'react';

interface FeatureProps {
	text: string;
	iconBg: string;
	icon?: ReactElement;
}

const Feature = ({ text, icon, iconBg }: FeatureProps) => {
	return (
		<Stack direction={'row'} align={'center'}>
			<Flex w={8} h={8} align={'center'} justify={'center'} rounded={'full'} bg={iconBg}>
				{icon}
			</Flex>
			<Text fontWeight={600}>{text}</Text>
		</Stack>
	);
};

export default function FeatureChackra() {
	return (
		<Container maxW={'5xl'} py={12}>
			<SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
				<Stack spacing={4}>
					<Text
						textTransform={'uppercase'}
						color={'blue.50'}
						fontWeight={600}
						fontSize={'sm'}
						bg={'#153172'}
						p={2}
						alignSelf={'flex-start'}
						rounded={'md'}
					>
						Quem somos?
					</Text>
					<Heading>Atendimento completo e especializado!</Heading>
					<Text color={'gray.500'} fontSize={'lg'}>
						Já são mais de 10 anos no mercado odontológico de Curitiba, consolidados como uma das clínicas
						que mais instalam implantes Neodent no estado do Paraná. Contamos com um time especializado em
						todas a áreas da odontologia atendendo com a máxima qualidade desde crianças a idosos.
					</Text>
				</Stack>
				<Flex>
					<Image
						rounded={'md'}
						alt={'feature image'}
						src={
							'https://firebasestorage.googleapis.com/v0/b/projetcs-storage.appspot.com/o/newlife%2F22.jpg?alt=media&token=c8d274d0-81a5-4282-8913-19e59df528d2'
						}
						objectFit={'cover'}
					/>
				</Flex>
			</SimpleGrid>
			<SimpleGrid columns={{ base: 1, md: 2 }} spacing={10} marginTop="100px">
				<Flex>
					<Image
						rounded={'md'}
						alt={'feature image'}
						src={
							'https://firebasestorage.googleapis.com/v0/b/projetcs-storage.appspot.com/o/newlife%2F13.jpg?alt=media&token=862a916d-3799-44dc-84af-ed1bee29315b'
						}
						objectFit={'cover'}
					/>
				</Flex>
				<Stack spacing={4}>
					<Text
						textTransform={'uppercase'}
						color={'green.50'}
						fontWeight={600}
						fontSize={'sm'}
						bg={useColorModeValue('green.300', 'green.900')}
						p={2}
						alignSelf={'flex-start'}
						rounded={'md'}
					>
						Qualidade na entrega!
					</Text>
					<Heading>Por que nos escolher?</Heading>
					<Text color={'gray.500'} fontSize={'lg'}>
						Simplesmente porque damos o melhor resultado possível em todos os tratamentos realizados. Temos
						equipamentos de ponta como raio x panorâmico digital, scanners e câmeras intra-orais,
						laboratório protético próprio e parcerias com empresas de renome internacional como Neodent,
						Invisalign, Clear Correct e Allergan, facilitando a vida do nosso paciente para realizar exames
						e determinados procedimentos, fazendo tudo num só lugar!
					</Text>
				</Stack>
			</SimpleGrid>
		</Container>
	);
}
