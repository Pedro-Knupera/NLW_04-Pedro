import styles from '../styles/components/completedChallengersContainer.module.css';


export function CompletedChallengers() {
    return (
        <div className={styles.completedChallengersContainer}>
            <span>Challenges completed</span>
            <span>5</span>
        </div>
    )
}