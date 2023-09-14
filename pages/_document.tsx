import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
    const meta = {
        title: 'Berra Urhan\'s Personal Website',
        description: 'Berra Urhan\'s Personal Website',
        image: ' https://ucarecdn.com/36756b72-9cbf-4daf-8e4f-d2b174e6d080/-/scale_crop/300x300/-/format/auto/-/quality/smart_retina/'
    }

    return (
        <Html lang="en">
            <Head>
                <meta name="robots" content="follow, index" />
                <meta name="description" content={meta.description} />
                <meta property="og:site_name" content={meta.title} />
                <meta property="og:description" content={meta.description} />
                <meta property="og:title" content={meta.title} />
                <meta property="og:image" content={meta.image} />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}