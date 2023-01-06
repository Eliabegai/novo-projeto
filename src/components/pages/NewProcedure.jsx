import styles from './NewProcedure.module.css';

import Table from '../table/Table';

import { useState } from 'react'

import Modal from '../modal/Modal';

import ProjectForm from '../project/ProjectForm';
import Container from '../layouts/Container';

function NewProcedure({ text }) {

    const [isModalVisible, setIsModalVisible] = useState(true)
    const [isTableVisible, setIsTableVisible] = useState(false)


    function createPost(procedure) {

        fetch("http://localhost:5100/procedures", {      //caminho para salvar os dados
            method: "POST",     // envio do formulário
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(procedure),  // envia os dados do projeto via POST
        })
            .then((resp) => resp.json()) // transforma a resposta em json
            .then((data) => {
                setIsModalVisible(false)
            })
    }

    function toggleTable() {
        setIsTableVisible(!isTableVisible)
    }

    return (
        <>
            <Container>
                <div className={styles.home_container}>
                    <h1>New Procedure</h1>
                </div>
            </Container>
            <Container>
                <div className={styles.home_container_btn}>
                    <button onClick={(() => setIsModalVisible(true))} className={styles.btn}>New Procedure</button>
                    {isModalVisible ? (
                        <Modal onClose={() => setIsModalVisible(false)}>
                            <ProjectForm handleSubmit={createPost} btnText="Create Procedure" />
                        </Modal>
                    ) : null}
                </div>
            </Container>
            <Container>
                <div className={styles.home_container_table}>
                    <button onClick={toggleTable} className={styles.btn}>
                        {!isTableVisible ? 'Open Table' : 'Close Table'}
                    </button>
                    {isTableVisible ? (
                        <Table />
                    ) : null}
                </div>
            </Container>
        </>
    )
}

export default NewProcedure