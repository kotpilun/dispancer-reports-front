/* eslint-disable react/prop-types */
import styles from './Input.module.scss'
import findIcon from '../../assets/icons/search.png'
import { useDispatch } from 'react-redux'
import { setSearchValue } from '../../redux/slices/childrenListSlice';

export function Input() {

    const dispatch = useDispatch();
    
    const searchHandle = (e) => {
        dispatch(setSearchValue(e.target.value));
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
                <img src={findIcon} alt="search-img" className={styles["search-img"]} />
            </label>
        </div>
    )
}
