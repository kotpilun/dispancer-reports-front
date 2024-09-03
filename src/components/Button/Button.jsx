/* eslint-disable react/prop-types */
import styles from './Button.module.scss';

export const Button = ({ name='Button', action, onClickHandle, isEnable = true }) => {
    return (
        <button className={isEnable ? styles.button: styles["button-disabled"]} onClick={() => onClickHandle(action, isEnable)}>
            {name}
        </button>
    );
};


