import styles from '../styles/Home.module.css'

import CompletedChallenges from '../components/CompletedChallenges'
import ExperienceBar from '../components/ExperienceBar'
import Countdown from '../components/Countdown'
import Profile from '../components/Profile'

import Head from 'next/head';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Home | Move It</title>
      </Head>
      <ExperienceBar />

      <section>
        <div>
          <Profile />
          <CompletedChallenges />
          <Countdown />
        </div>
        <div>

        </div>
      </section>


    </div>
  )
}
