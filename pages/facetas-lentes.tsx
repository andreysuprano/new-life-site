import ContatoChr from '../components/ContatoChr';
import { CopySection } from '../components/CopySection/CopySection';
import { FlutuantWhats } from '../components/FlutuantWhats/FtutantWhats';
import { Footer } from '../components/Footer/Footer';
import ImageDisplay from '../components/ImageDisplay';
import { NavBar } from '../components/NavBar/NavBar';
import TopoLp from '../components/TopoLp';

function Home() {
	return (
		<div>
			<NavBar />
			<TopoLp />
			<ImageDisplay />
			<ContatoChr />
			<Footer />
			<CopySection />
			<FlutuantWhats />
		</div>
	);
}
export default Home;
