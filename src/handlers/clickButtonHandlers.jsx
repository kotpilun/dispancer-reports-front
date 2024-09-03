import { deleteChild } from '../controllers/deleteChild.jsx';
import { setChildrenList, setChildInfo } from '../redux/slices/childrenListSlice.js';

export const useOnClickHandlers = (dispatch, setIsShowModal, setAction, isShowModal, setIsShowPopup, isShowPopup, childInfo, childrenList) => {

    const onClickHandle = (action) => {
        switch(action) {
            case 'close': 
                setIsShowModal(!isShowModal);
                break;
            case 'edit':
                console.log('edit');
                break;
            case 'add':
                setAction('add');
                dispatch(setChildInfo({}));
                setIsShowModal(!isShowModal);
                break;
            case 'close popup':
                setIsShowPopup(!isShowPopup);
                break;
            case 'save editing':
                console.log(childInfo)
                break;
            case 'delete':
                console.log(childInfo);
                deleteChild(childInfo._id);
                setIsShowPopup(!isShowPopup);
                childrenList = childrenList.filter(item => item._id != childInfo._id);
                dispatch(setChildrenList(childrenList));
                break;    
        };
    };

    return { onClickHandle };

};

