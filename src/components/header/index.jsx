import Logo from './logo/Logo';
import MenuItem from './menuItem/MenuItem';
import { rootRoutes } from '../../mock/rootRoutes';
import LngSelector from './languageSelector/LanguageSelector';
import styles from './header.module.css';

const Header = () => {
    return (
        <header>
            <Logo />
            <nav aria-label='Menu Navigation'>
                <div className={styles.menu_list}>
                    {rootRoutes.map((route) => (
                        <MenuItem key={route.id} {...route} />
                    ))}
                </div>
                <LngSelector/>
            </nav>
        </header>
    );
};

export default Header;
