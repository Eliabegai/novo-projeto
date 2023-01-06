import styles from './ProjectForm.module.css';
import { useState, useEffect } from 'react';

import Container from '../layouts/Container';
import Input from '../form/Input';
import Select from '../form/Select';
import SubmitButton from '../form/SubmitButton';


function ProjectForm({ id, handleSubmit, btnText, name, description, equipament, budget }) {

    const [procedure, setProcedure] = useState({id});
    const [categories, setCategories] = useState([]);
    const [inputValueName, setInputValueName] = useState([name || '']);
    const [inputValueDescription, setInputValueDescription] = useState([description || '']);
    const [inputValuEquipament, setInputValuEquipament] = useState([equipament || '']);
    const [inputValueBudget, setInputValueBudget] = useState([budget || '']);

    
    function clearValue() {
        setInputValueName('')
        setInputValueDescription('')
        setInputValuEquipament('')
        setInputValueBudget('')
        procedure.category.id = ''
    }


    useEffect(() => {
        fetch("http://localhost:5100/categories", {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then((resp) => resp.json())
            .then((data) => { setCategories(data) })
    }, [])


    const submit = (e) => {
        e.preventDefault()
        handleSubmit(procedure)
        clearValue() 
    }

    function handleChange(e) {
        switch (e.target.name) {
            case 'name':
                setInputValueName(e.target.value)
                break;
            case 'description':
                setInputValueDescription(e.target.value)
                break;
            case 'equipament':
                setInputValuEquipament(e.target.value)
                break;
            case 'budget':
                setInputValueBudget(e.target.value)
                break;
            // no default
        };
        setProcedure({ ...procedure, [e.target.name]: e.target.value })
    }

    function handleCategory(e) {
        setProcedure({
            ...procedure,
            category: {
                id: e.target.value,
                name: e.target.options[e.target.selectedIndex].text,
            },
        })
    }

    return (
        <Container>
            <form onSubmit={submit} className={styles.content_table}>
                <Input
                    type="text"
                    text="Procedure:"
                    name="name"
                    placeholder="Procedure Name"
                    handleOnChange={handleChange}
                    value={inputValueName} 
                />
                <Input
                    type="text"
                    text="Procedure Description:"
                    name="description"
                    placeholder="Procedure Description"
                    handleOnChange={handleChange}
                    value={inputValueDescription}
                />
                <Input
                    type="text"
                    text="Equipament Used:"
                    name="equipament"
                    placeholder="Equipament Used"
                    handleOnChange={handleChange}
                    value={inputValuEquipament}
                />
                <Input
                    type="number"
                    text="Procedure Value:"
                    name="budget"
                    placeholder="Procedure Value"
                    handleOnChange={handleChange}
                    value={inputValueBudget}
                />
                <Select
                    name="category_id"
                    text="Category Select"
                    options={categories}
                    handleOnChange={handleCategory}
                    value={procedure.category ? procedure.category.id : ''}
                />
                <SubmitButton text={btnText} />
            </form>
        </Container>
    )
}

export default ProjectForm