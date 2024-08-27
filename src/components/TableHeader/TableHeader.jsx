import styles from './TableHeader.module.scss'

export function TableHeader() {
    return(
    <div className={styles["table-header-wrapper"]}>
        <div className={`${styles["table-header"]} ${styles["table-cell-center"]} ${styles["table-cell-action"]}`}>
            <img className={styles["checkbox-img"]} src="../public/icons/checkbox.png" alt="checkbox" />
        </div>
        <div className={styles["table-header"]}>Фамилия</div>
        <div className={styles["table-header"]}>Имя</div>
        <div className={styles["table-header"]}>Отчество</div>
        <div className={`${styles["table-header"]} ${styles["table-cell-action"]}`}>Действие</div>
    </div>
    )
}

