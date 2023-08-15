import { Container, Flex, Text } from '@chakra-ui/react';
import { sendToLink } from '../../util/sendToLink';
import { useState } from 'react';
import WhatsIcon from '../../assets/img/whatsapp.svg';
import Image from 'next/image';

export default function TopoImplantes() {
	return (
		<Flex width="100%" justifyContent="center" alignItems="center" flexDir="column">
			<Flex flexDir="column" alignItems="center" bgColor="#ECF1F6" width="100%" height="400px">
				<Flex flexDir="column" maxW="600px" textAlign="center">
					<Text fontSize="56px" fontWeight="extrabold" color="#1D3A7B">
						Implantes Dentários
					</Text>
					<Text
						fontSize="16px"
						fontWeight="regular"
						color="#6692F4"
						padding={{
							base: '20px',
							xl: '0px',
							lg: '0px',
							sm: '20px',
							md: '20px'
						}}
					>
						RECUPERE O PRAZER DE SORRIR COM SEGURANÇA E CONFORTO COM A CLÍNICA QUE JÁ REALIZOU MAIS DE
						20.000 SONHOS
					</Text>
				</Flex>
			</Flex>
			<Flex
				justifyContent="center"
				alignItems="center"
				mt={{
					base: '-100px',
					xl: '-230px',
					lg: '-230px',
					sm: '-100px',
					md: '-100px'
				}}
				mb="100px"
				flexDir="column"
			>
				<iframe
					src="https://www.youtube.com/embed/6QSFCr-JxLg"
					title="Realize o sonho do Implante Dentário na New Life Odontologia!"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
					className="iframe-lp"
				/>
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
					onClick={() => {
						sendToLink(
							'https://api.whatsapp.com/send?phone=5541998935960&text=Ol%C3%A1%2C%20vim%20do%20site%20e%20gostaria%20de%20agendar%20uma%20avalia%C3%A7%C3%A3o%20e%20conhecer%20mais%20sobre%20a%20clinica!'
						);
					}}
				>
					<Image src={WhatsIcon} alt="" width="40" height="40" />
					<Text fontSize="26px" fontWeight="extrabold" color="#FFF" marginTop="15px">
						Agendar minha avaliação!
					</Text>
				</Flex>
			</Flex>
		</Flex>
	);
}
