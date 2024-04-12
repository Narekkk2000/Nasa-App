import { useTranslation } from 'react-i18next';
import styles from './button.module.css';


const SharedButton = ({ text, onClick }) => {
    const {t} = useTranslation();

    return <button className={styles.shared_button} onClick={onClick}>{t(text)}</button>;
};

export default SharedButton;
