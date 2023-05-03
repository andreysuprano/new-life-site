import { AboutSection } from '../components/AboutSection/AboutSection';
import ContatoChr from '../components/ContatoChr';
import { ContatoSection } from '../components/ContatoSection/ContatoSection';
import { CopySection } from '../components/CopySection/CopySection';
import FeatureChackra from '../components/FeatureChackra';
import { FlutuantWhats } from '../components/FlutuantWhats/FtutantWhats';
import { Footer } from '../components/Footer/Footer';
import FooterChr from '../components/FooterChr';
import { MobileMenu } from '../components/MobileMenu/MobileMenu';
import { NavBar } from '../components/NavBar/NavBar';
import ServicesChr from '../components/ServicesChr';
import { ServicoDetalhadoSection } from '../components/ServicoDetalhadoSection/ServicoDetalhadoSection';
import { SpanServicos } from '../components/SpanServicos/SpanServicos';
import { TopSection } from '../components/TopSection/TopSection';
import { VideoSection } from '../components/VideoSection/VideoSection';
import VideoSectionChr from '../components/VideoSectionChr';

function Home() {
	return (
		<div>
			<NavBar />
			<TopSection />
			<SpanServicos />
			<FeatureChackra />
			{/* <AboutSection /> */}
			{/* <VideoSection /> */}
			<VideoSectionChr />
			<ServicesChr />
			{/* <ServicoDetalhadoSection /> */}
			<ContatoChr />
			{/* <ContatoSection /> */}
			<Footer />
			<CopySection />
			{/* <FooterChr /> */}
			<FlutuantWhats />
		</div>
	);
}
export default Home;
