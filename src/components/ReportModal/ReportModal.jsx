/* eslint-disable react/prop-types */
import { useEffect } from 'react';
import styles from './ReportModal.module.scss';
import { Button } from '../Button';
import { useDispatch, useSelector } from 'react-redux';
import { setReportData } from '../../redux/slices/reportDataSlice';

export function ReportModal({ onClickHandle, action }) {
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'Escape') {
                onClickHandle('toggleReportModal', true);
            }
        };

        document.addEventListener('keydown', handleKeyDown);

        return () => {
            document.removeEventListener('keydown', handleKeyDown);
    };
    }, []);

    const reportData = useSelector((state) => state.reportDataReducer.reportData);
    const dispatch = useDispatch();

    const onChangeHandle = (e) => {
        const {name, value} = e.target;
        dispatch(setReportData({...reportData, [name]: value}));
    };

    const formFields = {
        'Чемпионат': (
            <>
                <span>Год</span>
                <div className={styles["input-wrapper"]}>
                    <input
                        type="text"
                        name="year"
                        className={styles.input}
                        value={reportData.year || ''}
                        onChange={onChangeHandle}
                    />
                </div>
            </>
        ),
        'Ruza Cup': (
            <>
                <span>Число, месяц</span>
                <div className={styles["input-wrapper"]}>
                    <input
                        type="text"
                        name="dateOfCompetition"
                        className={styles.input}
                        value={reportData.dateOfCompetition || ''}
                        onChange={onChangeHandle}
                    />
                </div>

                <span>Год</span>
                <div className={styles["input-wrapper"]}>
                    <input
                        type="text"
                        name="year"
                        className={styles.input}
                        value={reportData.year || ''}
                        onChange={onChangeHandle}
                    />
                </div>
            </>
        ),
        'Открытый турнир': (
            <>
                <span>Посвященного</span>
                <div className={styles["input-wrapper"]}>
                    <input
                        type="text"
                        name="give"
                        className={styles.input}
                        value={reportData.give || ''}
                        onChange={onChangeHandle}
                    />
                </div>

                <span>Город</span>
                <div className={styles["input-wrapper"]}>
                    <input
                        type="text"
                        name="city"
                        className={styles.input}
                        value={reportData.city || ''}
                        onChange={onChangeHandle}
                    />
                </div>

                <span>Число, месяц</span>
                <div className={styles["input-wrapper"]}>
                    <input
                        type="text"
                        name="dateOfCompetition"
                        className={styles.input}
                        value={reportData.dateOfCompetition || ''}
                        onChange={onChangeHandle}
                    />
                </div>

                <span>Год</span>
                <div className={styles["input-wrapper"]}>
                    <input
                        type="text"
                        name="year"
                        className={styles.input}
                        value={reportData.year || ''}
                        onChange={onChangeHandle}
                    />
                </div>
            </>
        ),
        'Золотая рыбка': (
            <>
                <span>Юноши года рождения (YYYY-YYYY)</span>
                <div className={styles["input-wrapper"]}>
                    <input
                        type="text"
                        name="boysBirthYears"
                        className={styles.input}
                        value={reportData.boysBirthYears || ''}
                        onChange={onChangeHandle}
                    />
                </div>
                <span>Девушки года рождения (YYYY-YYYY)</span>
                <div className={styles["input-wrapper"]}>
                    <input
                        type="text"
                        name="girlsBirthYears"
                        className={styles.input}
                        value={reportData.girlsBirthYears || ''}
                        onChange={onChangeHandle}
                    />
                </div>
                <span>Этап (римская цифра)</span>
                <div className={styles["input-wrapper"]}>
                    <input
                        type="text"
                        name="stage"
                        className={styles.input}
                        value={reportData.stage || ''}
                        onChange={onChangeHandle}
                    />
                </div>
                <span>Год</span>
                <div className={styles["input-wrapper"]}>
                    <input
                        type="text"
                        name="year"
                        className={styles.input}
                        value={reportData.year || ''}
                        onChange={onChangeHandle}
                    />
                </div>
            </>
        ) 
    }

    return (
        <div className={styles["parent-modal"]}>
            <div className={styles.modal}>
                <h1>Сформировать заявки</h1>
                <span>Вид соревнования</span>
                <div className={styles["input-wrapper"]}>
                    <select
                        name='competitonType'
                        id='competitonType'
                        value={reportData.competitonType}
                        onChange={onChangeHandle}
                    >
                        <option value='Чемпионат'>
                            Чемпионат
                        </option>
                        <option value='Ruza Cup'>
                            Ruza Cup
                        </option>
                        <option value='Открытый турнир'>
                            Открытый турнир
                        </option>
                        <option value='Золотая рыбка'>
                            Золотая рыбка
                        </option>
                    </select>
                </div>
                {formFields[reportData.competitonType]}
                <div className={styles["button-wrapper"]}>
                    <Button name="Сформировать" action={action} onClickHandle={onClickHandle} />
                    <Button name="Закрыть" action="closeReportModal" onClickHandle={onClickHandle} />
                </div>

            </div>
        </div>
    );
};