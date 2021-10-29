import React from "react";
import Head from "next/head";
import {data} from "../utils/meta";

export default function GenericMeta() {
    return (
        <>
            <Head>
                <title>{data.title}</title>
                <meta property="og:title" content={data.title}/>
                <meta content={data.description} name="description"/>
                <meta property="og:description" content={data.description}/>
            </Head>
        </>
    )

}