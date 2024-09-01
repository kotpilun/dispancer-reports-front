export const useOnClickHandlers = (setIsShowModal, setChildInfo, setAction, isShowModal) => {
    const onEditHandle = (childInfo) => {
        setIsShowModal(!isShowModal);
        setChildInfo(childInfo);
        setAction('edit')
    };
    
    const onClickHandle = (action) => {
        switch(action) {
            case 'close': 
                setIsShowModal(!isShowModal);
                break;
            case 'edit':
                console.log('edit');
                break;
            case 'add':
                console.log('add');
                setAction('add');
                setChildInfo(true);
                setIsShowModal(!isShowModal);
                break;
        };
    };

    return { onEditHandle, onClickHandle };

};

