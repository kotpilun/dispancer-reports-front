/* eslint-disable react/prop-types */
import { useSelector } from 'react-redux'
import styles from './Counter.module.scss'

export function Counter({ totalChildren }) {
    const count = useSelector((state) => state.countReduser.count)
    return (
        <div className={styles["counter-wrapper"]}>
            <div className={styles.counter}>
                Всего: {totalChildren} 
            </div>
            <div className={styles.counter}>
                Выбрано: {count}
            </div>

        </div>
    )
}