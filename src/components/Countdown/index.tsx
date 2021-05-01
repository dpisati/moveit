import React, { useContext } from 'react'
import {CountdownContext} from '../../contexts/CountdownContext';

import styles from './CountDown.module.css';


export default function Countdown() {

    const { 
        minutes, 
        seconds, 
        hasFinished, 
        isActive, 
        startContdown,
        resetCountdown 
    } = useContext(CountdownContext);
    
    const [minutesLeft, minutesRight] = String(minutes).padStart(2, '0').split('');
    const [secondsLeft, secondsRight] = String(seconds).padStart(2, '0').split('');

 
    return (
        <div>
            <div className={styles.countdownContainer}>
                <div>
                    <span>{minutesLeft}</span>
                    <span>{minutesRight}</span>
                </div>
                <span>:</span>
                <div>
                    <span>{secondsLeft}</span>
                    <span>{secondsRight}</span>
                </div>
            </div>

            {hasFinished ? (
                <button 
                    disabled
                    className={styles.countdownButton}
                >
                        Cicle finished
                </button>
            ) : (
                <>
                    {isActive ? (
                        <button 
                            type="button" 
                            onClick={resetCountdown} 
                            className={`${styles.countdownButton} ${styles.countdownButtonActive}`}
                        >
                            Abourt cicle
                        </button>
                    ) : (            
                        <button 
                            type="button" 
                            onClick={startContdown} 
                            className={styles.countdownButton}
                        >
                                Start new cicle
                        </button>
                    )}
                </>
            )}
        </div>
    )
}
