import React, { useContext } from 'react'
import { ChallengesContext } from '../../contexts/ChallengesContext'

import styles from "./CompletedChallenges.module.css"

export default function CompletedChallenges() {
    const { challengesCompleted } = useContext(ChallengesContext)
    return (
        <div className={styles.completeChallengesContainer}>
            <span>Completed Challenges</span>
            <span>{challengesCompleted}</span>
        </div>
    )
}
