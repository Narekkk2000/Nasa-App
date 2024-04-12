import Header from '../header';
import styles from './mainTemplate.module.css';

const MainTemplate = ({ children }) => {
    return (
        <>
            <Header />
            <main className={styles.main}>{children}</main>
        </>
    );
};

export default MainTemplate;
