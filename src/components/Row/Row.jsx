/* eslint-disable react/prop-types */
import styles from './Row.module.scss'
import editIcon from '../../assets/icons/edit.png';
import deleteIcon from '../../assets/icons/delete.png';
import { useDispatch, useSelector } from 'react-redux';
import { setCount } from '../../redux/slices/countSlice';

export function Row({ childInfo, onEditHandle }) {
    const dispatch = useDispatch();
    const count = useSelector((state) => state.countReduser.count)

    const onChangeHandle = (e) => {
        // e.target.checked ? setCountSelected(countSelected + 1) : setCountSelected(countSelected - 1);
        e.target.checked ? dispatch(setCount(count + 1)) : dispatch(setCount(count - 1));
    }

    return (
        <div className={styles["table-context-wrapper"]}>
            <div className={`${styles["table-cell-center"]} ${styles["table-cell-action"]}`}>
                <input 
                    type="checkbox" 
                    onChange={e => onChangeHandle(e)}
                    />
            </div>
            <div className={styles["table-context"]}>{childInfo.surname}</div>
            <div className={styles["table-context"]}>{childInfo.name}</div>
            <div className={styles["table-context"]}>{childInfo.secondName}</div>
            <div className={styles["table-cell-action"]}>
                <div className={styles["image-wrapper"]}>
                    <div className={styles.image}><img className={styles["edit-img"]} src={editIcon} alt="edit" onClick={() => onEditHandle(childInfo)} /></div>
                    <div className={styles.image}><img className={styles["edit-img"]} src={deleteIcon} alt="delete" /></div>
                </div>
            </div>
        </div>
        
    );
};

