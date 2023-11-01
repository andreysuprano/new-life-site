import { Flex, Text, useEditable } from '@chakra-ui/react';
import WhatsIcon from '../assets/img/whatsappVerde.svg';
import Image from 'next/image';
import { NavBar } from '../components/NavBar/NavBar';
import { useEffect, useState } from 'react';
import { sendToLink } from '../util/sendToLink';

function Home() {
	const [ count, setCount ] = useState(3);
	useEffect(() => {
		setTimeout(() => {
			sendToLink(
				'https://api.whatsapp.com/send?phone=554198935960&text=Ol%C3%A1%2C%20vim%20do%20site%20e%20gostaria%20de%20agendar%20uma%20avalia%C3%A7%C3%A3o%20e%20conhecer%20mais%20sobre%20a%20clinica!'
			);
		}, 1000);
	}, []);
	setInterval(() => {
		setCount(count - 1);
	}, 1000);
	return (
		<div style={{ height: '100vh' }}>
			<NavBar />
			<Flex bgColor="#ECF1F6" w="100vw" h="100%" alignItems="center" justifyContent="center" flexDir="column">
				<Image src={WhatsIcon} alt="" width="100" height="100" color="black" style={{ marginTop: '-200px' }} />
				<Text textAlign="center" fontWeight="extrabold" fontSize="20px" marginTop="20px">
					Estamos redirecionando você <br />para o WhatsApp!
				</Text>
				<Text textAlign="center" fontWeight="extrabold" fontSize="35px">
					Aguarde ... {count}
				</Text>
			</Flex>
		</div>
	);
}
export default Home;
