import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import styles from './menuItem.module.css';

const MenuItem = ({ title, path }) => {
    const { t } = useTranslation();
    const navLinks = t('navLinks');


    return (
        <NavLink
            to={path}
            className={({ isActive }) => isActive ? `${styles.item_link} ${styles.active}` : styles.item_link}
            aria-label={navLinks[title]} 
        >
            {navLinks[title]} 
        </NavLink>
    );
};

MenuItem.propTypes = {
    title: PropTypes.string.isRequired,
    path: PropTypes.string.isRequired,
};

export default MenuItem;
