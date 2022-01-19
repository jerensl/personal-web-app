import {
    GetStaticProps,
    GetStaticPropsContext,
    GetStaticPaths,
    InferGetStaticPropsType,
} from 'next'
import { getListOfArticle } from '@/domain/Blog'
import { getArticleWithMetadata } from '@/domain/Article'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { Article } from '@/components/Article'
import { getPlaiceholder } from 'plaiceholder'

export const getStaticPaths: GetStaticPaths = async () => {
    const posts = getListOfArticle('contents')

    return {
        paths: posts.map((fileName) => ({
            params: {
                slug: fileName,
            },
        })),
        fallback: false,
    }
}

export const getStaticProps: GetStaticProps = async (
    context: GetStaticPropsContext
) => {
    const posts = await getArticleWithMetadata('contents', context.params?.slug)

    const { base64 } = await getPlaiceholder(
        `https://res.cloudinary.com/do9os7lxv/image/upload/v1637714730/personal/${posts.frontmatter.cover}`,
        { size: 10 }
    )

    return {
        props: { posts, blurDataURL: base64 },
    }
}

export default function Blog({
    posts,
    blurDataURL,
}: InferGetStaticPropsType<typeof getStaticProps>): React.ReactElement {
    const { code, frontmatter } = posts

    return (
        <>
            <Navbar />
            <Article
                frontmatter={frontmatter}
                code={code}
                blurDataURL={blurDataURL}
            />
            <Footer />
        </>
    )
}
