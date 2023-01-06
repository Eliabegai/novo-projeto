import { AiFillDelete, AiFillEdit } from 'react-icons/ai';

import styles from './Rows.module.css';

import React, { useState } from 'react'
import Modal from '../modal/Modal'
import ProjectForm from '../project/ProjectForm';

function Rows({ id, name, description, equipament, budget, category, handleRemove }) {

    const [isModalVisible, setIsModalVisible] = useState(false)

    function setVisible() {
        setIsModalVisible(true)
    }

    const remove = (e) => {
        e.preventDefault()
        handleRemove(id)
    }

    function editProcedure(procedure) {
        fetch(`http://localhost:5100/procedures/${procedure.id}`, {
            method: "PATCH",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(procedure),
        })
            .then((resp) => resp.json())
            .then(setIsModalVisible(false))
    }


    return (
        <tbody id="tbody">
            <tr className={styles.rows}>
                <td className={styles.center}>{id}</td>
                <td>{name}</td>
                <td>{description}</td>
                <td>{equipament}</td>
                <td>{budget}</td>
                <td className={styles.action}>
                    <AiFillEdit onClick={setVisible} />         {/* quando clicar no botão, vai mudar o estado do modal para visível */}
                    <AiFillDelete onClick={remove} />           {/* quando clicar no botão, chamar função para remover a linha */}
                </td>
                <td>{category}</td>
            </tr>
            <div>
                {isModalVisible ? (
                    <Modal onClose={() => setIsModalVisible(false)} >
                        <ProjectForm
                            btnText="Editar Procedimento"
                            name={name}
                            description={description}
                            equipament={equipament}
                            budget={budget}
                            handleSubmit={editProcedure}
                            id={id}
                        />
                    </Modal>
                ) : null}
            </div>
        </tbody >
    )
}

export default Rows