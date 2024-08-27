/* eslint-disable react/prop-types */
import styles from './PopupModal.module.scss'
import { Button } from '../Button'

export function PopupModal({ 
    title = 'Вы уверены, что хотите удалить информацию о ребенке?',
    context = 'ИНформация о ребенке'
    }
) {
    return (
        <div className={styles["parent-modal"]}>
            <div className={styles.modal}>
                <h1>{title}</h1>
                <span className={styles.fio}>{context}</span>
                <div className={styles["button-wrapper"]}>
                    <Button name="Да"/>
                    <Button name="Отмена"/>
                </div>
            </div>
        </div>
    )
}