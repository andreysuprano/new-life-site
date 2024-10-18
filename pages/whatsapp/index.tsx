'use client';

import { Flex, Text } from '@chakra-ui/react';
import WhatsIcon from '../../assets/img/whatsappVerde.svg';
import Image from 'next/image';
import { NavBar } from '../../components/NavBar/NavBar';
import { useEffect, useState } from 'react';
import { sendToLink } from '../../util/sendToLink';
import { useParams } from 'next/navigation';
import { TopSectionWp } from '../../components/TopSectionWp/TopSection';
import * as S from '../../components/TopSectionWp/styles';
import Tony from '../../assets/img/TonyEsper.png';

function Whats() {
	const [ count, setCount ] = useState(3);
	const params = useParams<{ phone: string }>();
	const phone = params?.phone || '+554192624006';

	useEffect(() => {
		setTimeout(() => {
			//const link = `https://api.whatsapp.com/send?phone=${phone}&text=Ol%C3%A1%2C%20vim%20do%20site%20e%20gostaria%20de%20agendar%20uma%20avalia%C3%A7%C3%A3o%20e%20conhecer%20mais%20sobre%20a%20clinica!`;
			//sendToLink(link);
		}, 1000);
	}, []);
	setInterval(() => {
		setCount(count - 1);
	}, 1000);
	return (
		<div style={{ height: '100vh' }}>
			<NavBar />
			<Flex bgColor="#ECF1F6" w="100vw" h="100%" alignItems="center"  flexDir="column">
				<S.ImageContainer>
					<S.ImageTop src={Tony} alt="Dr. Tony Esper Jr" />
				</S.ImageContainer>
				<Image src={WhatsIcon} alt="" width="100" height="100" color="black"  />
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
export default Whats;
