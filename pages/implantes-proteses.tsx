import { AboutSection } from '../components/AboutSection/AboutSection';
import { ContatoSection } from '../components/ContatoSection/ContatoSection';
import { CopySection } from '../components/CopySection/CopySection';
import { FlutuantWhats } from '../components/FlutuantWhats/FtutantWhats';
import { Footer } from '../components/Footer/Footer';
import { NavBar } from '../components/NavBar/NavBar';
import TopoImplantes from '../components/TopoImplantes';

function Home() {
	return (
		<div>
			<NavBar />
			<TopoImplantes />
			<ContatoSection />
			<Footer />
			<CopySection />
			<FlutuantWhats />
		</div>
	);
}
export default Home;
