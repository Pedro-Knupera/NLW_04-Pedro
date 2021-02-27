import Head from 'next/head';
import {GetServerSideProps} from 'next'


import styles from "../src/styles/pages/Home.module.css";

import { ExperienceBar } from "../src/components/ExperienceBar";
import { Profile } from "../src/components/Profile";
import { CompletedChallenges } from "../src/components/CompletedChallengers";
import { ContadorContainer } from "../src/components/contador";
import { ChallengesBox } from "../src/components/ChallengeBox";
import { CountdownProvider } from '../src/contexts/CountDownContext';
import { ChallengesProvider } from '../src/contexts/ChallengeContext';


interface HomeProps {
    level:number,
    currentExperience:number, 
    challengesCompleted:number,
}


export default function Home(props:HomeProps) {
    return (
       <ChallengesProvider 
       level={props.level}
       currentExperience={props.currentExperience}
       challengesCompleted={props.challengesCompleted}>
      
      <div className={styles.container}>

            <Head>
              <title>Inicio | Move.it</title>
            </Head>

          <ExperienceBar />

          <CountdownProvider>

          <section>
          
            <div>
              <Profile />

              <CompletedChallenges />

              <ContadorContainer/>

            </div>
            <div>

              <ChallengesBox/>

            </div>

          </section>
          </CountdownProvider>
      </div>
    </ChallengesProvider>
  )

}


export const getServerSideProps:GetServerSideProps = async (ctx) =>  { 
  const {level, currentExperience, challengesCompleted} = ctx.req.cookies

  return{ 
    props: {level:Number(level), 
      currentExperience:Number(currentExperience), 
      challengesCompleted:Number(challengesCompleted)}
  }
}