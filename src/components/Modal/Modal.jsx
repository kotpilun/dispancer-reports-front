/* eslint-disable react/prop-types */
import styles from './Modal.module.scss';
import { Button } from '../Button';
import { useSelector } from 'react-redux';

export function Modal({ title = 'Редактирование информации о ребенке',  onClickHandle, action }) {
    const childInfo = useSelector((state) => state.childrenReducer.childInfo);

    return (
        <div className={styles["parent-modal"]}>
            <div className={styles.modal}>
                <h1>{title}</h1>
                <span>Фамилия</span>
                <div className={styles["input-wrapper"]}>
                    <input type="text" className={styles.input} defaultValue={ childInfo.surname }/>
                </div>

                <span>Имя</span>
                <div className={styles["input-wrapper"]}>
                    <input type="text" className={styles.input} defaultValue={ childInfo.name }/>
                </div>

                <span>Отчество</span>
                <div className={styles["input-wrapper"]}>
                    <input type="text" className={styles.input} defaultValue={ childInfo.secondName }/>
                </div>
                <div className={styles["button-wrapper"]}>
                    <Button name="Сохранить"action={action} onClickHandle={onClickHandle} />
                    <Button name="Закрыть" action='close' onClickHandle={onClickHandle} />
                </div>
            </div>
        </div>
    )
}