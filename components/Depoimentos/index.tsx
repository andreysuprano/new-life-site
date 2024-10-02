import React from 'react';
import { Flex, Text, Heading } from '@chakra-ui/react';

export default function Carousel() {
	const cards = [
		'https://firebasestorage.googleapis.com/v0/b/projetcs-storage.appspot.com/o/newlife%2FWhatsApp%20Image%202024-09-10%20at%2016.28.04%20(1).jpeg?alt=media&token=c2b4470b-47b6-42bc-b52f-430ba4df4528',
		'https://firebasestorage.googleapis.com/v0/b/projetcs-storage.appspot.com/o/newlife%2FWhatsApp%20Image%202024-09-10%20at%2016.28.04%20(2).jpeg?alt=media&token=6fcd1cd4-6c56-433d-8f5c-004fa82195d2',
		'https://firebasestorage.googleapis.com/v0/b/projetcs-storage.appspot.com/o/newlife%2FWhatsApp%20Image%202024-09-10%20at%2016.28.04.jpeg?alt=media&token=6f3b0a59-c891-4cbe-af4a-342d13247d20',
		'https://firebasestorage.googleapis.com/v0/b/projetcs-storage.appspot.com/o/newlife%2FWhatsApp%20Image%202024-09-10%20at%2016.28.05.jpeg?alt=media&token=7078cda7-9630-43f3-9fcd-d3e95893a90e'
	];

	return (
		<Flex
			width="100%"
			backgroundColor="#ECF1F6"
			paddingY="100px"
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
							maxHeight: '300px',
							borderRadius: '10px'
						}}
					/>
				))}
			</div>
		</Flex>
	);
}
