/* eslint-disable react/prop-types */
import styles from './Input.module.scss'

export function Input() {

    return (
        <div className={styles["input-wrapper"]}>
            <input 
                id="search" 
                className= {`${styles["input-find"]} ${styles["header-item"]}`} 
                type="text"
                placeholder='Поиск' 
            />
            <label htmlFor="search" className={styles.label}>
                <img src="../public/icons/search.png" alt="search-img" className={styles["search-img"]} />
            </label>
        </div>
    )
}
