import styles from './Home.module.css'

import { Link } from 'react-router-dom'


function Home({ text }) {

    return (
        <div className={styles.home_container}>
            <h1>Home</h1>

            <div className={styles.content}>
                <Link to="/procedure">
                    <button>PROCEDURES</button>
                </Link>
                <Link to="/newprocedure">
                    <button>NEW PROCEDURES</button>
                </Link>
            </div>

        </div>
    )
}

export default Home