import { Footer } from '../components/footer'
import { AboutSection } from '../components/sections/about-section'
import { Seo } from '../components/seo'

export default function About() {
    return (
        <>
            <Seo path="/about" />
            <div className="h-56 lg:h-64" />
            <AboutSection />
            <div className="h-56 lg:h-64" />
            <Footer />
        </>
    )
}
