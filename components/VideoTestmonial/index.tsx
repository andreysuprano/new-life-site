import { Container, Flex, Heading, Text } from '@chakra-ui/react';
import { sendToLink } from '../../util/sendToLink';
import { useState } from 'react';
import Implantes from '../../assets/img/ImplanteIcon.png';
import Image from 'next/image';

export default function VideoTestmonial() {
	return (
		<Flex width="100%" justifyContent="center" alignItems="center" flexDir="column" mb="130px">
			<Flex maxW="700px" flexDir="column">
				<Text fontSize="36px" textAlign="center" fontWeight="extrabold" lineHeight="40px" color="black">
					Quem fez recomenda!
				</Text>
				<Text fontSize="16px" fontWeight="regular" color="#1D3A7B">
					Veja alguns casos de pacientes que confiaram seu sorriso à New Life.
				</Text>
			</Flex>
			<Flex gap="25px" mt="50px" flexWrap="wrap" justifyContent="center" alignItems="center">
				<iframe
					width="500"
					height="260"
					src="https://www.youtube.com/embed/CoZImmmp9jk"
					title="Realize o sonho do Implante Dentário na New Life Odontologia!"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
					style={{ borderRadius: '20px', boxShadow: '0px 24px 48px 0px rgba(0, 0, 0, 0.32)' }}
				/>
				<iframe
					width="500"
					height="260"
					src="https://www.youtube.com/embed/OKoFlnbcUqw"
					title="Realize o sonho do Implante Dentário na New Life Odontologia!"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
					style={{ borderRadius: '20px', boxShadow: '0px 24px 48px 0px rgba(0, 0, 0, 0.32)' }}
				/>
			</Flex>
		</Flex>
	);
}
