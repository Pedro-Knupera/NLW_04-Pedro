import Head from 'next/head';
import styles from "../src/styles/pages/Home.module.css";

import { ExperienceBar } from "../src/components/ExperienceBar";
import { Profile } from "../src/components/Profile";
import { CompletedChallenges } from "../src/components/CompletedChallengers";
import { ContadorContainer } from "../src/components/contador";
import { ChallengesBox } from "../src/components/ChallengeBox";
import { CountdownProvider } from '../src/contexts/CountDownContext';


export default function Home() {
  return (
    <div className="container">

      <Head>
        <title>Inicio | Move.it</title>
      </Head>

    <ExperienceBar />
    <CountdownProvider>
    <section>
      <div className={styles.container}>

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

  )

}


