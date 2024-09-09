import { Row } from "../components/Row";

export const renderRows = (childrenList, searchValue, onEditHandle, onDeleteHandle) => {
    if (childrenList.length > 0) {
        return (
            childrenList
            .slice()
            .sort((a,b) => {
                if (a.surname < b.surname) return -1;
                if (a.surname > b.surname) return 1;  
                return 0; 
            })
            .filter(obj => obj.surname.toLowerCase().includes(searchValue.toLowerCase()))
            .map(obj => (
                <Row 
                    key={obj._id}
                    childInfo={obj}
                    onEditHandle={onEditHandle}
                    onDeleteHandle={onDeleteHandle}
                    checked={obj?.checked}
                />
            ))
        );	
    };
    return null;
};
