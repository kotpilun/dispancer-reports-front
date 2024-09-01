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
import { useDispatch, useSelector } from 'react-redux';
import { getChildren } from './redux/slices/childrenListSlice.js'
import { useOnClickHandlers } from './handlers/clickbuttonHandlers.jsx';
import { renderRows } from './handlers/renderRows';

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
					{children.status && <Spinner />}
					{renderRows(children.childrenList, searchValue, onEditHandle)}
				</Wrapper>
			</Wrapper >
	);
};

export default App;
