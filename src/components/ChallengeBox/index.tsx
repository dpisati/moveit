import React, { useContext } from 'react'
import { ChallengesContext } from '../../contexts/ChallengesContext';

import styles from './ChallengeBox.module.css'

export default function ChallengeBox() {
    const { activeChallenge, resetChallenge } = useContext(ChallengesContext)

    return (
        <div className={styles.challengeBoxContainer}>
            { activeChallenge ? (
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
                            onClick={resetChallenge}
                        >
                            Failed
                        </button>
                        <button 
                            type="button"
                            className={styles.challengeSucceededButton}
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
