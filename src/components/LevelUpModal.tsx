import { useContext } from 'react';
import { ChallengesContexts } from '../contexts/ChallengeContext';
import styles from '../styles/components/LevelUpModal.module.css';


export function LevelUpModal(){
    const { level } = useContext(ChallengesContexts)
    return(
        <div className={styles.overlay}>
            <div className={styles.container}>
                <header>{level}</header>

                <strong>Congratiulations</strong>
                <p>Vpçe alcançou um novo nivel!</p>


                <button type="button">
                    <img src="/icons/close.svg" alt="Close Modal"/>
                </button>
            </div>
        </div>
    )
}