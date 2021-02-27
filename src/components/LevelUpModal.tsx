import styles from '../styles/components/LevelUpModal.module.css';


export function LevelUpModal(){
    return(
        <div className={styles.overlay}>
            <div className={styles.container}>
                <header></header>

                <strong>Congratiulations</strong>
                <p>Vpçe alcançou um novo nivel!</p>


                <button type="button">
                    <img src="icons/close.svg" alt="Close Modal"/>
                </button>
            </div>
        </div>
    )
}