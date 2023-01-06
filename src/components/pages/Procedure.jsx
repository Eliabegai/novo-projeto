import styles from './Procedure.module.css'

import Table from '../table/Table'

import Container from '../layouts/Container'
import { Link } from 'react-router-dom'


function Procedure({ text }) {

    return (
        <Container>
            <div className={styles.home_container}>
                <h1>Procedure Table</h1>
            </div>
            <div className={styles.container_btn}>
                <Link to="/newProcedure" openModal="true">
                    <button className={styles.btn}>New Procedure</button>
                </Link>
            </div>

            <div className={styles.table_container}>
                <Table handleSubmit />
            </div>
        </Container>
    )
}

export default Procedure