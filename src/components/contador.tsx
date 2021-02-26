import { useState, useEffect, useContext } from "react"
import { CountdownContext } from "../contexts/CountDownContext";
import styles from "../styles/components/contador.module.css";





export function ContadorContainer() {

    const {
        minutos, 
        seconds, 
        hasFinished, 
        active, 
        stopCountDown, 
        startCountDown} = useContext(CountdownContext)

    const [minutosLeft, minutosRigth] = String(minutos).padStart(2, '0').split(' ');
    const [secondsLeft, secondsRigth] = String(seconds).padStart(2, '0').split(' ');

    

    return (
        <div>
            <div className={styles.contadorContainer}>
                <div>
                    <span>
                        {minutosLeft}
                        {minutosRigth}
                    </span>
                </div>
                <span>:</span>
                <div>
                    <span>
                        {secondsLeft}
                        {secondsRigth}
                    </span>
                </div>
            </div>

            {hasFinished ? (
                <button
                    disabled
                    className={styles.startCountDown}
                >
                    Count closed
                </button>) :

                <div>
                    {active ? (
                        <button
                            type="button"
                            className={`${styles.startCountDown} ${styles.startCountDownActive}`}
                            onClick={stopCountDown}
                        >
                            Stop count
                        </button>) : (<button
                            type="button"
                            className={styles.startCountDown}
                            onClick={startCountDown}
                        >
                            Start count
                        </button>)}
                </div>}
        </div>
    )
}
