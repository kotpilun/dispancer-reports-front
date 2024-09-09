import { useDispatch, useSelector } from 'react-redux';
import { CATEGORIES } from '../config/config.js';
import { setChildInfo } from '../redux/slices/childrenListSlice.js';


export const useInitStates = (setIsShowModal, setAction, isShowModal, setIsShowPopup, isShowPopup) => {
    const dispancers = useSelector((state) => state.dispancerReduser.dispancersInfo);
    const dispatch = useDispatch();

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
        const dispancerByDefault = dispancers?.allDispancers[0]?.name;
        console.log('onAddHandle')
        dispatch(setChildInfo({ sportsCategory, dispancer: dispancerByDefault }));
        setAction('add');
    }

    return { onEditHandle, onDeleteHandle, onAddHandle };

};

