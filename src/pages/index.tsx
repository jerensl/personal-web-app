import type { GetStaticProps, InferGetStaticPropsType } from 'next'
import { Footer } from '@/components/Footer'
import { HeadComponent } from '@/components/Seo'
import { generateRss } from '@/libs/rss'
import { Header } from '@/components/Header'
import { IntroductionSection } from '@/components/sections/Introduction.section'
import { CareerSection } from '@/components/sections/Career.section'
import HorizontalScroll from '@/components/sections/OSSContribution'
import { loadImageFrom, transformToImageBuffer } from '@/utils/imagesBuffer'

export const getStaticProps: GetStaticProps = async () => {
    generateRss()

    const srcImg = await loadImageFrom('illustration-landing-page.webp')

    const { blurDataURL } = await transformToImageBuffer(srcImg)

    return {
        props: { blurDataURL },
    }
}

export default function Home({
    blurDataURL,
}: InferGetStaticPropsType<typeof getStaticProps>): React.ReactElement {
    return (
        <>
            <HeadComponent path="/" title="" />
            <Header blurDataURL={blurDataURL} />
            <div className="h-56 lg:h-64" />
            <IntroductionSection />
            <div className="h-56 lg:h-64" />
            <CareerSection />
            <div className="h-56 lg:h-64" />
            <HorizontalScroll />
            <div className="h-56 lg:h-64" />
            <Footer />
        </>
    )
}
