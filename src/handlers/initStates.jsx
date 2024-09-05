import { CATEGORIES } from '../config/config.js';
import { setChildInfo } from '../redux/slices/childrenListSlice.js';

export const useInitStates = (dispatch, setIsShowModal, setAction, isShowModal, setIsShowPopup, isShowPopup) => {
    const onEditHandle = (childInfo) => {
        setIsShowModal(!isShowModal);
        dispatch(setChildInfo(childInfo));
        setAction('edit');
    };
    
    const onDeleteHandle = (childInfo) => {
        dispatch(setChildInfo(childInfo));
        setIsShowPopup(!isShowPopup);
    };

    const onAddHandle = () => {
        setIsShowModal(!isShowModal);
        const sportsCategory = Object.values(CATEGORIES)[0];
        dispatch(setChildInfo({sportsCategory}));
        setAction('add');
    }

    return { onEditHandle, onDeleteHandle, onAddHandle };

};

