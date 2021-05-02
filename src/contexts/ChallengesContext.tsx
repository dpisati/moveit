import { createContext, useState, ReactNode, useEffect } from 'react'
import challenges from '../../challenges.json';
import Cookies from 'js-cookie';
import LevelUpModal from '../components/LevelUpModal';

interface Challenge {
    type: string;
    description: string;
    amount: number;     
}

interface ChallengesProviderProps {
    children: ReactNode;
    level: number;
    currentExp: number;
    challengesCompleted: number;
}

interface ChallengesContextData {
    level: number; 
    currentExp: number;
    experienceToNextLevel: number;
    challengesCompleted: number; 
    activeChallenge: Challenge | null;
    levelUp: () => void;
    startNewChallenge: () => void;
    resetChallenge: () => void;
    completeChallenge: () => void;
    closeLeveUpModal: () => void;
}

export const ChallengesContext = createContext({} as ChallengesContextData)


export function ChallengesProvider({ children, ...rest }: ChallengesProviderProps) {
    const [level, setLevel] = useState(rest.level ?? 1);
    const [currentExp, setCurrentExp] = useState(rest.currentExp ?? 0);
    const [challengesCompleted, setChallengesCompleted] = useState(rest.challengesCompleted ?? 0);

    const [activeChallenge, setActiveChallenge] = useState(null);

    const [ isLevelUpModalOpen, setIsLevelUpModalOpen] = useState(false)

    const experienceToNextLevel = Math.pow((level + 1) * 4, 2);

    useEffect(() => {
        Notification.requestPermission();
    },[])

    useEffect(() => {
        Cookies.set('level', String(level));
        Cookies.set('currentExp', String(currentExp));
        Cookies.set('challengesCompleted', String(challengesCompleted));
    }, [level, currentExp, challengesCompleted])


    function levelUp() {
        setLevel(level + 1);
        setIsLevelUpModalOpen(true);
    }

    function closeLeveUpModal() {
        setIsLevelUpModalOpen(false);
    }

    function startNewChallenge() {
        const randomChallengeIndex = Math.floor(Math.random() * challenges.length);
        const challenge = challenges[randomChallengeIndex];

        setActiveChallenge(challenge);

        new Audio('/notification.mp3').play();

        if(Notification.permission === 'granted') {
            new Notification('New Challenge 🎉', {
                body: `You can earn ${challenge.amount}xp!`
            })
        }
    }

    function resetChallenge() {
        setActiveChallenge(null);
    }

    function completeChallenge() {
        if(!activeChallenge) {
            return;
        }

        const { amount } = activeChallenge;

        let finalExperience = currentExp + amount;

        if (finalExperience >= experienceToNextLevel) {
            finalExperience = finalExperience - experienceToNextLevel;            
            levelUp();
        }

        setCurrentExp(finalExperience);
        setActiveChallenge(null);
        setChallengesCompleted(challengesCompleted + 1);
    }
   
    return (
        <ChallengesContext.Provider 
            value={{ 
                level, 
                levelUp,
                currentExp,
                challengesCompleted,
                startNewChallenge,
                activeChallenge,
                resetChallenge,
                experienceToNextLevel,
                completeChallenge,
                closeLeveUpModal                
            }}
        >
            {children}

            { isLevelUpModalOpen && <LevelUpModal />}
        </ChallengesContext.Provider>

    )
}