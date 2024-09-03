import { setChildInfo } from '../redux/slices/childrenListSlice.js';

export const useOnClicIconkHandlers = (dispatch, setIsShowModal, setAction, isShowModal, setIsShowPopup, isShowPopup) => {
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
        dispatch(setChildInfo({}));
        setAction('add');
    }

    return { onEditHandle, onDeleteHandle, onAddHandle };

};

