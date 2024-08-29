import './scss/App.scss'
import { useEffect } from 'react';
import { useState } from 'react';
import { getChildrenFromDB } from './controllers/getChildren';

import { Header } from './components/Header/Header'
import { Modal } from './components/Modal/Modal';
import { PopupModal } from './components/PopupModal/PopupModal';
import { TableHeader } from './components/TableHeader/TableHeader';
import { Wrapper } from './components/Wrapper';
import { Counter } from './components/Counter';
import { Row } from './components/Row';

function App() {
	const [children, setChildren] = useState([]);
	const [filterText, setFilterText] = useState('');
	const [countSelected, setCountSelected] = useState(0);

	useEffect(() => {
		const fetchChildrenData = async () => {
			const data = await getChildrenFromDB();
			setChildren(data);
		};

		fetchChildrenData();
	}, []);

	return (
			<Wrapper>
				{/* <Modal/> */}
				{/* <PopupModal/> */}
				<Header 
					setFilterText={setFilterText}
				/>
				<Counter 
					totalChildren={children.length} 
					countSelected={countSelected}
				/>
				<TableHeader />
				{
					children
						.sort((a,b) => {
							if (a.sername < b.sername) return -1;
							if (a.sername > b.sername) return 1;  
							return 0; 
						})
						.filter(obj => obj.surname.toLowerCase().includes(filterText.toLowerCase()))
						.map(obj => (
							<Row 
								key={obj._id}
								name={obj.name}
								surname={obj.surname}
								secondName={obj.secondName}
								countSelected={countSelected}
								setCountSelected={setCountSelected}
							/>
						))
				}
			</Wrapper >
	);
};

export default App;
