import { Stack, Flex, Button, Text, VStack, useBreakpointValue } from '@chakra-ui/react';
import { sendToLink } from '../../util/sendToLink';

export default function ContatoChr() {
	return (
		<Flex
			w={'full'}
			h={'40vh'}
			backgroundImage={
				'url(https://firebasestorage.googleapis.com/v0/b/projetcs-storage.appspot.com/o/newlife%2F21.jpg?alt=media&token=b95368b0-4995-482a-a1b3-b310e412a965)'
			}
			backgroundSize={'cover'}
			backgroundPosition={'center center'}
			id="contato"
		>
			<VStack
				w={'full'}
				justify={'center'}
				px={useBreakpointValue({ base: 4, md: 8 })}
				bgGradient={'linear(to-r, blackAlpha.800, transparent)'}
			>
				<Stack maxW={'2xl'} align={'flex-start'} spacing={6}>
					<Text
						color={'white'}
						fontWeight={700}
						lineHeight={1.2}
						fontSize={useBreakpointValue({ base: '3xl', md: '4xl' })}
					>
						O que está esperando para agendar sua avaliação?
					</Text>
					<Stack direction={'row'}>
						<Button
							bg={'#153172'}
							rounded={'full'}
							color={'white'}
							_hover={{ bg: 'blue.500' }}
							onClick={() => {
								sendToLink(
									'https://api.whatsapp.com/send?phone=5541998935960&text=Ol%C3%A1%2C%20vim%20do%20site%20e%20gostaria%20de%20agendar%20uma%20avalia%C3%A7%C3%A3o%20e%20conhecer%20mais%20sobre%20a%20clinica!'
								);
							}}
						>
							Agendar agora!
						</Button>
					</Stack>
				</Stack>
			</VStack>
		</Flex>
	);
}
