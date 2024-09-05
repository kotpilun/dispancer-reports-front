import { addChild } from '../controllers/addChild.jsx';
import { createDoc } from '../controllers/createDoc.jsx';
import { deleteChild } from '../controllers/deleteChild.jsx';
import { patchChild } from '../controllers/patchChild.jsx';
import { setChildrenList } from '../redux/slices/childrenListSlice.js';


export const useOnClickHandlers = (dispatch, setIsShowModal,  isShowModal, setIsShowPopup, isShowPopup, childInfo, childrenList) => {
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
                    await patchChild(childInfo._id, childInfo);
                    childrenList = childrenList.map(item => item._id === childInfo._id ? childInfo : item);
                    dispatch(setChildrenList(childrenList));
                    setIsShowModal(!isShowModal);
                } catch (error) {
                    console.error("Error editing child:", error);
                }
                
                break;

            case 'add':
                try {
                    const newChild = await addChild(childInfo);  
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

