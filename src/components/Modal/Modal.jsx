/* eslint-disable react/prop-types */
import styles from './Modal.module.scss';
import { Button } from '../Button';
import { useDispatch, useSelector } from 'react-redux';
import {  useEffect } from 'react';
import { CATEGORIES } from '../../config/config';
import { getDispancers } from '../../redux/slices/dispansersSlice';
import { useModal } from '../../hooks/useModal';
import { Input } from '../Input/Input';

export function Modal({ title = 'Редактирование информации о ребенке', onClickHandle, action }) {

    const childInfo = useSelector((state) => state.childrenReducer.childInfo);
    const dispancers = useSelector((state) => state.dispancerReduser.dispancersInfo);
    const isEnable = useSelector((state) => state.buttonIsEnabledReducer.isEnable);
    
    const { onChangeHandler } = useModal();
    const dispatch = useDispatch();
    
    useEffect(() => {
            const handleKeyDown = (e) => {
                if (e.key === 'Escape') {
                    onClickHandle('toggleModal', true);
                }
            };

            document.addEventListener('keydown', handleKeyDown);

            dispatch(getDispancers());
            
            return () => {
                document.removeEventListener('keydown', handleKeyDown);
        };
    }, []);
    
    const renderSportStates = () => {

        return Object.entries(CATEGORIES).map(([key, value]) => (
            <option key={key} value={value}>
                {value}
            </option>
        ));
    };

    const renderDispancers = () => {
        if (!dispancers?.allDispancers?.length) {
            return null;
        }
    
        return dispancers.allDispancers.map((value) => (
            <option key={value._id} value={value.name}>
                {value.name}
            </option>
        ));
    };

    return (
        <div className={styles["parent-modal"]}>
            <div className={styles.modal}>
                <h1>{title}</h1>

                <Input label="Фамилия" type="text" name="surname" />
                <Input label="Имя" type="text" name="name" />
                <Input label="Отчество" type="text" name="secondName" />
                <Input label="Дата рождения" type="date" name="dateOfBirth" />
                <Input label="Адрес регистрации" type="text" name="address" />

                <span>Разряд</span>
                <div className={styles["input-wrapper"]}>
                <select
                    name="sportsCategory"
                    id="sportsCategory"
                    value={childInfo?.sportsCategory || ''}
                    onChange={onChangeHandler}
                >
                    {renderSportStates()}
                </select>
                </div>

                <span>Диспансер</span>
                <div className={styles["input-wrapper"]}>
                <select
                    name="dispancer"
                    id="dispancer"
                    value={childInfo?.dispancer || ''}
                    onChange={onChangeHandler}
                >
                    {renderDispancers()}
                </select>
                </div>

                <div className={styles["button-wrapper"]}>
                    <Button name="Сохранить" action={action} onClickHandle={onClickHandle} isEnable={isEnable} />
                    <Button name="Закрыть" action="toggleModal" onClickHandle={onClickHandle} />
                </div>
            </div>
        </div>
    );
}