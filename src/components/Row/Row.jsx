/* eslint-disable react/prop-types */
import styles from './Row.module.scss'
import editIcon from '../../assets/icons/edit.png';
import deleteIcon from '../../assets/icons/delete.png';
import { useDispatch, useSelector } from 'react-redux';
import { setCount } from '../../redux/slices/countSlice';
import { modifyDateOfBirth } from '../../utils/modifyDateOfBirth';

export function Row({ childInfo, onEditHandle, onDeleteHandle }) {
    const dispatch = useDispatch();
    const count = useSelector((state) => state.countReduser.count);

    const onCheckBoxHandle = (e) => {
        e.target.checked ? dispatch(setCount(count + 1)) : dispatch(setCount(count - 1));
    };

    const modifiedDateOfBirth = modifyDateOfBirth(childInfo.dateOfBirth);

    return (
        <div className={styles["table-context-wrapper"]}>
            <div className={`${styles["table-cell-center"]} ${styles["table-cell-action"]}`}>
                <input 
                    type="checkbox" 
                    onChange={e => onCheckBoxHandle(e)}
                    />
            </div>
            <div className={styles["table-context"]}>{childInfo.surname}</div>
            <div className={styles["table-context"]}>{childInfo.name}</div>
            <div className={styles["table-context"]}>{childInfo.secondName}</div>
            <div className={styles["table-context"]}>{childInfo.sportsCategory}</div>
            <div className={styles["table-context"]}>{modifiedDateOfBirth}</div>
            <div className={styles["table-context"]}>{childInfo.dispancer}</div>
            <div className={styles["table-cell-action"]}>
                <div className={styles["image-wrapper"]}>
                    <div className={styles.image}><img className={styles["edit-img"]} src={editIcon} alt="edit" onClick={() => onEditHandle(childInfo)} /></div>
                    <div className={styles.image}><img className={styles["edit-img"]} src={deleteIcon} alt="delete" onClick={() => onDeleteHandle(childInfo)} /></div>
                </div>
            </div>
        </div>
        
    );
};

