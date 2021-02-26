import { createContext, useState, ReactNode, useEffect } from 'react';
import Cookies from 'js-cookie';
import Challenges from '../../challenges.json'


interface challenge {
    type: "body" | "eve"
    description: string;
    amount: number;
}

interface ChallengesContextData {
    level: number;
    currentExperience: number;
    challengesCompleted: number;
    activeChallenge: challenge;
    experienceToNextLevel:number;
    startNewChallenge: () => void;
    LevelUp: () => void;
    resetChallenge: () => void;
    completeChallenger:()=>void;
}
interface ChallengesProviderProps {
    children: ReactNode;
}



export const ChallengesContexts = createContext({} as ChallengesContextData);

export function ChallengesProvider({ children }: ChallengesProviderProps) {
    const [level, setLevel] = useState(1);
    const [currentExperience, setCurrentExperience] = useState(0);
    const [challengesCompleted, setChallengesCompletes] = useState(0);

    const [activeChallenge, setActiveChallenge] = useState(null)

    const experienceToNextLevel = Math.pow((level + 1) * 4, 2)

    useEffect( () => {
        Notification.requestPermission()
    }, [] )

    useEffect(() => { 
        Cookies.set('level', String(level))
        Cookies.set('currentExperience', String(currentExperience))
        Cookies.set('challengesCompleted', String(challengesCompleted))
     }, [level, currentExperience, challengesCompleted])

    function LevelUp() {
        setLevel(level + 1)
    }

    function startNewChallenge() {
        const randomChallengeIndex = Math.floor(Math.random() * Challenges.length)
        const Challenge = Challenges[randomChallengeIndex]

        setActiveChallenge(Challenge)

        new Audio('/notification.mp3').play();

        if(Notification.permission === "granted"){
            new Notification('Novo desafio 🎉🎉', {
                body: `Valendo ${Challenge.amount}xp!`
            })
        }
    }

    function resetChallenge() {
        setActiveChallenge(null)
    }

    function completeChallenger(){
        if(!activeChallenge){
            return;
        }

        const { amount} = activeChallenge;


        let finalExperience = currentExperience + amount;

        if(finalExperience >= experienceToNextLevel){
            finalExperience= finalExperience - experienceToNextLevel;
            LevelUp();
        }

        setCurrentExperience(finalExperience);
        setActiveChallenge(null)
        setChallengesCompletes(challengesCompleted + 1)
    }
   
   
   
    return (
        <ChallengesContexts.Provider
            value={{
                level,
                currentExperience,
                activeChallenge,
                experienceToNextLevel,
                challengesCompleted,
                startNewChallenge,
                LevelUp,
                resetChallenge,
                completeChallenger,
            }}>
            {children}
        </ChallengesContexts.Provider>
    )
}