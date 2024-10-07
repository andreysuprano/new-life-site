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
							id="btn-whats"
							onClick={() => {
								sendToLink('/whatsapp-links');
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
