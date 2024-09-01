import './scss/App.scss'
import { useEffect } from 'react';
import { useState } from 'react';

import { Header } from './components/Header';
import { Spinner } from './components/Spinner';
import { Modal } from './components/Modal';
import { PopupModal } from './components/PopupModal/PopupModal';
import { TableHeader } from './components/TableHeader/TableHeader';
import { Wrapper } from './components/Wrapper';
import { Counter } from './components/Counter';
import { Row } from './components/Row';
import { useDispatch, useSelector } from 'react-redux';
import { getChildren } from './redux/slices/childrenListSlice.js'
import { useOnClickHandlers } from './handlers/clickbuttonHandlers.jsx';
// import Sceleton from './components/Sceleton/Sceleton.jsx';

function App() {
	const [isShowModal, setIsShowModal] = useState(false);
	const [childInfo, setChildInfo] = useState({});
	const [action, setAction] = useState('');

	const dispatch = useDispatch();
	const children = useSelector((store) => store.childrenReducer.children);
	const searchValue = useSelector((store) => store.childrenReducer.searchValue);

	useEffect(() => {
		dispatch(getChildren());
	}, []);

	const { onEditHandle, onClickHandle } = useOnClickHandlers(setIsShowModal, setChildInfo, setAction, isShowModal);

	const renderRows = (children) => {
		if (children.length > 0) {
			return (
				children
				.slice()
				.sort((a,b) => {
					if (a.sername < b.sername) return -1;
					if (a.sername > b.sername) return 1;  
					return 0; 
				})
				.filter(obj => obj.surname.toLowerCase().includes(searchValue.toLowerCase()))
				.map(obj => (
					<Row 
						key={obj._id}
						childInfo={obj}
						onEditHandle={onEditHandle}
					/>
				))
			);	
		};
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
					onClickHandle={onClickHandle}
					/>
				<Counter 
					totalChildren={children.childrenList.length} 
					/>
				<TableHeader />
				{/* {children.status && [...Array(5)].map((_,index) => <Sceleton key={index}/>) } */}
				<Wrapper>
					{/* <Spinner/> */}
					{children.status && <Spinner />}
					{renderRows(children.childrenList)}
				</Wrapper>
			</Wrapper >
	);
};

export default App;
