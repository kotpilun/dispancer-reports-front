/* eslint-disable react/prop-types */
import styles from './Header.module.scss';

import { Button } from '../Button';
import { Input } from '../Input';

export function Header({ setFilterText }) {
    
    return (
        <div className={styles["table-header-wrapper"]}>
            <Button name="Добавить"/>
            <Button name="Сформировать отчет"/>
            <Input setFilterText={setFilterText}/>
        </div>
        );
};

