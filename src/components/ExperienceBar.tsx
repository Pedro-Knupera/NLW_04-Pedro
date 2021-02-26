import { useContext } from 'react';
import { ChallengesContexts } from '../contexts/ChallengeContext';
import styles from '../styles/components/ExperienceBar.module.css';



export function ExperienceBar() {
    const {currentExperience, experienceToNextLevel} = useContext(ChallengesContexts)

    const percentToNextLevel = Math.round(currentExperience * 100) / experienceToNextLevel


    return(
        <header className={styles.experienceBar} >

            <span className="currentExperience" style={{left: `${percentToNextLevel}%`}}>{currentExperience} Xp</span>

            <div>
                <div style={{width: `${percentToNextLevel}%`}} />

                
            </div>
            
            <span>{experienceToNextLevel} xp</span>

        </header>

    );

}