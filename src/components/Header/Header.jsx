/* eslint-disable react/prop-types */
import styles from './Header.module.scss';

import { Button } from '../Button';
import { SearchInput } from '../SearchInput';

export function Header({ onClickHandle }) {
    
    return (
        <div className={styles["table-header-wrapper"]}>
            <Button name="Добавить" action='toggleModal' onClickHandle={onClickHandle}/>
            <Button name="Сформировать заявки" action='toggleReportModal' onClickHandle={onClickHandle}/>
            <SearchInput />
        </div>
        );
};

