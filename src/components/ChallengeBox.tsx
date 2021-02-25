import styles from '../styles/components/ChallengesBox.module.css';




export function ChallengesBox(){
    return(
        <div className={styles.ChallengeBoxContainder}>
            <div className={styles.ChallengeNotActive}>
                <strong>Finalize a count to release a challenge</strong>
                <p>
                    <img src="icons/level-up.svg" alt=""/>
                </p>
            </div>
        </div>
    )
}