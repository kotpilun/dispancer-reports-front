/* eslint-disable react/prop-types */
import styles from './Counter.module.scss'

export function Counter({ altogether, selected }) {
    
    return (
        <div className={styles["counter-wrapper"]}>
            <div className={styles.counter}>
                Всего: {altogether} 
            </div>
            <div className={styles.counter}>
                Выбрано: {selected}
            </div>

        </div>
    )
}