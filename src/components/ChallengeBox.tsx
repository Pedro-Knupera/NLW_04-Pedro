import styles from '../styles/components/ChallengesBox.module.css';




export function ChallengesBox(){
    const hasActivateChallenger = true;
    return(
        <div className={styles.ChallengeBoxContainder}>
            {hasActivateChallenger ? (
                <div className={styles.challengeActivate}>
                    <header>Ganhe 400xp</header>

                    <main>
                        <img src="icons\body.svg"/>
                        <strong>Novo desafio</strong>
                        <p>Descanse os olhos por alguns minutos!</p>
                    </main>

                    <footer>
                         <button 
                         type="button"
                         className={styles.buttonFailChallenge}
                         >Falhei</button>
                         <button 
                         type="button"
                         className={styles.buttonSucessChallenge}
                         >Completei</button>
                    </footer>
                </div>
            ) : (
            <div className={styles.ChallengeNotActive}>
                    <strong>Finalize a count to release a challenge</strong>
                <p>
                    <img src="icons/level-up.svg" alt=""/>
                    Avançe de Level Completando o desafio!
                </p>
            </div>)}
        </div>
    )
}