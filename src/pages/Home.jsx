import React from 'react'
import Hero from '../components/Hero/Hero'
import Emailsub from '../components/emailsub/Emailsub';
import Instaapi from '../components/Instaapi/Instaapi';
import Faq from '../components/FAQ/Faq';
const Home = () => {
  return (
    <div>

    <Hero/>
    <Instaapi/>
    <Emailsub/>
     <Faq/>
    </div>
  )
}

export default Home