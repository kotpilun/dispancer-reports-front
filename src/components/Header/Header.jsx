/* eslint-disable react/prop-types */
import styles from './Header.module.scss';

import { Button } from '../Button';
import { Input } from '../Input';

export const Header = () => {
    
    return(
        <div className={styles["table-header-wrapper"]}>
            <Button name="Добавить"/>
            <Button name="Сформировать отчет"/>
            <Input/>
        </div>
        );
};

