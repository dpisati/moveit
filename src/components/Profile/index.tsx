import React, { useContext } from 'react'
import { ChallengesContext } from '../../contexts/ChallengesContext'

import styles from './Profile.module.css'

export default function Profile() {

    const { level } = useContext(ChallengesContext);

    return (
        <div className={styles.profileContainer}>
            <img src="https://github.com/dpisati.png" alt="Profile Picture" />
            <div>
                <strong>Daniel Pisati</strong>
                
                <p>
                    <img src="icons/level.svg" alt="Level Up" />
                    Level { level }
                </p>
            </div>
        </div>
    )
}
