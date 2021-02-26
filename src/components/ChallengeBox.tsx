import { useContext } from 'react';

import {ChallengesContexts} from '../contexts/ChallengeContext'

import styles from '../styles/components/ChallengesBox.module.css';




export function ChallengesBox() {
    const {activeChallenge, resetChallenge} = useContext(ChallengesContexts)


    return (

        <div className={styles.ChallengeBoxContainder}>

            {activeChallenge ? (

                <div className={styles.challengeActivate}>

                    <header>Ganhe {activeChallenge.amount}</header>

                    <main>
                        <img src="icons\body.svg" />
                        <strong>Novo desafio</strong>
                        <p>{activeChallenge.description}</p>
                    </main>

                    <footer>
                        <button
                            type="button"
                            className={styles.failedButtonChallenge}
                            onClick={resetChallenge}
                        >Falhei</button>
                        <button
                            type="button"
                            className={styles.succeededButtonChallenge}
                        >Completei</button>
                    </footer>
                </div>

            ) : (

                    <div className={styles.ChallengeNotActive}>
                        <strong>Finalize a count to release a challenge</strong>

                        <p>
                            <img src="icons/level-up.svg" alt="" />
                    Avançe de Level Completando o desafio!
                </p>
                    </div>)}
        </div>
    )
}