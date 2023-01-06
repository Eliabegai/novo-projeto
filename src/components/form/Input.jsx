import styles from "./Input.module.css"


function Input({ type, text, name, placeholder, handleOnChange, value }) {
    return (
        <div className={styles.card}>
            <div className={styles.lineInput}>
                <label htmlFor={name}>
                    <span>{text}</span>
                </label>
                <input
                    type={type}
                    name={name}
                    id={name}
                    placeholder={placeholder}
                    onChange={handleOnChange}
                    value={value} />
            </div>
        </div>
    )
}

export default Input