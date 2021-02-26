import { useContext } from 'react';

import {ChallengesContexts} from '../contexts/ChallengeContext'
import { CountdownContext } from '../contexts/CountDownContext';

import styles from '../styles/components/ChallengesBox.module.css';




export function ChallengesBox() {
    const {activeChallenge, resetChallenge, completeChallenger} = useContext(ChallengesContexts)
    const { stopCountDown } = useContext(CountdownContext)

    function handleChallengeSuccesed(){
        completeChallenger()
        stopCountDown();
    }

    function handleChallengeFailed() {
        resetChallenge();
        stopCountDown();
    }


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
                            onClick={handleChallengeFailed}
                        >Falhei</button>
                        <button
                            type="button"
                            className={styles.succeededButtonChallenge}
                            onClick={handleChallengeSuccesed}
                        >Completei</button>
                    </footer>
                </div>

            ) : (

                    <div 
                    className={styles.ChallengeNotActive}
                    >
                        <strong>Finalize a count to release a challenge</strong>

                        <p>
                            <img src="icons/level-up.svg" alt="" />
                    Avançe de Level Completando o desafio!
                </p>
                    </div>)}
        </div>
    )
}