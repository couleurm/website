import {AppProps} from "next/app";
import {ThemeProvider} from 'next-themes'
import GenericMeta from "../components/Meta";
import "tailwindcss/tailwind.css";
import "../../public/styles.css";


export default function App({Component, pageProps}: AppProps) {

    return (
        <>
            <GenericMeta/>
            <ThemeProvider attribute="class" defaultTheme="dark">
                <Component {...pageProps} />
            </ThemeProvider>
        </>
    )
}
