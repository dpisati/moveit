import React, { useContext } from 'react'
import { ChallengesContext } from '../../contexts/ChallengesContext';

import styles from './LevelUpModal.module.css';

export default function LevelUpModal() {
    const { level, closeLeveUpModal } = useContext(ChallengesContext)

    return (
        <div className={styles.overlay}>
            <div className={styles.modalContainer}>
                <header>{level}</header>
                <strong>Congratulations!</strong>
                <p>You reach a new level.</p>

                <button type="button" onClick={closeLeveUpModal}>
                    <img src="/icons/close.svg" alt="Close Modal" />
                </button>
            </div>            
        </div>
    )
}
