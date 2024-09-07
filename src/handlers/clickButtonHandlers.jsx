import { useSelector } from 'react-redux';
import { addChild } from '../controllers/addChild.jsx';
import { createDoc } from '../controllers/createDoc.jsx';
import { deleteChild } from '../controllers/deleteChild.jsx';
import { patchChild } from '../controllers/patchChild.jsx';
import { setChildInfo, setChildrenList } from '../redux/slices/childrenListSlice.js';
import { excangeNameIdDispanser } from '../utils/excangeNameIdDispanser.js';

export const useOnClickHandlers = (
        dispatch, 
        setIsShowModal,  
        isShowModal, 
        setIsShowPopup, 
        isShowPopup) => {
    const dispancers = useSelector((state) => state.dispancerReduser.dispancersInfo);
    const children = useSelector((store) => store.childrenReducer.children);
    const childInfo = useSelector((state) => state.childrenReducer.childInfo);
    
    let childrenList = children.childrenList;

    const onClickHandle = async (action, isEnable) => {
        if (!isEnable) {
            return null;
        };
        
        switch(action) {
            case 'toggleModal': 
                setIsShowModal(!isShowModal);
                break;

            case 'edit':
                try {
                    let newChildInfo = excangeNameIdDispanser(childInfo, dispancers);

                    setChildInfo(newChildInfo);

                    await patchChild(childInfo._id, newChildInfo);
                    childrenList = childrenList.map(item => item._id === childInfo._id ? childInfo : item);
                    dispatch(setChildrenList(childrenList));

                    setIsShowModal(!isShowModal);
                } catch (error) {
                    console.error("Error editing child:", error);
                }
                
                break;

            case 'add':
                try {
                    let newChildInfo = excangeNameIdDispanser(childInfo, dispancers);

                    setChildInfo(newChildInfo);

                    const newChild = await addChild(newChildInfo);  
                    const newChildrenList = [...childrenList, newChild.child];
                    dispatch(setChildrenList(newChildrenList));
                    setIsShowModal(!isShowModal);
                } catch (error) {
                    console.error("Error adding child:", error);
                }
                break;

            case 'close popup':
                setIsShowPopup(!isShowPopup);
                break;

            case 'delete':
                try {
                    await deleteChild(childInfo._id);
                    setIsShowPopup(!isShowPopup);
                    childrenList = childrenList.filter(item => item._id != childInfo._id);
                    dispatch(setChildrenList(childrenList));
                    break;   
                } catch (error) {
                    console.error("Error deleting child:", error);
                } 
                break;

            case 'create doc':
                try {
                    await createDoc();
                    break;   
                } catch (error) {
                    console.error("Error deleting child:", error);
                } 
                break;
        };
    };

    return { onClickHandle };
};

