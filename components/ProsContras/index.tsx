import { Flex, Heading, Text } from '@chakra-ui/react';
import Check from '../../assets/img/IconeCheck.png';
import Reject from '../../assets/img/IconeReject.png';
import Image from 'next/image';
import WhatsIcon from '../../assets/img/whatsapp.svg';
import { sendToLink } from '../../util/sendToLink';

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
				padding={{
					base: '30px',
					xl: '30px',
					lg: '30px',
					sm: '30px',
					md: '30px'
				}}
			>
				<Flex maxW="700px" flexDir="column" gap="10px">
					<Text fontSize="36px" textAlign="center" fontWeight="extrabold" lineHeight="40px" color="black">
						Após o implante dentário você:
					</Text>

					<Flex alignItems="center">
						<Image src={Check} alt="" />
						<Heading
							textAlign="center"
							fontWeight="regular"
							color="black"
							mt="10px"
							ml="25px"
							fontSize={{
								base: '18px',
								xl: '24px',
								lg: '24px',
								sm: '18px',
								md: '18px'
							}}
						>
							Voltará a sorrir com confiança.
						</Heading>
					</Flex>

					<Flex alignItems="center">
						<Image src={Check} alt="" />
						<Heading
							fontSize={{
								base: '18px',
								xl: '24px',
								lg: '24px',
								sm: '18px',
								md: '18px'
							}}
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
							fontSize={{
								base: '18px',
								xl: '24px',
								lg: '24px',
								sm: '18px',
								md: '18px'
							}}
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
							fontSize={{
								base: '18px',
								xl: '24px',
								lg: '24px',
								sm: '18px',
								md: '18px'
							}}
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
							fontSize={{
								base: '18px',
								xl: '24px',
								lg: '24px',
								sm: '18px',
								md: '18px'
							}}
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
							fontSize={{
								base: '18px',
								xl: '24px',
								lg: '24px',
								sm: '18px',
								md: '18px'
							}}
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
			<a href="https://api.whatsapp.com/send?phone=5541998935960&text=Ol%C3%A1%2C%20vim%20do%20site%20e%20gostaria%20de%20agendar%20uma%20avalia%C3%A7%C3%A3o%20e%20conhecer%20mais%20sobre%20a%20clinica!">
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
					<Image src={WhatsIcon} alt="" width="40" height="40" />
					<Text fontSize="26px" fontWeight="extrabold" color="#FFF" marginTop="15px">
						Agendar minha avaliação!
					</Text>
				</Flex>
			</a>
		</Flex>
	);
}
