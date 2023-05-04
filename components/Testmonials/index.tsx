import { ReactNode } from 'react';
import { Box, Flex, Heading, Text, Stack, Container, Avatar, useColorModeValue } from '@chakra-ui/react';

const Testimonial = ({ children }: { children: ReactNode }) => {
	return <Box>{children}</Box>;
};

const TestimonialContent = ({ children }: { children: ReactNode }) => {
	return (
		<Stack
			bg={useColorModeValue('white', 'gray.800')}
			boxShadow={'lg'}
			p={8}
			rounded={'xl'}
			align={'center'}
			pos={'relative'}
			_after={{
				content: `""`,
				w: 0,
				h: 0,
				borderLeft: 'solid transparent',
				borderLeftWidth: 16,
				borderRight: 'solid transparent',
				borderRightWidth: 16,
				borderTop: 'solid',
				borderTopWidth: 16,
				borderTopColor: useColorModeValue('white', 'gray.800'),
				pos: 'absolute',
				bottom: '-16px',
				left: '50%',
				transform: 'translateX(-50%)'
			}}
		>
			{children}
		</Stack>
	);
};

const TestimonialHeading = ({ children }: { children: ReactNode }) => {
	return (
		<Heading as={'h3'} fontSize={'xl'}>
			{children}
		</Heading>
	);
};

const TestimonialText = ({ children }: { children: ReactNode }) => {
	return (
		<Text textAlign={'center'} color={useColorModeValue('gray.600', 'gray.400')} fontSize={'sm'}>
			{children}
		</Text>
	);
};

const TestimonialAvatar = ({ src, name }: { src: string; name: string }) => {
	return (
		<Flex align={'center'} mt={8} direction={'column'}>
			<Avatar src={src} mb={2} />
			<Stack spacing={-1} align={'center'}>
				<Text fontWeight={600}>{name}</Text>
			</Stack>
		</Flex>
	);
};

export default function TestimonialSection() {
	return (
		<Box bg={useColorModeValue('gray.100', 'gray.700')}>
			<Container maxW={'7xl'} py={16} as={Stack} spacing={12}>
				<Stack spacing={0} align={'center'}>
					<Heading>Foco no cliente!</Heading>
					<Text>"Referência em atendimento", são palavras de nossos clientes!</Text>
				</Stack>
				<Stack direction={{ base: 'column', md: 'row' }} spacing={{ base: 10, md: 4, lg: 10 }}>
					<Testimonial>
						<TestimonialContent>
							<TestimonialHeading>Referência</TestimonialHeading>
							<TestimonialText>O atendimento de vocês é nota 10!</TestimonialText>
						</TestimonialContent>
						<TestimonialAvatar
							src={
								'https://firebasestorage.googleapis.com/v0/b/projetcs-storage.appspot.com/o/newlife%2F1574831821314.jpeg?alt=media&token=ab3aa216-f6ea-41a0-b5b9-2c0b3093ff4d'
							}
							name={'Tiago Lemos'}
						/>
					</Testimonial>
					<Testimonial>
						<TestimonialContent>
							<TestimonialHeading>Paranbéns a Clínica!</TestimonialHeading>
							<TestimonialText>
								"Gostaria de deixar aqui o meu agradeciento e eologio a Clínica. Desde a recepção que as
								meninas são uns amores, ao atendimento que tive com a Dra Marina. Muito atenciosa,
								cuidadosa e profissional.""
							</TestimonialText>
						</TestimonialContent>
						<TestimonialAvatar
							src={
								'https://firebasestorage.googleapis.com/v0/b/projetcs-storage.appspot.com/o/newlife%2F1617410649051.jpeg?alt=media&token=70dbda5d-6f08-4881-8cb5-3d88f4f6ac2c'
							}
							name={'Silmara Santos'}
						/>
					</Testimonial>
					<Testimonial>
						<TestimonialContent>
							<TestimonialHeading>Obrigada por tudo!</TestimonialHeading>
							<TestimonialText>
								"Já passei por uma clínica odontológica, mas igual a esta nunca, é a melhor com o melhor
								atendimento. Obrigada por tudo!"
							</TestimonialText>
						</TestimonialContent>
						<TestimonialAvatar
							src={
								'https://images.unsplash.com/photo-1586297135537-94bc9ba060aa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80'
							}
							name={'Andreia da Silva'}
						/>
					</Testimonial>
				</Stack>
			</Container>
		</Box>
	);
}
