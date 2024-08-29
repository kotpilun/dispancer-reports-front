/* eslint-disable react/prop-types */
import styles from './Header.module.scss';

import { Button } from '../Button';
import { Input } from '../Input';

export function Header({ setFilterText, onClickHandle }) {
    
    return (
        <div className={styles["table-header-wrapper"]}>
            <Button name="Добавить" action='add' onClickHandle={onClickHandle}/>
            <Button name="Сформировать отчет" onClickHandle={onClickHandle} />
            <Input setFilterText={setFilterText}/>
        </div>
        );
};

