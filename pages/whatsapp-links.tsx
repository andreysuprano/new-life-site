'client';
import { Flex, Text } from '@chakra-ui/react';
import WhatsIcon from '../assets/img/whatsappVerde.svg';
import Image from 'next/image';
import { NavBar } from '../components/NavBar/NavBar';

function Home() {
	return (
		<div style={{ height: '100vh', backgroundColor: '#ECF1F6' }}>
			<NavBar />
			<Flex w="100vw" alignItems="center" justifyContent="center">
				<a href="https://api.whatsapp.com/send?phone=+554192624006&text=Ol%C3%A1%2C%20vim%20do%20site%20e%20gostaria%20de%20agendar%20uma%20avalia%C3%A7%C3%A3o%20e%20conhecer%20mais%20sobre%20a%20clinica!">
					<Flex
						paddingLeft="20px"
						paddingRight="20px"
						height="60px"
						backgroundColor="#60D669"
						borderRadius="10px"
						alignItems="center"
						justifyContent="center"
						marginTop="80px"
						cursor="pointer"
						_hover={{
							bgColor: '#60D339'
						}}
						boxShadow="lg"
					>
						<Image src={WhatsIcon} alt="" width="40" height="40" style={{ marginRight: '10px' }} />
						<Text fontSize="26px" fontWeight="extrabold" color="#FFF" marginTop="15px">
							WHATSAPP MATRIZPORTÃO
						</Text>
					</Flex>
					<a
						href="https://api.whatsapp.com/send?phone=+554184382556&text=Ol%C3%A1%2C%20vim%20do%20site%20e%20gostaria%20de%20agendar%20uma%20avalia%C3%A7%C3%A3o%20e%20conhecer%20mais%20sobre%20a%20clinica!"
						style={{ textDecoration: 'none' }}
					>
						<Flex
							paddingLeft="20px"
							paddingRight="20px"
							height="60px"
							backgroundColor="#60D669"
							borderRadius="10px"
							alignItems="center"
							justifyContent="center"
							marginTop="80px"
							cursor="pointer"
							_hover={{
								bgColor: '#60D339'
							}}
							boxShadow="lg"
						>
							<Image src={WhatsIcon} alt="" width="40" height="40" style={{ marginRight: '10px' }} />
							<Text fontSize="26px" fontWeight="extrabold" color="#FFF" marginTop="15px">
								WHATSAPP CAPÃO RASO
							</Text>
						</Flex>
					</a>
					<a href="https://api.whatsapp.com/send?phone=+554184379634&text=Ol%C3%A1%2C%20vim%20do%20site%20e%20gostaria%20de%20agendar%20uma%20avalia%C3%A7%C3%A3o%20e%20conhecer%20mais%20sobre%20a%20clinica!">
						<Flex
							paddingLeft="20px"
							paddingRight="20px"
							height="60px"
							backgroundColor="#60D669"
							borderRadius="10px"
							alignItems="center"
							justifyContent="center"
							marginTop="80px"
							cursor="pointer"
							_hover={{
								bgColor: '#60D339'
							}}
							boxShadow="lg"
						>
							<Image src={WhatsIcon} alt="" width="40" height="40" style={{ marginRight: '10px' }} />
							<Text fontSize="26px" fontWeight="extrabold" color="#FFF" marginTop="15px">
								WHATSAPP BIGORRILHO
							</Text>
						</Flex>
					</a>
				</a>
			</Flex>
		</div>
	);
}
export default Home;
