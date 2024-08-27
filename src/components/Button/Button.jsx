/* eslint-disable react/prop-types */
import styles from './Button.module.scss';

export const Button = ({name='Button'}) => {
    
    return (
        <button className={styles.button} >
            {name}
        </button>
    );
};


