'client';
import { Button, Flex, Link, Stack, Text } from '@chakra-ui/react';
import WhatsIcon from '../assets/svg/wp.svg';
import Image from 'next/image';
import { NavBar } from '../components/NavBar/NavBar';
import { theme } from '../assets/theme/theme';
import { SubTitle, Title } from '../components/AboutSection/styles';
import FooterChr from '../components/FooterChr';
import { Footer } from '../components/Footer/Footer';

function Home() {
	return (
		<Flex width="100vw" bgColor={theme.backgroundGrey} flexDir="column">
			<Flex
				width="100vw"
				alignItems="center"
				justifyContent="center"
				flexDirection="column"
				padding="30px"
				mb={35}
			>
				<SubTitle>Selecione a unidade mais próxima</SubTitle>
				<a
					href="https://api.whatsapp.com/send?phone=554192624006&text=Olá!%20Gostaria%20de%20agendar%20uma%20avaliação%20na%20clínica%20do%20Portão%20🦷"
					style={{ textDecoration: 'none' }}
				>
					<Flex
						width="300px"
						height="150px"
						border="2px"
						borderColor="gray.300"
						borderRadius="10px"
						boxShadow="lg"
						mt={5}
						p={3}
						flexDir="column"
					>
						<Text fontWeight={800} fontSize={18}>
							Portão
						</Text>
						<Text fontWeight={400} fontSize={12} mt={-3}>
							Av. Presidente Wenceslau Braz, 4015 - Portão, Curitiba - PR, 81010-001
						</Text>
						<Stack direction="row" spacing={4}>
							<Button
								leftIcon={<Image src={WhatsIcon} width={15} height={15} alt="wpicon" />}
								colorScheme="teal"
								variant="solid"
								w="100%"
								bgColor="#26a90c"
							>
								WhatsApp
							</Button>
						</Stack>
					</Flex>
				</a>
				<a
					style={{ textDecoration: 'none' }}
					href="https://api.whatsapp.com/send?phone=554184382556&text=Olá!%20Gostaria%20de%20agendar%20uma%20avaliação%20na%20clínica%20do%20Capão%20Raso%20🦷"
				>
					<Flex
						width="300px"
						height="150px"
						border="2px"
						borderColor="gray.300"
						borderRadius="10px"
						boxShadow="lg"
						mt={5}
						p={3}
						flexDir="column"
					>
						<Text fontWeight={800} fontSize={18}>
							Capão Raso
						</Text>
						<Text fontWeight={400} fontSize={12} mt={-3}>
							Av. Brasília, 6008 - Capão Raso, Curitiba - PR, 81020-010
						</Text>
						<Stack direction="row" spacing={4}>
							<Button
								leftIcon={<Image src={WhatsIcon} width={15} height={15} alt="wpicon" />}
								colorScheme="teal"
								variant="solid"
								w="100%"
								bgColor="#26a90c"
							>
								WhatsApp
							</Button>
						</Stack>
					</Flex>
				</a>
				<a
					style={{ textDecoration: 'none' }}
					href="https://api.whatsapp.com/send?phone=554184379634&text=Olá!%20Gostaria%20de%20agendar%20uma%20avaliação%20na%20clínica%20do%20Bigorrilho/Champagnat%20🦷"
				>
					<Flex
						width="300px"
						height="150px"
						border="2px"
						borderColor="gray.300"
						borderRadius="10px"
						boxShadow="lg"
						mt={5}
						p={3}
						flexDir="column"
					>
						<Text fontWeight={800} fontSize={18}>
							Bigorrilho
						</Text>
						<Text fontWeight={400} fontSize={12} mt={-3}>
							R. Francisco Rocha, 1850 - Bigorrilho, Curitiba - PR, 80730-390
						</Text>
						<Stack direction="row" spacing={4}>
							<Button
								leftIcon={<Image src={WhatsIcon} width={15} height={15} alt="wpicon" />}
								colorScheme="teal"
								variant="solid"
								w="100%"
								bgColor="#26a90c"
							>
								WhatsApp
							</Button>
						</Stack>
					</Flex>
				</a>
			</Flex>
		</Flex>
	);
}
export default Home;
