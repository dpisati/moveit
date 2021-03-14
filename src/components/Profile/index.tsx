import React from 'react'

import styles from './Profile.module.css'

export default function Profile() {
    return (
        <div className={styles.profileContainer}>
            <img src="https://github.com/dpisati.png" alt="Profile Picture" />
            <div>
                <strong>Daniel Pisati</strong>
                
                <p>
                    <img src="icons/level.svg" alt="Level Up" />
                    Level 1
                </p>
            </div>
        </div>
    )
}
