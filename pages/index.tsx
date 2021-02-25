import Head from 'next/head';
import styles from "../src/styles/pages/Home.module.css";

import { ExperienceBar } from "../src/components/ExperienceBar";
import { Profile } from "../src/components/Profile";
import { CompletedChallengers } from "../src/components/CompletedChallengers";
import { ContadorContainer } from "../src/components/contador";
import { ChallengesBox } from "../src/components/ChallengeBox";


export default function Home() {
  return (
    <div className="container">

      <Head>
        <title>Inicio | Move.it</title>
      </Head>

    <ExperienceBar />

    <section>
      <div className={styles.container}>

        <Profile />

        <CompletedChallengers />

        <ContadorContainer/>

      </div>

      <div>

        <ChallengesBox/>

      </div>

    </section>

  </div>

  )

}
