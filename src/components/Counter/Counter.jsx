/* eslint-disable react/prop-types */
import styles from './Counter.module.scss'

export function Counter({ totalChildren, selected }) {
    
    return (
        <div className={styles["counter-wrapper"]}>
            <div className={styles.counter}>
                Всего: {totalChildren} 
            </div>
            <div className={styles.counter}>
                Выбрано: {selected}
            </div>

        </div>
    )
}