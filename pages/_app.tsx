import '../src/styles/global.css';

import { ChallengesProvider } from '../src/contexts/ChallengeContext'


function MyApp({ Component, pageProps }) {


  return (
    <ChallengesProvider>
    <Component {...pageProps} />
   </ChallengesProvider>
  )
}

export default MyApp
