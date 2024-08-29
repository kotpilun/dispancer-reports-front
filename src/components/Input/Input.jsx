/* eslint-disable react/prop-types */
import styles from './Input.module.scss'

export function Input({ setFilterText }) {
    const searchHandle = (e) => {
        setFilterText(e.target.value);
    }

    return (
        <div className={styles["input-wrapper"]}>
            <input 
                id="search" 
                className= {`${styles["input-find"]} ${styles["header-item"]}`} 
                type="text"
                placeholder='Поиск' 
                onChange={(e) => searchHandle(e)}
            />
            <label htmlFor="search" className={styles.label} >
                <img src="../public/icons/search.png" alt="search-img" className={styles["search-img"]} />
            </label>
        </div>
    )
}
