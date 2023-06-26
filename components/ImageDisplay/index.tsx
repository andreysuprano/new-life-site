import React from 'react';
import { Flex, Text, Heading } from '@chakra-ui/react';

export default function Carousel() {
	const cards = [
		'https://firebasestorage.googleapis.com/v0/b/projetcs-storage.appspot.com/o/newlife%2FWhatsApp%20Image%202023-04-13%20at%2013.14.00%20(1).jpeg?alt=media&token=b98ad0ea-6785-4b0f-adc3-add0138153a7',
		'https://firebasestorage.googleapis.com/v0/b/projetcs-storage.appspot.com/o/newlife%2FWhatsApp%20Image%202023-04-13%20at%2013.14.00%20(6).jpeg?alt=media&token=2748b9fa-3be4-4165-a4a2-9768403df255',
		'https://firebasestorage.googleapis.com/v0/b/projetcs-storage.appspot.com/o/newlife%2FWhatsApp%20Image%202023-04-13%20at%2013.14.00%20(3).jpeg?alt=media&token=ae5ad9ea-ff5c-4484-a607-ba5ed12f62a9',
		'https://firebasestorage.googleapis.com/v0/b/projetcs-storage.appspot.com/o/newlife%2FWhatsApp%20Image%202023-04-13%20at%2013.14.00%20(4).jpeg?alt=media&token=15ba9723-b450-407a-a81b-7ce6725947cb',
		'https://firebasestorage.googleapis.com/v0/b/projetcs-storage.appspot.com/o/newlife%2FWhatsApp%20Image%202023-04-13%20at%2013.14.00%20(5).jpeg?alt=media&token=e9fc8b66-0f74-45c2-9b84-49bfb2bec3ee',
		'https://firebasestorage.googleapis.com/v0/b/projetcs-storage.appspot.com/o/newlife%2FWhatsApp%20Image%202023-04-13%20at%2013.14.00.jpeg?alt=media&token=1bd1d88b-e5ee-4c7d-9b4c-a667bdd17e02'
	];

	return (
		<Flex
			width="100%"
			backgroundColor="#ECF1F6"
			paddingY="100px"
			marginTop="-150px"
			flexDir="column"
			alignItems="center"
			justifyContent="center"
		>
			<Heading fontWeight={600} fontSize={{ base: '5xl', sm: '5xl', md: '5xl' }} textAlign="center" mb="100px">
				Veja o resultado de nossos clientes <br />
				<Text as={'span'} color={'#153172'} fontSize={{ base: '3xl', sm: '3xl', md: '3xl' }}>
					Satisfação garantida!
				</Text>
			</Heading>
			<div
				className="container"
				style={{
					display: 'flex',
					overflowX: 'auto',
					width: '100vw'
				}}
			>
				{cards.map((url, index) => (
					<img
						key={index}
						src={url}
						alt="Amostra"
						style={{
							marginRight: '15px',
							maxHeight: '300px'
						}}
					/>
				))}
			</div>
		</Flex>
	);
}
