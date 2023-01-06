import Rows from './Rows'
import styles from './Table.module.css'

import { useEffect, useState } from 'react';
import Container from '../layouts/Container';

function Table() {

    const [procedure, setProcedure] = useState([])
    const [selectValue, setSelectValue] = useState("all")


    useEffect(() => {

        fetch(`http://localhost:5100/procedures`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then((resp) => resp.json())
            .then((data) => {
                selectValue === "all" ? setProcedure(data) : setProcedure(data.filter(data => data.category.name === selectValue))
            })

    }, [selectValue])

    //function delete row
    function removeProcedure(id) {

        fetch(`http://localhost:5100/procedures/${id}`, {
            method: "DELETE",
            headers: {
                'Content-Type': 'application/json'
            },
        })
            .then((resp) => resp.json())
            .then(() => {
                setProcedure(procedure.filter((procedure) => procedure.id !== id))
            })
    }

    function teste(e) {
        e.preventDefault()
        setSelectValue(e.target?.value)
    }

    return (
        <Container>
            <div className={styles.content_select}>
                <select onChange={teste}>
                    <option value="all" >Complete Table</option>
                    <option value="Dental">Dental</option>
                    <option value="Aesthetic" >Aesthetic</option>
                </select>
            </div>
            < div className={styles.content_head} >
                <table border="1">
                    <thead>
                        <tr>
                            <th>Code</th>
                            <th>Procedure Name</th>
                            <th>Procedure Description</th>
                            <th>Equipament Used</th>
                            <th>Procedure Budget</th>
                            <th>Actions</th>
                            <th>Category</th>
                        </tr>
                    </thead>

                    {selectValue ?
                        procedure.map((procedure) => (
                            <Rows
                                id={procedure?.id}
                                name={procedure?.name}
                                description={procedure?.description}
                                equipament={procedure?.equipament}
                                budget={procedure?.budget}
                                key={procedure?.id}
                                category={procedure?.category?.name}
                                handleRemove={removeProcedure}
                            />
                        )) : null}
                </table>
            </div >
        </Container>
    )
}

export default Table