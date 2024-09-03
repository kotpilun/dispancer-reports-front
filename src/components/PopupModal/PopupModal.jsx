/* eslint-disable react/prop-types */
import styles from './PopupModal.module.scss'
import { Button } from '../Button'
import { useSelector } from 'react-redux'

export function PopupModal({ onClickHandle }) {
    const childInfo = useSelector((state) => state.childrenReducer.childInfo);

    return (
        <div className={styles["parent-modal"]}>
            <div className={styles.modal}>
                <h1>Вы уверены, что хотите удалить информация о ребенке?</h1>
                <span className={styles.fio}>{childInfo.surname} {childInfo.name} {childInfo.secondName}</span>
                <div className={styles["button-wrapper"]}>
                    <Button name="Да" 
                        action='delete'
                        onClickHandle={onClickHandle}
                    />
                    <Button name="Отмена" 
                        action='close popup' 
                        onClickHandle={onClickHandle} 
                    />
                </div>
            </div>
        </div>
    )
};
