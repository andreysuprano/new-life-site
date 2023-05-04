import { Gallery, NamedImage } from 'next-gallery';

export default function ImageGalery() {
	const images = [
		{
			src:
				'https://firebasestorage.googleapis.com/v0/b/projetcs-storage.appspot.com/o/newlife%2FWhatsApp%20Image%202023-04-13%20at%2013.14.00.jpeg?alt=media&token=1bd1d88b-e5ee-4c7d-9b4c-a667bdd17e02',
			aspect_ratio: 16 / 9,
			name: '1'
		},
		{
			src:
				'https://firebasestorage.googleapis.com/v0/b/projetcs-storage.appspot.com/o/newlife%2FWhatsApp%20Image%202023-04-13%20at%2013.14.00%20(1).jpeg?alt=media&token=b98ad0ea-6785-4b0f-adc3-add0138153a7',
			aspect_ratio: 16 / 9,
			name: '2'
		},
		{
			src:
				'https://firebasestorage.googleapis.com/v0/b/projetcs-storage.appspot.com/o/newlife%2FWhatsApp%20Image%202023-04-13%20at%2013.14.00%20(2).jpeg?alt=media&token=b1a1cbb6-413d-4b59-b3ee-08c7dcd6034b',
			aspect_ratio: 16 / 9,
			name: '3'
		},
		{
			src:
				'https://firebasestorage.googleapis.com/v0/b/projetcs-storage.appspot.com/o/newlife%2FWhatsApp%20Image%202023-04-13%20at%2013.14.00%20(3).jpeg?alt=media&token=ae5ad9ea-ff5c-4484-a607-ba5ed12f62a9',
			aspect_ratio: 16 / 9,
			name: '4'
		},
		{
			src:
				'https://firebasestorage.googleapis.com/v0/b/projetcs-storage.appspot.com/o/newlife%2FWhatsApp%20Image%202023-04-13%20at%2013.14.00%20(4).jpeg?alt=media&token=15ba9723-b450-407a-a81b-7ce6725947cb',
			aspect_ratio: 16 / 9,
			name: '5'
		},
		{
			src:
				'https://firebasestorage.googleapis.com/v0/b/projetcs-storage.appspot.com/o/newlife%2FWhatsApp%20Image%202023-04-13%20at%2013.14.00%20(6).jpeg?alt=media&token=2748b9fa-3be4-4165-a4a2-9768403df255',
			aspect_ratio: 16 / 9,
			name: '6'
		},
		{
			src:
				'https://firebasestorage.googleapis.com/v0/b/projetcs-storage.appspot.com/o/newlife%2FWhatsApp%20Image%202023-04-13%20at%2013.14.00%20(5).jpeg?alt=media&token=e9fc8b66-0f74-45c2-9b84-49bfb2bec3ee',
			aspect_ratio: 16 / 9,
			name: '7'
		}
	];
	const widths = [ 500, 1000, 1600 ];
	const ratios = [ 2.2, 4, 6, 8 ];
	return <Gallery {...{ images, widths, ratios }} initState={false} />;
}
