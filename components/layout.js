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
        <div style={{ backgroundColor: '#fff', display: 'flex', flexDirection: 'column' }}>
            <Head>
                <title>{title}</title>
                <meta
                    name="viewport"
                    content="minimum-scale=1, initial-scale=1, width=device-width" />
            </Head>

            <Navbar />

            <div style={{ flex: '1', minHeight: '100vh' }}>
                {children}
            </div>

            <Footer />
        </div>
    )
}

export default connect(
    state => state,
    actions
)(Layout)