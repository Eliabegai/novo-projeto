import { Link } from 'react-router-dom'
import styles from './Footer.module.css'
import logo from '../img/logo_clinicorp.png'

function Footer() {
    return (
        <footer className={styles.footer}>
            <ul className={styles.social_list}>
                <li>
                    <Link to="/">
                        <img src={logo} alt="Clinicorp" />
                    </Link>
                </li>
            </ul>
            <p className={styles.copy_right}>
                <span>Procedure Table</span>
            </p>
        </footer>
    )
}

export default Footer