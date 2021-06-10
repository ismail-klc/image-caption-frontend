import React, { useState } from 'react'
import { Parallax } from 'react-parallax'
import Router from 'next/router';

export default function Search() {
    const [search, setSearch] = useState("")

    const handleSearch = (e) => {
        e.preventDefault()
        Router.push(`/search/?caption=${search}`);
    }

    return (
            <Parallax
            strength={400}
            className="tm-hero d-flex justify-content-center align-items-center"
            bgImage='/img/parallax.jpg'>
            <form className="d-flex tm-search-form" onSubmit={handleSearch} style={{ marginTop: '25vh' }}>
                <input
                    value={search}
                    onChange={e => setSearch(e.target.value)}
                    className="form-control tm-search-input" type="search" placeholder="Search" aria-label="Search" />
                <button className="btn btn-outline-success tm-search-btn" type="submit">
                    <i className="fas fa-search"></i>
                </button>
            </form>
            <div style={{ height: '25vh' }} />
        </Parallax>
    )
}
