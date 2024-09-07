/* eslint-disable react/prop-types */
import { useSelector } from 'react-redux';
import styles from './Input.module.scss';
import { useModal } from '../../hooks/useModal';

export function Input({ label, type, name }) {
    const childInfo = useSelector((state) => state.childrenReducer.childInfo);
    const { onChangeHandler } = useModal()

    return (
        <>
            <span>{label}</span>
            <div className={styles["input-wrapper"]}>
                <input
                    type={type}
                    name={name}
                    className={styles.input}
                    value={childInfo[name] || ''}
                    onChange={onChangeHandler}
                />
            </div>
        </>
    );
};