import { Link } from 'react-router-dom'
import styles from './Navbar.module.css'
import Container from './Container'


function Navbar() {
    return (
        <nav className={styles.navbar}>
            <Container className="min-height">
                <ul className={styles.list}>
                    <li className={styles.item}>
                        <Link to="/">Home</Link>
                    </li>
                    <li className={styles.item}>
                        <Link to="/Procedure">Procedure</Link>
                    </li>
                    <li className={styles.item}>
                        <Link to="/NewProcedure">New Procedure</Link>
                    </li>
                </ul>
            </Container>
        </nav>
    )
}

export default Navbar