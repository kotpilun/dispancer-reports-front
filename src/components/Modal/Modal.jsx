/* eslint-disable react/prop-types */
import styles from './Modal.module.scss';
import { Button } from '../Button';
import { useDispatch, useSelector } from 'react-redux';
import {  useEffect } from 'react';
import { getDispancers } from '../../redux/slices/dispansersSlice';
import { Input } from '../Input/Input';
import { useSelect } from '../../hooks/useSelect';
import { Select } from '../Select/Select';

export function Modal({ onClickHandle, action }) {
    console.log('action',action)
    let title ='';
    action === "add" ? title = 'Добавление информации о ребенке' : 'Редактирование информации о ребенке';

    const isEnable = useSelector((state) => state.buttonIsEnabledReducer.isEnable);
    const { renderDispancers, renderSportStates } = useSelect();
    
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
    
    return (
        <div className={styles["parent-modal"]}>
            <div className={styles.modal}>
                <h1>{title}</h1>

                <Input label="Фамилия" type="text" name="surname" />
                <Input label="Имя" type="text" name="name" />
                <Input label="Отчество" type="text" name="secondName" />
                <Input label="Дата рождения" type="date" name="dateOfBirth" />
                <Input label="Адрес регистрации" type="text" name="address" />

                <Select label="Разряд" name="sportsCategory" renderFunction={renderSportStates()} />
                <Select label="Диспансер" name="dispancer" renderFunction={renderDispancers()} />

                <div className={styles["button-wrapper"]}>
                    <Button name="Сохранить" action={action} onClickHandle={onClickHandle} isEnable={isEnable} />
                    <Button name="Закрыть" action="toggleModal" onClickHandle={onClickHandle} />
                </div>
            </div>
        </div>
    );
}