import React from 'react'

import styles from "./CompletedChallenges.module.css"

export default function CompletedChallenges() {
    return (
        <div className={styles.completeChallengesContainer}>
            <span>Completed Challenges</span>
            <span>5</span>
        </div>
    )
}
