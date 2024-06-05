import Document, {
    Html,
    Head,
    Main,
    NextScript,
    DocumentContext,
} from 'next/document'

const APP_NAME = 'Jerens'
const APP_DESCRIPTION =
    "Personal portfolio and blog presented by Jerens Lensun. I'm writing about tech specializing in software development."

class MyDocument extends Document {
    static async getInitialProps(ctx: DocumentContext) {
        const initialProps = await Document.getInitialProps(ctx)
        return { ...initialProps }
    }

    render() {
        return (
            <Html lang="en-US">
                <Head>
                    <meta name="application-name" content={APP_NAME} />
                    <meta name="apple-mobile-web-app-capable" content="yes" />
                    <meta
                        name="apple-mobile-web-app-status-bar-style"
                        content="default"
                    />
                    <meta
                        name="apple-mobile-web-app-title"
                        content={APP_NAME}
                    />
                    <meta name="description" content={APP_DESCRIPTION} />
                    <meta name="format-detection" content="telephone=no" />
                    <meta name="mobile-web-app-capable" content="yes" />
                    <link rel="shortcut icon" href="/favicon.ico" />
                    <link
                        rel="apple-touch-icon"
                        sizes="57x57"
                        href="/icons/apple-icon-57x57.png"
                    />
                    <link
                        rel="apple-touch-icon"
                        sizes="60x60"
                        href="/icons/apple-icon-60x60.png"
                    />
                    <link
                        rel="apple-touch-icon"
                        sizes="72x72"
                        href="/icons/apple-icon-72x72.png"
                    />
                    <link
                        rel="apple-touch-icon"
                        sizes="76x76"
                        href="/icons/apple-icon-76x76.png"
                    />
                    <link
                        rel="apple-touch-icon"
                        sizes="114x114"
                        href="/icons/apple-icon-114x114.png"
                    />
                    <link
                        rel="apple-touch-icon"
                        sizes="120x120"
                        href="/icons/apple-icon-120x120.png"
                    />
                    <link
                        rel="apple-touch-icon"
                        sizes="144x144"
                        href="/icons/apple-icon-144x144.png"
                    />
                    <link
                        rel="apple-touch-icon"
                        sizes="152x152"
                        href="/icons/apple-icon-152x152.png"
                    />
                    <link
                        rel="apple-touch-icon"
                        sizes="180x180"
                        href="/icons/apple-icon-180x180.png"
                    />
                    <link
                        rel="icon"
                        type="image/png"
                        sizes="192x192"
                        href="/icons/android-icon-192x192.png"
                    />
                    <link
                        rel="icon"
                        type="image/png"
                        sizes="32x32"
                        href="/icons/favicon-32x32.png"
                    />
                    <link
                        rel="icon"
                        type="image/png"
                        sizes="96x96"
                        href="/icons/favicon-96x96.png"
                    />
                    <link
                        rel="icon"
                        type="image/png"
                        sizes="16x16"
                        href="/icons/favicon-16x16.png"
                    />
                    <link rel="manifest" href="/manifest.json" />
                    <meta name="msapplication-TileColor" content="#ffffff" />
                    <meta
                        name="msapplication-TileImage"
                        content="/icons/ms-icon-144x144.png"
                    />
                    <meta name="theme-color" content="#FFFFFF" />
                    <style
                        id="katex"
                        dangerouslySetInnerHTML={{
                            __html: `</style>
                        <link
                        rel="stylesheet"
                        href="https://cdn.jsdelivr.net/npm/katex@0.13.13/dist/katex.min.css"
                        integrity="sha384-RZU/ijkSsFbcmivfdRBQDtwuwVqK7GMOw6IMvKyeWL2K5UAlyp6WonmB8m7Jd0Hn"
                        crossOrigin="anonymous"
                        media="print"
                        onload="this.media='all'; this.onload=null;"
                        />
                        <style>
                        `,
                        }}
                    ></style>
                    <link
                        rel="preconnect"
                        href="https://fonts.googleapis.com"
                    />
                    <link
                        rel="preconnect"
                        href="https://fonts.gstatic.com"
                        crossOrigin="anonymous"
                    />
                    <link
                        href="https://fonts.googleapis.com/css2?family=Merriweather:wght@400;700&display=swap"
                        rel="stylesheet"
                    />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument
