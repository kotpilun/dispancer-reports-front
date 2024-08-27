import { Header } from './components/Header/Header'
import { Modal } from './components/Modal/Modal';
import { PopupModal } from './components/PopupModal/PopupModal';
import { TableHeader } from './components/TableHeader/TableHeader';
import { Wrapper } from './components/Wrapper'
import './scss/App.scss'

function App() {

	return (
			<Wrapper>
				{/* <Modal/> */}
				{/* <PopupModal/> */}
				<Header />
				<TableHeader/>
			</Wrapper >
	);
};

export default App
