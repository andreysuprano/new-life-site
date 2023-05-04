import { AboutSection } from '../components/AboutSection/AboutSection';
import { ContatoSection } from '../components/ContatoSection/ContatoSection';
import { CopySection } from '../components/CopySection/CopySection';
import { FlutuantWhats } from '../components/FlutuantWhats/FtutantWhats';
import { Footer } from '../components/Footer/Footer';
import { MobileMenu } from '../components/MobileMenu/MobileMenu';
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
			<Footer />
			<CopySection />
			<FlutuantWhats />
		</div>
	);
}
export default Home;
