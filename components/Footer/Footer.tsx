import { Box, Container, Link, SimpleGrid, Stack, Text, Flex, Tag, useColorModeValue } from '@chakra-ui/react';
import { ReactNode } from 'react';
import LogoNewLife from '../../assets/img/LogoNewLife.png';
import Image from 'next/image';
import { NavLinks } from '../NavBar/NavLinks';
import SPDigital from '../../assets/img/SupranoDigital.png';

const ListHeader = ({ children }: { children: ReactNode }) => {
	return (
		<Text fontWeight={'800'} fontSize={'large'} mb={2}>
			{children}
		</Text>
	);
};

export const Footer = () => {
	return (
		<Box bg="#153172" color="white">
			<Container as={Stack} maxW={'6xl'} py={10}>
				<SimpleGrid columns={{ base: 1, sm: 2, md: 4 }} spacing={8}>
					<Stack align={'flex-start'}>
						<ListHeader>Encontre no site</ListHeader>
						{NavLinks.map((item, index) => (
							<Link
								href={item.href}
								_hover={{
									textDecor: 'none',
									color: 'blue.300'
								}}
							>
								{item.label}
							</Link>
						))}
					</Stack>
					<Stack align={'flex-start'}>
						<ListHeader>New Life | Portão</ListHeader>
						<Text>Av. Presidente Wenceslau Braz, 4015 - Portão, Curitiba - PR, 81010-001</Text>
						<Text>
							<strong>Atendimento:</strong> 08h às 19h (seg a sex) | 08h às 12h (sab)
						</Text>
						<Text>
							<strong>Telefone:</strong>
							<Link
								href={'/whatsapp'}
								_hover={{
									textDecor: 'none',
									color: 'blue.300'
								}}
							>
								(41) 3248-2000
							</Link>
						</Text>
					</Stack>
					<Stack align={'flex-start'}>
						<ListHeader>New Life | Capão Raso</ListHeader>
						<Text>Av. Brasília, 6008 - Capão Raso, Curitiba - PR, 81020-010</Text>
						<Text>
							<strong>Atendimento:</strong> 08h às 18h (seg a sex)
						</Text>
						<Text>
							<strong>Telefone:</strong>
							<Link
								href={'/whatsapp'}
								_hover={{
									textDecor: 'none',
									color: 'blue.300'
								}}
							>
								(41) 3248-2000
							</Link>
						</Text>
					</Stack>
					<Stack align={'flex-start'}>
						<ListHeader>New Life | Champagnat</ListHeader>
						<Text>R. Francisco Rocha, 1850 - Bigorrilho, Curitiba - PR, 80730-390</Text>
						<Text>
							<strong>Atendimento:</strong> 08h às 18h (seg a sex)
						</Text>
						<Text>
							<strong>Telefone:</strong>
							<Link
								href={'/whatsapp'}
								_hover={{
									textDecor: 'none',
									color: 'blue.300'
								}}
							>
								(41) 3248-2000
							</Link>
						</Text>
					</Stack>
				</SimpleGrid>
			</Container>
			<Box py={10}>
				<Flex
					align={'center'}
					_before={{
						content: '""',
						borderBottom: '1px solid',
						borderColor: useColorModeValue('gray.300', 'gray.700'),
						flexGrow: 1,
						mr: 8,
						borderRadius: '10px'
					}}
					_after={{
						content: '""',
						borderBottom: '1px solid',
						borderColor: useColorModeValue('gray.300', 'gray.700'),
						flexGrow: 1,
						ml: 8,
						borderRadius: '10px'
					}}
				>
					<Flex bgColor="gray.200" borderRadius="10px" padding="10px">
						<Image src={LogoNewLife} alt="LogoNewLife" />
					</Flex>
				</Flex>
				<Flex alignItems="center" justifyContent="center" flexDir="column">
					<Text pt={6} fontSize={'sm'} textAlign={'center'}>
						© 2023 New Life Odontologia. All rights reserved
					</Text>
					<Flex alignItems="center">
						<Image src={SPDigital} alt="" />
						<Link
							fontSize="sm"
							_hover={{
								textDecor: 'none',
								color: 'blue.300'
							}}
						>
							Develop by Suprano Digital.
						</Link>
					</Flex>
				</Flex>
			</Box>
		</Box>
	);
};
