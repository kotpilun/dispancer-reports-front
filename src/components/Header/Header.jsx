/* eslint-disable react/prop-types */
import styles from './Header.module.scss';

import { Button } from '../Button';
import { SearchInput } from '../SearchInput';

export function Header({ onAddHandle, onClickHandle }) {
    
    return (
        <div className={styles["table-header-wrapper"]}>
            <Button name="Добавить" action='toggleModal' onClickHandle={onAddHandle}/>
            <Button name="Сформировать отчет"   action='create doc' onClickHandle={onClickHandle}/>
            <SearchInput />
        </div>
        );
};

