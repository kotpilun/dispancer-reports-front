/* eslint-disable react/prop-types */
import { useSelector } from 'react-redux';
import styles from './Select.module.scss'
import { useModal } from '../../hooks/useModal';

export function Select({ label, name, renderFunction }) {
    const childInfo = useSelector((state) => state.childrenReducer.childInfo);
    const { onChangeHandler } = useModal();

    return (
        <>
        <span>{ label }</span>
            <div className={styles["input-wrapper"]}>
            <select
                name={name}
                id={name}
                value={childInfo?.[name] || ''}
                onChange={onChangeHandler}
            >
                {/* {renderDispancers()} */}
                {renderFunction}
            </select>
        </div>
        </>
    );
};