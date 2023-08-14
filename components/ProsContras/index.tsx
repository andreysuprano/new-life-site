import { Flex, Heading, Text } from '@chakra-ui/react';
import Check from '../../assets/img/IconeCheck.png';
import Reject from '../../assets/img/IconeReject.png';
import Image from 'next/image';
import WhatsIcon from '../../assets/img/whatsapp.svg';

export default function ProsContras() {
	return (
		<Flex width="100%" justifyContent="center" flexDir="column" alignItems="center" mb="80px">
			<Flex
				width="100%"
				justifyContent="center"
				flexDir="column"
				alignItems="center"
				bgColor="#EFF0F1"
				pt="80px"
				pb="80px"
			>
				<Flex maxW="700px" flexDir="column" gap="10px">
					<Text fontSize="36px" textAlign="center" fontWeight="extrabold" lineHeight="40px" color="black">
						Após o implante dentário você:
					</Text>

					<Flex alignItems="center">
						<Image src={Check} alt="" />
						<Heading
							fontSize="24px"
							textAlign="center"
							fontWeight="regular"
							color="black"
							mt="10px"
							ml="25px"
						>
							Voltará a sorrir com confiança.
						</Heading>
					</Flex>

					<Flex alignItems="center">
						<Image src={Check} alt="" />
						<Heading
							fontSize="24px"
							textAlign="center"
							fontWeight="regular"
							color="black"
							mt="10px"
							ml="25px"
						>
							Renovará sua autoestima.
						</Heading>
					</Flex>

					<Flex alignItems="center">
						<Image src={Check} alt="" />
						<Heading
							fontSize="24px"
							textAlign="center"
							fontWeight="regular"
							color="black"
							mt="10px"
							ml="25px"
						>
							Melhorará sua mastigação e fala.
						</Heading>
					</Flex>

					<Flex alignItems="center">
						<Image src={Reject} alt="" />
						<Heading
							fontSize="24px"
							textAlign="center"
							fontWeight="regular"
							color="black"
							mt="10px"
							ml="25px"
						>
							Não deixará de sorrir para quem você ama.
						</Heading>
					</Flex>

					<Flex alignItems="center">
						<Image src={Reject} alt="" />
						<Heading
							fontSize="24px"
							textAlign="center"
							fontWeight="regular"
							color="black"
							mt="10px"
							ml="25px"
						>
							Dará adeus a insegurança.
						</Heading>
					</Flex>

					<Flex alignItems="center">
						<Image src={Reject} alt="" />
						<Heading
							fontSize="24px"
							textAlign="center"
							fontWeight="regular"
							color="black"
							mt="10px"
							ml="25px"
						>
							Não terá mais dificuldades na mastigação.
						</Heading>
					</Flex>
				</Flex>
			</Flex>
			<Flex
				paddingLeft="20px"
				paddingRight="20px"
				height="60px"
				backgroundColor="#60D669"
				borderRadius="10px"
				alignItems="center"
				justifyContent="center"
				cursor="pointer"
				_hover={{
					bgColor: '#60D339'
				}}
				boxShadow="lg"
				mt="-30px"
			>
				<Image src={WhatsIcon} alt="" width="40" height="40" />
				<Text fontSize="26px" fontWeight="extrabold" color="#FFF" marginTop="15px">
					Agendar minha avaliação!
				</Text>
			</Flex>
		</Flex>
	);
}
