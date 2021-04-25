import React from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'

export default function Navbar() {
    const router = useRouter()
    const path = router.route

    return (
        <nav className="navbar navbar-expand-lg bg-light">
            <div className="container-fluid">
                <Link href="/">
                    <a className="navbar-brand" >
                        <i className="fas fa-film mr-2"></i>
                        Image Caption
                    </a>
                </Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <i className="fas fa-bars"></i>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link href="/">
                                <a className={`nav-link nav-link-1 ${path === '/' ? 'active' : null}`} >Photos</a>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/about">
                                <a className={`nav-link nav-link-1 ${path === '/about' ? 'active' : null}`} >About</a>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/demo">
                                <a className={`nav-link nav-link-1 ${path === '/demo' ? 'active' : null}`} >Demo</a>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/login">
                                <a className={`nav-link nav-link-1 ${path === '/login' ? 'active' : null}`} >Login</a>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
