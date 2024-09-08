/* eslint-disable react-hooks/rules-of-hooks */
import { useSelector } from 'react-redux';
import { addChild } from '../controllers/addChild.jsx';
import { createDoc } from '../controllers/createDoc.jsx';
import { deleteChild } from '../controllers/deleteChild.jsx';
import { patchChild } from '../controllers/patchChild.jsx';
import { setChildInfo, setChildrenList } from '../redux/slices/childrenListSlice.js';
import { excangeNameIdDispanser } from '../utils/excangeNameIdDispanser.js';
import { CATEGORIES } from '../config/config.js';
import { getDispancers } from '../redux/slices/dispansersSlice.js';
import { useEffect, useState } from 'react';

export const useOnClickHandlers = (
    dispatch, 
    setIsShowModal,  
    isShowModal, 
    setIsShowPopup, 
    isShowPopup,
    setAction) => {

    const dispancers = useSelector((state) => state.dispancerReduser.dispancersInfo);
    const children = useSelector((store) => store.childrenReducer.children);
    const childInfo = useSelector((state) => state.childrenReducer.childInfo); //текущее состояние в модалке
    const [toggleModalAction, setToggleModalAction] = useState(false); //флаг, чтобы useEffect выполнялся только если action == toggleModal
    let childrenList = children.childrenList; //список всех детей

    useEffect(() => {
        if (toggleModalAction) {
            if (dispancers?.allDispancers?.length > 0) {
                const sportsCategory = Object.values(CATEGORIES)[0];
                const dispancerByDefault = dispancers.allDispancers[0]?.name;
                dispatch(setChildInfo({ sportsCategory, dispancer: dispancerByDefault }));
            } 
        }
        
    }, [toggleModalAction, dispancers, dispatch]); 
    
    const onClickHandle = async (action, isEnable) => {
        if (!isEnable) return null;
        
        switch(action) {
            case 'toggleModal': {
                setToggleModalAction(true);
                setIsShowModal(!isShowModal);
                await dispatch(getDispancers());
                setToggleModalAction(false);
                setAction('add');
                break;
            }

            case 'closeModal': {
                setIsShowModal(!isShowModal);
                break;
            }

            case 'edit':
                try {
                    let newChildInfo = excangeNameIdDispanser(childInfo, dispancers);
                    
                    await patchChild(childInfo._id, newChildInfo);

                    const newChildrenList = childrenList.map(item => item._id === childInfo._id ? childInfo : item);
                    dispatch(setChildrenList(newChildrenList));

                    setIsShowModal(!isShowModal);
                } catch (error) {
                    console.error("Error editing child:", error);
                }
                
                break;

            case 'add':
                try {
                    let newChildInfo = excangeNameIdDispanser(childInfo, dispancers);

                    const newChild = await addChild(newChildInfo);  
                    newChild.child.dispancer = childInfo.dispancer;

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

