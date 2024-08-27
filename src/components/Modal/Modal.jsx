/* eslint-disable react/prop-types */
import styles from './Modal.module.scss';
import { Button } from '../Button';

export function Modal({ title = 'Редактирование информации о ребенке' }) {
    // const [buttonDisable, setButtonDisable] = useState(true);

    return (
        <div className={styles["parent-modal"]}>
            <div className={styles.modal}>
                <h1>{title}</h1>
                <span>Фамилия</span>
                <div className={styles["input-wrapper"]}>
                    <input type="text" className={styles.input} />
                </div>

                <span>Имя</span>
                <div className={styles["input-wrapper"]}>
                    <input type="text" className={styles.input} />
                </div>

                <span>Отчество</span>
                <div className={styles["input-wrapper"]}>
                    <input type="text" className={styles.input} />
                </div>
                <div className={styles["button-wrapper"]}>
                    <Button name="Сохранить"/>
                    <Button 
                        name="Закрыть" />
                </div>
            </div>
        </div>
    )
}