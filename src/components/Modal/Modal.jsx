/* eslint-disable react/prop-types */
import styles from './Modal.module.scss';
import { Button } from '../Button';
import { useDispatch, useSelector } from 'react-redux';
import { setChildInfo } from '../../redux/slices/childrenListSlice';

export function Modal({ title = 'Редактирование информации о ребенке', onClickHandle, action }) {
    const childInfo = useSelector((state) => state.childrenReducer.childInfo);
    const dispatch = useDispatch();

    const onChangeHandler = (e) => {
        const { name, value } = e.target;
        dispatch(setChildInfo({ ...childInfo, [name]: value }));
    };

    return (
        <div className={styles["parent-modal"]}>
            <div className={styles.modal}>
                <h1>{title}</h1>

                <span>Фамилия</span>
                <div className={styles["input-wrapper"]}>
                    <input
                        type="text"
                        name="surname"
                        className={styles.input}
                        value={childInfo.surname || ''}
                        onChange={onChangeHandler}
                    />
                </div>

                <span>Имя</span>
                <div className={styles["input-wrapper"]}>
                    <input
                        type="text"
                        name="name"
                        className={styles.input}
                        value={childInfo.name || ''}
                        onChange={onChangeHandler}
                    />
                </div>

                <span>Отчество</span>
                <div className={styles["input-wrapper"]}>
                    <input
                        type="text"
                        name="secondName"
                        className={styles.input}
                        value={childInfo.secondName || ''}
                        onChange={onChangeHandler}
                    />
                </div>

                <div className={styles["button-wrapper"]}>
                    <Button name="Сохранить" action={action} onClickHandle={onClickHandle} />
                    <Button name="Закрыть" action="toggleModal" onClickHandle={onClickHandle} />
                </div>
            </div>
        </div>
    );
}