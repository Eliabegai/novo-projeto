import styles from './Modal.module.css'



function Modal({ id = "modal", onClose = () => { }, children }) {

    const handleOutSideClick = (e) => {
        if (e.target.id === id) onclose();
    };

    return (
        <div id={id} className={styles.modal} onClick={handleOutSideClick}>
            <div className={styles.container}>
                <button className={styles.close} onClick={onClose}>CLOSE</button>
                <div className={styles.content}>
                    {children}
                </div>
            </div>

        </div>
    )
}

export default Modal