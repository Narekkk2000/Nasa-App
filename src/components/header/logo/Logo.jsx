import SharedImage from '../../common/image/Image';
import { logo } from '../../../constants';
import styles from './logo.module.css';
import { Link } from 'react-router-dom';

const Logo = () => {
    return (
        <div id={styles.logo}>
            <Link to={'/'}>
                <SharedImage src={logo} alt='logo' />
            </Link>
        </div>
    );
};

export default Logo;
