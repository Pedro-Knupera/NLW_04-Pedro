import { useContext } from "react";
import { ChallengesContexts } from "../contexts/ChallengeContext";
import styles from "../styles/components/Profile.module.css";

export function Profile(){
    const {level} = useContext(ChallengesContexts)
    return(
        <div className={styles.profileContainer}>
            <img src="https://github.com/Pedro-Knupera.png" alt=""/>
            <div>
                <strong>Pedro Rodrigues C. Miranda</strong>
                <p>
                <img src="icons/level.svg" alt=""/>
                Level {level}
                </p>
            </div>
        </div>
    )
}