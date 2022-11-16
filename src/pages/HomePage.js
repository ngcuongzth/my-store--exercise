import React from 'react'
import Hero from '../components/Home/Hero'
import FeaturedProducts from '../components/Home/FeaturedProducts'
import FlashSale from '../components/Home/FlashSale'
import SecondHero from '../components/Home/SecondHero'
import ThirdHero from '../components/Home/ThirdHero'
const HomePage = () => {
    return (
        <main>
            <Hero />
            <FlashSale />
            <FeaturedProducts />
            <SecondHero />
            <ThirdHero />
        </main>
    )
}

export default HomePage