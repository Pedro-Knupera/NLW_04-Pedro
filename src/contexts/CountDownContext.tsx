import { createContext, ReactNode, useContext, useEffect, useState } from "react"
import { ChallengesContexts } from "./ChallengeContext";

interface CountdownContextData {
    minutos:Number;
    seconds:Number;
    hasFinished:boolean;
    active:boolean;
    startCountDown: ()=>void;
    stopCountDown:()=>void;
}

interface CountdownProviderProps{
    children:ReactNode;
}

export const CountdownContext = createContext({} as CountdownContextData)


export function CountdownProvider({children}:CountdownProviderProps) {

    const { startNewChallenge } = useContext(ChallengesContexts)
    
    
    const [time, setTime] = useState(0.1 * 60);
    const [active, setActive] = useState(false);
    const [hasFinished, setHasFinished] = useState(false);


    const minutos = Math.floor(time / 60);
    const seconds = time % 60;

    let countDownTimeout: NodeJS.Timeout

    function startCountDown() {
        setActive(true);
    }

    function stopCountDown() {
        clearTimeout(countDownTimeout);
        setActive(false)
        setTime(0.1 * 60)
        setHasFinished(false);
    }

    useEffect(() => {
        if (active && time > 0) {
            countDownTimeout = setTimeout(
                () => { setTime(time - 1) }, 1000)
        } else if (active && time === 0) {
            setHasFinished(true)
            setActive(false)
            startNewChallenge()
        }
    }, [active, time])
    return (
        <CountdownContext.Provider value={{
            minutos,
            seconds,
            hasFinished,
            active,
            startCountDown,
            stopCountDown,
        }}>
            {children}
        </CountdownContext.Provider>
    )   
}