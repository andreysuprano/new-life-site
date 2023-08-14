import { Container, Flex, Heading, Text } from '@chakra-ui/react';
import { sendToLink } from '../../util/sendToLink';
import { useState } from 'react';
import Implantes from '../../assets/img/ImplanteIcon.png';
import Image from 'next/image';

export default function Motivation() {
	return (
		<Flex width="100%" justifyContent="center" alignItems="center" flexDir="column" mb="130px">
			<Flex maxW="700px">
				<Flex
					backgroundImage="https://www.newlifeodontologia.com.br/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FImplanteIcon.fa9d42c5.png&w=96&q=75"
					width={75}
					height={70}
					backgroundRepeat="no-repeat"
					backgroundPosition="center"
					mb="50px"
				/>
				<Text fontSize="36px" textAlign="center" fontWeight="extrabold" lineHeight="40px" color="black">
					3 motivos para realizar o seu sonho com a New Life!
				</Text>
			</Flex>

			<Flex maxW="700px" flexDir="column" alignItems="center" justifyContent="center">
				<Flex alignItems="center" justifyContent="center" flexWrap="wrap">
					<Flex
						border="3px dashed #6692F4"
						width="65px"
						height="65px"
						justifyContent="center"
						alignItems="center"
						borderRadius="10px"
						marginRight="20px"
					>
						<Heading
							color="#1D3A7B"
							fontSize="40px"
							textAlign="center"
							fontWeight="extrabold"
							lineHeight="40px"
						>
							1
						</Heading>
					</Flex>
					<Flex flexDir="column" maxW="600px">
						<Heading fontSize="20px" mb="-10px" mt="5px" fontWeight="extrabold" lineHeight="40px">
							Tudo num só lugar
						</Heading>
						<Text>
							Dispomos de toda a estrutura para o seu tratamento, como Raio-X Panorâmico Digital, Scanners
							e Câmeras e Intra-Orais, tudo para facilitar o seu atendimento.
						</Text>
					</Flex>
				</Flex>

				<Flex alignItems="center" justifyContent="center">
					<Flex
						border="3px dashed #6692F4"
						width="65px"
						height="65px"
						justifyContent="center"
						alignItems="center"
						borderRadius="10px"
						marginRight="20px"
					>
						<Heading
							color="#1D3A7B"
							fontSize="40px"
							textAlign="center"
							fontWeight="extrabold"
							lineHeight="40px"
						>
							2
						</Heading>
					</Flex>
					<Flex flexDir="column" maxW="600px">
						<Heading fontSize="20px" mb="-10px" mt="5px" fontWeight="extrabold" lineHeight="40px">
							Profissionais Renomados
						</Heading>
						<Text>
							Os melhores profissionais estão na New Life Odontologia. Mestres e doutores prontos para lhe
							atender.
						</Text>
					</Flex>
				</Flex>

				<Flex alignItems="center" justifyContent="center" mt="-20px">
					<Flex
						border="3px dashed #6692F4"
						width="65px"
						height="65px"
						justifyContent="center"
						alignItems="center"
						borderRadius="10px"
						marginRight="20px"
					>
						<Heading
							color="#1D3A7B"
							fontSize="40px"
							textAlign="center"
							fontWeight="extrabold"
							lineHeight="40px"
						>
							3
						</Heading>
					</Flex>
					<Flex flexDir="column" maxW="600px">
						<Heading fontSize="20px" mb="-10px" mt="25px" fontWeight="extrabold" lineHeight="40px">
							Tudo num só lugar
						</Heading>
						<Text>
							Laboratório protético próprio e parceria com empresas de renome internacional, como Neodent,
							Invisalign, ClearCorrect e Allergan. Garantindo sempre um produto de excelente qualidade.
						</Text>
					</Flex>
				</Flex>
			</Flex>
		</Flex>
	);
}
