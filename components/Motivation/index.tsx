import { Flex, Heading, Text } from '@chakra-ui/react';

export default function Motivation() {
	return (
		<Flex width="100%" justifyContent="center" alignItems="center" flexDir="column" mb="130px" padding="30px">
			<Flex maxW="700px">
				<Flex
					backgroundImage="https://www.newlifeodontologia.com.br/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FImplanteIcon.fa9d42c5.png&w=96&q=75"
					width={75}
					height={70}
					backgroundRepeat="no-repeat"
					backgroundPosition="center"
					mb="50px"
					display={{
						base: 'none',
						xl: 'flex',
						lg: 'flex',
						sm: 'none',
						md: 'none'
					}}
				/>
				<Text
					fontSize={{
						base: '26px',
						xl: '36px',
						lg: '36px',
						sm: '26px',
						md: '26px'
					}}
					textAlign="center"
					fontWeight="extrabold"
					lineHeight="40px"
					color="black"
				>
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
						<Heading
							fontSize="20px"
							mb="-10px"
							mt="5px"
							fontWeight="extrabold"
							lineHeight="40px"
							textAlign={{
								base: 'center',
								xl: 'start',
								lg: 'start',
								sm: 'center',
								md: 'center'
							}}
						>
							Tudo num só lugar
						</Heading>
						<Text
							textAlign={{
								base: 'center',
								xl: 'start',
								lg: 'start',
								sm: 'center',
								md: 'center'
							}}
						>
							Dispomos de toda a estrutura para o seu tratamento, como Raio-X Panorâmico Digital, Scanners
							e Câmeras e Intra-Orais, tudo para facilitar o seu atendimento.
						</Text>
					</Flex>
				</Flex>

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
							2
						</Heading>
					</Flex>
					<Flex flexDir="column" maxW="600px">
						<Heading
							fontSize="20px"
							mb="-10px"
							mt="5px"
							fontWeight="extrabold"
							lineHeight="40px"
							textAlign={{
								base: 'center',
								xl: 'start',
								lg: 'start',
								sm: 'center',
								md: 'center'
							}}
						>
							Profissionais Renomados
						</Heading>
						<Text
							textAlign={{
								base: 'center',
								xl: 'start',
								lg: 'start',
								sm: 'center',
								md: 'center'
							}}
						>
							Os melhores profissionais estão na New Life Odontologia. Mestres e doutores prontos para lhe
							atender.
						</Text>
					</Flex>
				</Flex>

				<Flex
					alignItems="center"
					justifyContent="center"
					mt={{
						base: '0px',
						xl: '-20px',
						lg: '-20px',
						sm: '0px',
						md: '0px'
					}}
					flexWrap="wrap"
				>
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
						<Heading
							fontSize="20px"
							mb="-10px"
							mt={{
								base: '0px',
								xl: '25px',
								lg: '25px',
								sm: '0px',
								md: '0px'
							}}
							fontWeight="extrabold"
							lineHeight="40px"
							textAlign={{
								base: 'center',
								xl: 'start',
								lg: 'start',
								sm: 'center',
								md: 'center'
							}}
						>
							Tudo num só lugar
						</Heading>
						<Text
							textAlign={{
								base: 'center',
								xl: 'start',
								lg: 'start',
								sm: 'center',
								md: 'center'
							}}
						>
							Laboratório protético próprio e parceria com empresas de renome internacional, como Neodent,
							ClearCorrect e Allergan. Garantindo sempre um produto de excelente qualidade.
						</Text>
					</Flex>
				</Flex>
			</Flex>
		</Flex>
	);
}
