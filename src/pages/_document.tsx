import Document, {Html, Head, Main, NextScript} from 'next/document';
import React from "react";
import {data} from "../utils/meta";

export default class extends Document {
    render() {
        return (
            <Html>
                <Head>
                    <link rel="icon" type="image/png"
                          href="https://avatars.githubusercontent.com/u/82734468?s=200&v=4"/>

                    <meta property="og:url" content={`https://ctt.cx`}/>
                    <link rel="canonical" href={`https://ctt.cx`}/>
                    <meta property="og:type" content={data.type}/>
                    <meta property="og:site_name" content="Couleur Tweak Tips"/>
                    <meta property="og:image" content={data.image}/>
                    <meta name="twitter:card" content="summary_large_image"/>
                    <meta name="twitter:site" content="@CouleurTweaks"/>
                    <meta name="twitter:title" content={data.title}/>
                    <meta name="twitter:description" content={data.description}/>
                    <meta name="twitter:image" content={data.image}/>
                </Head>
                <body className="bg-gray-50 dark:bg-gray-rich-black">
                <Main/>
                <NextScript/>
                </body>
            </Html>
        )
    }
}