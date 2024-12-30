import React from 'react'
import Hero from '../components/Hero'
import FeaturedLogos from '../components/FeaturedLogos'
import SatisfiedClient from '../components/SatisfiedClient'
import DigitalMarketing from '../components/DigitalMarketing'
import OutSmartInput from '../components/OutSmartInput'
import GrowthPartner from '../components/GrowthPartner'
import ActualResult from '../components/ActualResult'
import LearnFromUs from '../components/LearnFromUs'
import ThreeCards from '../components/ThreeCards'
import ReadyToHit from '../components/ReadyToHit'
import Footer from '../components/Footer'

const Home = () => {
    return (
        <>
            <Hero />
            <FeaturedLogos />
            <SatisfiedClient />
            <DigitalMarketing />
            <OutSmartInput />
            <GrowthPartner />
            <ActualResult />
            <LearnFromUs />
            <ThreeCards />
            <ReadyToHit/>
            <Footer/>
        </>
    )
}

export default Home