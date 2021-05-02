import React, { useContext } from 'react'
import { ChallengesContext } from '../../contexts/ChallengesContext';
import { CountdownContext } from '../../contexts/CountdownContext';

import styles from './ChallengeBox.module.css'

export default function ChallengeBox() {
    const { activeChallenge, resetChallenge, completeChallenge } = useContext(ChallengesContext)
    const { resetCountdown } = useContext(CountdownContext);

    function handleChallengeSucceeded() {
        completeChallenge();
        resetCountdown();
    }

    function handleChallengeFailed() {
        resetChallenge();
        resetCountdown();
    }

    return (
        <div className={styles.challengeBoxContainer}>
            { activeChallenge && activeChallenge.type !== '' ? (
                <div className={styles.challengeActive}>
                    <header>Get {activeChallenge.amount} xp</header>                    
                    <main>
                        <img src={`icons/${activeChallenge.type}.svg`} alt={activeChallenge.type} />
                        <strong>New Challenge</strong>
                        <p>{activeChallenge.description}</p>
                    </main>
                        
                    <footer>
                        <button 
                            type="button"
                            className={styles.challengeFailedButton}
                            onClick={handleChallengeFailed}
                        >
                            Failed
                        </button>
                        <button 
                            type="button"
                            className={styles.challengeSucceededButton}
                            onClick={handleChallengeSucceeded}
                        >
                            Finished
                        </button>
                    </footer>
                </div>
            ) : (
                <div className={styles.challengeNotActive}>
                    <strong>Finish a cicle to get a challenge to be completed</strong>
                    <p>
                        <img src="icons/level-up.svg" alt="Level up" />
                            Level up by finishing challenges.
                    </p>
                </div>
            )}
        </div>
    )
}
