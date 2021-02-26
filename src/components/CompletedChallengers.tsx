import { useContext } from 'react';
import { ChallengesContexts } from '../contexts/ChallengeContext';
import styles from '../styles/components/completedChallengersContainer.module.css';


export function CompletedChallenges() {
    const {challengesCompleted } = useContext(ChallengesContexts)
    
    return (
        <div className={styles.completedChallengersContainer}>
            <span>Challenges completed</span>
            <span>{challengesCompleted}</span>
        </div>
    )
}