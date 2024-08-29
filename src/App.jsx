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
	const [isShowModal, setIsShowModal] = useState(false);
	const [childInfo, setChildInfo] = useState({});
	const [action, setAction] = useState('');

	useEffect(() => {
		const fetchChildrenData = async () => {
			const data = await getChildrenFromDB();
			setChildren(data);
		};

		fetchChildrenData();
	}, []);

	const onEditHandle = (childInfo) => {
		setIsShowModal(!isShowModal);
		setChildInfo(childInfo);
		setAction('edit')
	}

	const onClickHandle = (action) => {
		switch(action) {
			case 'close': 
				setIsShowModal(!isShowModal);
				break;
			case 'edit':
				console.log('edit');
				break;
			case 'add':
				console.log('add');
				setAction('add');
				setChildInfo(true);
				setIsShowModal(!isShowModal);
				break;
		};
	}

	const renderRows = (children) => {
		return (
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
						childInfo={obj}
						countSelected={countSelected}
						setCountSelected={setCountSelected}
						onEditHandle={onEditHandle}
					/>
				))
		);
	};

	return (
			<Wrapper>
				{isShowModal && 
					<Modal 
						childInfo={childInfo} 
						onClickHandle={onClickHandle}
						action={action}
					/>
				}
				{/* <PopupModal/> */}
				<Header 
					setFilterText={setFilterText}
					onClickHandle={onClickHandle}
				/>
				<Counter 
					totalChildren={children.length} 
					countSelected={countSelected}
				/>
				<TableHeader />
				{renderRows(children)}
			</Wrapper >
	);
};

export default App;
