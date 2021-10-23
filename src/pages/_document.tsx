import Document, {Html, Head, Main, NextScript} from 'next/document';

export default class extends Document {
    render() {
        return (
            <Html>
                <Head/>
                <link rel="icon" type="image/png" href="https://avatars.githubusercontent.com/u/82734468?s=200&v=4"/>
                <meta name="theme-color" content="#000000"/>
                <meta
                    name="description"
                    content="Couleur Tweak Tips is a public and free (as in open-source) repository of very useful knowledge regarding OBS, Vegas, FFmpeg, Windows."
                />
                <body className="bg-gray-50 dark:bg-gray-rich-black">
                <Main/>
                <NextScript/>
                </body>
            </Html>
        )
    }
}