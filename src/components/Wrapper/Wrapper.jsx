/* eslint-disable react/prop-types */
import styles from './Wrapper.module.scss';

export function Wrapper({children}) {
    return (
        <div className={styles.wrapper}>
            {children}
        </div>
    );
}