import React from 'react'
import Footer from './footer'
import Navbar from './navbar'
import Head from 'next/head'
import { connect } from 'react-redux';
import actions from '../redux/actions';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

function Layout({ children, title, reauthenticate }) {
    const router = useRouter()
    useEffect(() => {
        reauthenticate(router.pathname)        
    }, [])
    
    return (
        <div style={{ backgroundColor: '#fff' }}>
            <Head>
                <title>{title}</title>
                <meta
                    name="viewport"
                    content="minimum-scale=1, initial-scale=1, width=device-width"
                />
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

export default connect(
    state => state,
    actions
)(Layout)