import styles from '../styles/Home.module.css'

import {GetServerSideProps} from 'next'

import CompletedChallenges from '../components/CompletedChallenges'
import ExperienceBar from '../components/ExperienceBar'
import ChallengeBox from '../components/ChallengeBox'
import Countdown from '../components/Countdown'
import Profile from '../components/Profile'

import Head from 'next/head';
import { CountdownProvider } from '../contexts/CountdownContext'
import { ChallengesProvider } from '../contexts/ChallengesContext'

interface HomeProps {
  level: number;
  currentExp: number;
  challengesCompleted: number;
}

export default function Home(props: HomeProps) {


  return (
    <ChallengesProvider 
      level={props.level}
      currentExp={props.currentExp}
      challengesCompleted={props.challengesCompleted}
    >
      <div className={styles.container}>
        <Head>
          <title>Home | Move It</title>
        </Head>
        <ExperienceBar />

        <CountdownProvider>
          <section>
            <div>
              <Profile />
              <CompletedChallenges />
              <Countdown />
            </div>
            <div>
              <ChallengeBox />
            </div>
          </section>
        </CountdownProvider>

      </div>
    </ChallengesProvider>
  )
}


export const getServerSideProps: GetServerSideProps =  async (context) => {

  const { level, currentExp, challengesCompleted } = context.req.cookies;


  return {
    props: {
      level: Number(level), 
      currentExp: Number(currentExp), 
      challengesCompleted: Number(challengesCompleted) 
    }
  }
}