/* eslint-disable react/prop-types */
import styles from './Button.module.scss';

export const Button = ({name='Button', action, onClickHandle}) => {
    
    return (
        <button className={styles.button} onClick={() => onClickHandle(action)}>
            {name}
        </button>
    );
};


