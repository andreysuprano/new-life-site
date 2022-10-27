import { AboutSection } from '../components/AboutSection/AboutSection';
import { ContatoSection } from '../components/ContatoSection/ContatoSection';
import { NavBar } from '../components/NavBar/NavBar';
import { ServicoDetalhadoSection } from '../components/ServicoDetalhadoSection/ServicoDetalhadoSection';
import { SpanServicos } from '../components/SpanServicos/SpanServicos';
import { TopSection } from '../components/TopSection/TopSection';
import { VideoSection } from '../components/VideoSection/VideoSection';

function Home() {
	return (
		<div>
			<NavBar />
			<TopSection />
			<SpanServicos />
			<AboutSection />
			<VideoSection />
			<ServicoDetalhadoSection />
			<ContatoSection />
		</div>
	);
}
export default Home;
