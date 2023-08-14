import ContatoChr from '../components/ContatoChr';
import { FlutuantWhats } from '../components/FlutuantWhats/FtutantWhats';
import { Footer } from '../components/Footer/Footer';
import Motivation from '../components/Motivation';
import { NavBar } from '../components/NavBar/NavBar';
import ProsContras from '../components/ProsContras';
import TopoImplantes from '../components/TopoImplantes';
import VideoTestmonial from '../components/VideoTestmonial';

function Home() {
	return (
		<div>
			<NavBar />
			<TopoImplantes />
			<Motivation />
			<ProsContras />
			<VideoTestmonial />
			<ContatoChr />
			<Footer />
			<FlutuantWhats />
		</div>
	);
}
export default Home;
