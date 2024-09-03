import './scss/App.scss'
import { useEffect } from 'react';
import { useState } from 'react';

import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

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
import { useOnClicIconkHandlers } from './handlers/clickIconsHandlers.jsx';

function App() {
	const [isShowModal, setIsShowModal] = useState(false);
	// флаг, указывающий откуда была открыта модалка, для понимания как должна работать кнопка Сохранить на модалке
	const [action, setAction] = useState('');
	const [isShowPopup, setIsShowPopup] = useState(false);

	const dispatch = useDispatch();

	const children = useSelector((store) => store.childrenReducer.children);
	const childInfo = useSelector((state) => state.childrenReducer.childInfo);
	const searchValue = useSelector((store) => store.childrenReducer.searchValue);

	useEffect(() => {
		dispatch(getChildren());
	}, []);


	const { onClickHandle } = useOnClickHandlers(dispatch, setIsShowModal, isShowModal, setIsShowPopup, isShowPopup, childInfo, children.childrenList);
	const { onEditHandle, onDeleteHandle } = useOnClicIconkHandlers(dispatch, setIsShowModal, setAction, isShowModal, setIsShowPopup, isShowPopup);

	return (
		<>
			<ToastContainer theme="dark" />
			<Wrapper>
				{isShowModal && 
					<Modal 
					onClickHandle={onClickHandle}
					action={action}
					/>
				}
				{isShowPopup && <PopupModal 
					onClickHandle={onClickHandle}
				/>}
				<Header 
					onClickHandle={onClickHandle}
					/>
				<Counter 
					totalChildren={children.childrenList.length} 
					/>
				<TableHeader />
				<Wrapper>
					{children.status && <Spinner />}
					{renderRows(children.childrenList, searchValue, onEditHandle, onDeleteHandle)}
				</Wrapper>
			</Wrapper >
		</>
	);
};

export default App;
