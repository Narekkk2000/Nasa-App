import { useTranslation } from 'react-i18next';
import styles from './home.module.css';

const Home = () => {
  const {t} = useTranslation();

  return (
    <div className={styles.home_page_wrapper}>
      <h1 className={styles.home_page_title}>{t('homePageTitle')}</h1>
    </div>
  );
};

export default Home;