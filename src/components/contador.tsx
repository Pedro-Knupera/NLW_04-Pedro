import { useState, useEffect } from "react"
import styles from "../styles/components/contador.module.css";


let countDownTimeout: NodeJS.Timeout

export function ContadorContainer() {
    const [time, setTime] = useState(0.1 * 60);
    const [active, setActive] = useState(false);
    const [hasFinished, setHasFinished] = useState(false);


    const minutos = Math.floor(time / 60);
    const seconds = time % 60;

    const [minutosLeft, minutosRigth] = String(minutos).padStart(2, '0').split(' ');
    const [secondsLeft, secondsRigth] = String(seconds).padStart(2, '0').split(' ');

    function startCountDown() {
        setActive(true);
    }

    function stopCountDown() {
        clearTimeout(countDownTimeout);
        setActive(false)
        setTime(0.1 * 60)
    }

    useEffect(() => {
        if (active && time > 0) {
            countDownTimeout = setTimeout(
                () => { setTime(time - 1) }, 1000)
        } else if(active && time === 0){
            setHasFinished(true)
            setActive(false)
        }
    }, [active, time])

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

            {hasFinished ?  (
            <button
            disabled
            className={styles.startCountDown}
            >
            Count closed
            </button>)  :

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
            </div> }
        </div>
    )
}