import styles from './Spinner.module.scss'

export function Spinner() {
    return (
        <div className={styles["spinner-backgound"]}>
            <span className={styles.loader}></span>
        </div>
    )
}