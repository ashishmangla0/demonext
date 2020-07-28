import Document, { Html, Head, Main, NextScript } from 'next/document'
class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx)
        return { ...initialProps }
    }
    render() {
        return (
            <Html lang="en">
                <Head>
                    <link rel="dns-prefetch" href="//fonts.googleapis.com" />
                    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800;900&display=swap" rel="stylesheet" />
                    <meta name="theme-color" content="#0d0c38" />
                    {/* <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
          <link rel="manifest" href="/manifest.json" />
          <link rel="apple-touch-icon" sizes="57x57" href="/icons/apple-touch-icon-57x57.png"/>
    <link rel="apple-touch-icon" sizes="60x60" href="/icons/apple-touch-icon-60x60.png"/>
    <link rel="apple-touch-icon" sizes="72x72" href="/icons/apple-touch-icon-72x72.png"/>
    <link rel="apple-touch-icon" sizes="76x76" href="/icons/apple-touch-icon-76x76.png"/>
    <link rel="apple-touch-icon" sizes="114x114" href="/icons/apple-touch-icon-114x114.png"/>
    <link rel="apple-touch-icon" sizes="120x120" href="/icons/apple-touch-icon-120x120.png"/>
    <link rel="apple-touch-icon" sizes="144x144" href="/icons/apple-touch-icon-144x144.png"/>
    <link rel="apple-touch-icon" sizes="152x152" href="/icons/apple-touch-icon-152x152.png"/>
    <link rel="apple-touch-icon" sizes="180x180" href="/icons/apple-touch-icon-180x180.png"/> 
    <link rel="shortcut icon" href="/icons/favicon.ico" /> */}
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