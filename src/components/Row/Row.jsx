/* eslint-disable react/prop-types */
import styles from './Row.module.scss'

export function Row({ name, surname, secondName }) 
    {

    return (
        <div className={styles["table-context-wrapper"]}>
            <div className={`${styles["table-cell-center"]} ${styles["table-cell-action"]}`}>
                <input 
                    type="checkbox" />
            </div>
            <div className={styles["table-context"]}>{surname}</div>
            <div className={styles["table-context"]}>{name}</div>
            <div className={styles["table-context"]}>{secondName}</div>
            <div className={styles["table-cell-action"]}>
                <div className={styles["image-wrapper"]}>
                    <div className={styles.image}><img className={styles["edit-img"]} src="../public/icons/edit.png" alt="edit" /></div>
                    <div className={styles.image}><img className={styles["edit-img"]} src="../public/icons/delete.png" alt="delete" /></div>
                </div>
            </div>
        </div>
        
    );
};

