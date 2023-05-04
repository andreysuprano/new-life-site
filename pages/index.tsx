import ContatoChr from '../components/ContatoChr';
import { CopySection } from '../components/CopySection/CopySection';
import FeatureChackra from '../components/FeatureChackra';
import { FlutuantWhats } from '../components/FlutuantWhats/FtutantWhats';
import { Footer } from '../components/Footer/Footer';
import { NavBar } from '../components/NavBar/NavBar';
import NavBarChr from '../components/NavBarChr';
import ServicesChr from '../components/ServicesChr';
import { SpanServicos } from '../components/SpanServicos/SpanServicos';
import TestimonialSection from '../components/Testmonials';
import { TopSection } from '../components/TopSection/TopSection';
import VideoSectionChr from '../components/VideoSectionChr';

function Home() {
	return (
		<div>
			<NavBar />
			<TopSection />
			<SpanServicos />
			<FeatureChackra />
			<VideoSectionChr />
			<ServicesChr />
			<ContatoChr />
			<TestimonialSection />
			<Footer />
			<CopySection />
			<FlutuantWhats />
		</div>
	);
}
export default Home;
