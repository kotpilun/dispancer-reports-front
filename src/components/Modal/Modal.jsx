/* eslint-disable react/prop-types */
import styles from './Modal.module.scss';
import { Button } from '../Button';
import { useDispatch, useSelector } from 'react-redux';
import { setChildInfo } from '../../redux/slices/childrenListSlice';
import { useState, useEffect } from 'react';
import { getAllDispancers } from '../../controllers/getDispancers';

export function Modal({ title = 'Редактирование информации о ребенке', onClickHandle, action }) {
    const [isEnable, setIsEnable] = useState(false);
    const [dispancers, setDispancers] = useState([]);

    const childInfo = useSelector((state) => state.childrenReducer.childInfo);
    const dispatch = useDispatch();

    const onChangeHandler = (e) => {
        const { name, value } = e.target;
        const updatedChildInfo = { ...childInfo, [name]: value };
        
        dispatch(setChildInfo(updatedChildInfo));

        const isFormValid = updatedChildInfo.name?.length >= 3 
            && updatedChildInfo.surname?.length >= 3 
            && updatedChildInfo.secondName?.length >= 3;

        setIsEnable(isFormValid);
    };

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'Escape') {
                onClickHandle('toggleModal', true);
            }
        };

        document.addEventListener('keydown', handleKeyDown);

        //получаем список диспансеров
        const fetchDispancers = async () => {
            try {
                const data = await getAllDispancers();
                setDispancers(data.allDispancers || []); 
            } catch (err) {
                console.error("Ошибка получения диспансеров", err);
                setDispancers([]);
            }
        };
        
        fetchDispancers();
        
        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, []);
    
    const categories = {
        br: "б/р",
        thirdU: "3 юн. р.",
        secondU: "2 юн. р.",
        firstU: "1 юн. р.",
        thirdV: "3 р.",
        secondV: "2 р.",
        firstV: "1 р.",
        kms: "КМС"
    };
    
    const renderSportStates = () => {
        return Object.entries(categories).map(([key, value]) => (
            <option key={key} value={key} defaultValue={childInfo.sportsCategory === value ? "selected" : null}>
                {value}
            </option>
        ));
    };

    const renderDispancers = () => {
        console.log(dispancers)
        return dispancers.map((value) => (
            <option key={value._id} value={value._id} defaultValue={childInfo.dispancer === value.name ? "selected" : null}>
                {value.name}
            </option>
        ));
        // return null
    }

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

                <span>Дата рождения</span>
                <div className={styles["input-wrapper"]}>
                    <input
                        type="text"
                        name="dateOfBirth"
                        className={styles.input}
                        value={childInfo.dateOfBirth || ''}
                        onChange={onChangeHandler}
                    />
                </div>

                <span>Адрес регистрации</span>
                <div className={styles["input-wrapper"]}>
                    <input
                        type="text"
                        name="address"
                        className={styles.input}
                        value={childInfo.address || ''}
                        onChange={onChangeHandler}
                    />
                </div>

                <span>Разряд</span>
                <div className={styles["input-wrapper"]}>
                    <select name="sportsCategory" id="sportsCategory">
                        {renderSportStates()}
                    </select>
                </div>

                <span>Диспансер</span>
                <div className={styles["input-wrapper"]}>
                    <select name="sportsCategory" id="sportsCategory">
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