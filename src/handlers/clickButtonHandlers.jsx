import { deleteChild } from '../controllers/deleteChild.jsx';
import { patchChild } from '../controllers/patchChild.jsx';
import { setChildrenList, setChildInfo } from '../redux/slices/childrenListSlice.js';


export const useOnClickHandlers = (dispatch, setIsShowModal,  isShowModal, setIsShowPopup, isShowPopup, childInfo, childrenList) => {

    const onClickHandle = (action) => {
        switch(action) {
            case 'close': 
                setIsShowModal(!isShowModal);
                break;
            case 'edit':
                patchChild(childInfo._id, childInfo);
                childrenList = childrenList.map(item => item._id === childInfo._id ? childInfo : item);
                dispatch(setChildrenList(childrenList));
                setIsShowModal(!isShowModal);
                break;
            case 'add':
                dispatch(setChildInfo({}));
                setIsShowModal(!isShowModal);
                break;
            case 'close popup':
                setIsShowPopup(!isShowPopup);
                break;
            case 'delete':
                deleteChild(childInfo._id);
                setIsShowPopup(!isShowPopup);
                childrenList = childrenList.filter(item => item._id != childInfo._id);
                dispatch(setChildrenList(childrenList));
            break;    
        };
    };
    return { onClickHandle };
};

