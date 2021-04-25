import React from 'react'
import Footer from './footer'
import Navbar from './navbar'
import Head from 'next/head'

export default function Layout({ children, title }) {
    return (
        <div style={{ backgroundColor: '#fff' }}>
            <Head>
                <title>{title}</title>
                <link rel="icon" href="/favicon.ico" />
                <script src="/js/plugins.js" type="javascript"></script>
                <script type="text/javascript" src="https://code.jquery.com/jquery-3.2.1.min.js"></script>
                <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jquery.mask/1.14.15/jquery.mask.min.js"></script>
            </Head>

            <Navbar />

            {children}

            <Footer />
        </div>
    )
}
